import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'


import { useGetCategoriesQuery } from '../../services/shopServices'
import { useGetProductsQuery } from '../../services/shopServices';

import OfferDashboard from '../../components/OfferDashboard'
import CategoryDashboard from '../../components/CategoryDashboard'
import ProductsDashboard from '../../components/ProductsDashboard'

const MainScreen = ({
  navigation
}) => {

  const { data:offer, isLoading:offerLoading, error:offerError } = useGetProductsQuery()
  const { data:category, isLoading:categoriLoading, error:categoryError } = useGetCategoriesQuery()
  const { data: products, isLoading: ProductsLoading, error:producstError } = useGetProductsQuery()

  return (
      <View style={styles.container}>
        <OfferDashboard data={offer}/>
        <CategoryDashboard data={category} navigation={navigation}/>
        <ProductsDashboard data={products}/>
      </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})