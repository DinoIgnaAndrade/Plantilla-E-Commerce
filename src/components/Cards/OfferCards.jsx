import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux';

import { setProductIdSelected } from '../../features/shopSlice';

const OfferCards = ({
    item,
    navigation
}) => {

    const offer = (item.price * item.offer).toFixed(2);
    const percentage = ((1 - item.offer) * 100).toFixed(0);

    const { width: screenWidth } = Dimensions.get('window');

    const dispatch = useDispatch();

    return (
        <Pressable
            style={({ pressed }) => ({
                backgroundColor: pressed ? 'rgba(50, 50, 50, 0.5)' : 'black',
                borderRadius: 30,
                ...styles.container,
                width: screenWidth - 40,
            })}
            android_ripple={{ color: 'rgba(255, 255, 255, 0.9)' }}
            onPress={() => [
                navigation.navigate('Details'),
                dispatch(setProductIdSelected(item.id))
            ]}
        >

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
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        padding: 10,
        margin: 5,
        borderRadius: 30
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    title: {
        color: 'white',
        fontSize: 25,
    },
    price: {
        fontSize: 15,
        textDecorationLine: 'line-through',
        color: '#cc0000',
    },
    offer: {
        color: 'white',
        fontSize: 25,
    },
    percentage: {
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 5,
        paddingHorizontal: 15,
        position: 'absolute',
        color: 'black',
        zIndex: 1,
        fontSize: 50,

        left: 200,
        bottom: 5
    }
})