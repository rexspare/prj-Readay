import { StyleSheet, View, ActivityIndicator } from 'react-native'
import React, { memo } from 'react'
import Label from '../label'
import Pressable from '../pressable'
import If from '../If'
import { hp, commonStyles, TEXT_STYLE, COLOR, wp } from '../../../utils/StyleGuides'

const Button = ({ text, textStyle, style, onPress, icon, isLoading }) => {
    return (
        <Pressable onPress={() => { onPress && onPress() }} style={[styles.container, style]}>

            <If condition={!isLoading} elseComp={<ActivityIndicator color={COLOR.white} />}>
                <If condition={icon}>
                    <View style={{ marginRight: '2.5%' }}>
                        {icon}
                    </View>
                </If>
                <Label style={[styles.titleStyle, textStyle]}>{text}</Label>
            </If>
        </Pressable>
    )
}

export default memo(Button)

const styles = StyleSheet.create({
    container: {
        height: hp(6.8),
        width: '100%',
        marginVertical: hp(1),
        backgroundColor: COLOR.black_2,
        borderRadius: hp(2.5),
        ...commonStyles.horizontalView,
        justifyContent: 'center',
    },
    titleStyle: {
        ...TEXT_STYLE.semi_bold,
        color: COLOR.white,
        marginBottom: hp(0.3),
    },
})