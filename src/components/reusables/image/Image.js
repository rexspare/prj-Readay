import React, { memo } from 'react'
import { StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import { hp, wp } from '../../../utils/StyleGuides'

const Image = ({ src, style, contain, url }) => {
    return (
        <FastImage
            source={src ? src : { uri: url }}
            style={[styles.image, style]}
            resizeMode={contain ?
                FastImage.resizeMode.contain :
                FastImage.resizeMode.cover
            }
        />
    )
}

export default memo(Image)

const styles = StyleSheet.create({
    image: {
        height: hp(5),
        width: hp(5),
    },
})