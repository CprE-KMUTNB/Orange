import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Modal, TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import { useState } from "react";

const ModalButtonY = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.modalButtonYContainer}>
      <Text style={styles.modalButtonYText}>{title}</Text>
    </TouchableOpacity>
)

const ModalButtonN = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.modalButtonNContainer}>
    <Text style={styles.modalButtonNText}>{title}</Text>
  </TouchableOpacity>
)

function CustomDrawerContent(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const onPressLogin = () => {
        props.navigation.navigate('Login');
        setIsModalVisible(false);
    }
    return (
      <DrawerContentScrollView {...props}>
        <Modal
            visible={isModalVisible}
            backdropColor='white'
            backdropOpacity= {50}
            onRequestClose={() => setIsModalVisible(false)}
            animationType='slide'
            presentationStyle= 'overFullScreen'
            transparent={true}
            style={{margin: 0}}
        >
            <TouchableOpacity style={styles.modalBackdrop} activeOpacity={1}></TouchableOpacity>
            <View style={styles.centerStyle}>
                <Text style={styles.modalheadtext}>Are you sure to sign out?</Text>
                <View>
                    <ModalButtonY  
                    style={styles.buttonstyle}
                    title='Yes'
                    onPress={onPressLogin}
                    />
                    <ModalButtonN 
                    style={styles.buttonstyle}
                    title='No'
                    onPress= {() => setIsModalVisible(false)} />
                </View>
            </View>
        </Modal>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Sign Out"
          onPress={() => {
            setIsModalVisible(true);
          }}
          labelStyle={{fontFamily: "Cuprum-VariableFont_wght", fontSize: 18, color: 'black'}}
        />
      </DrawerContentScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',

    },
    modalButtonYContainer: {
        elevation: 0,
        backgroundColor: "#E76F51",
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 5,
        margin: 10,
        width: 180,
        alignItems: 'center'
      },
      modalButtonYText: {
        fontSize: 18,
        color: "white",
        alignSelf: "center",
        fontFamily: "Cuprum-Bold"
      },
      modalButtonNContainer: {
        elevation: 0,
        backgroundColor: "#E76F51",
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 5,
        margin: 10,
        width: 180,
        alignItems: 'center',
        justifyContent: 'center'
      },
      modalButtonNText: {
        fontSize: 18,
        color: "white",
        alignSelf: "center",
        fontFamily: "Cuprum-Bold"
      },
      centerStyle: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        backgroundColor: '#FFE6DF', 
        padding: 0, 
        width: '85%',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'black',
        borderRadius: 10
    },
})

export default CustomDrawerContent;