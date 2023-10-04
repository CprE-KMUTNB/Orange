import { View, Text, StyleSheet, Dimensions, TextInput, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import axios from 'axios'

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
  <Text {...props} style={{ fontFamily: "Cuprum-VariableFont_wght", ...props.style, fontSize: 18 }}>{props.children}</Text>
)

const Login = ({ navigation }) => {
  const onPressSignup = () => {
    navigation.navigate('Sign_up')
  }
  const onPressResetPassword = () => {
    navigation.navigate('ResetPassword')
  }
  const onPressVerifyEmail = () => {
    const url = "http://10.11.1.122:3360/login";
    console.log("Sending request to", url);
    axios.post(url, {
      email: text,
      password: password
    })
      .then(({ data }) => {
        console.log(data)
        if (data[0].status == 'success') {
          navigation.navigate('VerifyEmail')
        }
      })
      .catch(async error => {
        console.error("AXIOS ERROR:");
        console.error(await error);
      });
  };

  const [text, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [confirm_password, onChangeConfirmPassword] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={{ ...styles.circle }}>
        <Text style={{ color: 'black', fontSize: 80, flex: 0, fontFamily: "Cuprum-Bold" }}>Login</Text>
        <View style={styles.logoContainer}>
          <Image style={{ width: 30, height: 30, top: -100, left: 43 }} source={require('../assets/leave-removebg-preview2.png')} />
        </View>
        <AppText style={{ color: 'black', width: 300, top: -40 }}>Email</AppText>
        <SafeAreaView>
          <TextInput
            style={{ ...styles.input, height: 40, width: 300, backgroundColor: 'white', top: -40, fontFamily: "Cuprum-VariableFont_wght" }}
            value={text}
            onChangeText={onChangeText}
            placeholder='sample@email.com'
          />
        </SafeAreaView>
        <AppText style={{ color: 'black', textAlign: 'left', width: 300, top: -40 }}>Password</AppText>
        <SafeAreaView>
          <TextInput
            style={{ ...styles.input, height: 40, width: 300, backgroundColor: 'white', top: -40, fontFamily: "Cuprum-VariableFont_wght" }}
            value={password}
            onChangeText={onChangePassword}
            placeholder='example'
            secureTextEntry={true}
          />
        </SafeAreaView>
        <AppButtonClear
          onPress={onPressResetPassword}
          title={"Forgot Password"} />
        <AppButton
          title={"   Login   "}
          onPress={onPressVerifyEmail}
        />
      </View>
      <AppText style={{ color: 'black', alignSelf: 'center', width: 300, height: 20, top: 210, left: 37 }}>Don't have an account?</AppText>
      <AppButtonButtom
        onPress={onPressSignup}
        title={"Sign up"} />
    </View>
  )
}


// #FAEBDC อ่อน
// #f2a676 เข้ม
// #E67738 button

const styles = StyleSheet.create({
  circle: {
    height: 580,
    width: 580,
    borderRadius: 290,
    backgroundColor: "#FAEBDC",
    top: 110,
    alignItems: 'center',
    paddingTop: 100,
    fontFamily: "Cuprum-VariableFont_wght",
    // justifyContent: "center",
  },
  container: {
    backgroundColor: "#f2a676",
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
    fontSize: 18,
    borderRadius: 7
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    color: "black",
    fontFamily: "Cuprum-Bold",
    fontSize: 18,
  },
  appButtonContainer: {
    elevation: 0,
    backgroundColor: "#E67738",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 10
  },
  appButtonText: {
    fontSize: 20,
    color: "white",
    alignSelf: "center",
    fontFamily: "Cuprum-Bold"
  },
  appButtonContainerClear: {
    elevation: 0,
    backgroundColor: "#FAEBDC",
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 2,
    marginTop: 2,
    top: -40
  },
  appButtonTextClear: {
    fontSize: 16,
    width: 300,
    color: "black",
    left: 195,
    textDecorationLine: "underline",
    fontFamily: "Cuprum-VariableFont_wght"
  },
  appButtonContainerButtom: {
    elevation: 0,
    backgroundColor: "#f2a676",
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 2,
    marginTop: 0,
    top: 187,
    left: 78
  },
  appButtonTextButtom: {
    fontSize: 18,
    width: 55,
    color: "white",
    left: 0,
    textDecorationLine: "underline",
    fontFamily: "Cuprum-VariableFont_wght"
  },
  logoContainer: {
    paddingTop: 10,
  },
  tinyLogo: {
    width: 10,
    height: 10,
  },
  logo: {
    width: 10,
    height: 10,
  },
}
)


export default Login



