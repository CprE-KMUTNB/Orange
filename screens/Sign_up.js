import { View, Text, StyleSheet, Dimensions, TextInput, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const AppText = (props) => (
  <Text {...props} style={{fontFamily: "Cuprum-VariableFont_wght", ...props.style, fontSize: 18, color: 'black'}}>{props.children}</Text>
)

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

const Sign_up = ({navigation}) => {
  const onPressLogin = () => {
    navigation.navigate('Login')
  }
  const onPressFillInformation = () => {
    navigation.navigate('FillInformation')
  }
  const onPressNewContent = () => {
    navigation.navigate('NewContent')
  }
  const [text, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [confirm_password, onChangeConfirmPassword] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={{color:'black', fontSize:80, fontFamily: "Cuprum-Bold", paddingBottom: 20}}>Sign up</Text>
          <View style={styles.logoContainer}>
            <Image style={{width:30, height:30, top:-120, left:-66}} source = {require('../assets/leave-removebg-preview2.png')} />
          </View>
        <AppText style={{textAlign:'left', width:300, top:-50}}>Email</AppText>
        <SafeAreaView>
          <TextInput
          style={{...styles.input, height: 40, width: 300, backgroundColor:'white', top:-50, fontFamily: "Cuprum-VariableFont_wght"}}
          value={text}
          onChangeText={onChangeText}
          placeholder='sample@email.com'
         />
        </SafeAreaView>
        <AppText style={{textAlign:'left', width:300, top:-50}}>Password</AppText>
        <SafeAreaView>
          <TextInput
          style={{...styles.input, height: 40, width: 300,  backgroundColor:'white', top:-50, fontFamily: "Cuprum-VariableFont_wght"}}
          value={password}
          onChangeText={onChangePassword}
          placeholder='example'
          secureTextEntry={true}
         />
        </SafeAreaView>
        <AppText style={{color:'black', left:0, textAlign:'left', width:300, top:-50}}>Confirm Password</AppText>
        <SafeAreaView>
          <TextInput
          style={{...styles.input, height: 40, width: 300,  backgroundColor:'white', top:-50, fontFamily: "Cuprum-VariableFont_wght"}}
          value={confirm_password}
          onChangeText={onChangeConfirmPassword}
          placeholder='example'
          secureTextEntry={true}
         />
        </SafeAreaView>
          <AppButton 
          onPress={onPressFillInformation}
          title={"   Sign up   "}/>
      </View>
      <AppText style={{color:'black', alignItems:'center',width: 300, height:25, top:210 , left:33}}>Already have an account?</AppText>
      <AppButtonButtom 
      onPress={onPressLogin}
      title={"Login"}/>
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    height: 580,
    width: 580,
    borderRadius: 290,
    backgroundColor: "#FFE6DF",
    top:110,
    alignItems: 'center',
    paddingTop:90
    // justifyContent: "center",
    
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
    fontSize: 18,
    justifyContent: 'center',

  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    color:"black",
    fontFamily: "Cuprum-VariableFont_wght"
  },
  appButtonContainer: {
    elevation: 0,
    backgroundColor: "#E76F51",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: -20
  },
  appButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    fontFamily: "Cuprum-VariableFont_wght"
  },
  appButtonContainerButtom: {
    elevation: 0,
    backgroundColor: "#FF9176",
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 2,
    marginTop: 0,
    top: 183,
    left: 87
  },
  appButtonTextButtom: {
    fontSize: 18,
    width: 50,
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


export default Sign_up