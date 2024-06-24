import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useRef, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { OnBoardItem } from '../../../components'
import { onBoardingData } from '../../../constants/DummyData'
import { KEYS, SCREEN } from '../../../constants/enum'

const OnBoardingScreen = ({ navigation }) => {
    const flatListRef = useRef(FlatList)
    const [progress, setProgress] = useState(20)

    const onNextPress = async (index) => {
        if (index < (onBoardingData?.length - 1)) {
            flatListRef?.current?.scrollToIndex({
                animated: true,
                index: index + 1
            })
            setProgress(progress + 20)
        } else {
             AsyncStorage.setItem(KEYS.FIRST_TIME_OPENED, 'true')
             .then(() => {
                navigation.replace(SCREEN.QR_CODE)
             })
        }
    }
    return (
        <FlatList
            horizontal
            pagingEnabled
            ref={flatListRef}
            style={styles.mainScreen}
            data={onBoardingData}
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => <OnBoardItem item={item} onPress={(x) => onNextPress(x)} index={index} progress={progress} />}
        />
    )
}

export default OnBoardingScreen

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
    },
})