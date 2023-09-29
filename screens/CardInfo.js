import { View, Text, StyleSheet, Dimensions, TextInput, SafeAreaView, Image, TouchableOpacity,} from 'react-native'
import React from 'react'

const AppText = (props) => (
    <Text {...props} style={{fontFamily: "Cuprum-VariableFont_wght", ...props.style, fontSize: 18, color: 'black', marginRight: 'auto', paddingLeft: 15}}>{props.children}</Text>
)

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  )

const CardInfo = ({navigation}) => {
    const [number1, onChangeNumber] = React.useState('');
    const [number2, onChangeDate] = React.useState('');
    const [number3, onChangeCVV] = React.useState('');
    const [text, onChangeText] = React.useState('');
    const onPressProfilePremium = () => {
      navigation.navigate('ProfilePremium')
    }
  return (
    <View style={styles.container}>
        <View style={styles.squareTop}>
            <Text style={styles.headerText}>Payment</Text>
        </View>
        <View style={styles.insideCon}>
        <AppText>Card Information</AppText>
        <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number1}
            placeholder="Card Number"
            keyboardType="numeric"
        />
        <AppText>Expire date</AppText>
        <TextInput
            style={styles.input}
            onChangeText={onChangeDate}
            value={number2}
            placeholder="MM/YY"
            keyboardType="numeric"
            maxLength={4}
        />
        <AppText>CVV</AppText>
        <TextInput
            style={styles.input}
            onChangeText={onChangeCVV}
            value={number3}
            placeholder="CVV"
            keyboardType="numeric"
            maxLength={3}
        />
        <AppText>Card holder</AppText>
        <TextInput
            style={styles.input}
            value={text}
            onChangeText={onChangeText}
            placeholder='Mirinda Bigon'
        />
        <AppButton
           onPress={onPressProfilePremium}
           title={"Submit"}/>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    insideCon: {
        width: Dimensions.get('window').width* 0.8,
        height: Dimensions.get('window').height*0.75,
        alignItems: 'center',
        margin: 20,
        backgroundColor: '#FAEBDC'
    },
    appButtonContainer: {
      elevation: 0,
      backgroundColor: "#E67738",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      marginTop: 10
    },
    appButtonText: {
      fontSize: 20,
      color: "white",
      alignSelf: "center",
      fontFamily: "Cuprum-Bold"
    },
    squareTop: {
        height: 70,
        width: Dimensions.get('window').width,
        backgroundColor: "#f2a676",
        alignItems: 'center',
        paddingTop:5,
        fontFamily: "Cuprum-VariableFont_wght",
        justifyContent: "center",
        elevation: 5
    },
    container: {
      backgroundColor: "#FAEBDC",
      alignItems: "center",
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    },
    headerText: {
      fontFamily: "Cuprum-Bold",
      fontSize: 45,
      color: 'black'
    },
    input: {
        width: 300,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 18,
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 7,
        fontFamily: "Cuprum-VariableFont_wght"
      },
      appButtonContainer: {
        elevation: 0,
        backgroundColor: "#E67738",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 10
      },
      appButtonText: {
        fontSize: 20,
        color: "white",
        alignSelf: "center",
        fontFamily: "Cuprum-Bold"
      },
  })

export default CardInfo