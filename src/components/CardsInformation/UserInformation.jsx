import { Image, StyleSheet, Text, View, Pressable, Modal } from 'react-native'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import profileLogo from '../../../assets/img/profile-logo.png'
import PersonalInput from '../Inputs/PersonalInput';

const UserIformation = ({ navigate }) => {

    const email = useSelector(state => state.authReducer.user)
    const name = useSelector(state => state.authReducer.name)
    const phone = useSelector(state => state.authReducer.phone)
    
    //Modal
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    
    return (

        <View style={styles.container}>

            <Text style={styles.title}>Profile</Text>

            <Pressable
                onPress={toggleModal}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? 'rgba(0, 0, 0, 0.3)' : 'white',
                    },
                    styles.profileContainer
                ]}
                android_ripple={{
                    color: 'rgba(0, 0, 0, 0.3)'
                }}>
                <Image
                    source={profileLogo}
                    style={styles.imgLogo}
                />
                <View>
                    <Text style={styles.profileText}>{name}</Text>
                    <Text style={{ fontSize: 20 }}>{email}</Text>
                    <Text style={{ fontSize: 20 }}>{phone}</Text>
                </View>
            </Pressable>

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={toggleModal}
            >
                <PersonalInput toggleModal={toggleModal} />
            </Modal>

        </View>
    )
}

export default UserIformation

const styles = StyleSheet.create({
    container: {
        margin: 5,
        borderRadius: 100,
    },
    title: {
        fontSize: 40,
        marginBottom: 15
    },
    profileContainer: {
        padding: 5,
        borderRadius: 100,
        gap: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',

        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: 'white',
    },
    profileText: {
        fontSize: 30,
    },
    imgLogo: {
        borderRadius: 100,
        width: 130,
        height: 130
    },
})