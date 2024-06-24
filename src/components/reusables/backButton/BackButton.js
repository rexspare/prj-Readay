import { StyleSheet } from 'react-native'
import React, { memo } from 'react'
import { hp, commonStyles, COLOR, wp } from '../../../utils/StyleGuides'
import Pressable from '../pressable'
import Svg from '../svg'
import { useNavigation } from '@react-navigation/native'
import { SVG } from '../../../assets/svg'

const BackButton = () => {
    const navigation = useNavigation()
    return (
        <Pressable style={[styles.buttonStyle]} onPress={() => navigation.goBack()} >
            <Svg name={SVG.Back} />
        </Pressable>
    )
}

export default memo(BackButton)

const styles = StyleSheet.create({
    buttonStyle: {
        height: hp(6),
        width: hp(6),
        ...commonStyles.center,
        backgroundColor: COLOR.black_2,
        borderRadius: hp(5),
        position: 'absolute',
        bottom: hp(2),
        left: wp('5%'),
    },
})