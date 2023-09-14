import { View, Text, StyleSheet, Dimensions, TextInput, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
// import leave.jpg from ./Image/leaves   

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Login = () => {
  const [text, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  // console.log(Dimensions.get('window').width, Dimensions.get('window').height)
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={{color:'black', fontSize:70, fontWeight:"bold"}}>Login</Text>
          <View style={styles.container}>
            <Image style={styles.tinyLogo}
              source={require('./image/leave.jpg')}
            />
          </View>
        <Text style={{color:'black', fontSize:14, left:0, alignSelf:'left', width:300}}>Email</Text>
        <SafeAreaView>
          <TextInput
          style={{...styles.input, height: 40, width: 300, backgroundColor:'white'}}
          value={text}
          onChangeText={onChangeText}
          placeholder='sample@email.com'
         />
        </SafeAreaView>
        <Text style={{color:'black', fontSize:14, left:0, alignSelf:'left', width:300}}>Password</Text>
        <SafeAreaView>
          <TextInput
          style={{...styles.input, height: 40, width: 300,  backgroundColor:'white'}}
          value={password}
          onChangeText={onChangePassword}
          placeholder='example'
          secureTextEntry={true}
         />
        <Text style={{color:'black', alignSelf:'flex-end', marginRight:15, padding:5, textDecorationLine: "underline"}}>Forgot Password</Text>
        </SafeAreaView>
          <AppButton title={"   Login   "}/>
      </View>
      <Text style={{color:'black', alignSelf:'center',width: 300, height:20, top:125, left:50}}>Don't have an account?</Text>
        <Text style={{color:'white', alignContent:'center', width: 300, height:20, top:105, left:200, textDecorationLine: 'underline', textDecorationColor:'white'}}>Sign up</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    height: 600,
    width: 600,
    borderRadius: 300,
    backgroundColor: "#FFE6DF",
    top:80,
    alignItems: 'center',
    paddingTop:100
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
    marginTop: 10
  },
  appButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  logoContainer: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
}
)


export default Login

