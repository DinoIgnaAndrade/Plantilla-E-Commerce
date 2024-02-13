import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';

import { AntDesign } from '@expo/vector-icons';

import ProductCard from '../components/Cards/ProductCard'

const CartScreen = ({ navigation }) => {

  const items = useSelector(state => state.cartReducer.items)

  const renderProducts = ({ item }) => {
    const itemQuantity = item.quantity; // Obtiene la cantidad del producto actual
    return (
      <View style={styles.renderContainer}>
        <ProductCard item={item} navigation={navigation} />

        <View>
          <Pressable style={styles.renderText}><AntDesign name="plus" size={24} color="black" /></Pressable>
          <Text style={styles.renderText}>{itemQuantity}</Text>
          <Pressable style={styles.renderText}><AntDesign name="minus" size={24} color="black" /></Pressable>
        </View>

      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Carrito</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
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
    marginTop: 30,
    marginHorizontal: 15
  },
  title: {
    fontSize: 30
  },
  renderContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center'
  },
  renderText: {
    textAlign:'center',
    color: 'black',
    fontSize: 30,
    padding: 30
  }
})
