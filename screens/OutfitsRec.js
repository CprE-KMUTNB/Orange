import { View, Text, ScrollView, StatusBar, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity, Button, Modal } from 'react-native'
import React, { useState } from 'react'
import DropdownComponent from './Dropdown'
import DropdownComponent2 from './Dropdown2'
import Icon from 'react-native-vector-icons/Feather'

const AppText = (props) => (
    <Text {...props} style={{fontFamily: "Cuprum-VariableFont_wght", ...props.style, fontSize: 18, color: 'black'}}>{props.children}</Text>
)

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={{...styles.appButtonContainer, width: 150, top:20}}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
)

const ModalButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.modalButtonContainer}>
    <Text style={styles.modalButtonText}>{title}</Text>
  </TouchableOpacity>
)

const OutfitsRec = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <View style={styles.squareTop}>
            <Text style={styles.headerText}>Outfit</Text>
            <AppText>Recommendation</AppText>
        </View> */}
        <Text style={styles.iconPos}> <Icon name='menu' size={25}/> </Text>
        <View style={styles.innerCon}>
          <AppText style={styles.normalText}>Place</AppText>
          <DropdownComponent/>
          <AppText style={styles.normalText}>Theme</AppText>
          <DropdownComponent2/>
          <View>
            <AppButton 
              title={'Submit'}
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
                  
                  <View style={styles.modalInsideFrame}>
                    <Image 
                    style={styles.logo}
                    source={{uri: 'https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/bbcccc3200dc0003616887a926701ac52e9b70a7_xxl-1.jpg'}}
                    />
                    <Image 
                    style={styles.logo}
                    source={{uri: 'https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/f2586f636ec6baabb18c5b9bac3fa3e14423ac17_xxl-1.jpg'}}
                    />
                      <ModalButton
                      title='Close'
                      onPress= {() => setIsModalVisible(false)} />
                  </View>
              </View>
            </Modal>
          </View>
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
    height: Dimensions.get('window').height*0.45,
    borderRadius: 15,
    marginTop: 30,
    alignItems: 'center',
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
  normalText: {
    marginRight: 'auto',
    paddingTop: 15,
    paddingLeft: 20
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
    height: '75%',
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
    marginTop: 30,
    width: 180,
    alignItems: 'center'
  },
  modalButtonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center",
    fontFamily: "Cuprum-Bold"
  },
  modalInsideFrame: {
    width: '85%',
    height: '85%',
    backgroundColor: "#f4f4f4",
    alignItems: 'center'
  },
  logo: {
    width: 150,
    height: 200,
  },
  iconPos: {
    // alignItems: 'flex-start',
    top: -50,
    padding: 10,
    marginRight: 'auto'
  }
  
  
}
)

export default OutfitsRec