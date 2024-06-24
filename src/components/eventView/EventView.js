import React, { memo, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Collapsible from 'react-native-collapsible'
import { SVG } from '../../assets/svg'
import { COLOR, TEXT_STYLE, commonStyles, hp, wp } from '../../utils/StyleGuides'
import { Button, If, Label, Svg } from '../reusables'
import EventModal from '../eventModal'

const EventView = ({ item }) => {
    const { time, subject, teacher, room, reminders } = item
    const [collapsed, setCollapsed] = useState(true)
    const [showModal, setShowModal] = useState(false)


    return (
        <View style={styles.container}>
            <View style={styles.timeContainer}>
                <Label style={styles.greyText}>{time}</Label>
                <View style={styles.verticalLine} />
            </View>

            <View style={styles.eventContainer}>
                <View style={styles.contentContainer}>
                    <View>
                        <Label style={styles.subjectText}>{subject}</Label>
                        {
                            collapsed ?
                                <Label style={styles.descText}>{teacher} | {room}</Label>
                                :
                                <>
                                    <Label style={styles.descText}>{teacher}</Label>
                                    <Label style={styles.descText}>{room}</Label>
                                </>
                        }
                    </View>
                    <If condition={reminders?.length > 0}>
                        <Svg name={SVG.DownArrow} style={styles.iconStyle} onPress={() => setCollapsed(!collapsed)} />
                    </If>
                </View>
                <Collapsible collapsed={collapsed}>
                    {
                        reminders?.map((item_, index) => (
                            <View key={index}>
                                <Button
                                    key={index}
                                    text={item_?.type}
                                    style={styles.buttonStyle}
                                    textStyle={styles.buttonText}
                                    onPress={() => setShowModal(true)}
                                />
                                <EventModal
                                    visible={showModal}
                                    setVisible={setShowModal}
                                    item={item}
                                />
                            </View>
                        ))
                    }
                </Collapsible>
            </View>

        </View>
    )
}

export default memo(EventView)

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
    subjectText: {
        ...TEXT_STYLE.small_title,
        lineHeight: 24,
        color: COLOR.black,
    },
    descText: {
        ...TEXT_STYLE.text_medium,
        // fontSize: 13,
        color: COLOR.black_40,
    },
    iconStyle: {
        marginTop: hp(0.3),
    },
    buttonStyle: {
        height: hp(4),
        width: '50%',
        borderRadius: hp(1),
        backgroundColor: COLOR.light_brown,
    },
    buttonText: {
        color: COLOR.dark_yellow,
    },

})