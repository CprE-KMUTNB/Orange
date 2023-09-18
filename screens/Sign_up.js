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

const Sign_up = () => {
  const [text, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [confirm_password, onChangeConfirmPassword] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={{color:'black', fontSize:80, fontWeight:"bold"}}>Sign up</Text>
          <View style={styles.logoContainer}>
            <Image style={{width:50, height:50, top:-115, left:-68}} source = {require('D:\project-softdev\image\leave-removebg-preview2.png')} />
          </View>
        <Text style={{color:'black', fontSize:14, left:0, alignSelf:'left', width:300, top:-50}}>Email</Text>
        <SafeAreaView>
          <TextInput
          style={{...styles.input, height: 40, width: 300, backgroundColor:'white', top:-50}}
          value={text}
          onChangeText={onChangeText}
          placeholder='sample@email.com'
         />
        </SafeAreaView>
        <Text style={{color:'black', fontSize:14, left:0, alignSelf:'left', width:300, top:-50}}>Password</Text>
        <SafeAreaView>
          <TextInput
          style={{...styles.input, height: 40, width: 300,  backgroundColor:'white', top:-50}}
          value={password}
          onChangeText={onChangePassword}
          placeholder='example'
          secureTextEntry={true}
         />
        </SafeAreaView>
        <Text style={{color:'black', fontSize:14, left:0, alignSelf:'left', width:300, top:-50}}>Confirm Password</Text>
        <SafeAreaView>
          <TextInput
          style={{...styles.input, height: 40, width: 300,  backgroundColor:'white', top:-50}}
          value={confirm_password}
          onChangeText={onChangeConfirmPassword}
          placeholder='example'
          secureTextEntry={true}
         />
        </SafeAreaView>
          <AppButton title={"   Sign up   "}/>
      </View>
      <Text style={{color:'black', alignSelf:'center',width: 300, height:20, top:210 , left:45}}>Already have an account?</Text>
      <AppButtonButtom title={"Login"}/>
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
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    color:"black"
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
    textTransform: "uppercase"
  },
  appButtonContainerButtom: {
    elevation: 0,
    backgroundColor: "#FF9176",
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 2,
    marginTop: 0,
    top: 187,
    left: 85
  },
  appButtonTextButtom: {
    fontSize: 14,
    // fontFamily: "sans-serif-thin",
    width: 50,
    color: "white",
    left: 0,
    textDecorationLine: "underline"
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



