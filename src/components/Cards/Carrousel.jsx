import { View, Image, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { useSelector } from "react-redux";

const { width } = Dimensions.get("window");


const Carrousel = ({
    
    product

}) => {

    const images = product.image;

    return (
        <Swiper 
            style={styles.wrapper} 
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={5}
            >
            {images.map((image, index) => (
                <View key={index} style={styles.slide}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
            ))}
        </Swiper>
    )
}

export default Carrousel;

const styles = StyleSheet.create({
    wrapper: {
        height: 550,
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 450,
        height: 550,
        borderRadius:100,
    },
})