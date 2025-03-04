import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import FixturesScreen from '../screens/FixturesScreen'
import { RootStackParamList } from './types'

const RootNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name='Fixtures'
          component={FixturesScreen}
        />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default RootNavigator

