import { View, Text, ScrollView, StatusBar, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity, Modal } from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/Feather'
import Profile from './Profile'
import EditProfile from './EditProfile'

const AppText = (props) => (
    <Text {...props} style={{fontFamily: "Cuprum-VariableFont_wght", ...props.style, fontSize: 18, color: 'black'}}>{props.children}</Text>
)

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
)

const ModalButtonY = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.modalButtonYContainer}>
      <Text style={styles.modalButtonYText}>{title}</Text>
    </TouchableOpacity>
)

const ModalButtonN = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.modalButtonNContainer}>
    <Text style={styles.modalButtonNText}>{title}</Text>
  </TouchableOpacity>
)

const ProfilePremium = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const onPressProfile = () => {
    navigation.navigate('Profile')
  }
  const onPressEditProfile = () => {
    navigation.navigate('EditProfile')
  }
  const onPressCardInfo = () => {
    navigation.navigate('CardInfo')
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <View style={styles.squareTop}>
          <Text style={styles.headerText}>Profile</Text>
        </View>
        <Text style={styles.iconPos}> <Icon name='menu' size={25}/> </Text> */}
        <View style={{...styles.innerCon, paddingTop:330}}>
          <AppText style={{...styles.normalText1}}>Personal 
            <Text style={styles.iconPos}> <Icon name='settings' size={22} onPress={onPressEditProfile}/> </Text> 
          </AppText>
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
            <AppText style={styles.normalText3}>80 </AppText>
            <AppText style={styles.normalText3}>33 </AppText>
            <AppText style={styles.normalText3}>26 </AppText>
            <AppText style={styles.normalText3}>35 </AppText>
          </View>
          {/* <AppButton 
          title = {'Cancel Premium'}
          onPress={() => setIsModalVisible(true)}
          /> */}
          </View>
          <View style={styles.innerCon2}>
                <AppText style={styles.normalText11}>Payment Detail  
                <Text style={styles.iconPos2}> <Icon name='settings' size={22} onPress={onPressCardInfo}/> </Text>
                </AppText>
                <View style={styles.modaltextcon}>
                  <AppText style={styles.normalText2}>Payment method : *3342</AppText>
                  <AppText style={styles.normalText2}>Next billing date : 30/10/2023</AppText>
                  <Text style={styles.modalhistory}>History</Text>
                </View>
          </View>
            <View>
              <AppButton style={styles.buttonstyle}
                title='Cancel Premium'
                onPress= {() => setIsModalVisible(true)} 
              />    
              <Modal
                visible={isModalVisible}
                backdropColor='white'
                backdropOpacity= {50}
                onRequestClose={() => setIsModalVisible(false)}
                animationType='slide'
                presentationStyle= 'overFullScreen'
                transparent={true}
                style={{margin: 0}}
                
              >
                <TouchableOpacity style={styles.modalBackdrop} activeOpacity={1}></TouchableOpacity>
              <View style={styles.centerStyle}>
                  <Text style={styles.modalheadtext}>Are you sure to cancel premium?</Text>
                  <View>
                    <ModalButtonY  
                    style={styles.buttonstyle}
                    title='Yes'
                    onPress={onPressProfile}
                    />
                    <ModalButtonN 
                    style={styles.buttonstyle}
                    title='No'
                    onPress= {() => setIsModalVisible(false)} />
                  </View>

              </View>
          </Modal>
          </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  squareTop: {
    height: 70,
    width: Dimensions.get('window').width,
    backgroundColor: "#f2a676",
    alignItems: 'center',
    paddingTop:5,
    fontFamily: "Cuprum-VariableFont_wght",
    justifyContent: "center",
    elevation: 8
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
  height: Dimensions.get('window').height*0.45,
  borderRadius: 8,
  marginTop: 10,
  alignItems: 'center',
  justifyContent: 'center'
},
innerCon2: {
  backgroundColor: 'white',
  width: Dimensions.get('window').width*0.8,
  height: Dimensions.get('window').height*0.3,
  borderRadius: 8,
  marginTop: 10,
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingTop: 10
},
appButtonContainer: {
  elevation: 0,
  backgroundColor: "#E67738",
  borderRadius: 10,
  paddingVertical: 15,
  paddingHorizontal: 12,
  marginTop: 25,
  width: 180,
  alignItems: 'center'
},
appButtonText: {
  fontSize: 20,
  color: "white",
  alignSelf: "center",
  fontFamily: "Cuprum-Bold"
},
modalButtonYContainer: {
    elevation: 0,
    backgroundColor: "#E67738",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 5,
    margin: 10,
    width: 180,
    alignItems: 'center'
  },
  modalButtonYText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center",
    fontFamily: "Cuprum-Bold"
  },
  modalButtonNContainer: {
    elevation: 0,
    backgroundColor: "#E67738",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 5,
    margin: 10,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalButtonNText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center",
    fontFamily: "Cuprum-Bold"
  },
  normalText1: {
    paddingLeft: 15,
    marginRight: 'auto',

  },
  normalText11: {
    paddingLeft: 15,
    marginRight: 'auto',
    paddingRight: 15

  },
  normalText2: {
    paddingVertical: 8,
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
  },
  iconPos2: {
    left: 15,
    top: -45,
    color: 'black',
  },
  centerStyle: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
      backgroundColor: '#FAEBDC', 
      padding: 0, 
      width: '85%',
      height: '35%',
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1,
      // borderColor: 'black',
      borderRadius: 10,
      elevation: 8
  },
  decoStyle: {
      width: '90%',
      height: '85%',
      backgroundColor: 'white',
      marginTop: 0,
      alignItems: 'center',
      // justifyContent: 'flex-end',
      padding: 10
  },
  buttonstyle: {
      color:'#FF9176',
      alignItems: 'center',
      margin: 20,
      padding: 20

  },
  modalheadCon: {
      backgroundColor: "#FF9176",
      height: '10%',
      width: '100%',
      top:-10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
  },
  modalHeaderText: {
      fontSize: 35,
      fontFamily: "Cuprum-Bold", 
      padding: 10,
      color: 'black',
  },
  modalhistory: {
      fontSize: 23,
      fontFamily: "Cuprum-Bold", 
      paddingVertical: 12,
      color: 'black',
  },
  modaltextcon: {
      alignItems: 'flex-start',
      width: '95%',
      height: '50%',
      borderRightColor: 'white',
      borderBottomColor :'black',
      borderLeftColor: 'white',
      borderTopColor: 'white',
      borderWidth: 1,
  },
  modalsmalltext: {
      fontSize: 16,
      fontFamily: "Cuprum-VariableFont_wght",
      color: 'black'
  },
  modaliconPos: {
      alignItems: 'flex-start',
      marginTop: 'auto',
      marginBottom: 'auto',
      color: 'white',
  },
  scrollView: {
    backgroundColor: "blue",
    width: Dimensions.get('window').width,
    flex: 1,

  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalheadtext: {
    fontSize: 20,
    color: "black",
    alignSelf: "center",
    fontFamily: "Cuprum-Bold",
    marginBottom: 20
  }
}
)

export default ProfilePremium