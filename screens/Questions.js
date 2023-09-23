import { View, Text, ScrollView, StatusBar, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const AppText = (props) => (
    <Text {...props} style={{fontFamily: "Cuprum-VariableFont_wght", ...props.style, fontSize: 18, color: 'black'}}>{props.children}</Text>
)

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
)

const Questions = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.squareTop}>
          <Text style={styles.headerText}>Questions</Text>
          <AppText>and Concerns</AppText>
        </View>
        <View style={styles.innerCon}/>
        <AppButton title = {'Submit'}/>
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
    marginTop: 0,
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
  
}
)

export default Questions