import { StyleSheet, View } from 'react-native'
import React, { memo } from 'react'
import Modal from 'react-native-modal'
import { hp, COLOR, TEXT_STYLE, commonStyles } from '../../utils/StyleGuides'
import { Label, Svg } from '../reusables'
import { SVG } from '../../assets/svg'

const EventModal = ({ visible, setVisible, item }) => {
    const { time, subject, teacher, room, reminders } = item

    const titleColor = COLOR.dark_yellow

    const onClose = () => {
        setVisible(false)
    }

    return (
        <Modal
            isVisible={visible}
            style={styles.mainContainer}
            onBackdropPress={() => onClose()}
            onBackButtonPress={() => onClose()}
            hasBackdrop={false}

        >
            <View style={styles.modalView}>
                <Svg name={SVG.CrossIcon} style={styles.iconStyle} onPress={() => onClose()} />
                <Label style={styles.subjectText}>{subject} | {time}</Label>
                <View>

                    {reminders?.map((item_, index) => (
                        <View key={index}>
                            <Label style={[styles.titleStyle, { color: titleColor, paddingBottom: hp(2) }]}>{item_.type}</Label>
                            <View style={styles.listContainer} >
                                <View style={styles.dotStyle} />
                                <Label style={styles.textStyle}>{item_.text}</Label>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </Modal>
    )
}

export default memo(EventModal)

const styles = StyleSheet.create({
    mainContainer: {
        margin: 0, justifyContent: 'flex-end',
    },
    modalView: {
        height: '95%',
        backgroundColor: COLOR.white,
        borderTopLeftRadius: hp(4),
        borderTopRightRadius: hp(4),
        paddingVertical: hp(2),
        paddingHorizontal: '5%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    titleStyle: {
        ...TEXT_STYLE.large_bold,
        color: COLOR.dark_grey_2,
        marginVertical: hp(1),
    },
    subjectText: {
        ...TEXT_STYLE.text_bold,
        fontSize: 14,
        color: COLOR.dark_grey_2,
    },
    textStyle: {
        color: COLOR.black_2,
        ...TEXT_STYLE.text_medium,
    },
    iconStyle: {
        alignSelf: 'flex-end',
        marginBottom: hp(2),
    },
    listContainer: {
        ...commonStyles.horizontalView,
        marginHorizontal: '2%',
    },
    dotStyle: {
        height: hp(0.7),
        width: hp(0.7),
        borderRadius: hp(2),
        backgroundColor: COLOR.black_2,
        marginEnd: '3%',
        marginBottom: 2,
    },
})
