import { StyleSheet } from 'react-native'
import React, { memo } from 'react'
import { COLOR, hp, commonStyles, TEXT_STYLE } from '../../utils/StyleGuides'
import { Label, Pressable, Svg } from '../reusables'
import { useNavigation } from '@react-navigation/native'

const ProfileView = ({ item, noBorder }) => {
  const { text, icon, route } = item
  const navigation = useNavigation()

  const handleOnPress = () => {
    if (route) {
      navigation.navigate(route)
    }
  }

  return (
    <Pressable style={[styles.container, !noBorder && styles.borderStyle]} onPress={() => handleOnPress()}>
      <Svg name={icon} style={styles.iconStyle} />
      <Label style={styles.text}>{text}</Label>
    </Pressable>
  )
}

export default memo(ProfileView)

const styles = StyleSheet.create({
  container: {
    paddingBottom: hp(0.7),
    marginTop: hp(0.7),
    ...commonStyles.horizontalView,
    // backgroundColor:'red'
  },
  borderStyle: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.light_grey,
    marginBottom: hp(0.7),
  },
  text: {
    ...TEXT_STYLE.text_medium,
    color: COLOR.black,
  },
  iconStyle: {
    marginEnd: '4%',
    // backgroundColor:'red',
    height:hp(5)
  },
  line: {
    height: 1,
    backgroundColor: COLOR.light_grey,
    marginVertical: hp(1),
  }
})