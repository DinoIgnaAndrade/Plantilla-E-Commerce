import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import LoginScreen from './LogStack/LoginScreen'
import SignUpScreen from './LogStack/SignUpScreen'

const FavoriteScreen = () => {

  return (
      <SafeAreaView style={styles.container}>
        <LoginScreen/>
        {/* <SignUpScreen/> */}
      </SafeAreaView>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  container:{
  }
})