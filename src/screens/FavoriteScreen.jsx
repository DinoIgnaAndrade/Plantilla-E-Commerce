import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const FavoriteScreen = () => {

  const user =useSelector(state => state.authReducer.user)
  console.log('user', user)

  return (
      <SafeAreaView style={styles.container}>

      </SafeAreaView>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  container:{
  }
})