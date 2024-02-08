import { StyleSheet, Text, View } from 'react-native'

import { useGetCategoriesQuery } from '../../services/shopServices'
import { useGetProductsQuery } from '../../services/shopServices';


import LoadingIndicator from '../../components/LoadingIndicator';
import CategoryDashboard from '../../components/Dashboard/CategoryDashboard';
import ProductsDashboard from '../../components/Dashboard/ProductsDashboard';
import OfferDashboard from '../../components/Dashboard/OfferDashboard';


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
    marginBottom: 320,
    marginHorizontal: 5
  },
  offerStyle: {
    marginTop: 35,
    borderRadius: 40,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
  },
  categoryStyle: {
    marginTop: 10,
    borderRadius: 40,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
  },
  productStyle: {
    marginTop: 10,
    borderRadius: 40,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
  },
})