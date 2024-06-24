import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { memo, useState } from 'react'
import If from '../If'
import { wp, hp, commonStyles, TEXT_STYLE, COLOR } from '../../../utils/StyleGuides'
import Svg from '../svg'

const Input = (props) => {
    const { placeholder, iconName, size, value, onChange, style, keyboard, isPassword, multiline, inputStyles, placeholderTextColor } = props
    const [isSecurePasword, setisSecurePasword] = useState(true)
    return (
        <View style={[styles.container, style]}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor || COLOR.dark_grey}
                value={value}
                onChangeText={x => onChange && onChange(x)}
                style={[styles.input, multiline && { textAlignVertical: 'top' }, inputStyles]}
                keyboardType={keyboard}
                multiline={multiline}
                secureTextEntry={isPassword ? isSecurePasword : false}
                cursorColor={COLOR.grey}
            />
            <If condition={iconName}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setisSecurePasword(!isSecurePasword)}
                    style={{ height: '100%', justifyContent: 'center' }}
                >
                    <Svg
                        name={iconName}
                        size={size}
                        style={{ marginStart: wp(2) }}

                    />
                </TouchableOpacity>
            </If>
        </View>
    )
}

export default memo(Input)

const styles = StyleSheet.create({
    container: {
        height: hp(6.2),
        ...commonStyles.horizontalView_m1,
    },
    input: {
        flex: 1,
        height: '100%',
        backgroundColor: COLOR.white,
        paddingHorizontal: '5%',
        borderRadius: hp(1.8),
        marginHorizontal: wp(0.5),
        ...TEXT_STYLE.text_medium,
        color: COLOR.black,
        ...commonStyles.shadow_3,
    },
})