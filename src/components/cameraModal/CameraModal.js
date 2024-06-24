import { Modal, StyleSheet, Text, View } from 'react-native'
import { RNCamera, FaceDetector } from 'react-native-camera';
import Scan from '../../assets/svg/icons/scan';

const CameraModal = (props) => {
    return (
        <Modal
            visible={props.visible}
            onRequestClose={() => props.onClose()}
            animationType='slide'
        >
            <View style={styles.main}>
                <RNCamera
                    style={styles.main}
                    onBarCodeRead={(data) => {
                        props.onClose(false)
                        setTimeout(() => {
                            props.setqrID(data.data)
                        }, 500)
                    }}
                >
                    <View style={styles.scan}>
                        <Scan />
                    </View>
                </RNCamera>
            </View>

        </Modal>
    )
}

export default CameraModal

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    scan :{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})