import { FlatList, StyleSheet, Text, View } from 'react-native'

import { useGetCategoriesQuery } from '../services/shopServices'
import Card from './Cards/Card'

const CategoryDashboard = () => {

    const { data, isLoading, error } = useGetCategoriesQuery()

    const renderItem = ({ item }) => (
        <Card item={item}/>
      );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item}
        renderItem={renderItem}
        horizontal={true} 
      />
    </View>
  )
}

export default CategoryDashboard

const styles = StyleSheet.create({
    container:{
        margin:10
    }
})