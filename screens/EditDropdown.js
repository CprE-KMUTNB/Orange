import { View, Text, ScrollView, StatusBar, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import IconI from 'react-native-vector-icons/Ionicons'

const dataPlace = [
    { label: 'Work', value: '1', icon: 'trash-outline' },
    { label: 'Date night', value: '2', icon: 'trash-outline' },
    { label: 'Holiday Vacation', value: '3', icon: 'trash-outline' },
    { label: 'Beach', value: '4', icon: 'trash-outline' },
    { label: 'Picnic', value: '5', icon: 'trash-outline' },
   ,
  ]

  const EditDropdownComponent = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        // return (
        //   <Text style={[styles.label, isFocus && { color: 'blue' }]}>
        //     Place
        //   </Text>
        // );
      }
      return null;
    };

    const renderRightIcon = (item) => (
        <IconI
          style={styles.icon}
          color={isFocus ? 'blue' : 'black'}
          name={item.icon} // Use the icon from the item in the dataPlace array
          size={20}
        />
      );

    return (
      <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#C06D58',  borderWidth: 0.8 }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dataPlace}
        //   search
          maxHeight={300}
          labelField="label"
          valueField="value"
        //   placeholder={!isFocus ? 'Select item' : '...'}
        //   searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}

        //   renderLeftIcon={() => (
        //     <IconI
        //       style={styles.icon}
        //       color={isFocus ? 'blue' : 'black'}
        //       name="trash-outline"
        //       size={20}
        //     />
        //   )}
        />
      </View>
    );

    
  };

  export default EditDropdownComponent;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 18,
      width: '100%',
    },
    dropdown: {
      height: 50,
      borderColor: 'black',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      width: '100',
      borderWidth: 0.8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 18,
      fontFamily: "Cuprum-VariableFont_wght",
      color: 'black',
    },
    placeholderStyle: {
      fontSize: 18,
      fontFamily: "Cuprum-VariableFont_wght",
      color: 'black',
    },
    selectedTextStyle: {
      fontSize: 18,
      fontFamily: "Cuprum-VariableFont_wght",
      color: 'black',
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 18,
      fontFamily: "Cuprum-VariableFont_wght",
      color: 'black',
    },
  });