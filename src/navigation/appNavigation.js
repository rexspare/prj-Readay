import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useContext } from 'react'
import { SCREEN } from '../constants/enum'
import { AuthContext } from '../context/appContext'
import { HomeScreen, LoginCompleteScreen, LoginScreen, NewsScreen, OnBoardingScreen, PrivacyScreen, ProfileScreen, QrCode, RegisterScreen, ReminderScreen, TermsCondition, TimeTableScreen } from '../screens'

const Stack = createNativeStackNavigator()

const screenOptionStyle = {
    headerShown: false,
}


const AppNavigation = () => {
    const authContext = useContext(AuthContext)
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            {
                !authContext?.isSignedIn ?
                    (<>
                        {authContext?.isFirstTimeOpen ?
                            (<>
                                <Stack.Screen name={SCREEN.ON_BOARDING} component={OnBoardingScreen} />
                                <Stack.Screen name={SCREEN.QR_CODE} component={QrCode} />
                                <Stack.Screen name={SCREEN.LOGIN} component={LoginScreen} />
                                <Stack.Screen name={SCREEN.REGISTER} component={RegisterScreen} />
                                <Stack.Screen name={SCREEN.LOGIN_COMPLETE} component={LoginCompleteScreen} />
                            </>)
                            :
                            (<>
                                <Stack.Screen name={SCREEN.QR_CODE} component={QrCode} />
                                <Stack.Screen name={SCREEN.LOGIN} component={LoginScreen} />
                                <Stack.Screen name={SCREEN.REGISTER} component={RegisterScreen} />
                                <Stack.Screen name={SCREEN.LOGIN_COMPLETE} component={LoginCompleteScreen} />
                            </>)}
                    </>)
                    :
                    (<>
                        <Stack.Screen name={SCREEN.HOME} component={HomeScreen} />
                        <Stack.Screen name={SCREEN.TIME_TABLE} component={TimeTableScreen} />
                        <Stack.Screen name={SCREEN.REMINDER} component={ReminderScreen} />
                        <Stack.Screen name={SCREEN.PROFILE} component={ProfileScreen} />
                        <Stack.Screen name={SCREEN.TERM_CONDITION} component={TermsCondition} />
                        <Stack.Screen name={SCREEN.PRIVACY} component={PrivacyScreen} />
                        <Stack.Screen name={SCREEN.NEWS_SCREEN} component={NewsScreen} />
                    </>)
            }



        </Stack.Navigator>

    )
}

export default AppNavigation