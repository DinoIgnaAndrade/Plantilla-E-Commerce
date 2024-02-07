import { StyleSheet, Text, View } from 'react-native'

import { useGetCategoriesQuery } from '../../services/shopServices'
import { useGetProductsQuery } from '../../services/shopServices';

import OfferDashboard from '../../components/OfferDashboard'
import CategoryDashboard from '../../components/CategoryDashboard'
import ProductsDashboard from '../../components/ProductsDashboard'
import LoadingIndicator from '../../components/LoadingIndicator';

const MainScreen = ({
  navigation
}) => {

  const { data: category, isLoading: categoryLoading, error: categoryError } = useGetCategoriesQuery()
  const { data: products, isLoading: ProductsLoading, error: producstError } = useGetProductsQuery()

  return (

    ProductsLoading && categoryLoading
      ?
      <LoadingIndicator />
      :
      <View style={styles.container}>
        <View style={styles.offerStyle}>
          <OfferDashboard data={products} navigation={navigation} />
        </View>

        <View style={styles.categoryStyle}>
          <CategoryDashboard data={category} navigation={navigation} />
        </View>

        <View style={styles.productStyle}>
          <ProductsDashboard data={products} navigation={navigation} />
        </View>
      </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:320,
    marginHorizontal:5
  },
  offerStyle: {
    marginTop: 35,
    borderRadius: 40,
    shadowColor: 'rgba(0, 0, 0, 0.5)', // Color de la sombra
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 1, // Opacidad de la sombra
    shadowRadius: 10, // Radio de la sombra
    elevation: 5, // Elevación en Android
    backgroundColor: 'white', // Fondo del contenedor
  },
  categoryStyle: {
    marginTop: 10,
    borderRadius: 40,
    shadowColor: 'rgba(0, 0, 0, 0.5)', // Color de la sombra
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 1, // Opacidad de la sombra
    shadowRadius: 10, // Radio de la sombra
    elevation: 5, // Elevación en Android
    backgroundColor: 'white', // Fondo del contenedor
  },
  productStyle: {
    marginTop: 10,
    borderRadius: 40,
    shadowColor: 'rgba(0, 0, 0, 0.5)', // Color de la sombra
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 1, // Opacidad de la sombra
    shadowRadius: 10, // Radio de la sombra
    elevation: 5, // Elevación en Android
    backgroundColor: 'white', // Fondo del contenedor
  },
})