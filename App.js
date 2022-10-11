import Launch from './src/pages/launch/Launch'
import Registration from './src/pages/registration/Registration'
import Signin from './src/pages/sign-in/signin'
import PasswordRecovery from './src/pages/passwordrecovery/PasswordRecovery'
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import React from 'react'

export default function App () {
  const Stack = createStackNavigator()

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Launch" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Launch" component={ Launch } />
          <Stack.Screen name="Registration" component={ Registration } />
          <Stack.Screen name="Signin" component={ Signin } />
          <Stack.Screen name="PasswordRecovery" component={ PasswordRecovery } />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
