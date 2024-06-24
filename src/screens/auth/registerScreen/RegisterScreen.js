import { StyleSheet, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Button, Image, Input, Label, Scrollable } from '../../../components'
import { IMAGES } from '../../../assets/images'
import { hp, wp, TEXT_STYLE, COLOR, commonStyles } from '../../../utils/StyleGuides'
import En from '../../../constants/languages/En'
import { SVG } from '../../../assets/svg'
import { ERROR_TEXT, METHOD, ROUTES, SCREEN } from '../../../constants/enum'
import { useNavigation, useRoute } from '@react-navigation/native'
import { showFlash } from '../../../utils/Helpers'
import apiRequest from '../../../utils/webHandler'
import { AuthContext } from '../../../context/appContext'

const RegisterScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { loginUser } = useContext(AuthContext)
  const [password, setpassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [isLoading, setisLoading] = useState(false)
  const { id } = route?.params


  const registerPin = async () => {
    if (password && confirmPassword) {
      if (password == confirmPassword) {
        setisLoading(true)
        const response = await apiRequest({
          method: METHOD.POST,
          url: ROUTES.REGISTER_PIN,
          data: {
            id: id,
            pin: password,
            token: null
          }
        }).catch((error) => {
          setisLoading(false)
          showFlash(ERROR_TEXT, 'danger')
        })

        console.log('====================================');
        console.log(response.data);
        console.log('====================================');
        if (response.status == 200) {
          if (response?.data?.status == 200) {
            loginUser(id, password, setisLoading, true)
          } else {
            showFlash(ERROR_TEXT, 'danger')
          }
        } else {
          showFlash(ERROR_TEXT, 'danger')
        }
        setisLoading(false)
      } else {
        showFlash('Passwords do not match!')
        return
      }
    } else {
      showFlash('Pin is Required!')
      return
    }
  }

  return (
    <Scrollable hasInput>
      <View style={styles.container}>

        <View style={styles.topView}>
          <Image src={IMAGES.KEY} style={styles.image} contain />
          <Label style={styles.titleStyle}>{En.hey}</Label>
          <Label style={styles.textStyle}>{En.password}</Label>
          <Input
            placeholder={En.newPassword}
            iconName={SVG.Eye}
            ispassw
            value={password}
            onChange={(txt) => setpassword(txt)}
            isPassword={true}
          />
          <Input
            placeholder={En.repeatPassword}
            iconName={SVG.Eye}
            value={confirmPassword}
            onChange={(txt) => setconfirmPassword(txt)}
            isPassword={true}
          />

        </View>

        <View style={styles.buttonContainer}>
          <Button
            text={En.Login}
            onPress={registerPin}
            isLoading={isLoading}
          />
        </View>
      </View>
    </Scrollable>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    height: hp('99.6%'),
    backgroundColor: COLOR.background,
    paddingHorizontal: '5%',
    justifyContent: 'center',
  },
  topView: {
    // height: hp('50%'),
    width: '100%',
    // paddingTop: '15%',
    ...commonStyles.center,
    marginBottom: hp('10%'),
    // backgroundColor: 'red',
  },
  image: {
    height: hp(14),
    width: wp(30),
    // backgroundColor: 'blue',
    alignSelf: 'center',
  },
  titleStyle: {
    ...TEXT_STYLE.big_title,
    textAlign: 'center',
    marginTop: hp(4),
    marginBottom: hp(1)
  },
  textStyle: {
    ...TEXT_STYLE.text_semi,
    color: COLOR.dark_grey,
    textAlign: 'center',
    marginBottom: hp(2)
  },
  buttonContainer: {
    // height: hp('14%'),
    position: 'absolute',
    alignSelf: 'center',
    bottom: hp(2),
    paddingTop: hp('0.5%'),
    width: '100%',
    ...commonStyles.center,
  },
  center: {
    ...commonStyles.center,
    backgroundColor: 'red'
  }
})