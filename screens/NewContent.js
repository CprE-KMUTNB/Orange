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
            {/* <Text style={styles.iconPos}> <Icon name='menu' size={25}/> </Text> */}
            <ScrollView style={styles.scrollView}>
                <View style={styles.bigConcolor}>
                <Text style={styles.middleTextHeader}>NEW ARRIVAL</Text>
                <View style={styles.bigConBg}>
                        <View style={styles.bigImgContainer}>
                            {/* <Image style={styles.bigImg} source = {require('../assets/clothes/Beach-outfit-for-this-summer.jpg')} /> */}
                            <Banner/>
                        </View>
                        </View>
                </View>
                <View style={styles.smallConBg}>
                <Text style={styles.middleTextHeader2}>SHOW CASE</Text>
                    <View style={styles.smallConGroup}>
                        <View style={styles.halfConL}>
                            <View style={styles.smallImgContainer}>
                                <Image style={styles.smallImg} source={require('../assets/clothes/Business-casual-style.jpg')} />
                                <AppText style={styles.middleText}>Pastel - Work</AppText>
                                <Image style={styles.smallImg} source={require('../assets/clothes/Date-night.jpg')} />
                                <AppText style={styles.middleText}>Date night</AppText>
                                <View style={styles.smallImgContainer2}>
                                    <Image style={styles.smallImg} source={require('../assets/clothes/korean-simple-outfits.jpg')} />
                                    <AppText style={styles.middleText}>Earth tone - Work</AppText>
                                </View>
                            </View>
                        </View>
                        <View style={styles.halfConR}>
                            <View style={styles.smallImgContainer2}>
                                <Image style={styles.smallImg} source={require('../assets/clothes/Earth-tone-theme-for-holliday.jpg')} />
                                <AppText style={styles.middleText}>Earth tone - Holiday</AppText>
                                <View style={styles.smallImgContainer}>
                                    <Image style={styles.smallImg} source={require('../assets/clothes/picnic-outfits.jpg')} />
                                    <AppText style={styles.middleText}>White - Holiday</AppText>
                                    <Image style={styles.smallImg} source={require('../assets/clothes/summer-outfits.jpg')} />
                                    <AppText style={styles.middleText}>White - Beach</AppText>
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
      backgroundColor: '#FAEBDC'
    },
    scrollView: {
        backgroundColor: "white",
        width: Dimensions.get('window').width,
        flex: 1,
        
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
    bigConcolor:{
        width: Dimensions.get('window').width,
        height: 420,
        alignItems: 'center',
        backgroundColor: '#fdfdfd'
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
        backgroundColor: '#FAEBDC',
        alignItems: 'center'
    },
    smallImgContainer: {
        alignItems: "center",
        width: Dimensions.get('window').width/2.5,
        height: 195,
        paddingVertical: 0
    },
    smallImgContainer2: {
        alignItems: "center",
        width: Dimensions.get('window').width/2.5,
        height: 175,
        paddingVertical: 0,
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
        paddingBottom: 0,
        fontSize: 20,
        fontFamily: "Cuprum-Bold",
    },
    middleTextHeader2: {
        marginRight: 'auto', 
        color: 'black',
        paddingTop: 10,
        paddingLeft: 5,
        paddingBottom: 0,
        fontSize: 20,
        fontFamily: "Cuprum-Bold",
    },
    bigConBg: {
        backgroundColor: '#white',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.5,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 13,
        paddingTop: 5
    },
    smallConGroup: {
        backgroundColor: 'f6f6f6',
        width: Dimensions.get('window').width*0.9,
        borderRadius: 10,
        padding: 10,
        marginTop: 0,
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