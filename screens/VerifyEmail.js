import { View, Text, StyleSheet, Dimensions, TextInput, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
)

const AppButtonClear = ({ onPress, title }) => (
      <TouchableOpacity onPress={onPress} style={styles.appButtonContainerClear}>
        <Text style={styles.appButtonTextClear}>{title}</Text>
      </TouchableOpacity>
)

const AppButtonButtom = ({ onPress, title }) => (
      <TouchableOpacity onPress={onPress} style={styles.appButtonContainerButtom}>
        <Text style={styles.appButtonTextButtom}>{title}</Text>
      </TouchableOpacity>
)

const AppText = (props) => (
    <Text {...props} style={{fontFamily: "Cuprum-VariableFont_wght", ...props.style, fontSize: 16}}>{props.children}</Text>
)

const VerifyEmail = () => {
    const [number, onChangeNumber] = React.useState('');

    return (
        <View style={styles.container}>
            <View style={{...styles.ellipse, transform: [{scaleX: 1.4}],}}/>
            <View style={styles.circle}>
            <Text style={{color:'black', fontSize:45, fontFamily: "Cuprum-Bold"}}>Verify your email</Text>
            <AppText style={{color:'black', fontSize:14, marginTop: 10}}>A 4-digit code has been sent to</AppText>
            <Text style={{color:'black', fontSize:14, fontFamily: "Cuprum-Bold", left:-26}}>sample@email.com</Text>
                <AppButtonClear title={"Change"}/>
            <SafeAreaView>
                <TextInput
                style={{...styles.otpinput, fontFamily: "Cuprum-VariableFont_wght"}}
                onChangeText={onChangeNumber}
                value={number}
                placeholder=""
                keyboardType="numeric"
                />
            </SafeAreaView>
                {/* ทำกล่อง otp แยกข้างล่างดีกว่า หาโหลดเอาล้ากาน*/}
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    circle: {
        height: 580,
        width: 580,
        borderRadius: 290,
        backgroundColor: "#FFE6DF",
        top:-500,
        alignItems: 'center',
        paddingTop:150
        
    },
    ellipse: {
        height: 600,
        width: 600,
        borderRadius: 300,
        backgroundColor: "#FFE6DF",
        top: 100,
        alignItems: 'center',
        paddingTop:90
      
    },
    container: {
        backgroundColor: "#FF9176",
        alignItems: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    input: {
        width: 300,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontFamily: "Cuprum-VariableFont_wght",
        borderRadius: 7,
      },
      title: {
        textAlign: 'center',
        marginVertical: 8,
        color:"black",
        fontFamily: "Cuprum-VariableFont_wght",
      },
      appButtonContainer: {
        elevation: 0,
        backgroundColor: "#E76F51",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 10
      },
      appButtonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        fontFamily: "Cuprum-VariableFont_wght",
      },
      appButtonContainerClear: {
        elevation: 0,
        backgroundColor: "#FFE6DF",
        borderRadius: 10,
        paddingVertical: 0,
        paddingHorizontal: 0,
        marginTop: 0,
        top: -18,
        left: 63
      },
      appButtonTextClear: {
        fontSize: 14,
        width: 50,
        color: "#E76F51",
        left: 0,
        textDecorationLine: "underline",
        fontFamily: "Cuprum-VariableFont_wght",
      },
      appButtonContainerButtom: {
        elevation: 0,
        backgroundColor: "#FF9176",
        borderRadius: 10,
        paddingVertical: 2,
        paddingHorizontal: 2,
        marginTop: 0,
        top: 187,
        left: 72
      },
      appButtonTextButtom: {
        fontSize: 14,
        fontFamily: "sans-serif-thin",
        width: 50,
        color: "white",
        left: 0,
        textDecorationLine: "underline",
        fontFamily: "Cuprum-VariableFont_wght",
      },
      otpinput: {
        margin: 12,
        padding: 10,
        height: 40, 
        width: 40, 
        backgroundColor:'white', 
        top:-40, 
        borderRadius:7, 
        borderColor: "#E76F51", 
        borderWidth:2,
        fontFamily: "Cuprum-VariableFont_wght"
      }

}
)
export default VerifyEmail

