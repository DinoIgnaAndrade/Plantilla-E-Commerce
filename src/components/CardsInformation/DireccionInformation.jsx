import { Image, StyleSheet, Text, View, Pressable, Modal } from 'react-native'
import { useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import LocationSelector from '../LocationComponent/LocationSelector';

const DireccionInformation = () => {

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

                <AntDesign style={styles.icon} name="enviromento" size={40} color="black" />
                <Text style={styles.text}>Direccion</Text>

            </Pressable>

            <Modal
                visible={modalVisible}
                transparent={false}
                animationType="slide"
                onRequestClose={toggleModal}
            >
                <LocationSelector/>
            </Modal>
        </>
    )
}

export default DireccionInformation

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