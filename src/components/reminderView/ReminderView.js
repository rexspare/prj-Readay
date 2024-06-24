import { StyleSheet, View } from 'react-native'
import React, { memo, useState } from 'react'
import { hp, commonStyles, TEXT_STYLE, COLOR, wp, FONT } from '../../utils/StyleGuides'
import { If, Label, Pressable, Svg } from '../reusables'
import { SVG } from '../../assets/svg'
import Collapsible from 'react-native-collapsible'
import EventModal from '../eventModal'

const ReminderView = ({ item }) => {
    const [collapsed, setCollapsed] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const titleColor = COLOR.dark_yellow
    return (
        <View style={styles.container}>
            <View style={styles.timeContainer}>
                <Label style={styles.greyText}>{item?.date}</Label>
                <View style={styles.verticalLine} />
            </View>

            <View style={styles.eventContainer}>
                <View style={styles.contentContainer}>
                    <View>
                        <Label style={styles.subjectText}>{item?.subject}</Label>
                        <View style={{ flexDirection: 'row' }}>
                            <Pressable onPress={() => {}}>
                                <Label style={[styles.titleStyle, { color: titleColor }]}>{item?.type}</Label>
                            </Pressable>
                        </View>
                        {/* {desc && <Label style={styles.descText}>{desc}</Label>} */}
                    </View>
                    {/* <If condition={extraTasks?.length >= 1}>
                        <Svg name={SVG.DownArrow} style={styles.iconStyle} onPress={() => setCollapsed(!collapsed)} />
                    </If> */}
                </View>
                <View style={styles.listContainer} >
                    <View style={styles.dotStyle} />
                    <Label style={styles.textStyle}>{item?.text}</Label>
                </View>
                <Collapsible collapsed={collapsed}>
                    {/* {extraTasks?.map((item, index) => (
                        <View style={styles.listContainer} key={index}>
                            <View style={styles.dotStyle} />
                            <Label style={styles.textStyle}>{item}</Label>
                        </View>
                    ))} */}
                </Collapsible>
            </View>
            <EventModal visible={showModal} setVisible={setShowModal} item={item} />
        </View>
    )
}

export default memo(ReminderView)

const styles = StyleSheet.create({
    container: {
        ...commonStyles.justifyView_m1,
    },
    timeContainer: {
        height: '100%',
        width: hp(5),
        alignItems: 'center',
    },
    verticalLine: {
        flex: 1,
        width: wp(1.5),
        backgroundColor: COLOR.light_grey_3,
        borderRadius: hp(3),
    },
    greyText: {
        ...TEXT_STYLE.text_medium,
        fontSize: 11,
        marginBottom: hp(0.5),
        color: COLOR.light_grey_3,
    },
    eventContainer: {
        width: '85%',
        marginBottom: hp(1),
        paddingVertical: hp(1),
        marginHorizontal: 2,
        paddingHorizontal: '5%',
        backgroundColor: COLOR.white,
        borderRadius: hp(2),
        ...commonStyles.shadow_3,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleStyle: {
        fontFamily: FONT.semiBold,
        fontSize: 20,
        lineHeight: 24,
        color: COLOR.black,
        marginTop: -2
    },
    subjectText: {
        fontFamily: FONT.semiBold,
        fontSize: 11,
        color: COLOR.dark_grey_2,
    },
    descText: {
        ...TEXT_STYLE.text_medium,
        fontSize: 16,
        color: COLOR.dark_grey_2,
    },
    textStyle: {
        color: COLOR.dark_grey_2,
        ...TEXT_STYLE.text_medium,
    },
    iconStyle: {
        marginTop: hp(0.3),
    },
    listContainer: {
        ...commonStyles.horizontalView,
        marginHorizontal: '2%',
    },
    dotStyle: {
        height: hp(0.7),
        width: hp(0.7),
        borderRadius: hp(2),
        backgroundColor: COLOR.dark_grey_2,
        marginEnd: '3%',
        marginBottom: 2,
    },
})