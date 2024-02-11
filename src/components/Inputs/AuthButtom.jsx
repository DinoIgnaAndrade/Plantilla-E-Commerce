import { StyleSheet, Text, View, Pressable } from 'react-native'

const AuthButtom = ({ navigation }) => {

    const handleLoginPress = () => {
        navigation.navigate('Login');
    };

    const handleSignUpPress = () => {
        navigation.navigate('SignUp');
    };

    return (
        <View style={styles.container}>

            <Pressable
                onPress={handleLoginPress}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? 'rgba(50, 50, 50, 0.5)' : 'black',
                    },
                    styles.button
                ]}
                android_ripple={{ color: 'rgba(255, 255, 255, 0.9)' }}
            >
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </Pressable>

            <Pressable
                onPress={handleSignUpPress}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? 'rgba(50, 50, 50, 0.5)' : 'black',
                    },
                    styles.button
                ]}
                android_ripple={{ color: 'rgba(255, 255, 255, 0.9)' }}
            >
                <Text style={styles.buttonText}>Registrarse</Text>
            </Pressable>
            
        </View>
    )
}

export default AuthButtom

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    button: {
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 30,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
});