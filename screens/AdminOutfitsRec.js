import { View, Text, ScrollView, StatusBar, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import axios from 'axios'


const AdminOutfitsRec = () => {
  // let placeLoop =[]
  // for (let a=0; a<=5; a++){
  //   placeLoop.push(
  //     const [link{a}, onChangelink{a}] = React.useState('');
  //   )
  // }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.insideCon}>
          <Text style={styles.header}>Place</Text>
          <Text style={styles.header}>Theme</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f2a676'
  },
  scrollView: {
    backgroundColor: "black",
    width: Dimensions.get('window').width,
    flex: 1,
  },
  insideCon: {
    width: '90%',
    backgroundColor: '#FAEBDC',
    // alignItems: 'center',
    padding: 20
  },
  header: {
    fontFamily: "Cuprum-VariableFont_wght",
    fontSize: 25,
    color: 'black',
    padding: 10
  },

})

export default AdminOutfitsRec