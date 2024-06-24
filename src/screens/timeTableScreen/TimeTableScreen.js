import React, { useContext } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { IMAGES } from '../../assets/images'
import { BackButton, EventModal, EventView, Header, Label } from '../../components'
import { AuthContext } from '../../context/appContext'
import { formateDate } from '../../utils/Helpers'
import { COLOR, wp } from '../../utils/StyleGuides'


const TimeTableScreen = () => {
    const { day, date } = formateDate(new Date())
    const { timeTable } = useContext(AuthContext)

    const renderItem = ({ item }) => {
        return (
            <View style={{ width: wp(90) }}>
                <FlatList
                    data={item?.lessons || []}
                    showsVerticalScrollIndicator={false}
                    overScrollMode='never'
                    keyExtractor={(_, index) => index.toString()}
                    ListHeaderComponent={() => <Header image={IMAGES.FEATURE_1} text={item?.dayOfWeek} subText={item?.header} />}
                    renderItem={({ item }) => <EventView item={item} />}
                />
            </View>
        )
    }


    return (
        <>
            {
                timeTable?.length > 0 ?
                    <View style={styles.mainScreen}>
                        <FlatList
                            data={timeTable}
                            keyExtractor={(_, index) => index.toString()}
                            renderItem={renderItem}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                        />
                        <BackButton />

                    </View>
                    :
                    <View style={styles.emptyConatiner}>
                        <Label >Nothing to show</Label>
                        <BackButton />

                    </View>
            }
        </>
    )
}

export default TimeTableScreen

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        backgroundColor: COLOR.background,
        paddingHorizontal: wp(5),
    },
    emptyConatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})