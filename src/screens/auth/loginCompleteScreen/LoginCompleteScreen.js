import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { Button, Image, Label } from '../../../components'
import { IMAGES } from '../../../assets/images'
import { hp, TEXT_STYLE, COLOR, wp, commonStyles } from '../../../utils/StyleGuides'
import En from '../../../constants/languages/En'
import { SCREEN } from '../../../constants/enum'
import { AuthContext } from '../../../context/appContext'

const LoginCompleteScreen = ({ navigation }) => {
  const { setisSignedIn } = useContext(AuthContext)
  return (
    <View style={styles.container}>

      <View style={{ justifyContent: 'center', marginBottom: hp(10) }}>
        <Label style={styles.titleStyle}>{En.everythingReady}</Label>
        <Image src={IMAGES.CHECK} style={styles.image} contain />
      </View>

      <View style={styles.buttonContainer}>
        <Button text={En.complete} onPress={() => setisSignedIn(true)} />
      </View>

    </View>
  )
}

export default LoginCompleteScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.background,
    paddingHorizontal: '5%',
    ...commonStyles.center,
  },
  image: {
    height: '46%',
    width: wp('48%'),
    alignSelf: 'center',
    marginTop: hp(3),
    // backgroundColor:'blue'
  },
  titleStyle: {
    ...TEXT_STYLE.big_title,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: hp(2),
    width: '100%',
    ...commonStyles.center,
  },
})