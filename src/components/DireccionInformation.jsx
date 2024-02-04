import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import profileLogo from '../../assets/img/profile-logo.png'


const DireccionIformation = () => {


    return (
        <Pressable
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? 'rgba(255, 255, 255, 0.5)' : 'black',
                },
                styles.container
            ]}
            android_ripple={{
                color: 'rgba(255, 255, 255, 0.9)'
            }}
        >
            <AntDesign name="enviromento" size={40} color="white" />
            <Text style={styles.text}>Felipe Castro 1695</Text>
        </Pressable>
    )
}

export default DireccionIformation

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        margin: 10,
        borderRadius: 60,
        gap: 10
    },
    text: {
        color: 'white',
        fontSize: 30,
    },
})