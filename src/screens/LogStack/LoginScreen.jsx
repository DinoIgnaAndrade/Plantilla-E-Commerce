import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Input from '../../components/Inputs/Input'


const LoginScreen = () => {

    //States del formulario
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [triggerSignUp, result] = useLogInMutation();

    //Redux
    const dispatch = useDispatch();

    // const onSubmit = () => {
    //     triggerSignUp({ email, password })
    // }

    // useEffect(() => {
    //     if (result.data) {
    //         dispatch(setUser(result.data))
    //         insertData({
    //             localId: result.data.localId,
    //             email: result.data.email,
    //             token: result.data.idToken
    //         })
    //             .then(result => console.log('User Insert', result))
    //             .catch(error => console.log('Insert User Error', error.message))
    //     }

    // }, [result])


    return (
        <SafeAreaView style={styles.container}>

                <Text style={styles.title}>Login</Text>

            <View style={styles.inputContainer}>
                <Input
                    label={"Email:"}
                    onChange={setEmail} />

                <Input
                    label={"Contraseñá:"}
                    onChange={setPassword}
                    isSecureEntry={true} />

                <Pressable
                    onPress={null}
                    style={styles.buttom}>
                    <Text style={styles.buttomText}>Ingresar</Text>
                </Pressable>
            </View>

            <View style={styles.signUpContainer}>
                <Text style={styles.subtitle}>¿No tienes una cuenta?</Text>
                <Pressable
                    onPress={null}
                    style={styles.subtitleLink}>
                    <Text style={styles.subtitleText}>Crear una</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        paddingTop: 50,
        paddingBottom: 50,
        borderRadius: 100,

        alignItems: 'center',
        backgroundColor: 'black'
    },
    title: {
        margin: 30,
        textAlign: 'center',
        color: 'white',
        fontSize: 60,
    },
    inputContainer: {
        borderRadius: 30,
        margin: 30,
        padding: 30,
        width: 400,
        backgroundColor: 'white'
    },
    buttom:{
        alignSelf:'center',
        backgroundColor:'black',
        padding:20,
        borderRadius:50
    },
    buttomText:{
        fontSize:15,
        color:'white'
    },
    signUpContainer: {
        alignItems:'center',
        borderRadius: 30,
        margin: 30,
        padding: 20,
        width: 400,
        backgroundColor: 'white'
    },
    subtitleLink:{
        alignSelf:'center',
        backgroundColor:'black',
        marginTop:10,
        padding:15,
        borderRadius:50
    },
    subtitleText:{
        fontSize:15,
        color:'white'
    }

})