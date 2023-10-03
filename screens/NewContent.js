import { View, Text, ScrollView, StatusBar, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import axios from 'axios'


const NewContent = () => {
  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.mainImgConL}>
          <View style={styles.ImgConR} >
            <Image style={styles.ImgConR} source={{uri: 'https://i.pinimg.com/736x/5c/33/c1/5c33c10bf16cbb56aeef599352830f01.jpg'}} />
          </View>
          <Text style={styles.headerTextL}>BlackPink</Text>
          <Text style={styles.dateL}>15.11.23</Text>
        </View>

        <View style={styles.mainImgConR}>
          <View style={styles.ImgCon}>
          <Image style={styles.ImgConR} source={{uri: 'https://cdn.kpopconcerts.com/wp-content/uploads/2022/08/04114609/2022-TOUR-SEVENTEEN-BE-THE-SUN-NORTH-AMERICA-tour-poster-1350x1909.jpg'}} />
          </View>
          <Text style={styles.headerTextR}>Seventeen</Text>
          <Text style={styles.dateR}>18.12.23</Text>
        </View>

        <View style={styles.mainImgConL}>
          <View style={styles.ImgConR}>
          
          <Image style={styles.ImgConR} source={{uri: 'http://cdn.designbump.com/wp-content/uploads/2015/12/colorful-christmas-trees-inspiration-5.jpg'}} />

          </View>
          <Text style={styles.headerTextL}>Christmas</Text>
          <Text style={styles.dateL}>25.12.23</Text>

        </View>
        <View style={styles.mainImgConR}>
          <View style={styles.ImgCon}>
          <Image style={styles.ImgConR} source={{uri: 'https://image.freepik.com/free-vector/minimal-valentine-heart-background_76243-44.jpg'}} />

          </View>
          <Text style={styles.headerTextR}>Valentine</Text>
          <Text style={styles.dateR}>14.02.24</Text>
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
    backgroundColor: '#221f1f',
    paddingTop: 10,
    paddingLeft: 10
  },
  mainImgConL: {
    width: Dimensions.get('window').width,
    height: 430,
    marginVertical: 10,
    // marginRight: 'auto',
    // marginLeft: 10,
    backgroundColor: '#221f1f',
    paddingTop: 10,
    paddingRight: 10
  },
  ImgCon: {
    width: 300,
    height: 410,
    backgroundColor: 'lightblue',
    alignItems: 'center'
  },
  ImgConR: {
    width: 300,
    height: 410,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    marginLeft: 'auto'
  },
  headerTextL: {
    fontSize: 60,
    color: 'white',
    padding: 10,
    fontFamily: 'Prompt-Bold',
    top: -140,
    // backgroundColor: '#221f1f',
    // borderRadius: 10,
    width: 300,
    // elevation: 10,
    textShadowColor: '#221f1f',
    textShadowRadius: 10
    
    

  },
  dateL: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Prompt-Regular',
    top: -160,
    padding: 15,
    // backgroundColor: '#f4f4f4'
    textShadowColor: '#221f1f',
    textShadowRadius: 10
  },
  headerTextR: {
    fontSize: 60,
    color: 'white',
    padding: 10,
    fontFamily: 'Prompt-Bold',
    top: -140,
    marginLeft: 'auto',
    textShadowColor: '#221f1f',
    textShadowRadius: 10
  },
  dateR: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Prompt-Regular',
    top: -160,
    padding: 15,
    marginLeft: 'auto',
    textShadowColor: '#221f1f',
    textShadowRadius: 10
  },

}
)

export default NewContent