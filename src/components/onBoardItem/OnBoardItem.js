import { StyleSheet, View } from 'react-native'
import React, { memo } from 'react'
import { Image, Label, Pressable, Svg } from '../reusables'
import { COLOR, wp, commonStyles, hp, TEXT_STYLE } from '../../utils/StyleGuides'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { SVG } from '../../assets/svg'

const OnBoardItem = ({ item, onPress, index, progress }) => {
    const { title, text, image } = item
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Image src={image} style={styles.mainImage} contain />
                <View style={{marginHorizontal: '10%' }}>
                    <Label style={styles.titleStyle}>{title}</Label>
                    <Label style={styles.textStyle}>{text}</Label>
                </View>

            </View>

            <View style={styles.buttonContainer}>
                <AnimatedCircularProgress
                    size={hp(8.3)}
                    width={hp(0.5)}
                    fill={progress}
                    delay={10}
                    padding={2}
                    tintColor={COLOR.blue}
                    backgroundColor={COLOR.light_grey_3}
                >
                    {(fill) => (
                        <Pressable style={styles.buttonStyle} onPress={() => onPress(index)}>
                            <Svg name={SVG.RightArrow} />
                        </Pressable>
                    )}
                </AnimatedCircularProgress>
            </View>
        </View>
    )
}

export default memo(OnBoardItem)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: wp(100),
        backgroundColor: COLOR.background,
        ...commonStyles.center,
    },
    topView: {
        alignItems: 'center',
        width: '100%',
        height:'33%',
        justifyContent:'center',
       marginBottom: 20
    },
    mainImage: {
        height:'46%',
        width: '37%',
        // backgroundColor:'red'
    },
    titleStyle: {
        ...TEXT_STYLE.big_title,
        textAlign: 'center',
        lineHeight:32,
        marginTop:hp(5)
    },
    textStyle: {
        ...TEXT_STYLE.text_semi,
        color: COLOR.dark_grey,
        textAlign: 'center',
        marginTop:hp(0.5)
    },
    buttonStyle: {
        height: hp(6),
        width: hp(6),
        ...commonStyles.center,
        backgroundColor: COLOR.black_2,
        borderRadius: hp(5),
    },
    buttonContainer: {
        position: 'absolute',
        bottom: hp(2),
        ...commonStyles.center,
    },
})