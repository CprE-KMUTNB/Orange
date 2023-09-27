import { View, Text, ScrollView, StatusBar, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity, TextInput, Modal } from 'react-native'
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

const Questions = () => {
  const [text, onChangeText] = React.useState('');
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <View style={styles.squareTop}>
          <Text style={styles.headerText}>Questions</Text>
          <AppText>and Concerns</AppText>
        </View> */}
        <Text style={styles.iconPos}> <Icon name='menu' size={25}/> </Text>
        <View style={styles.inputContainer}>
           <TextInput
              editable
              multiline
              numberOfLines={2}
              onChangeText={text => onChangeText(text)}
              style={styles.input}
              placeholder='Type your questions or concerns here...'
            />
        </View>
        <View>
          <AppButton 
            title = {'Submit'}
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
                <ModalButton
                  style={styles.buttonstyle}
                  title='Close'
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
    height: 90,
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
    top:0
  },
  innerCon: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width*0.8,
    height: Dimensions.get('window').height*0.3,
    borderRadius: 15,
    marginVertical: 30,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  appButtonContainer: {
    elevation: 0,
    backgroundColor: "#E76F51",
    borderRadius: 10,
    paddingVertical: 10,
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
    paddingTop: 20,
    marginRight: 'auto'
  },
  normalText2: {
    paddingVertical: 10,
    paddingLeft: 30,
    marginRight: 'auto'
  },
  inputContainer: {
    width: Dimensions.get('window').width*0.8,
    height: Dimensions.get('window').width*0.75,
    alignItems: 'center', 
    marginTop: 10, 
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10
    // justifyContent: 'flex-start'
  },
  input: {
    paddingLeft: 15,
    paddingVertical: 10,
    fontSize: 18,
    fontFamily: "Cuprum-VariableFont_wght",
    justifyContent: 'flex-start',
  },
  buttonstyle: {
    color:'#FF9176',
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
  modalheadtext: {
    fontSize: 20,
    color: "black",
    alignSelf: "center",
    fontFamily: "Cuprum-Bold",
    marginBottom: 20
  },
  centerStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    backgroundColor: '#FFE6DF', 
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
    backgroundColor: "#E76F51",
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
  }
}
)

export default Questions