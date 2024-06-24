import { StyleSheet, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Button, Image, Input, Label, Scrollable } from '../../../components'
import { IMAGES } from '../../../assets/images'
import { hp, wp, TEXT_STYLE, COLOR, commonStyles } from '../../../utils/StyleGuides'
import En from '../../../constants/languages/En'
import { SVG } from '../../../assets/svg'
import { ERROR_TEXT, KEYS, METHOD, ROUTES, SCREEN } from '../../../constants/enum'
import { AuthContext } from '../../../context/appContext'
import apiRequest from '../../../utils/webHandler'
import { showFlash } from '../../../utils/Helpers'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRoute } from '@react-navigation/native'

const LoginScreen = ({ navigation }) => {
  const { loginUser } = useContext(AuthContext)
  const [password, setpassword] = useState('')
  const [isLoading, setisLoading] = useState(false)
  const route = useRoute()
  const { id } = route?.params

  const handleLogin = () => {
    loginUser(id, password, setisLoading, true)
  }

  return (
    <Scrollable hasInput>
      <View style={styles.container}>
        <View style={styles.topView}>
          <Image src={IMAGES.KEY} style={styles.image} contain />
          <Label style={styles.titleStyle}>{En.hey}</Label>
          <Label style={styles.textStyle}>{En.alreadyRegister}</Label>
          <Input
            placeholder={En.newPassword}
            iconName={SVG.Eye}
            isPassword={true}
            vallue={password}
            onChange={(txt) => setpassword(txt)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text={En.Login}
            isLoading={isLoading}
            onPress={handleLogin}
          />
        </View>
      </View>
    </Scrollable>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    height: hp('99.6%'),
    backgroundColor: COLOR.background,
    paddingHorizontal: '5%',
    justifyContent: 'center',
  },
  topView: {
    width: '100%',
    // paddingTop: '5%',
    ...commonStyles.center,
    // backgroundColor:'red',
    marginBottom: hp('11%')
  },
  image: {
    height: hp(14),
    width: wp(30),
    alignSelf: 'center',
  },
  titleStyle: {
    ...TEXT_STYLE.big_title,
    textAlign: 'center',
    marginTop: hp(5),
    marginBottom: hp(1)
  },
  textStyle: {
    ...TEXT_STYLE.text_semi,
    color: COLOR.dark_grey,
    textAlign: 'center',
    marginBottom: hp(2)
  },
  buttonContainer: {
    width: '100%',
    ...commonStyles.center,
    position: 'absolute',
    alignSelf: 'center',
    bottom: hp(2),
  },
  center: {
    ...commonStyles.center,
    // backgroundColor:'red'
  }
})