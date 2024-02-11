import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Input from './Input';
import { updateUserData } from '../../db';
import { setPersonalInfo } from '../../features/authSlice';

const PersonalInput = ({ onChange, toggleModal }) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')


    const localId = useSelector(state => state.authReducer.localId)
    const dispatch = useDispatch()

    const onSubmit = () => {
        updateUserData({ name: name, phone: phone, localId: localId})
            .then(result => console.log('User Insert', result))
            .catch(error => console.log('Insert User Error', error.message))

            toggleModal()
    }

    useEffect(() => {
        if (name && phone) {
            dispatch(setPersonalInfo({ name: name, phone: phone }));
        }
    }, [name, phone])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Informacion de Usuario</Text>
            <Input label='Nombre de Usuario' onChange={setName} keyboard={'default'} />
            <Input label='Telefono' onChange={setPhone} keyboard={'numeric'} />

            <View style={styles.containerButton}>
                <Pressable
                    onPress={onSubmit}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(0, 0, 0, 0.3)' : 'white',
                        },
                        styles.button
                    ]}
                    android_ripple={{
                        color: 'rgba(0, 0, 0, 0.3)'
                    }}>
                    <Text style={styles.text}>Confirmar</Text>
                </Pressable>
                <Pressable
                    onPress={toggleModal}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgba(0, 0, 0, 0.3)' : 'white',
                        },
                        styles.button
                    ]}
                    android_ripple={{
                        color: 'rgba(0, 0, 0, 0.3)'
                    }}>
                    <Text style={styles.text}>Cancelar</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default PersonalInput

const styles = StyleSheet.create({
    container: {
        borderRadius: 40,
        margin: 20,
        padding: 30,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 40,
        marginBottom: 25
    },
    containerButton:{
        flexDirection:'row',
        alignSelf:'center'
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        borderRadius: 30,
    },
    text: {
        color:'white',
        fontSize: 20
    }
})