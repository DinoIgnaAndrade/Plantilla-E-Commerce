import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';

import { AntDesign } from '@expo/vector-icons';

import ProductCard from '../components/Cards/ProductCard'
import { addItem, removeItem, removeAll } from '../features/cartSlice';
import { usePostOrderMutation } from '../services/shopServices';

const CartScreen = ({ navigation }) => {

  const user = useSelector(state => state.authReducer.user)
  const name = useSelector(state => state.authReducer.name)
  const phone = useSelector(state => state.authReducer.phone)
  const localId = useSelector(state => state.authReducer.localId)
  const address = useSelector(state => state.authReducer.location?.address)

  const items = useSelector(state => state.cartReducer.items)
  const total = useSelector(state => state.cartReducer.total)
  const dispatch = useDispatch()

  const [error, setError] = useState(false);

  const [triggerPost, result] = usePostOrderMutation();

  const addToCart = (item) => {
    const newItem = { ...item, quantity: 1 }; // Crear una copia del objeto con cantidad 1
    dispatch(addItem(newItem));
  }

  const removeToCart = (item) => {
    if (item.quantity > 1) {
      dispatch(removeItem({ ...item, quantity: 1 }));
    } else {
      dispatch(removeItem(item));
    }
  }

  useEffect(() => {

    if(address){
      setError(false)
    }

  }, [address])
  

  const confirmCart = () => {
    if(address){
      triggerPost({
        user,
        name,
        phone,
        localId: localId,
        items,
        total,
        address,
        createdAt: Date.now(),
        orderId: Math.ceil(Math.random(1, 10) * 1000)
      })

      dispatch(removeAll())
    } else{
      setError(true);
    }
    
  }

  const renderProducts = ({ item }) => {
    const itemQuantity = item.quantity; // Obtiene la cantidad del producto actual
    return (
      <View style={styles.renderContainer}>
        <ProductCard item={item} navigation={navigation} />

        <View>
          <Pressable
            onPress={() => addToCart(item)}
            style={styles.renderText}>
            <AntDesign name="plus" size={24} color="black" />
          </Pressable>

          <Text style={styles.renderText}>{itemQuantity}</Text>

          <Pressable
            onPress={() => removeToCart(item)}
            style={styles.renderText}
          >
            <AntDesign name="minus" size={24} color="black" />
          </Pressable>

        </View>

      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Carrito</Text>
      {error && <Text>Error: Debes proporcionar una dirección</Text>}

      <View style={styles.buyContainer}>
        <Text style={styles.total}>Total: {total}</Text>
        <Pressable
          onPress={confirmCart}
          style={styles.buyBtn}>
          <Text style={styles.btnText}>comprar</Text>
        </Pressable>
      </View>

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
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    padding: 30
  },

  buyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 200,
    padding: 15,
  },
  total: {
    fontSize: 20
  },
  buyBtn: {
    borderRadius: 40,
    padding: 15,
    backgroundColor: 'black',
    marginRight: 25,
  },
  btnText: {
    fontSize: 20,
    color: 'white'
  }
})
