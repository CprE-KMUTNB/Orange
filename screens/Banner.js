import { View, Text, ScrollView, StatusBar, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const AppText = (props) => (
    <Text {...props} style={{fontFamily: "Cuprum-VariableFont_wght", ...props.style, fontSize: 18}}>{props.children}</Text>
  )

const images = [
  require('../assets/clothes/cropped-bustier-top.jpg'),
  require('../assets/clothes/fine-knit-cardigan.jpg'),
  require('../assets/clothes/flared-twill-trousers.jpg'),
  require('../assets/clothes/off-the-shoulder-jumper.jpg'),
]

const Banner = () => {
  const [imgActive, setimgActive] = useState(0);
  
  return (
    <SafeAreaView style={styles.container}>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Banner
