import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import ProductCard from '../components/Cards/ProductCard'

const CartScreen = ({ navigation }) => {

  const items = useSelector(state => state.cartReducer.items)

  console.log(items)

  const renderProducts = ({ item }) => (
    <ProductCard item={item} navigation={navigation}  />
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item}
        renderItem={renderProducts}
        columnWrapperStyle={styles.columnWrapper}
        style={styles.FlatList}
      />
    </SafeAreaView>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
  }
})