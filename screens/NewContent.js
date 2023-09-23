import { View, Text, ScrollView, StatusBar, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const AppText = (props) => (
    <Text {...props} style={{fontFamily: "Cuprum-VariableFont_wght", ...props.style, fontSize: 18, color: 'black'}}>{props.children}</Text>
)

const NewContent = () => {
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.squareTop}>
                <Text style={styles.headerText}>New Content</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.bigImgContainer}>
                    <Image style={styles.bigImg} source = {require('../assets/clothes/Beach-outfit-for-this-summer.jpg')} />
                </View>
                <AppText style={styles.middleText}>Beach outfits for summer</AppText>
                <View style={styles.smallImgGroup}>
                    <View style={styles.halfConL}>
                        <View style={styles.smallImgContainer}>
                            <Image style={styles.smallImg} source={require('../assets/clothes/Business-casual-style.jpg')} />
                            <AppText style={styles.middleText}>Business casual style</AppText>
                            <Image style={styles.smallImg} source={require('../assets/clothes/men-casual-style.jpg')} />
                            <AppText style={styles.middleText}>Men casual style</AppText>
                            <View style={styles.smallImgContainer2}>
                                <Image style={styles.smallImg} source={require('../assets/clothes/korean-simple-outfits.jpg')} />
                                <AppText style={styles.middleText}>Korean simple outfits</AppText>
                            </View>
                        </View>
                    </View>
                    <View style={styles.halfConR}>
                        <View style={styles.smallImgContainer2}>
                            <Image style={styles.smallImg} source={require('../assets/clothes/night-out-for-men.jpg')} />
                            <AppText style={styles.middleText}>Night out for men</AppText>
                            <View style={styles.smallImgContainer}>
                                <Image style={styles.smallImg} source={require('../assets/clothes/picnic-outfits.jpg')} />
                                <AppText style={styles.middleText}>Picnic outfits</AppText>
                                <Image style={styles.smallImg} source={require('../assets/clothes/summer-outfits.jpg')} />
                                <AppText style={styles.middleText}>Summer outfits</AppText>
                            </View>
                        </View>
                        
                    </View>
                </View>
            </ScrollView>
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
    },
    container: {
      backgroundColor: "white",
      justifyContent: 'center',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      alignItems: 'center',
    //   flex: 1,
    //   flexDirection: 'row',
    //   flexWrap: 'wrap'
    //   paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: "#FFE6DF",
        paddingHorizontal: 30,
        width: Dimensions.get('window').width,
        paddingTop: 8,
        flex: 1
        // top: -300,
        // flexWrap: 'wrap'
    },
    halfConL:{
        // backgroundColor: 'black',
        alignContent: "center",
        width: Dimensions.get('window').width*0.4,
        height: '100%',
        paddingTop: 8,
        borderRadius: 10,
    },
    halfConR:{
        width: Dimensions.get('window').width*0.4,
        height: '100%',
        // backgroundColor: 'black',
        marginLeft: 'auto',
        top: -Dimensions.get('window').height,
        borderRadius: 10,
        paddingTop: 8,
        paddingBottom: 10,
    },
    bigImgContainer: {
        flex: 1,
        height: 390,
        // backgroundColor: 'black',
        alignItems: 'center',
        borderRadius: 20,
        overflow: 'hidden',
    },
    bigImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 20,
    },
    smallImgGroup: {
        height: Dimensions.get('window').height
    },
    smallImgContainer: {
        alignItems: "center",
        width: Dimensions.get('window').width/2.5,
        height: 195,
        paddingBottom: 10,
    },
    smallImgContainer2: {
        alignItems: "center",
        width: Dimensions.get('window').width/2.5,
        height: 175,
        paddingBottom: 10,
    },
    smallImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    headerText: {
        color:'black', 
        fontSize:40, 
        fontFamily: "Cuprum-Bold", 
        marginBottom:10
    },
    middleText: {
        marginLeft: 'auto', 
        marginRight: 'auto', 
        color: 'black',
        paddingTop: 1,
        paddingBottom: 18,
    }
  }
  )
  

export default NewContent