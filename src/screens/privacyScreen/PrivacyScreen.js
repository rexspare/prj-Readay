import { StyleSheet, View } from 'react-native'
import React from 'react'
import { BackButton, Image, Label, Scrollable } from '../../components'
import { IMAGES } from '../../assets/images'
import En from '../../constants/languages/En'
import { hp, TEXT_STYLE, COLOR } from '../../utils/StyleGuides'

const PrivacyScreen = () => {
  return (
    <View style={styles.container}>
      <Scrollable>
        <Image src={IMAGES.LOCK_ICON} style={styles.image} contain />
        <Label style={styles.titleStyle}>{En.privacy}</Label>
        <Label style={styles.greyText}>{En.protection}</Label>
        <Label style={styles.textStyle}>{En.textHere}</Label>
      </Scrollable>
      <BackButton />
    </View>
  )
}

export default PrivacyScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.background,
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
  },
  image: {
    height: hp(14.5),
    width: '32.5%',
    alignSelf: 'center',
    marginTop: hp(5),
  },
  titleStyle: {
    ...TEXT_STYLE.big_title,
    textAlign: 'center',
    marginTop: hp(3.5),
  },
  greyText: {
    ...TEXT_STYLE.text_semi,
    color: COLOR.dark_grey,
    textAlign: 'center',
  },
  textStyle: {
    ...TEXT_STYLE.text_large,
    marginTop: hp(3)
  },
})