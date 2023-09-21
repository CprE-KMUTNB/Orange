import { View, Text, StyleSheet, Dimensions, TextInput, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
)

const AppText = (props) => (
    <Text {...props} style={{fontFamily: "Cuprum-VariableFont_wght", ...props.style, fontSize: 16}}>{props.children}</Text>
)

const FillInformation = ({navigation}) => {
    const [number1, onChangeWeight] = React.useState('');
    const [number2, onChangeHeight] = React.useState('');
    const [number3, onChangeBust] = React.useState('');
    const [number4, onChangeWaist] = React.useState('');
    const [number5, onChangeHip] = React.useState('');
    return (
        <View style={styles.container}>
            <View style={{...styles.ellipse}}/>
                <Text style={{color:'black', fontSize:40, flex: 0, fontFamily: "Cuprum-Bold", top:-500}}>Fill Your Information</Text>
                <View style={{...styles.circle, top:-500}}>
                    <AppText style={{color:'black', textAlign:'left', width:300}}>Weight</AppText>
                    <TextInput
                        style={{...styles.input, fontFamily: "Cuprum-VariableFont_wght"}}
                        onChangeText={onChangeWeight}
                        value={number1}
                        placeholder=""
                        keyboardType="numeric"
                    />
                    <AppText style={{color:'black', textAlign:'left', width:300}}>Height</AppText>
                    <TextInput
                        style={{...styles.input, fontFamily: "Cuprum-VariableFont_wght"}}
                        onChangeText={onChangeHeight}
                        value={number2}
                        placeholder=""
                        keyboardType="numeric"
                    />
                    <AppText style={{color:'black', textAlign:'left', width:300}}>Bust</AppText>
                    <TextInput
                        style={{...styles.input, fontFamily: "Cuprum-VariableFont_wght"}}
                        onChangeText={onChangeBust}
                        value={number3}
                        placeholder=""
                        keyboardType="numeric"
                    />
                    <AppText style={{color:'black', textAlign:'left', width:300}}>Waist</AppText>
                    <TextInput
                        style={{...styles.input, fontFamily: "Cuprum-VariableFont_wght"}}
                        onChangeText={onChangeWaist}
                        value={number4}
                        placeholder=""
                        keyboardType="numeric"
                    />
                    <AppText style={{color:'black', textAlign:'left', width:300}}>Hip</AppText>
                    <TextInput
                        style={{...styles.input, fontFamily: "Cuprum-VariableFont_wght"}}
                        onChangeText={onChangeHip}
                        value={number5}
                        placeholder=""
                        keyboardType="numeric"
                    />
                    <AppButton title={"Submit"}/>  
                </View>
               
        </View>
)
}

const styles = StyleSheet.create({
    circle: {
      height: 580,
      width: 580,
      borderRadius: 290,
      top:100,
      alignItems: 'center',
      paddingTop:80,
      fontFamily: "Cuprum-VariableFont_wght",
      
    },
    ellipse: {
        height: 600,
        width: 600,
        borderRadius: 300,
        backgroundColor: "#FF9176",
        top: -400,
        alignItems: 'center',
        paddingTop:90,
        transform: [{scaleX: 1.4}]
      
    },
    container: {
      backgroundColor: "#FFE6DF",
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
      fontSize: 16,
      color: 'black',
      backgroundColor: 'white',
      borderRadius: 7
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
      color:"black",
      fontFamily: "Cuprum-Bold",
    },
    appButtonContainer: {
        elevation: 0,
        backgroundColor: "#E76F51",
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
    
  }
  )
  
export default FillInformation