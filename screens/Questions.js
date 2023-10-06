import { View, Text, ScrollView, StatusBar, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import UserChatScreen from './UserChatScreen'

const AppText = (props) => (
  <Text {...props} style={{ fontFamily: "Cuprum-VariableFont_wght", ...props.style, fontSize: 18, color: 'black' }}>{props.children}</Text>
)

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
)

const AppButton2 = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer2}>
    <Text style={styles.appButtonText2}>{title}</Text>
  </TouchableOpacity>
)

const ModalButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.modalButtonContainer}>
    <Text style={styles.modalButtonText}>{title}</Text>
  </TouchableOpacity>
)

const QHistoryButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
)

const Questions = ({navigation}) => {
  const [text, onChangeText] = React.useState('');
  const [text2, onChangeText2] = React.useState('');
  const [isModalVisible, setIsModalVisible] = useState(false)
  const onPressQHistory = () => {
    navigation.navigate('QHistory')
  }
  const onPressUserChatScreen = () => {
    navigation.navigate('UserChatScreen')
  }

  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.textheader}>Chat History</Text>
            <View style={styles.headerCon}>
                <Text style={styles.headText}>    Date           Subject          Status</Text>
            </View>
            <View style={styles.detailCon}>
                <View style={styles.detailCon1}>
                    <Text style={styles.detailText}>29/09/23</Text>
                    <Text style={styles.detailText}>14/09/23</Text>
                    <Text style={styles.detailText}>19/08/23</Text>
                    <Text style={styles.detailText}>17/09/23</Text>
                </View>
                <View style={styles.detailCon2}>
                    <Text style={styles.detailText}>Problem 4</Text>
                    <Text style={styles.detailText}>Problem 3</Text>
                    <Text style={styles.detailText}>Problem 2</Text>
                    <Text style={styles.detailText}>Problem 1</Text>
                </View>
                <View style={styles.detailCon3}>
                    <Text style={styles.detailText}>on hold</Text>
                    <Text style={styles.detailText}>in process</Text>
                    <Text style={styles.detailText}>completed</Text>
                    <Text style={styles.detailText}>completed</Text>
                </View>
                <View style={styles.detailCon4}>
                    <AppButton2
                        title={'view'} />
                    <AppButton2
                        title={'view'} />
                    <AppButton2
                        title={'view'} />
                    <AppButton2
                        title={'view'} />
                </View>
            </View>
        </View>
 
        <AppButton
        title={'Send new chat'}
        onPress={onPressUserChatScreen}/>
        {/* <QHistoryButton
            title={'View history'}
            onPress={onPressQHistory}
          /> */}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  squareTop: {
    height: 90,
    width: Dimensions.get('window').width,
    backgroundColor: "#FF9176",
    alignItems: 'center',
    paddingTop: 5,
    fontFamily: "Cuprum-VariableFont_wght",
    justifyContent: "center",
    elevation: 5,
  },
  container: {
    backgroundColor: "#FAEBDC",
    alignItems: "center",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  headerText: {
    color: 'black',
    fontSize: 40,
    fontFamily: "Cuprum-Bold",
    top: 0
  },
  innerCon: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.3,
    borderRadius: 15,
    marginVertical: 30,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  appButtonContainer: {
    elevation: 0,
    backgroundColor: "#E67738",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 10,
    width: 240,
    alignItems: 'center',
    top: -400
  },
  appButtonText: {
    fontSize: 22,
    color: "white",
    alignSelf: "center",
    fontFamily: "Cuprum-Bold"
  },
  appButtonContainer2: {
    elevation: 0,
    paddingVertical: 10,
    justifyContent: 'center'
},
appButtonText2: {
    fontSize: 18,
    color: "black",
    alignSelf: "center",
    fontFamily: "Cuprum-VariableFont_wght",
    textDecorationLine: 'underline'
},
  normalText1: {
    paddingLeft: 15,
    paddingTop: 20,
    marginRight: 'auto'
  },
  normalText2: {
    paddingVertical: 10,
    paddingLeft: 30,
    marginRight: 'auto'
  },
  inputContainer: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.7,
    marginTop: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 7,
    top: 0
    // justifyContent: 'flex-start'
  },
  inputContainer2: {
    width: Dimensions.get('window').width * 0.8,
    height: 40,
    marginTop: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 7,
    top: 0,
    paddingTop: 10
  },
  input: {
    paddingLeft: 15,
    paddingTop: 0,
    fontSize: 18,
    fontFamily: "Cuprum-VariableFont_wght",
    justifyContent: 'flex-start',
  },
  buttonstyle: {
    color: '#FF9176',
    alignItems: 'center',
    margin: 20,
    padding: 20
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
  headtext: {
    fontSize: 22,
    color: "black",
    fontFamily: "Cuprum-VariableFont_wght",
    marginTop: 10,
    marginBottom: 5,
    marginRight: 'auto',
    marginLeft: 40
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
    borderRadius: 5
  },
  modalButtonContainer: {
    elevation: 0,
    backgroundColor: "#E67738",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 5,
    margin: 10,
    width: 180,
    alignItems: 'center'
  },
  modalButtonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center",
    fontFamily: "Cuprum-Bold"
  },
  iconPos: {
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    top: -45,
    padding: 10
  },
  modalheadtext: {
    fontSize: 20,
    color: "black",
    alignSelf: "center",
    fontFamily: "Cuprum-Bold",
    marginBottom: 20
  },
  headerCon: {
    backgroundColor: "white",
    // alignItems: "center",
    width: Dimensions.get('window').width * 0.96,
    height: 50,
    padding: 0,
    margin: 10,
    borderRadius: 5,
    borderWidth: 3,
    borderLeftColor: 'white',
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderBottomColor: '#f2a676',
    justifyContent: 'center',
},
detailCon: {
    backgroundColor: "white",
    // alignItems: "center",
    width: Dimensions.get('window').width * 0.96,
    height: 300,
    padding: 0,
    margin: 20,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderRadius: 5,
    top: -30,
    flexDirection: 'row'
},
detailCon1: {
    // backgroundColor: "red",
    // alignItems: "center",
    width: Dimensions.get('window').width * 0.2,
    height: 650,
    padding: 0,
    marginLeft: 3,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderRadius: 5,
    top: 0,
    flexDirection: 'column'

},
detailCon2: {
    // backgroundColor: "blue",
    // alignItems: "center",
    width: Dimensions.get('window').width * 0.35,
    height: 650,
    padding: 0,
    marginLeft: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderRadius: 5,
    top: 0
},
detailCon3: {
    // backgroundColor: "green",
    // alignItems: "center",
    width: Dimensions.get('window').width * 0.2,
    height: 650,
    padding: 0,
    margin: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderRadius: 5,
    top: 0
},
detailCon4: {
    // backgroundColor: "yellow",
    // alignItems: "center",
    width: Dimensions.get('window').width * 0.2,
    height: 650,
    padding: 0,
    margin: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderRadius: 5,
    top: 0
},
headText: {
  fontFamily: "Cuprum-VariableFont_wght",
  color: 'black',
  fontSize: 22,

},
detailText: {
  fontFamily: "Cuprum-VariableFont_wght",
  color: 'black',
  fontSize: 18,
  paddingVertical: 10,
  // height: '100%',
  // width: '100%',
  marginRight: 'auto',
  marginLeft: 'auto'

},
textheader: {
  fontFamily: 'Cuprum-Bold', 
  fontSize: 25, 
  color: 'black', 
  marginRight: 'auto', 
  marginLeft: 10, 
  marginTop: 10
}
}
)

export default Questions