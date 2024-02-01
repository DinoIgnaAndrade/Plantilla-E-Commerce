import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import OfferDashboard from '../components/OfferDashboard'
import CategoryDashboard from '../components/CategoryDashboard'
import ProductsDashboard from '../components/ProductsDashboard'

const MainScreen = () => {



  return (
      <View style={styles.container}>
        <OfferDashboard />
        <CategoryDashboard/>
        <ProductsDashboard/>
      </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container:{
  }
})