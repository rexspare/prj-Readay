import { ScrollView } from 'react-native'
import React, { memo } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import If from '../If'

const Scrollable = (props) => {
    const { children, hasInput, horizontal, onScroll, containerStyle } = props
    return (
        <If condition={hasInput}
            elseComp={
                <ScrollView
                    overScrollMode='never'
                    onScroll={(x) => { onScroll && onScroll(x) }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    horizontal={horizontal}
                    contentContainerStyle={containerStyle}
                >
                    {children}
                </ScrollView>
            }
        >
            <KeyboardAwareScrollView
                overScrollMode='never'
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal={horizontal}
                contentContainerStyle={containerStyle}
            >
                {children}
            </KeyboardAwareScrollView>
        </If>
    )
}

export default memo(Scrollable)
