import { StyleSheet, View } from 'react-native'
import React from 'react'
import { BackButton, Label, NewsView, Scrollable } from '../../components'
import En from '../../constants/languages/En'
import { hp, TEXT_STYLE, COLOR } from '../../utils/StyleGuides'
import { newsData } from '../../constants/DummyData'

const NewsScreen = () => {
    return (
        <View style={styles.container}>
            <Scrollable>
                <Label style={styles.textStyle}>{En.version}</Label>
                <Label style={styles.titleStyle}>{En.whatNew}</Label>
                {newsData?.map((item, index) => (
                    <NewsView item={item} key={index} />
                ))}
            </Scrollable>
            <BackButton />
        </View>
    )
}

export default NewsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.background,
        paddingHorizontal: '5%',
    },
    titleStyle: {
        ...TEXT_STYLE.extra_large_bold,
        lineHeight: 50,
    },
    textStyle: {
        ...TEXT_STYLE.text,
        color: COLOR.dark_grey,
        marginTop: hp(4.5)
    },
    boldText: {
        ...TEXT_STYLE.large_bold,
    },
    textStyles: {
        ...TEXT_STYLE.text_light,
    },
})