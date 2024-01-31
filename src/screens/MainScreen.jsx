import { StyleSheet, Text, View } from 'react-native'
import { useGetCategoriesQuery } from '../services/shopServices'

const MainScreen = () => {

    const {data, isLoading,error} = useGetCategoriesQuery()
    console.log(data)

  return (
    <View>
      <Text>MainScreen</Text>
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({

})