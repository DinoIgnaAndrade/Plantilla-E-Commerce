import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import UserIformation from '../components/UserIformation'
import DireccionIformation from '../components/DireccionInformation'

const ProfileScreen = () => {

  return (
      <SafeAreaView style={styles.container}>
        <UserIformation/>
        <DireccionIformation/>
      </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    marginTop:40
  }
})