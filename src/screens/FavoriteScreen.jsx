import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import LoginScreen from './LogStack/LoginScreen'

const FavoriteScreen = () => {

  return (
      <SafeAreaView style={styles.container}>
        <Text>Login</Text>
        <LoginScreen/>
      </SafeAreaView>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  container:{
  }
})