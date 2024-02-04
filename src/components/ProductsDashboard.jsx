import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'

import ProductCard from './Cards/ProductCard';


const ProductsDashboard = ({data}) => {

    console.log('Dashboard',data);

    const renderItem = ({ item }) => (
        <ProductCard item={item} />
      );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Catalogo</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                numColumns={2}
            />
        </View>
    )
}

export default ProductsDashboard

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 5,
        borderRadius: 10,
        overflow: 'hidden',
    },
    title: {
        fontSize: 25,
        padding:10
    }
})