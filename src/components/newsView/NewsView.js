import { StyleSheet, View } from 'react-native'
import React, { memo } from 'react'
import { COLOR, hp, commonStyles, TEXT_STYLE, wp } from '../../utils/StyleGuides'
import { Image, Label, Pressable } from '../reusables'

const NewsView = ({ item }) => {
    const { text, title, image } = item
    return (
        <Pressable style={styles.container}>
            <Image src={image} style={styles.imageStyle} contain />
            <View style={styles.main}>
                <Label style={styles.text}>{title}</Label>
                <Label style={styles.texts}>{text}</Label>
            </View>
        </Pressable>
    )
}

export default memo(NewsView)

const styles = StyleSheet.create({
    container: {
        marginTop: hp(3.5),
        ...commonStyles.horizontalView,
        alignItems: 'flex-start',
    },
    text: {
        ...TEXT_STYLE.small_chat,
        color: COLOR.black,
    },
    texts: {
        ...TEXT_STYLE.text_medium,
        color: COLOR.dark_grey,
    },
    main: {
        flex: 1,
    },
    imageStyle: {
        height: hp(5.5),
        width: wp(9.5),
        marginEnd: '4%',
        // backgroundColor:'red'
    },
})