import React from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Login';
import Sign_up from './Sign_up';
import ResetPassword from './ResetPassword';
import FillInformation from './FillInformation';
import VerifyEmail from './VerifyEmail';
import NewContent from './NewContent';
import Profile from './Profile';
import ProfilePremium from './ProfilePremium';
import Questions from './Questions';
import OutfitsRec from './OutfitsRec';
import Splash from './Splash';
import CustomDrawerContent from './components/CustomDrawerContent';

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const nonDrawerOptions = {
  headerShown: false,
  drawerItemStyle: {
    display: 'none'
  }
};
const drawerOptions = {
  drawerItemStyle: {
    backgroundColor: 'white',
    width: 250,
    fontFamily: "Cuprum-VariableFont_wght",
  },
  headerStyle: {
    backgroundColor: '#FF9176'
  },
  headerTintColor: 'black',
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontFamily: "Cuprum-Bold",
    fontSize: 25
  },
  drawerActiveTintColor: '#eaa565',
  drawerLabelStyle: {
    color: 'black',
    fontFamily: "Cuprum-VariableFont_wght",
    fontSize: 18
  }
}

const StackNavigator = () => {
  return (
    <Drawer.Navigator
    initialRouteName="Splash"
    drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name = "Splash"
        component = {Splash}
        options = {nonDrawerOptions}
      />
      <Drawer.Screen
        name = "Login"
        component = {Login}
        options = {nonDrawerOptions}
      />
      <Drawer.Screen
        name="Sign_up"
        component={Sign_up}
        options={nonDrawerOptions}
      />
      <Drawer.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={nonDrawerOptions}
      />
      <Drawer.Screen
        name="FillInformation"
        component={FillInformation}
        options={nonDrawerOptions}
      />
      <Drawer.Screen
        name="VerifyEmail"
        component={VerifyEmail}
        options={nonDrawerOptions}
      />
      <Drawer.Screen
        name="New Content"
        component={NewContent}
        options={drawerOptions}
      />
      <Drawer.Screen
        name="ProfilePremium"
        component={ProfilePremium}
        options={nonDrawerOptions}
      />
      <Drawer.Screen
        name="Outfit recommendation"
        component={OutfitsRec}
        options={drawerOptions}
      />
      <Drawer.Screen
        name="Questions and Concerns"
        component={Questions}
        options={drawerOptions}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{...drawerOptions, drawerItemStyle:{
          marginTop: 510,
          borderTopColor: 'black',
          borderWidth: 1,
          borderRightColor: 'white',
          borderLeftColor: 'white',
          borderBottomColor: 'white'
        }}}
        
      />
      
      {/* <Stack.Screen
        name="MainDrawer"
        component={MainDrawer}
        options={{headerShown: true}}
      /> */}
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    </Drawer.Navigator>
);
};

export default StackNavigator;