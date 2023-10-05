import { View, Text, ScrollView, StatusBar, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import DropdownComponent from './Dropdown'
import DropdownComponent2 from './Dropdown2'
import Icon from 'react-native-vector-icons/Feather'
import Icon1 from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler'

const AppText = (props) => (
  <Text {...props} style={{ fontFamily: "Cuprum-VariableFont_wght", ...props.style, fontSize: 18, color: 'black' }}>{props.children}</Text>
)

const AdminOutfitsRec = () => {


  let placeLoop = []
  for (let a = 0; a <= 5; a++) {
    placeLoop.push(
      <TextInput placeholder='enter place here'>{a}</TextInput>
    )
  }
  const AppButtonConfirm = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  )

  const AppButtonCancel = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer2}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  )
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isModalVisible2, setIsModalVisible2] = useState(false)

  const [v1, onChangev1] = React.useState('');
  const [v2, onChangev2] = React.useState('');
  const [v3, onChangev3] = React.useState('');
  const [v4, onChangev4] = React.useState('');
  const [v5, onChangev5] = React.useState('');

  return (
    // <ScrollView>
    <View style={styles.container}>
      <View style={styles.innerCon}>
        <View style={styles.insideCon}>
          {/* <View> */}
          <AppText style={styles.normalText}>Place <Icon style={styles.iconPos} name='settings' size={25} onPress={() => setIsModalVisible(true)} /></AppText>
          <DropdownComponent />
          <Modal
            visible={isModalVisible}
            backdropColor='white'
            backdropOpacity={50}
            onRequestClose={() => setIsModalVisible(false)}
            animationType='slide'
            presentationStyle='overFullScreen'
            transparent={true}
            style={{ margin: 0 }}
          >
            <TouchableOpacity style={styles.modalBackdrop} activeOpacity={1}></TouchableOpacity>
            <View style={styles.centerStyle}>
              <Text style={styles.modalheadtext}>Edit Place</Text>
              <Text style={styles.modalsmalltext}>value 1: </Text>
              <TextInput
                style={styles.input}
                value={v1}
                onChangeText={onChangev1}
                placeholder='Work'
              />
              <Text style={styles.modalsmalltext}>value 2: </Text>
              <TextInput
                style={styles.input}
                value={v2}
                onChangeText={onChangev2}
                placeholder='Date night'
              />
              <Text style={styles.modalsmalltext}>value 3: </Text>
              <TextInput
                style={styles.input}
                value={v3}
                onChangeText={onChangev3}
                placeholder='Holiday'
              />
              <Text style={styles.modalsmalltext}>value 4: </Text>
              <TextInput
                style={styles.input}
                value={v4}
                onChangeText={onChangev4}
                placeholder='Beach'
              />
              <Text style={styles.modalsmalltext}>value 5: </Text>
              <TextInput
                style={styles.input}
                value={v5}
                onChangeText={onChangev5}
                placeholder='Picnic'
              />
              <View>
                <AppButtonCancel
                  title='Cancel'
                  onPress={() => setIsModalVisible(false)}
                />
                <AppButtonConfirm
                  title='Confirm'
                  onPress={() => setIsModalVisible(false)}
                />
              </View>
              <View>
                <Icon1 style={styles.iconPos} name='trash-outline' size={25} color={'black'}/>
                <Icon1 style={styles.iconPos} name='trash-outline' size={25} color={'black'}/>
                <Icon1 style={styles.iconPos} name='trash-outline' size={25} color={'black'}/>
                <Icon1 style={styles.iconPos} name='trash-outline' size={25} color={'black'}/>
                <Icon1 style={styles.iconPos} name='trash-outline' size={25} color={'black'}/>
              </View>
            </View>
          </Modal>
          {/* </View> */}
          <AppText style={styles.normalText}>Theme <Icon style={styles.iconPos} name='settings' size={25} onPress={() => setIsModalVisible2(true)} /></AppText>
          <DropdownComponent2 />
          {/* {placeLoop} connect backend */}
        </View>
      </View>

    </View>

    // </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FBD5BC',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  scrollView: {
    backgroundColor: "black",
    width: Dimensions.get('window').width,
    flex: 1,
  },
  insideCon: {
    width: '90%',
    backgroundColor: 'white',
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.45,
    borderRadius: 15,
    marginTop: 20,
    alignItems: 'center',
    elevation: 10,
  },
  header: {
    fontFamily: "Cuprum-VariableFont_wght",
    fontSize: 25,
    color: 'black',
    padding: 10
  },
  normalText: {
    marginRight: 'auto',
    paddingTop: 15,
    paddingLeft: 20
  },
  modalheadCon: {
    backgroundColor: "#FF9176",
    height: '10%',
    width: '100%',
    top: -10,
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
    borderBottomColor: 'black',
    borderLeftColor: 'white',
    borderTopColor: 'white',
    borderWidth: 1,
  },
  modalsmalltext: {
    fontSize: 18,
    fontFamily: "Cuprum-VariableFont_wght",
    color: 'black',
    marginRight: 'auto',
    paddingLeft: 15
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
    fontSize: 30,
    color: "black",
    alignSelf: "center",
    fontFamily: "Cuprum-Bold",
    marginBottom: 15,
    paddingTop: 20,
    paddingBottom: 10
  },
  appButtonContainer: {
    elevation: 0,
    backgroundColor: "#E67738",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 12,
    marginTop: 25,
    width: 130,
    alignItems: 'center',
    top: -77.5,
    left: 80
  },
  appButtonText: {
    fontSize: 20,
    color: "white",
    alignSelf: "center",
    fontFamily: "Cuprum-Bold"
  },
  appButtonContainer2: {
    elevation: 0,
    backgroundColor: "#E67738",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 12,
    marginTop: 25,
    width: 130,
    alignItems: 'center',
    left: -80
  },
  buttonstyle: {
    color: '#FF9176',
    alignItems: 'center',
    margin: 20,
    padding: 20,
    top: -50,
    left: 100
  },
  centerStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    backgroundColor: '#FAEBDC',
    padding: 0,
    width: '85%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    elevation: 8
  },
  centerStyle3: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    backgroundColor: '#FAEBDC',
    padding: 0,
    width: '85%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    elevation: 8
  },
  input: {
    width: 220,
    height: 40,
    margin: 0,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 7,
    fontFamily: "Cuprum-VariableFont_wght",
    left: 10,
    top: -25
  },
  iconPos: {
    marginLeft: 'auto',
    left: 140,
    top: -490,
    padding: 19.5
  }

})

export default AdminOutfitsRec