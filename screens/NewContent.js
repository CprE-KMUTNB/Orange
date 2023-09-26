import { View, Text, ScrollView, StatusBar, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Banner from './Banner'
import Icon from 'react-native-vector-icons/Feather'

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
            <Text style={styles.iconPos}> <Icon name='menu' size={25}/> </Text>
            <ScrollView style={styles.scrollView}>
                <View style={styles.bigConBg}>
                    <Text style={styles.middleTextHeader}>New Updates</Text>
                        <View style={styles.bigImgContainer}>
                            {/* <Image style={styles.bigImg} source = {require('../assets/clothes/Beach-outfit-for-this-summer.jpg')} /> */}
                            <Banner/>
                        </View>
                </View>
                <View style={styles.smallConBg}>
                    <View style={styles.smallConGroup}>
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
      backgroundColor: "#F2E1DD",
      alignItems: 'center',
      paddingTop:5,
      fontFamily: "Cuprum-VariableFont_wght",
      justifyContent: "center",
      elevation: 10
    },
    container: {
      backgroundColor: "white",
      justifyContent: 'center',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      alignItems: 'center',
    },
    scrollView: {
        backgroundColor: "white",
        width: Dimensions.get('window').width,
        flex: 1,
        top: -30
    },
    halfConL:{
        // backgroundColor: 'black',
        alignContent: "center",
        width: Dimensions.get('window').width*0.4,
        height: '100%',
        paddingTop: 0,
        borderRadius: 10,
    },
    halfConR:{
        width: Dimensions.get('window').width*0.4,
        height: '100%',
        marginLeft: 'auto',
        top: -Dimensions.get('window').height,
        borderRadius: 10,
        paddingTop: 195,
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
    smallConBg: {
        height: Dimensions.get('window').height,
        paddingHorizontal: 30,
        // paddingVertical: 0,
        marginTop: 15,
        backgroundColor: '#white',
        alignItems: 'center'
    },
    smallImgContainer: {
        alignItems: "center",
        width: Dimensions.get('window').width/2.5,
        height: 195,
        paddingVertical: 10
    },
    smallImgContainer2: {
        alignItems: "center",
        width: Dimensions.get('window').width/2.5,
        height: 175,
        paddingVertical: 10,
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
    },
    middleTextHeader: {
        marginRight: 'auto', 
        color: 'black',
        paddingTop: 10,
        paddingLeft: 25,
        paddingBottom: 5,
        fontSize: 20,
        fontFamily: "Cuprum-VariableFont_wght",
    },
    bigConBg: {
        backgroundColor: '#white',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.5,
        alignItems: 'center'
    },
    smallConGroup: {
        backgroundColor: 'f6f6f6',
        width: Dimensions.get('window').width*0.9,
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        height: 650
    },
    iconPos: {
        top: -60,
        padding: 10,
        marginRight: 'auto'
      }
  }
  )
  

export default NewContent