const express = require('express')
const mysql = require('mysql');

const app =  express();
app.use(express.json()); //แปลงเป็น object

//MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lets_get_dress'
})

connection.connect((err) =>{
    if (err) {
        console.log('Error connecting to MySQL database =', err)
        return;
    }
    console.log('MySQL successfully connected!');
})

//----------------------------Sign in--------------------------------------//

//confirm password = password มั้ย
app.get("/check_password_account", async (req, res) => {
    const {email, password} = req.body

    try {
        connection.query(
            "INSERT INTO account(ACCOUNT_EMAIL, ACCOUNT_PASSWORD) VALUES(?, ?)", //insert ข้อมูล
            [email, password], //แทน ?
            (err, results, fields) => {
                if (err) {
                    console.log("Error while inserting a user into the database", err);
                    return res.status(400).send();
                }
                return res.status(201).json({message: "New user successfully created!"});
            }
        )
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})	

// //เพิ่ม account ใหม่
// app.post("/create_account", async (req, res) => {
//     const {email, password} = req.body

//     try {
//         connection.query(
//             "INSERT INTO account(ACCOUNT_EMAIL, ACCOUNT_PASSWORD) VALUES(?, ?)", //insert ข้อมูล
//             [email, password], //แทน ?
//             (err, results, fields) => {
//                 if (err) {
//                     console.log("Error while inserting a user into the database", err);
//                     return res.status(400).send();
//                 }
//                 return res.status(201).json({message: "New user successfully created!"});
//             }
//         )
//     }
//     catch(err) {
//         console.log(err);
//         return res.status(500).send();
//     }
// })	

//----------------------------Login--------------------------------------//

//รหัสผ่านตรงกับอีเมลที่ใส่มั้ย
app.get("/login", async (req, res) => {
    const email = req.body.email
    const password = req.body.password;
    try {
        connection.query(
            "SELECT ACCOUNT_PASSWORD FROM account WHERE ACCOUNT_EMAIL = ? ", //ดึงข้อมูล
            [email],
            (err, results, fields) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send();
                }
                if (results.map(item => item.ACCOUNT_PASSWORD).toString() != password) { //แปลง results เป็น string
                    return res.status(404).send({status:"fail", message: "Email or Password is incorrect"}); 
                }
                res.status(200).json({status:"sucess", message: "Login successfully!"});
            })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }

})

//----------------------------Reset password--------------------------------------//

//confirm password = password มั้ย
app.post("/reset_password", async (req, res) => {
    const {email, password, confirm} = req.body

    if (confirm != password) {
        return res.status(400).json({status:"fail", message: "Password must be the same"});
    }

    try {
        connection.query(
            "UPDATE account SET ACCOUNT_PASSWORD = ? WHERE ACCOUNT_EMAIL = ?",
            [password, email], //แทน ?
            (err, results, fields) => {
                if (err) {
                    console.log("Error while inserting a user into the database", err);
                    return res.status(400).send();
                }
                return res.status(201).json({status:"success", message: "New password successfully update!"});
            }
        )
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})	

//----------------------------ข้างล่างไม่ใช้มั้ง--------------------------------------//

//ดึงข้อมูล account ทั้งหมด
app.get("/read_account", async (req, res) =>{
    try {
        connection.query(
            "SELECT * FROM account", //ดึงข้อมูล
            (err, results, fields) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send();
                }
                res.status(200).json(results)
            })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

//read single ดึงแค่ข้อมูล account ที่ต้องการ
app.get("/read_account/single/:email", async (req, res) =>{
    const email = req.params.email; //รับตัวแปร email
    try {
        connection.query(
            "SELECT * FROM account WHERE ACCOUNT_EMAIL = ?", //ดึงข้อมูล
            [email],
            (err, results, fields) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send();
                }
                res.status(200).json(results)
            })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

//DELETE ลบ account
app.delete("/delete_account/:email", async (req, res) => {
    const email = req.params.email;
    try {
        connection.query(
            "DELETE FROM account WHERE ACCOUNT_EMAIL = ?", //ดึงข้อมูล
            [email],
            (err, results, fields) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send();
                }
                if (results.affectedRow === 0) {
                    return res.status(404).json({ message: "No account with that email"})
                }
                res.status(200).json({ message: "account deleted successfully!"})
            })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }

})

//filter premium กรองเฉพาะแอคที่ใช้ premium อยู่
app.get("/premium_account/:IS_PREMIUM", async (req, res) =>{
    const IS_PREMIUM = req.params.IS_PREMIUM;
    try {
        connection.query(
            "SELECT * FROM account WHERE IS_PREMIUM = ?", //ดึงข้อมูล
            [IS_PREMIUM],
            (err, results, fields) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send();
                }
                res.status(200).json(results)
            })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

//join account and premium table กรองเฉพาะแอคที่สมัคร premium หรือเคยสมัคร
app.get("/join_premium_account", async (req, res) =>{
    try {
        connection.query(
            "SELECT * FROM account JOIN premium WHERE account.ACCOUNT_ID = premium.ACCOUNT_ID", //ดึงข้อมูล
            (err, results, fields) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send();
                }
                res.status(200).json(results)
            })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

//format next bill date ตั้งเวลา next bill date เป็น 28 วันถัดไปจากปัจจุบัน
app.patch("/format_date", async (req, res) => {
    try {
        connection.query(
            "UPDATE premium SET NEXT_BILL_DATE = DATE_ADD(CURRENT_DATE(), INTERVAL 28 DAY)", //ดึงข้อมูล
            (err, results, fields) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send();
                }
                res.status(200).json({message : "Account updated password successfully!"})
            })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }

})

//มี account อยู่รึเปล่า
app.get("/is_have_account/:email", async (req, res) =>{
    const email = req.params.email; //รับตัวแปร email
    try {
        connection.query(
            "SELECT * FROM account WHERE ACCOUNT_EMAIL = " + mysql.escape(email), //ดึงข้อมูลแบบระวังแฮคมั้ง
            (err, results, fields) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send();
                }
                if (results == '') {
                        return res.status(404).json({message: "No account with this email"})
                    }
                res.status(200).json(results)
            })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

//UPDATE data เปลี่ยน password
app.patch("/update_account/:email", async (req, res) => {
    const email = req.params.email
    const newPassword = req.body.newPassword;
    try {
        connection.query(
            "UPDATE account SET ACCOUNT_PASSWORD = ? WHERE ACCOUNT_EMAIL = ?", //ดึงข้อมูล
            [newPassword, email],
            (err, results, fields) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send();
                }
                res.status(200).json({message : "Account updated password successfully!"})
            })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }

})

app.listen(3360, () => console.log('Server is running on port 3360'));