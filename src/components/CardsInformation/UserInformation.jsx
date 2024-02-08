import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import profileLogo from '../../../assets/img/profile-logo.png'


const UserIformation = () => {



    return (
        <View style={styles.container}>

            <Text style={styles.title}>Profile</Text>

            <Pressable
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
                    <Text style={styles.profileText}>Dino Ignacio Andrade</Text>
                    <Text style={{ fontSize:20}}>dinoignaandrade@gmail.com</Text>
                    <Text style={{fontSize:20}}>1131916494</Text>
                </View>
            </Pressable>

        </View>
    )
}

export default UserIformation

const styles = StyleSheet.create({
    container: {
        margin: 5,
        borderRadius:100,
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