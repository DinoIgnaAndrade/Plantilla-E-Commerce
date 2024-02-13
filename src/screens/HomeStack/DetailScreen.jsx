import { ScrollView, Pressable, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Carrousel from '../../components/Cards/Carrousel'
import LoadingIndicator from '../../components/LoadingIndicator';

import { useGetProductsByIdQuery } from '../../services/shopServices'
import { addItem } from '../../features/cartSlice';

const DetailScreen = () => {

  const [product, setProduct] = useState();
  const id = useSelector(state => state.shopReducer.productIdSelected);
  const { data, isLoading, error } = useGetProductsByIdQuery(id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && data) {
      const productT = Object.values(data);
      setProduct(productT[0]);
    } else if (error) {
      console.error('Error al obtener producto', error);
    }
  }, [isLoading, data, error]);

  const onAddToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
  }

  return (
    !product ? (
      <LoadingIndicator />
    ) : (
      <ScrollView style={styles.container}>
        {
          product.offer == 0
            ?
            null
            :
            <Text style={styles.percentage}>{((1 - product.offer) * 100).toFixed(0)}%</Text>
        }
        <Carrousel product={product} />
        <View
          style={styles.textContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.Description}</Text>
        </View>

        <View styles={styles.buttomContainer}>
          {
            product.offer == 0
              ?
              <View style={styles.priceContainer}>
                <Text style={styles.price}>${product.price}</Text>
                <Pressable
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed ? 'rgba(50, 50, 50, 0.5)' : 'black',
                      borderRadius: 30,
                    },
                    styles.buttom
                  ]}
                  android_ripple={{ color: 'rgba(255, 255, 255, 0.9)' }}
                  onPress={onAddToCart}>
                  <Text style={styles.textButtom}>Agregar</Text>
                </Pressable>
              </View>
              :
              <View style={styles.offerContainer}>
                <Text style={styles.priceOffer}>${product.price}</Text>
                <Text style={styles.offer}>${(product.price * product.offer).toFixed(2)}</Text>
                <Pressable
                  onPress={onAddToCart}
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed ? 'rgba(50, 50, 50, 0.5)' : 'black',
                      borderRadius: 30,
                    },
                    styles.buttom
                  ]}
                  android_ripple={{ color: 'rgba(255, 255, 255, 0.9)' }}
                >
                  <Text style={styles.textButtom}>Agregar</Text>
                </Pressable>
              </View>
          }
        </View>

      </ScrollView>
    )
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  percentage: {
    position: 'absolute',
    fontSize: 40,
    borderRadius: 50,
    zIndex: 1,
    width: 135,
    textAlign: 'center',

    backgroundColor: 'black',
    color: 'white',

    top: 30,
    right: 0,
    transform: [{ rotate: '45deg' }],
  },
  textContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 70,
    shadowColor: 'rgba(0, 0, 0, 0.5)', // Color de la sombra
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 1, // Opacidad de la sombra
    shadowRadius: 10, // Radio de la sombra
    elevation: 5, // Elevación en Android
    backgroundColor: 'white', // Fondo del contenedor
  },
  title: {
    borderRadius: 100,
    paddingLeft: 30,
    paddingVertical: 15,
    color: 'white',
    backgroundColor: 'black',
    fontSize: 50
  },
  description: {
    fontSize: 30,
    padding: 20,
    paddingBottom: 30
  },
  buttomContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  price: {
    alignSelf: 'center',
    fontSize: 40,
    padding: 10
  },
  priceContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 150,
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: 10,

    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: 'white',

  },
  offerContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    alignSelf: 'center',
    marginTop: 100,
    marginBottom: 10,

    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: 'white',
  },
  priceOffer: {
    fontSize: 20,
    textDecorationLine: 'line-through',
    alignSelf: 'center',
    margin: 10,
    color: 'grey'
  },
  offer: {
    alignSelf: 'center',
    fontSize: 40,
    padding: 10
  },
  buttom: {
    backgroundColor: 'black',
    alignItems: 'center',
    borderRadius: 50,
    width: 150,
    alignSelf: 'center'
  },
  textButtom: {
    padding: 10,
    color: 'white',
    fontSize: 40
  },
})