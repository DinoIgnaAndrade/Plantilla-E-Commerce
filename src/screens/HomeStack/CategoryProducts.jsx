import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react';


import { useGetProductsByCategoryQuery, } from '../../services/shopServices'
import { useSelector } from 'react-redux'
import ProductsDashboard from '../../components/ProductsDashboard'

import ProductCard from '../../components/Cards/ProductCard';

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
            <ProductsDashboard data={productList} navigation={navigation} />
        </SafeAreaView>
    )
}

export default CategoryProducts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        shadowColor: 'rgba(0, 0, 0, 0.5)', // Color de la sombra
        shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
        shadowOpacity: 1, // Opacidad de la sombra
        shadowRadius: 10, // Radio de la sombra
        elevation: 5, // Elevación en Android
        backgroundColor: 'white', // Fondo del contenedor
        marginBottom:10,
        borderRadius:50,
    }
})