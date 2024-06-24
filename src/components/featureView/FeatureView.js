import { StyleSheet } from 'react-native'
import React, { memo } from 'react'
import { COLOR, hp, TEXT_STYLE, commonStyles } from '../../utils/StyleGuides'
import { Image, Label, Pressable } from '../reusables'
import { useNavigation } from '@react-navigation/native'

const FeatureView = ({ item }) => {
    const { text, image, route } = item
    const navigation = useNavigation()

    const handleOnPress = () => {
        if (route) {
            navigation.navigate(route)
        }
    }

    return (
        <Pressable style={styles.container} onPress={() => handleOnPress()}>
            <Image src={image} style={styles.imageStyle} contain />
            <Label style={styles.textStyle}>{text}</Label>
        </Pressable>
    )
}

export default memo(FeatureView)

const styles = StyleSheet.create({
    container: {
        paddingVertical: hp(1.5),
        borderRadius: hp(2.5),
        paddingHorizontal: '5%',
        backgroundColor: COLOR.white,
        marginVertical: hp(1),
        ...commonStyles.shadow_3,
        ...commonStyles.horizontalView,
    },
    textStyle: {
        ...TEXT_STYLE.small_title,
        color: COLOR.black,
    },
    imageStyle: {
        height: hp(5),
        width: hp(5),
        marginEnd: '5%',
    },
})