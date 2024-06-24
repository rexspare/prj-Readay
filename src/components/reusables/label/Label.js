import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { COLOR, TEXT_STYLE } from '../../../utils/StyleGuides'

const Label = ({ children, style }) => {
    return (
        <Text style={[styles.textStyle, style]}>{children}</Text>
    )
}

export default React.memo(Label)

const styles = StyleSheet.create({
    textStyle: {
        ...TEXT_STYLE.text,
        color:COLOR.black,
    },
})