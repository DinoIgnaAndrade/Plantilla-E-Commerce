import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import profileLogo from '../../assets/img/profile-logo.png'


const UserIformation = () => {



    return (
        <View style={styles.container}>
            <Image
                source={profileLogo}
                style={styles.imgLogo}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Dino Ignacio Andrade</Text>
                <Text style={styles.text}>1131916494</Text>
                <Text style={styles.text}>dinoignaandrade@gmail.com</Text>
            </View>
            <Pressable
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? 'rgba(255, 255, 255, 0.5)' : 'black',
                    },
                    styles.editBottom
                ]}
                android_ripple={{ 
                    color: 'rgba(255, 255, 255, 0.9)'}}
            >
                <AntDesign name="edit" size={40} color="white" />
            </Pressable>

        </View>
    )
}

export default UserIformation

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'black',
        margin: 10,
        borderRadius: 60,
        gap: 10
    },
    imgLogo: {
        marginTop: 20,
        borderRadius: 100,
        width: 200,
        height: 200
    },
    textContainer: {
        gap: 5,
        marginBottom: 15,
    },
    text: {
        color: 'white',
        fontSize: 30,
    },
    editBottom:{
        borderRadius:100,
        position: 'absolute',
        right:30,
        top:20
    }
})