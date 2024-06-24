export const SCREEN = {
    SPLASH: "SplashScreen",
    APP: "App",
    LOGIN: 'LoginScreen',
    REGISTER: 'RegisterScreen',
    ON_BOARDING: 'OnBoardingScreen',
    QR_CODE: 'QrCode',
    HOME: 'HomeScreen',
    LOGIN_COMPLETE: 'LoginCompleteScreen',
    TERM_CONDITION: 'TermsCondition',
    PRIVACY: 'PrivacyScreen',
    PROFILE: 'ProfileScreen',
    NEWS_SCREEN: 'NewsScreen',
    TIME_TABLE: 'TimeTableScreen',
    REMINDER: 'ReminderScreen',
}



export const KEYS = {
    TOKEN: '@accessToken',
    FIRST_TIME_OPENED: '@firstTimeOpned',
    USER_DATA: "@userData",
    SCHOOL_ID: "@schoolId"
}

export const ROUTES = {
    QR_CODE_AUTH: "@profile/hello",
    REGISTER_PIN: "@profile/pin",
    LOGIN_USER: "@profile/info",
    GET_TIMETABLE: "@timetable/get",
    GET_REMINDERS: "@reminders/get",
    UPDATE_TOKEN :"@profile/notifications"
}

export const ACTIONS = {
    USER: 'UserData',
}

export const METHOD = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
}

export const ERROR_TEXT = 'An unexpected error occured'