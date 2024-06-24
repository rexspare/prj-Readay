import React from 'react'
import RootNavigator from './src/navigation/RootNavigator'
import FlashMessage from 'react-native-flash-message'
import { AuthProvider } from './src/context/appContext'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <RootNavigator />
        <FlashMessage position='top' />
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App