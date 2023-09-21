const express = require('express')
const mysql = require('mysql');
const cors = require("cors")
const { networkInterfaces } = require('os');

const nets = networkInterfaces();
const results = Object.create(null); // Or just '{}', an empty object

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
        const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
        if (net.family === familyV4Value && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}

const app =  express();
app.use(cors());
app.use(express.json()); //แปลงเป็น object

const token_obj = 'this is token'
const jwt = require('jsonwebtoken')

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

//----------------------------Test--------------------------------------//
app.get("/test", (req, res) => {
    console.log("REQUEST GET");
    res.status(200).json({message: "SERVER OKAY"})
})

//----------------------------Sign up--------------------------------------//

//ตรวจสอบว่ามีแอคเค้าที่มีเมลนี้หรือยัง
app.get("/check_account/:email", async (req, res) => {
    const {password, confirm} = req.body;
    const email = req.params.email.slice(0,-1);

    try {
        connection.query(
            "SELECT * FROM account WHERE ACCOUNT_EMAIL = ?",
            [email], //แทน ?
            (err, results, fields) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send();
                }
                if (results.map(item => item.ACCOUNT_EMAIL).toString() == email) {
                    return res.status(200).json({status:"fail" , message: "This email already has an account"});
                }
                res.status(200).json({status:email , message: "You can create new account with this email"});
            }
        )
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})	

//for sign up
app.post("/sign_up", async (req, res) => {
    const {email, password, confirm} = req.body

    try {
        fetch('http://localhost:3360/check_account/' + new URLSearchParams(email), {
            method: 'GET', 
        })
        .then(res => res.json())
        .then(status => {
            console.log(status.status)
            if (status.status == email) {
                // ตรวจสอบรหัสที่สร้างว่าเหมือนกันมั้ย
                if (password != confirm) {
                    return res.status(400).json({status:"fail", message: "Password must be the same"});
                }
                connection.query(
                    //เพิ่มข้อมูลลง db
                    "INSERT INTO account(ACCOUNT_EMAIL, ACCOUNT_PASSWORD) VALUES(?, ?)", //insert ข้อมูล
                    [email, password], //แทน ?
                    (err, results, fields) => {
                        if (err) {
                            console.log("Error while inserting a user into the database", err);
                            return res.status(400).json({status:"fail", message: "Error while inserting a user into the database"});
                        }
                        return res.status(201).json({status:"success", message: "New user successfully created!"});
                    }
                )
            }
            if (status.status == "fail") {
                res.status(400).json({status:"fail", message: "This email already has an account"})
            }
        })
        
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})	

//----------------------------Login--------------------------------------//

//for login
app.get("/login", async (req, res) => {
    const email = req.body.email
    const password = req.body.password;
    try {
        connection.query(
            "SELECT * FROM account WHERE ACCOUNT_EMAIL = ? ", //ดึงข้อมูล
            [email],
            (err, results, fields) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send();
                }
                //เช้คว่า email&password ถูกมั้ย
                if (results.map(item => item.ACCOUNT_PASSWORD).toString() != password) { //แปลง results เป็น string
                    return res.status(404).send({status:"fail", message: "Email or Password is incorrect"}); 
                }
                const token = jwt.sign({ email : results.map(item => item.ACCOUNT_EMAIL).toString()}, token_obj, {expiresIn: '1h'}); //token to verify email
                res.status(200).json({status:"sucess", message: "Login successfully!", token});
            })
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

//forgot password
app.get("/forgot_password", async (req, res) => {
    const email = req.body.email;

    try {
        connection.query(
            "SELECT * FROM account WHERE ACCOUNT_EMAIL = ?",
            [email],
            (err, results, fields) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send();
                }
                //เช้คว่ามีอีเมลนี้ใน db มั้ย
                if (results.length == 0) {
                    return res.status(400).json({status:"fail", message: "No account with this email"});
                }
                res.status(200).json({status:"success", message: "There is an account with this email"});
            }
        )
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

//----------------------------Verify reset password code--------------------------------------//

//verify OTP
app.get("/verify_OTP", async (req, res) => {
    const {email, otp1, otp2, otp3, otp4} = req.body;
    try {
        if (otp1 == 1 && otp2 == 1 && otp3 == 1 && otp4 ==1) {
            return res.status(200).json({status:"success", message: "OTP is correct"});
        }
        res.status(400).json({status:"fail", message: "OTP is incorrect"});
    }
    catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

//----------------------------Reset password--------------------------------------//

//for reset password
app.post("/reset_password", async (req, res) => {
    const {email, password, confirm} = req.body

    try {
        //เช้คว่า password ตรงกันมั้ย
        if (confirm != password) {
            return res.status(400).json({status:"fail", message: "Password must be the same"});
        }

        connection.query(
            //อัพเดตข้อมูลใน db
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

//เพิ่ม account ใหม่
app.post("/create_account", async (req, res) => {
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

app.listen(3360, results['Wi-Fi'][0], () => console.log('Server is running on port', results['Wi-Fi'][0],':3360'));