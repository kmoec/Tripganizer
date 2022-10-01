import Launch from './src/pages/launch/Launch'
import Registration from './src/pages/registration/Registration'
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
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
