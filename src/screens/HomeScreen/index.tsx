import React, { FC } from 'react'
import { Button, Text } from 'react-native'
import { HomeScreenProps } from './types'

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <>
      <Text>Home Screen</Text>
      <Button
        title='Go to Fixtures'
        onPress={() =>
          navigation.navigate('Fixtures', {
            league: 'epl',
            year: '2021',
          })
        }
      />
    </>
  )
}

export default HomeScreen
