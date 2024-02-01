import { FlatList, StyleSheet, Text, View } from 'react-native'

import ProductCard from './Cards/ProductCard';
import { useGetProductsQuery } from '../services/shopServices';

const ProductsDashboard = () => {

    const { data, isLoading, error } = useGetProductsQuery()

    const renderItem = ({ item }) => (
        <ProductCard item={item} />
      );

    return (
        <View style={styles.container}>
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
        padding: 5,
        marginBottom:610,
        borderRadius: 10, // Ajusta según tus necesidades
        overflow: 'hidden',
    }
})