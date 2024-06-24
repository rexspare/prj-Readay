import { StyleSheet, ImageBackground, View } from 'react-native'
import React, { useContext } from 'react'
import { FeatureView, Label } from '../../components'
import { IMAGES } from '../../assets/images'
import { hp, TEXT_STYLE, COLOR } from '../../utils/StyleGuides'
import { featureData } from '../../constants/DummyData'
import En from '../../constants/languages/En'
import { AuthContext } from '../../context/appContext'

const HomeScreen = () => {
    const {userData} = useContext(AuthContext)

    return (
        <View style={styles.mainScreen}>

            <ImageBackground source={IMAGES.BACKGROUND} style={styles.backgroundStyle}>
                <Label style={styles.titleStyle}>Hey {userData?.firstName || 'user'}!</Label>
            </ImageBackground>

            <View style={styles.bottomContainer}>
                <View style={styles.horizontalLine} />
                <Label style={styles.greyStyle}>{En.yourGrade}</Label>
                <Label style={styles.blackTitle}>Grade {userData?.grade || ''}</Label>
                <Label style={styles.greyStyle}>{En.features}</Label>

                {featureData?.map((item, index) => (
                    <FeatureView item={item} key={index} />
                ))}
                
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        backgroundColor: COLOR.background,
    },
    backgroundStyle: {
        height: hp('50%'),
        width: '100%',
        justifyContent: 'flex-end',
    },
    titleStyle: {
        ...TEXT_STYLE.semi_title,
        color: COLOR.white,
        marginHorizontal: '6%',
        marginBottom: '8%',
    },
    bottomContainer: {
        height: hp('53%'),
        width: '100%',
        backgroundColor: COLOR.background,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: hp(3),
        borderTopRightRadius: hp(3),
        paddingHorizontal: '5%',
        paddingTop: hp(2),
    },
    horizontalLine: {
        height: hp(0.8),
        backgroundColor: COLOR.light_grey_3,
        width: '20%',
        borderRadius: hp(2),
        alignSelf: 'center',
    },
    blackTitle: {
        ...TEXT_STYLE.big_title,
        color: COLOR.black,
    },
    greyStyle: {
        ...TEXT_STYLE.small_title,
        color: COLOR.dark_grey_2,
        marginTop: hp(2),
    },
})