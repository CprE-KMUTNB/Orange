import { View, Text, ScrollView, StatusBar, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity, Modal } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import EditProfile from './EditProfile'
import axios from 'axios'

const AppText = (props) => (
    <Text {...props} style={{fontFamily: "Cuprum-VariableFont_wght", ...props.style, fontSize: 18, color: 'black'}}>{props.children}</Text>
)

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
)

const Profile = ({navigation}) => {
  const onPressEditProfile = () => {
    navigation.navigate('EditProfile')
  }
  const onPressCardInfo = () => {
    navigation.navigate('CardInfo')
  }
  
  
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{...styles.innerCon, paddingTop:360}}>
          <AppText style={{...styles.normalText1, ...styles.innerPos}}>Personal <Text style={styles.iconPos}> <Icon name='settings' size={25} onPress={onPressEditProfile}/> </Text> </AppText>
           
          <AppText style={styles.normalText2}>Email : </AppText>
          <AppText style={styles.normalText2}>Password : </AppText>
          <AppText style={styles.normalText2}>Weight : </AppText>
          <AppText style={styles.normalText2}>Height : </AppText>
          <AppText style={styles.normalText2}>Shoulder: </AppText>
          <AppText style={styles.normalText2}>Bust : </AppText>
          <AppText style={styles.normalText2}>Waist : </AppText>
          <AppText style={styles.normalText2}>Hip : </AppText>
          <View style={{ top:-345, width:Dimensions.get('window').width*0.8}}>
            <AppText style={styles.normalText3}>sample@email.com </AppText>
            <AppText style={styles.normalText3}>●●●●●●●● </AppText>
            <AppText style={styles.normalText3}>50 </AppText>
            <AppText style={styles.normalText3}>160 </AppText>
            <AppText style={styles.normalText3}>35 </AppText>
            <AppText style={styles.normalText3}>33 </AppText>
            <AppText style={styles.normalText3}>26 </AppText>
            <AppText style={styles.normalText3}>35 </AppText>
          </View>
          <View>
          <AppButton 
          title = {'Upgrade to premium'}
          onPress={onPressCardInfo}
          />
          <AppText style={{top:-345, left: 60}}>35Baht per month</AppText>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  squareTop: {
    height: 70,
    width: Dimensions.get('window').width,
    backgroundColor: "#FF9176",
    alignItems: 'center',
    paddingTop:5,
    fontFamily: "Cuprum-VariableFont_wght",
    justifyContent: "center",
    elevation: 5
},
container: {
  backgroundColor: "#FAEBDC",
  alignItems: "center",
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
},
headerText: {
  color:'black', 
  fontSize:40, 
  fontFamily: "Cuprum-Bold", 
  marginBottom: 10
},
innerCon: {
  backgroundColor: 'white',
  width: Dimensions.get('window').width*0.8,
  height: Dimensions.get('window').height*0.6,
  borderRadius: 15,
  marginTop: 20,
  alignItems: 'center',
  justifyContent: 'center'
},
appButtonContainer: {
  elevation: 0,
  backgroundColor: "#E67738",
  borderRadius: 10,
  paddingVertical: 10,
  paddingHorizontal: 12,
  marginTop: 20,
  width: 240,
  height: 50,
  alignItems: 'center',
  top: -350
},
appButtonText: {
  fontSize: 22,
  color: "white",
  alignSelf: "center",
  fontFamily: "Cuprum-Bold"
},
normalText1: {
  paddingLeft: 15,
  // paddingTop: -10,
  marginRight: 'auto'
},
normalText2: {
  paddingVertical: 10,
  paddingLeft: 30,
  marginRight: 'auto'
},
normalText3: {
  paddingVertical: 10,
  paddingRight: 10,
  // marginRight: 'auto',
  marginLeft:'auto'
},
iconPos: {
  left: 10,
  marginRight: 'auto',
  top: -45,
  color: 'black'
}
  
}
)

export default Profile