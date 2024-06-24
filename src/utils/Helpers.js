import { showMessage } from 'react-native-flash-message'
import { passwordStrength } from 'check-password-strength'
import moment from 'moment'
import { COLOR , TEXT_STYLE} from './StyleGuides'


export const showFlash = (message, type = 'success', icon = 'none', floating = false) => {
    showMessage({
        message: message,
        type: type,
        icon: icon,
        floating: floating,
        textStyle: { ...TEXT_STYLE.text, color: COLOR.white, textAlign: 'center', },
        titleStyle: { ...TEXT_STYLE.text_bold, color: COLOR.white, textAlign: 'center', },
        style: { marginTop: 0, backgroundColor: COLOR.black_2  },
    })
}

export const isEmailValid = (text) => {
    const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return reg.test(text)
}

export const isPasswordStrong = (text) => {
    if (passwordStrength(text)?.value == 'Strong') {
        return true
    } else {
        return false
    }
}

export const isIOS = () => {
    if (Platform.OS == 'ios') return true
    else return false
}

export const formateDate = (dateToFormate) => {
    const day = moment(dateToFormate).format('dddd')
    const date = moment(dateToFormate).format('MMMM DD')
    return { day, date }
}
