import { Dimensions } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export const COLOR = {
    light_grey: '#D9D9D9',
    light_grey_2: '#A6A6A6',
    light_grey_3: '#C8C8CB',
    blue: '#56B6FF',
    background: '#FBFAFF',
    dark_yellow: '#FFC000',
    light_brown: '#FFECB3',


    black: '#000000',
    black_2: '#1A1C23',
    black_40: 'rgba(0,0,0,0.4)',
    white: '#ffffff',
    yellow: '#F3CF1B',
    orange: '#F15F31',
    dark_grey: '#8A8A8A',
    dark_grey_2: '#62717E',
}

export const SIZE = {
    WIDTH: Dimensions.get('screen').width,
    HEIGHT: Dimensions.get('screen').height,
}

export const ACTIVE_OPACITY = 0.9
export { hp, wp }

export const FONT = {
    regular: 'Poppins-Regular',
    bold: 'Poppins-Bold',
    extraBold: 'Poppins-ExtraBold',
    semiBold: 'Poppins-SemiBold',
    medium: 'Poppins-Medium',
}

export const TEXT_STYLE = {
    big_title: {
        fontFamily: FONT.bold,
        fontStyle: 'normal',
        fontSize: 26,
    },
    title: {
        fontFamily: FONT.bold,
        fontStyle: 'normal',
        fontSize: 22,
    },
    small_bold: {
        fontFamily: FONT.bold,
        fontStyle: 'normal',
        fontSize: 24,
        fontWeight: '700'
    },
    large_bold: {
        fontFamily: FONT.bold,
        fontStyle: 'normal',
        fontSize: 30,
        fontWeight: '700'
    },
    extra_large_bold: {
        fontFamily: FONT.bold,
        fontStyle: 'normal',
        fontSize: 39,
        fontWeight: '700'
    },
    semi_bold: {
        fontFamily: FONT.bold,
        fontSize: 18,
        fontWeight: '700'
    },
    semi_title: {
        fontFamily: FONT.bold,
        fontStyle: 'normal',
        fontSize: 20,
    },
    light_bold: {
        fontSize: 18,
        fontWeight: '700'
    },
    small_title: {
        fontFamily: FONT.bold,
        fontStyle: 'normal',
        fontSize: 16,
    },
    small_chat: {
        fontFamily: FONT.regular,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
    },
    small_bolding: {
        fontFamily: FONT.regular,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
    },
    text: {
        fontFamily: FONT.regular,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 13,
    },
    text_large: {
        fontFamily: FONT.regular,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 15,
    },
    text_semi:{
        fontFamily: FONT.regular,
        fontStyle: 'normal',
        fontSize: 14,
        fontWeight: '600',
    },
    text_medium: {
        fontFamily: FONT.medium,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 13,
    },
    text_light: {
        fontSize: 17,
        fontFamily: FONT.regular,
    },
    small_text: {
        fontFamily: FONT.regular,
        fontSize: 11,
    },
    text_bold: {
        fontFamily: FONT.bold,
        fontStyle: 'normal',
        fontSize: 12,
    },
    text_extra_bold: {
        fontFamily: FONT.extraBold,
        fontStyle: 'normal',
        fontSize: 12,
    },
    bottom_tab_text: {
        fontFamily: FONT.medium,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
    }
}

export const commonStyles = {
    horizontalView: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    horizontalView_m1: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: hp(1),
    },
    horizontalView_m2: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: hp(2),
    },
    justifyView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    justifyView_m1: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: hp(1),
    },
    justifyView_m2: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: hp(2),
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadow_5: {
        elevation: 5,
        shadowColor: COLOR.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    shadow_3: {
        elevation: 3,
        shadowColor: COLOR.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    noPadding: {
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingStart: 0,
        paddingEnd: 0,
    },
    noMargin: {
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        marginStart: 0,
        marginEnd: 0,
    },
}
