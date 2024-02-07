import { FlatList, StyleSheet, Text, View } from 'react-native'

import { useGetProductsQuery } from '../services/shopServices'

import OfferCards from './Cards/OfferCards'
import { useEffect, useState } from 'react'

const OfferDashboard = ({
  data,
  navigation
}) => {

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) {
      const filtered = data.filter(item => item.offer !== 0 && item.offer!==1);
      setFilteredData(filtered);
    }
  }, [data]);

  const renderItem = ({ item }) => (
    <OfferCards item={item} navigation={navigation} />
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
    paddingHorizontal: 15,
    paddingBottom:10
  },
  title: {
    fontSize: 25,
    padding:5
  }
})