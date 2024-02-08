import { FlatList, StyleSheet, Text, View } from 'react-native'

import CategoryCard from '../Cards/CategoryCard'

const CategoryDashboard = ({

  data,
  navigation

}) => {

    const renderItem = ({ item }) => (
        <CategoryCard category={item} navigation={navigation}/>
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
        margin:8
    }
})