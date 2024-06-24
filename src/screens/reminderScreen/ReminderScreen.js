import React, { useContext } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { IMAGES } from '../../assets/images'
import { BackButton, Header, Label, ReminderView } from '../../components'
import En from '../../constants/languages/En'
import { AuthContext } from '../../context/appContext'
import { COLOR } from '../../utils/StyleGuides'

const ReminderScreen = () => {
    const { reminders } = useContext(AuthContext)
    return (
        <>
            {
                reminders?.length > 0 ?
                    <View style={styles.mainScreen}>
                        <FlatList
                            data={reminders}
                            showsVerticalScrollIndicator={false}
                            overScrollMode='never'
                            keyExtractor={(_, index) => index.toString()}
                            ListHeaderComponent={() => <Header image={IMAGES.FEATURE_2} text={En.reminders} />}
                            renderItem={({ item }) => <ReminderView item={item} />}
                        />
                        <BackButton />
                    </View>
                    :
                    <>
                        <View style={styles.emptyConatiner}>
                            <Label >Nothing to show</Label>
                            <BackButton />

                        </View>
                    </>
            }
        </>
    )
}

export default ReminderScreen

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        backgroundColor: COLOR.background,
        paddingHorizontal: '5%',
    },
    emptyConatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})