import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const ProductCard = ({ item }) => {


    // Funcion que rendedriza iconos de estrellas segun el numero de item.rating.
    const renderStars = () => {
        const rating = Math.round(item.rating);
        const starsArray = Array.from({ length: 5 }, (_, index) => (
            index < rating ? (
                <Ionicons key={index} name="star" color="white" size={20} />
            ) : (
                <Ionicons key={index} name="star-outline" color="white" size={20} />
            )
        ));
        return starsArray;
    };

    return (
        <Pressable
            style={({ pressed }) => [
                {
                    backgroundColor:pressed ? 'rgba(50, 50, 50, 0.5)' : 'black',
                    borderRadius: 30,
                },
                styles.container
            ]}
            android_ripple={{ color: 'rgba(255, 255, 255, 0.9)' }}
        >

            <Image
                style={styles.image}
                resizeMode='cover'
                source={{ uri: item.thumbnail }}
            />
            <View style={styles.textContainer}>
                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>{item.rating}</Text>
                    {renderStars()}
                </View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>

        </Pressable>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 25,
        padding: 5,
        margin: 5,
    },
    image: {
        alignSelf: 'center',
        marginTop: 10,
        width: 170,
        height: 170,
        borderRadius: 20,
    },
    textContainer: {

    },
    title: {
        fontSize: 18,
        color: 'white',
        marginLeft: 5
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rating: {
        fontSize: 20,
        padding: 5,
        color: 'white'
    },
    price: {
        fontSize: 20,
        paddingBottom: 5,
        marginHorizontal: 5,
        color: 'white'
    }
})