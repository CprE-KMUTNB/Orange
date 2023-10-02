import { View, Text, ScrollView, StatusBar, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import axios from 'axios'


const NewContent = () => {
  return (
    <ScrollView>
      <View style={styles.container}>

      <View style={styles.mainImgConL}>

      </View>
      <View style={styles.mainImgConR}>

      </View>
      <View style={styles.mainImgConL}>

      </View>
      <View style={styles.mainImgConR}>

      </View>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    alignItems: 'center',
    backgroundColor: '#FAEBDC'
  },
  scrollView: {
    backgroundColor: "black",
    width: Dimensions.get('window').width,
    flex: 1,
  },
  mainCon: {
    width: Dimensions.get('window').width,
    height: 450,
    justifyContent: 'center',
    backgroundColor: '#fafafa',
  },
  mainImgConR: {
    width: Dimensions.get('window').width,
    height: 430,
    marginVertical: 10,
    // marginLeft: 'auto',
    // marginRight: 10,
    backgroundColor: '#fafafa'
  },
  mainImgConL: {
    width: Dimensions.get('window').width,
    height: 430,
    marginVertical: 10,
    // marginRight: 'auto',
    // marginLeft: 10,
    backgroundColor: '#fafafa'
  },
  ImgCon: {

  }

}
)

export default NewContent