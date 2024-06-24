import { TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { ACTIVE_OPACITY } from '../../../utils/StyleGuides'

const Pressable = ({ children, onPress, activeOpacity, disabled, style }) => {
    let opacity = disabled ? 1 : activeOpacity || ACTIVE_OPACITY
    return (
        <TouchableOpacity
            disabled={disabled}
            activeOpacity={opacity}
            style={style}
            onPress={() => { onPress && onPress() }}
        >
            {children}
        </TouchableOpacity>
    )
}

export default memo(Pressable)
