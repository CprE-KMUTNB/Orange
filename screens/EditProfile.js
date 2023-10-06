import { View, Text, StyleSheet, Dimensions, TextInput, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
)

const AppText = (props) => (
    <Text {...props} style={{fontFamily: "Cuprum-VariableFont_wght", ...props.style, fontSize: 18, color: 'black'}}>{props.children}</Text>
)

const EditProfile = ({navigation}) => {
  const onPressNewContent = () => {
    navigation.navigate('NewContent')
  }
  const onPressProfile = () => {
    navigation.navigate('Profile')
  }
    const [number1, onChangeWeight] = React.useState('');
    const [number2, onChangeHeight] = React.useState('');
    const [number3, onChangeShoulder] = React.useState('');
    const [number4, onChangeBust] = React.useState('');
    const [number5, onChangeWaist] = React.useState('');
    const [number6, onChangeHip] = React.useState('');
    return (
        <View style={styles.container}>
            <View style={styles.squareTop}>
                <Text style={styles.headerText}>Profile</Text>
                <AppText>Edit personal Information</AppText>
            </View>
            <View style={styles.contentCon}>
            <AppText style={styles.inputTitle}>Weight</AppText>
            <TextInput
                style={styles.input}
                onChangeText={onChangeWeight}
                value={number1}
                placeholder="50 (kilograms)"
                keyboardType="numeric"
            />
            <AppText style={styles.inputTitle}>Height</AppText>
            <TextInput
                style={styles.input}
                onChangeText={onChangeHeight}
                value={number2}
                placeholder="160 (centimeters)"
                keyboardType="numeric"
            />
            <AppText style={styles.inputTitle}>Shoulder</AppText>
            <TextInput
                style={styles.input}
                onChangeText={onChangeShoulder}
                value={number3}
                placeholder="35 (inches)"
                keyboardType="numeric"
            />
            <AppText style={styles.inputTitle}>Bust</AppText>
            <TextInput
                style={styles.input}
                onChangeText={onChangeBust}
                value={number4}
                placeholder="33 (inches)"
                keyboardType="numeric"
            />
            <AppText style={styles.inputTitle}>Waist</AppText>
            <TextInput
                style={styles.input}
                onChangeText={onChangeWaist}
                value={number5}
                placeholder="26 (inches)"
                keyboardType="numeric"
            />
            <AppText style={styles.inputTitle}>Hip</AppText>
            <TextInput
                style={styles.input}
                onChangeText={onChangeHip}
                value={number6}
                placeholder="35 (inches)"
                keyboardType="numeric"
            />
            <AppButton 
                onPress={onPressProfile}
                title={"Submit"}/>
            </View>        
        </View>
)
}

const styles = StyleSheet.create({
    squareTop: {
        height: 90,
        width: Dimensions.get('window').width,
        backgroundColor: "#f2a676",
        alignItems: 'center',
        paddingTop:5,
        fontFamily: "Cuprum-VariableFont_wght",
        justifyContent: "center",
    },
    container: {
      backgroundColor: "#FAEBDC",
      alignItems: "center",
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
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
    title: {
      textAlign: 'center',
      marginVertical: 8,
      color:"black",
      fontFamily: "Cuprum-Bold",
    },
    appButtonContainer: {
        elevation: 0,
        backgroundColor: "#E67738",
        borderRadius: 10,
        paddingVertical: 10,
        marginTop: 10,
        width: Dimensions.get('window').width/3,
        justifyContent: 'center'
      },
      appButtonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        fontFamily: "Cuprum-VariableFont_wght"
      },
      headerText: {
        color:'black', 
        fontSize:40, 
        fontFamily: "Cuprum-Bold", 
        top:0
      },
      inputTitle: {
        color:'black', 
        textAlign:'left', 
        width:300
      },
      contentCon: {
        backgroundColor: "white",
        alignItems: "center",
        width: Dimensions.get('window').width*0.8,
        padding: 30,
        margin: 20,
        borderRadius: 10
      }
  }
  )
  
export default EditProfile