import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


const CardLogout = () => {


    return (
        <Pressable
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? 'rgba(0, 0, 0, 0.3)' : 'white',
                },
                styles.container
            ]}
            android_ripple={{
                color: 'rgba(0, 0, 0, 0.3)'
            }}>

            <AntDesign style={styles.icon} name="logout" size={40} color="black" />
            <Text style={styles.text}>Log Out</Text>

        </Pressable>
    )
}

export default CardLogout

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',

        borderRadius: 50,
        marginVertical:5,
        marginHorizontal: 10,
        gap:5,

    },
    icon: {
        margin:15
    },
    text: {
        fontSize: 30
    },
})