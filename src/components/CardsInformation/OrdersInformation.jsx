import { Image, StyleSheet, Text, View, Pressable, Modal } from 'react-native'
import { useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import LocationSelector from '../LocationComponent/LocationSelector';
import Orders from './Orders';

const OrdersInformation = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <>
            <Pressable
                onPress={toggleModal}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? 'rgba(0, 0, 0, 0.3)' : 'white',
                    },
                    styles.container
                ]}
                android_ripple={{
                    color: 'rgba(0, 0, 0, 0.3)'
                }}>

                <AntDesign style={styles.icon} name="form" size={40} color="black" />
                <Text style={styles.text}>Ordenes</Text>

            </Pressable>

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={toggleModal}
            >
                <Orders/>
            </Modal>
        </>
    )
}

export default OrdersInformation

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',

        borderRadius: 50,
        marginVertical: 5,
        marginHorizontal: 10,
        gap: 5,

    },
    icon: {
        margin: 15
    },
    text: {
        fontSize: 30
    },
})