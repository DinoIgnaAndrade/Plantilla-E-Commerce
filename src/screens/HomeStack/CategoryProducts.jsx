import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useEffect,useState } from 'react';


import { useGetProductsByCategoryQuery, useGetProductsQuery } from '../../services/shopServices'
import { useSelector } from 'react-redux'
import ProductsDashboard from '../../components/ProductsDashboard'

const CategoryProducts = ({ navigation }) => {

    const category = useSelector(state => state.shopReducer.categorySelected)
    // const { data: products, isLoading: ProductsLoading, error: producstError } = useGetProductsByCategoryQuery(category)
    const { data: products, isLoading: ProductsLoading, error:producstError } = useGetProductsQuery()

    console.log('productos',products)

    

    return (
        <SafeAreaView style={styles.container}>
            {
                ProductsLoading
                ?
                <ActivityIndicator/>
                :
                <ProductsDashboard data={products} />
            }
            
        </SafeAreaView>
    )
}

export default CategoryProducts

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:30,
    }
})