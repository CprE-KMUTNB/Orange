import { View, Text, ScrollView, StatusBar, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity, Modal } from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/Feather'

const AppText = (props) => (
    <Text {...props} style={{fontFamily: "Cuprum-VariableFont_wght", ...props.style, fontSize: 18, color: 'black'}}>{props.children}</Text>
)

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
)

const ModalButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.modalButtonContainer}>
      <Text style={styles.modalButtonText}>{title}</Text>
    </TouchableOpacity>
)

const ProfilePremium = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.squareTop}>
          <Text style={styles.headerText}>Profile</Text>
        </View>
        <Text style={styles.iconPos}> <Icon name='menu' size={25}/> </Text>
        <View style={styles.innerCon}>
          <AppText style={{...styles.normalText1, ...styles.innerPos}}>Personal <Text style={styles.iconPos}> <Icon name='settings' size={25}/> </Text> </AppText>
          <AppText style={styles.normalText2}>Email : </AppText>
          <AppText style={styles.normalText2}>Password : </AppText>
          <AppText style={styles.normalText2}>Weight : </AppText>
          <AppText style={styles.normalText2}>Height : </AppText>
          <AppText style={styles.normalText2}>Bust : </AppText>
          <AppText style={styles.normalText2}>Waist : </AppText>
          <AppText style={styles.normalText2}>Hip : </AppText>
          <AppButton 
          title = {'Payment Detail'}
          onPress={() => setIsModalVisible(true)}
          />
          <Modal
            visible={isModalVisible}
            onRequesstClose={() => setIsModalVisible(false)}
            animationType='slide'
            presentationStyle= 'overFullScreen'
            transparent
            style={{ justifyContent: 'center',
            alignItems: 'center',
            margin: 0}}
          >
            <View style={styles.centerStyle}>
                <View style={styles.modalheadCon}>
                    <Text 
                    style={styles.modaliconPos} 
                    onPress= {() => setIsModalVisible(false)}
                    > 
                        <Icon name='chevron-left' size={30}/> 
                    </Text>
                </View>
                <View style={styles.decoStyle}>
                    <Text style={styles.modalHeaderText}>Payment Detail</Text>
                    <View style={styles.modaltextcon}>
                    <Text style={styles.modalsmalltext}>Payment method : Bangkok Bank *3342</Text>
                    <Text style={styles.modalsmalltext}>Next billing date : 30/10/2023</Text>
                    <Text style={styles.modalhistory}>History</Text>
                    </View>
                    <ModalButton style={styles.buttonstyle}
                    title='Cancel Premium'
                    onPress= {() => setIsModalVisible(false)} 
                    />    
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
    backgroundColor: "#FF9176",
    alignItems: 'center',
    paddingTop:5,
    fontFamily: "Cuprum-VariableFont_wght",
    justifyContent: "center",
    elevation: 5
},
container: {
  backgroundColor: "#FFE6DF",
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
  backgroundColor: "#E76F51",
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
modalButtonContainer: {
    elevation: 0,
    backgroundColor: "#E76F51",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginTop: 'auto',
    width: 180,
    alignItems: 'center'
  },
  modalButtonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center",
    fontFamily: "Cuprum-Bold"
  },
normalText1: {
  paddingLeft: 15,
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
  top: -47,
  color: 'black'
},
centerStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#FFE6DF', 
    padding: 0, 
    width: '80%',
    height: '50%',
    marginTop: 'auto',
    marginBottom: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 10,
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

},
modalheadCon: {
    backgroundColor: "#FF9176",
    height: '10%',
    width: '100%',
    top:-10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
    paddingVertical: 20,
    color: 'black',
},
modaltextcon: {
    alignItems: 'flex-start',
    width: '95%',
    height: '30%',
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
    color: 'white'
}

  
}
)

export default ProfilePremium