import React, { memo } from 'react'
import If from '../If'
import { hp } from '../../../utils/StyleGuides'

const Svg = (props) => {
    const { name, size = hp(3), style, onPress } = props
    const Tag = name
    return (
        <If condition={name}>
            <Tag size={size} height={size} width={size} style={style} onPress={() => { onPress && onPress() }} />
        </If>
    )
}

export default memo(Svg)