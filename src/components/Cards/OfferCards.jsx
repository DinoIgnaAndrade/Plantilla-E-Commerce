import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'

const OfferCards = ({ item }) => {

    const offer = (item.price * item.offer).toFixed(2);  
    const percentage = ((1-item.offer)*100).toFixed(2);

    const { width: screenWidth } = Dimensions.get('window');

    return (
        <Pressable style={[styles.container,{ width: screenWidth-40 }]}>
            <Image
                style={styles.image}
                resizeMode='cover'
                source={{ uri: item.thumbnail }}
            />
            <View>
                <Text style={styles.percentage}>%{percentage}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <Text style={styles.offer}>${offer}</Text>
            </View>

        </Pressable>
    )
}

export default OfferCards

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        gap:10,
        padding: 10,
        margin: 5,
        borderRadius: 30,
        backgroundColor: 'black',
        shadowColor: '#333333',
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    title:{
        color:'white',
        fontSize:25,
    },
    price:{
        color:'white',
        fontSize:15,
        textDecorationLine: 'line-through',
        color:'#808080',
    },
    offer:{
        color:'white',
        fontSize:25,
    },
    percentage:{
        color:'white',
        fontSize: 30,
    }
})