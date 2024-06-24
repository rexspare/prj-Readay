import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { COLOR } from '../../utils/StyleGuides'
import { IMAGES } from '../../assets/images'
import { SCREEN } from '../../constants/enum'

const SplashScreen = ({navigation}) => {

    useEffect(() => {
      setTimeout(() => {
        navigation.replace(SCREEN.APP)
      }, 1000);
    }, [])

    return (
        <View style={styles.main}>
            <Image
                source={IMAGES.SPLASH_IMAGE}
                style={styles.image}
                resizeMode='contain'
            />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLOR.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 400
    }
})