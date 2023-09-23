import { View, Text, ScrollView, StatusBar, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import DropdownComponent from './Dropdown'
import DropdownComponent2 from './Dropdown2'

const AppText = (props) => (
    <Text {...props} style={{fontFamily: "Cuprum-VariableFont_wght", ...props.style, fontSize: 18, color: 'black'}}>{props.children}</Text>
)

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={{...styles.appButtonContainer, width: 150, top:20}}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
)

const OutfitsRec = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.squareTop}>
            <Text style={styles.headerText}>Outfit</Text>
            <AppText>Recommendation</AppText>
        </View>
        <View style={styles.innerCon}>
          <AppText style={styles.normalText}>Place</AppText>
          <DropdownComponent/>
          <AppText style={styles.normalText}>Theme</AppText>
          <DropdownComponent2/>
          <AppButton title={'Submit'}/>
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
  }
  
  
}
)

export default OutfitsRec