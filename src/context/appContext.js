import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ERROR_TEXT, KEYS, METHOD, ROUTES, SCREEN } from '../constants/enum';
import apiRequest from '../utils/webHandler';
import { showFlash } from '../utils/Helpers';
import { useNavigation } from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from 'react-native-push-notification';
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { Platform } from 'react-native';

export const AuthContext = new createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userData, setuserData] = useState({});
    const [isFirstTimeOpen, setisFirstTimeOpen] = useState(true);
    const [timeTable, settimeTable] = useState([])
    const [reminders, setreminders] = useState([])
    const [isSignedIn, setisSignedIn] = useState(false)
    const navigation = useNavigation()


    useEffect(() => {
        AsyncStorage.getItem(KEYS.FIRST_TIME_OPENED)
            .then(value => {
                if (value == 'true') {
                    setisFirstTimeOpen(false);
                } else {
                    setisFirstTimeOpen(true)
                }
            })
            .catch(() => { setisFirstTimeOpen(true); });
    }, []);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        AsyncStorage.getItem(KEYS.USER_DATA)
            .then(async (value) => {
                if (value) {
                    const pData = await JSON.parse(value)
                    setuserData(pData)
                    setisSignedIn(true)
                    loginUser(pData?.id, pData?.pin,)
                }
            })
            .catch(() => { });

    };

    useEffect(() => {
        getTimeTable()
        getReminders()
    }, [userData?.id])

    const getTimeTable = async () => {
        if (userData?.id && userData?.pin) {
            const response = await apiRequest({
                method: METHOD.POST,
                url: ROUTES.GET_TIMETABLE,
                data: {
                    id: userData?.id,
                    pin: userData?.pin,
                    token: null
                }
            }).catch((error) => { })
            if (response.status == 200) {
                if (response?.data?.status == 200) {
                    settimeTable(response?.data?.data || [])
                }
            }
        }
    }

    const getReminders = async () => {
        if (userData?.id && userData?.pin) {
            const response = await apiRequest({
                method: METHOD.POST,
                url: ROUTES.GET_REMINDERS,
                data: {
                    id: userData?.id,
                    pin: userData?.pin,
                    token: null
                }
            }).catch((error) => { })
            if (response.status == 200) {
                if (response?.data?.status == 200) {
                    setreminders(response?.data?.data || [])
                }
            }
        }
    }

    const loginUser = async (id, password, setisLoading = () => { }, isFromAuth) => {
        if (password) {
            setisLoading(true)
            const response = await apiRequest({
                method: METHOD.POST,
                url: ROUTES.LOGIN_USER,
                data: {
                    id: id,
                    pin: password,
                    token: null
                }
            }).catch((error) => {
                setisLoading(false)
                showFlash(ERROR_TEXT, 'danger')
            })
            setisLoading(false)

            if (response.status == 200) {
                if (response?.data?.status == 200) {
                    const fData = { id: id, pin: password, ...response?.data?.data }
                    setuserData(fData)
                    await AsyncStorage.setItem(KEYS.USER_DATA, JSON.stringify(fData))
                    if (isFromAuth) {
                        navigation.navigate(SCREEN.LOGIN_COMPLETE)
                        showFlash('Succesfully Logged In!')
                    }
                } else {
                    if (isFromAuth) showFlash('Wrong Password!')
                }

            } else {
                if (isFromAuth) showFlash(ERROR_TEXT)
                return
            }
        } else {
            if (isFromAuth) showFlash('Pin is Required!')
            return
        }
    }

    const logout = async () => {
        await AsyncStorage.removeItem(KEYS.USER_DATA)
        await AsyncStorage.removeItem(KEYS.SCHOOL_ID)
        await AsyncStorage.removeItem(KEYS.TOKEN)

        setisSignedIn(false)
        setuserData({})
        setUser(null)

    }


    // NOTIFICATION HANDLERS


    const requestUserPermission = async () => {
        if (Platform.OS === 'android') {
            request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS)
                .then(() => { })
        }
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log("Authorization status:", authStatus);
            getFcmToken();
        }
    };

    const getFcmToken = async () => {
        // let fcmToken = await AsyncStorage.getItem("fcmToken");
        // console.log("The old Token", fcmToken);
        // if (!fcmToken) {
        try {
            const fcmToken = await messaging().getToken();

            console.log("User updated..", fcmToken);
            if (fcmToken && userData?.id && userData?.pin) {
                updateToken(fcmToken)
            }
        } catch (error) {
            console.log("Error", error);
        }
        // }
    };


    const updateToken = async (token) => {
        const response = await apiRequest({
            method: METHOD.POST,
            url: ROUTES.UPDATE_TOKEN,
            data: {
                id: userData?.id,
                pin: userData?.pin,
                token: token
            }
        }).catch((error) => {

        })
    }


    const notificationListener = async () => {
        try {
            messaging().onNotificationOpenedApp((remoteMessage) => {
                console.log(
                    "Notification caused app to open from background state:",
                    remoteMessage.notification
                );
                // navigation.navigate(remoteMessage.data.type);
            });
            messaging().onMessage(async (remoteMessage) => {
                console.log("Received in Foreground", remoteMessage);
                PushNotification.createChannel({
                    channelId: "channel-id", // (required)
                    channelName: "My channel", // (required)
                });
                PushNotification.localNotification({
                    channelId: "channel-id",
                    title: remoteMessage.notification.title,
                    message: remoteMessage.notification.body, // (required)
                    showWhen: true,
                    color: "red",
                });
            });
            messaging()
                .getInitialNotification()
                .then((remoteMessage) => {
                    if (remoteMessage) {
                        console.log(
                            "Notification caused app to open from quit state:",
                            remoteMessage.notification
                        );
                    }
                });
        } catch (error) {
            console.log("Error", error);
        }
    };


    useEffect(() => {
        try {
            requestUserPermission();
            notificationListener();
            //   checkPermission();
            // messageListener();

        } catch (error) {

        }
    }, [userData?.pin, userData?.id]);


    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                userData,
                setuserData,
                getUser,
                isFirstTimeOpen,
                setisFirstTimeOpen,
                timeTable,
                getTimeTable,
                reminders,
                getReminders,
                loginUser,
                isSignedIn,
                setisSignedIn,
                logout
            }}>
            {children}
        </AuthContext.Provider>
    );
};
