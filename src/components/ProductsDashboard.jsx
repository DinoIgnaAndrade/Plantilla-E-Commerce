import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'

import ProductCard from './Cards/ProductCard';


const ProductsDashboard = ({ 
    
    data,
    navigation

 }) => {

    const renderItem = ({ item }) => (
        <ProductCard item={item} navigation={navigation} />
      );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Catalogo</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                style={styles.FlatList}
            />
        </SafeAreaView>
    )
}

export default ProductsDashboard

const styles = StyleSheet.create({
    container:{
        padding: 5,
        borderRadius: 10,
        overflow: 'hidden',
    },
    title: {
        fontSize: 25,
        padding:10
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    FlatList:{
        marginBottom:60
    }
})