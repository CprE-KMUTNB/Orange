import { View, Text, StyleSheet, Dimensions, TextInput, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import axios from 'axios'
import Icon from 'react-native-vector-icons/Feather'

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
)

const AppText = (props) => (
    <Text {...props} style={{ fontFamily: "Cuprum-VariableFont_wght", ...props.style, fontSize: 18, color: 'black' }}>{props.children}</Text>
)

const AdminQuestion = ({navigation}) => {
    const onPressAdminChatScreen = () => {
        navigation.navigate('AdminChatScreen')
      }
    return (
        <View style={styles.container}>
            <View style={styles.headerCon}>
                <Text style={styles.headText}>Ticket No.        Subject         Status</Text>
            </View>
            <View style={styles.detailCon}>
                <View style={styles.detailCon1}>
                    <Text style={styles.detailText}>004</Text>
                    <Text style={styles.detailText}>003</Text>
                    <Text style={styles.detailText}>002</Text>
                    <Text style={styles.detailText}>001</Text>
                </View>
                <View style={styles.detailCon2}>
                    <Text style={styles.detailText}>Problem 4</Text>
                    <Text style={styles.detailText}>Problem 3</Text>
                    <Text style={styles.detailText}>Problem 2</Text>
                    <Text style={styles.detailText}>Problem 1</Text>
                </View>
                <View style={styles.detailCon3}>
                    <Text style={styles.detailText}>on hold</Text>
                    <Text style={styles.detailText}>in process</Text>
                    <Text style={styles.detailText}>completed</Text>
                    <Text style={styles.detailText}>completed</Text>
                </View>
                <View style={styles.detailCon4}>
                    <AppButton
                        title={'view'}
                        onPress={onPressAdminChatScreen} />
                    <AppButton
                        title={'view'}
                        onPress={onPressAdminChatScreen} />
                    <AppButton
                        title={'view'}
                        onPress={onPressAdminChatScreen} />
                    <AppButton
                        title={'view'}
                        onPress={onPressAdminChatScreen} />
                </View>
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
        paddingTop: 5,
        fontFamily: "Cuprum-VariableFont_wght",
        justifyContent: "center",
    },
    container: {
        backgroundColor: "#FAEBDC",
        alignItems: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    appButtonContainer: {
        elevation: 0,
        paddingVertical: 10,
        justifyContent: 'center'
    },
    appButtonText: {
        fontSize: 18,
        color: "black",
        alignSelf: "center",
        fontFamily: "Cuprum-VariableFont_wght",
        textDecorationLine: 'underline'
    },
    headerText: {
        color: 'black',
        fontSize: 40,
        fontFamily: "Cuprum-Bold",
        top: -20
    },
    headText: {
        fontFamily: "Cuprum-VariableFont_wght",
        color: 'black',
        fontSize: 22,

    },
    detailText: {
        fontFamily: "Cuprum-VariableFont_wght",
        color: 'black',
        fontSize: 18,
        paddingVertical: 10,
        // height: '100%',
        // width: '100%',
        marginRight: 'auto',
        marginLeft: 'auto'

    },
    headerCon: {
        backgroundColor: "white",
        // alignItems: "center",
        width: Dimensions.get('window').width * 0.95,
        height: 50,
        padding: 0,
        margin: 20,
        borderRadius: 5,
        borderWidth: 3,
        borderLeftColor: 'white',
        borderTopColor: 'white',
        borderRightColor: 'white',
        borderBottomColor: '#f2a676',
        justifyContent: 'center',
        // flex: 1
    },
    detailCon: {
        backgroundColor: "white",
        // alignItems: "center",
        width: Dimensions.get('window').width * 0.96,
        height: 650,
        padding: 0,
        margin: 20,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderRadius: 5,
        top: -40,
        flexDirection: 'row'
    },
    detailCon1: {
        // backgroundColor: "red",
        // alignItems: "center",
        width: Dimensions.get('window').width * 0.2,
        height: 650,
        padding: 0,
        marginLeft: 3,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderRadius: 5,
        top: 0,
        flexDirection: 'column'

    },
    detailCon2: {
        // backgroundColor: "blue",
        // alignItems: "center",
        width: Dimensions.get('window').width * 0.35,
        height: 650,
        padding: 0,
        marginLeft: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderRadius: 5,
        top: 0
    },
    detailCon3: {
        // backgroundColor: "green",
        // alignItems: "center",
        width: Dimensions.get('window').width * 0.2,
        height: 650,
        padding: 0,
        margin: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderRadius: 5,
        top: 0
    },
    detailCon4: {
        // backgroundColor: "yellow",
        // alignItems: "center",
        width: Dimensions.get('window').width * 0.2,
        height: 650,
        padding: 0,
        margin: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderRadius: 5,
        top: 0
    },
})

export default AdminQuestion