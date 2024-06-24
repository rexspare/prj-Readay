import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useContext } from 'react'
import { SCREEN } from '../constants/enum'
import { AuthContext } from '../context/appContext'
import SplashScreen from '../screens/splashScreen'
import AppNavigation from './appNavigation'

const Stack = createNativeStackNavigator()

const screenOptionStyle = {
    headerShown: false,
}

const RootNavigator = () => {
    const authContext = useContext(AuthContext)
    return (
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name={SCREEN.SPLASH} component={SplashScreen} />
                <Stack.Screen name={SCREEN.APP} component={AppNavigation} />
            </Stack.Navigator>
    )
}

export default RootNavigator
