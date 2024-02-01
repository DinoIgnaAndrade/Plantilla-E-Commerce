import { Pressable, StyleSheet, Text, View } from 'react-native'

const Card = ({ item }) => {
    return (
        <Pressable style={styles.container}>
                <Text style={styles.text}>{item}</Text>
        </Pressable>
    )
}
export default Card

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:15,
        marginHorizontal:2,
        borderRadius:30,
        backgroundColor:'black',
    },
    text:{
        color:'white',
        fontSize:17,
    }
})