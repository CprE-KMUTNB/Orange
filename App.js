import React from 'react'
import { View } from 'react-native'
import Login from './screens/Login'
import Sign_up from './screens/Sign_up'
import ForgotPassword from './screens/forgetPassword'
import VerifyEmail from './screens/VerifyEmail'
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <VerifyEmail />
    </NavigationContainer>
     
  )
}

// ค้างที่หัวข้อ usage (navigation bet screens)

export default App

