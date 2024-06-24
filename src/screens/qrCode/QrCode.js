import { StyleSheet, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Button, CameraModal, Image, Label } from '../../components'
import { IMAGES } from '../../assets/images'
import { hp, wp, TEXT_STYLE, commonStyles, COLOR } from '../../utils/StyleGuides'
import En from '../../constants/languages/En'
import { ERROR_TEXT, METHOD, ROUTES, SCREEN } from '../../constants/enum'
import apiRequest from '../../utils/webHandler'
import { showFlash } from '../../utils/Helpers'
import { AuthContext } from '../../context/appContext'

const QrCode = ({ navigation }) => {
    const [isCameraVisible, setisCameraVisible] = useState(false)
    const [isLoading, setisLoading] = useState(false)
    const { setuserData } = useContext(AuthContext)

    const checkQRCode = async (qrID) => {
        if (qrID) {
            const schoolId = qrID?.split(';')[0]
            const studentId = qrID?.split(';')[1]
            setisLoading(true)
            const response = await apiRequest({
                method: METHOD.POST,
                url: ROUTES.QR_CODE_AUTH,
                data: {
                    id: studentId,
                    pin: null,
                    token: null
                }
            },{}, schoolId).catch((error) => {
                setisLoading(false)
                showFlash(ERROR_TEXT, 'danger')
            })
            setisLoading(false)

            if (response.status == 200) {
                if (response?.data?.status == 200) {
                    navigation.navigate(SCREEN.REGISTER, { id: studentId })
                } else if (response?.data?.status == 409) {
                    navigation.navigate(SCREEN.LOGIN, { id: studentId })
                } else {
                    showFlash(response?.data?.error || ERROR_TEXT, 'danger')
                }
            } else {
                showFlash(response?.data?.error || ERROR_TEXT, 'danger')
            }
        } else {
            showFlash(ERROR_TEXT, 'danger')
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Image src={IMAGES.QR_ICON} style={styles.image} contain />
                <Label style={styles.text}>{En.letStart}</Label>
                <Label style={styles.title}>{En.Scan}</Label>
            </View>
            <Button
                text={En.QrCode}
                style={styles.button}
                onPress={() => setisCameraVisible(true)}
                isLoading={isLoading}
            />
            <CameraModal
                visible={isCameraVisible}
                onClose={() => setisCameraVisible(false)}
                setqrID={checkQRCode}
            />
        </View>
    )
}

export default QrCode

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.background,
        ...commonStyles.center,
        paddingHorizontal: '5%',
    },
    image: {
        height: hp(16),
        width: wp(35),
    },
    text: {
        ...TEXT_STYLE.big_title,
        marginTop: hp(5),
        lineHeight: 30,
    },
    title: {
        ...TEXT_STYLE.text_semi,
        color: COLOR.dark_grey,
        textAlign: 'center',
        marginTop: hp(1),
    },
    button: {
        position: 'absolute',
        bottom: hp(2),
    },
    center: {
        ...commonStyles.center,
        // backgroundColor:'red',
        marginBottom: hp(6)
    }
})