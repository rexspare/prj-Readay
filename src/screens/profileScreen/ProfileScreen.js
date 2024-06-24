import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { BackButton, Label, ProfileView, Scrollable } from '../../components'
import En from '../../constants/languages/En'
import { hp, TEXT_STYLE, COLOR, commonStyles } from '../../utils/StyleGuides'
import { profileData, versionData } from '../../constants/DummyData'
import { AuthContext } from '../../context/appContext'

const ProfileScreen = () => {
    const { userData, logout } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <Scrollable containerStyle={{ paddingBottom: hp(5) }}>

                <Label style={styles.titleStyle}>{En.appName}</Label>
                <Label style={styles.textStyle}>{En.profile}</Label>

                <View style={styles.whiteContainer}>
                    <Label style={styles.boldText}>{userData?.firstName || ''}</Label>
                    <View style={styles.line} />
                    <Label style={styles.textStyles}>{userData?.grade || ''}</Label>
                </View>

                <Label style={styles.textStyle}>{En.link}</Label>
                <View style={styles.whiteContainer}>
                    {profileData?.map((item, index) => (
                        <ProfileView
                            item={item}
                            key={index}
                            noBorder={index == (profileData.length - 1)}
                        />
                    ))}
                </View>

                <Label style={styles.textStyle}>{En.version}</Label>
                <View style={styles.whiteContainer}>
                    {versionData?.map((item, index) => (
                        <ProfileView
                            item={item}
                            key={index}
                            noBorder={index == (versionData.length - 1)}
                        />
                    ))}
                </View>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => logout()}
                    style={styles.logoutBtn}>
                    <Text style={styles.logoutTxt}>{En.logout}</Text>
                </TouchableOpacity>

            </Scrollable>
            <BackButton />
        </View>

    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.background,
        paddingHorizontal: '5%',
    },
    titleStyle: {
        ...TEXT_STYLE.extra_large_bold,
        marginTop: hp(3),
        marginBottom: hp(0.3)
        // marginBottom: hp(1),
    },
    textStyle: {
        ...TEXT_STYLE.small_title,
        color: COLOR.dark_grey,
        marginVertical: hp(1.2),
    },
    whiteContainer: {
        paddingVertical: hp(2),
        paddingHorizontal: '5%',
        marginBottom: hp(1),
        borderRadius: hp(2),
        backgroundColor: COLOR.white,
        ...commonStyles.shadow_3,
        marginHorizontal: 1,
    },
    boldText: {
        ...TEXT_STYLE.large_bold,
    },
    textStyles: {
        ...TEXT_STYLE.text_light,
    },
    line: {
        height: 1,
        backgroundColor: COLOR.light_grey,
        marginVertical: hp(1),
    },
    logoutBtn: {
        width: 120,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(220, 53, 69,0.3)',
        borderColor: 'rgba(220, 53, 69,1)',
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 15,
        marginBottom: 40
    },
    logoutTxt: {
        ...TEXT_STYLE.large_bold,
        fontSize: 16,
        color: 'rgba(220, 53, 69,1)',
    }
})