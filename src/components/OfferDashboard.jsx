import { FlatList, StyleSheet, Text, View } from 'react-native'

import { useGetProductsQuery } from '../services/shopServices'

import OfferCards from './Cards/OfferCards'
import { useEffect, useState } from 'react'

const OfferDashboard = () => {

  const { data, isLoading, error } = useGetProductsQuery()
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) {
      const filtered = data.filter(item => item.offer !== 0);
      setFilteredData(filtered);
    }
  }, [data]);

  const renderItem = ({ item }) => (
    <OfferCards item={item} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ofertas</Text>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal={true}
      />
    </View>
  )
}

export default OfferDashboard

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 25,

  }
})