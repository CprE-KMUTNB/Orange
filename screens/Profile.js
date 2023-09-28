import { View, Text, ScrollView, StatusBar, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity, Modal } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import EditProfile from './EditProfile'

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
      
        
        <View style={styles.innerCon}>
          <AppText style={{...styles.normalText1, ...styles.innerPos}}>Personal <Text style={styles.iconPos}> <Icon name='settings' size={25} onPress={onPressEditProfile}/> </Text> </AppText>
           
          <AppText style={styles.normalText2}>Email : </AppText>
          <AppText style={styles.normalText2}>Password : </AppText>
          <AppText style={styles.normalText2}>Weight : </AppText>
          <AppText style={styles.normalText2}>Height : </AppText>
          <AppText style={styles.normalText2}>Bust : </AppText>
          <AppText style={styles.normalText2}>Waist : </AppText>
          <AppText style={styles.normalText2}>Hip : </AppText>
          <AppButton 
          title = {'Upgrade to premium'}
          onPress={onPressCardInfo}
          />
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
  height: Dimensions.get('window').height*0.52,
  borderRadius: 15,
  marginTop: 10,
  alignItems: 'center',
  justifyContent: 'center'
},
appButtonContainer: {
  elevation: 0,
  backgroundColor: "#E67738",
  borderRadius: 10,
  paddingVertical: 15,
  paddingHorizontal: 12,
  marginTop: 10,
  width: 240,
  alignItems: 'center'
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
iconPos: {
  left: 10,
  marginRight: 'auto',
  top: -45,
  color: 'black'
}
  
}
)

export default Profile