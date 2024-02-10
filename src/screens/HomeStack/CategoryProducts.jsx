import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react';

import { useGetProductsByCategoryQuery, } from '../../services/shopServices'
import { useSelector } from 'react-redux'

import ProductCard from '../../components/Cards/ProductCard';
import ProductsDashboard from '../../components/Dashboard/ProductsDashboard';
import LoadingIndicator from '../../components/LoadingIndicator';

const CategoryProducts = ({ navigation }) => {

    const [productList, setProductList] = useState(null)
    const category = useSelector(state => state.shopReducer.categorySelected)
    const { data, isLoading, error } = useGetProductsByCategoryQuery(category)

    useEffect(() => {
        if (!isLoading && data) {
            const productList = Object.values(data);
            setProductList(productList);
        } else if (error) {
            console.error('Error al obtener productos por categoría:', error);
        }
    }, [isLoading, data, error]);

    const renderItem = ({ item }) => (
        <ProductCard item={item} />
    );

    return (
        <SafeAreaView style={styles.container}>

            {
                isLoading
                    ?
                    <LoadingIndicator />
                    :
                    <ProductsDashboard data={productList} navigation={navigation} />
            }

        </SafeAreaView>
    )
}

export default CategoryProducts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1, 
        shadowRadius: 10, 
        elevation: 5, 
        backgroundColor: 'white', 
        marginBottom: 10,
        borderRadius: 50,
    }
})