import { StyleSheet, View } from 'react-native'
import React from 'react'
import { COLOR, hp, TEXT_STYLE } from '../../utils/StyleGuides'
import { BackButton, Label } from '../../components'
import En from '../../constants/languages/En'

const TermsCondition = () => {
    return (
        <View style={styles.container}>
            <Label style={styles.titleStyle}>{En.terms}</Label>
            <Label style={styles.textStyle}>{En.textHere}</Label>
            <BackButton noMargin />
        </View>
    )
}

export default TermsCondition

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.background,
        paddingHorizontal: '5%',
    },
    titleStyle: {
        ...TEXT_STYLE.big_title,
        marginTop: hp(4),
    },
    textStyle: {
        ...TEXT_STYLE.text_large,
        marginTop: hp(2),
    },
})