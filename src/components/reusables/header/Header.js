import { StyleSheet, View } from 'react-native'
import React, { memo } from 'react'
import { hp, commonStyles, TEXT_STYLE, COLOR, wp } from '../../../utils/StyleGuides'
import Image from '../image'
import Label from '../label'

const Header = ({ image, text, subText }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image src={image} style={styles.headerImage} contain />
                <View style={styles.verticalLine} />
            </View>
            <View style={styles.dateContainer}>
                <Label style={styles.dateText}>{text}</Label>
                <Label style={styles.dateText}>{subText}</Label>
            </View>
        </View>
    )
}

export default memo(Header)

const styles = StyleSheet.create({
    container: {
        marginTop: hp(5),
        marginBottom: hp(2),
        ...commonStyles.horizontalView,
    },
    dateText: {
        ...TEXT_STYLE.large_bold,
        marginBottom: hp(0.4),
    },
    imageContainer: {
        width: wp(11),
        alignItems: 'center',
    },
    headerImage: {
        height: hp(5),
        width: wp(11),
        marginBottom: hp(1),
    },
    verticalLine: {
        flex: 1,
        width: wp(1.5),
        backgroundColor: COLOR.light_grey_3,
        borderRadius: hp(3),
    },
    dateContainer: {
        justifyContent: 'space-between',
        marginStart: '5%',
    },
})