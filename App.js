import Launch from './src/pages/launch/Launch'
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import React from 'react'

export default function App () {
  const Stack = createStackNavigator()

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Registration" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Registration" component={ Launch } />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
