import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import UserIformation from '../components/CardsInformation/UserInformation'
import DireccionInformation from '../components/CardsInformation/DireccionInformation'
import CardLogout from '../components/CardsInformation/CardLogout'


const ProfileScreen = () => {

  return (
      <SafeAreaView style={styles.container}>
        <UserIformation/>
        <DireccionInformation/>
        <CardLogout/>
      </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    marginTop:20
  }
})