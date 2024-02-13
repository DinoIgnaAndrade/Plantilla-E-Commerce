import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import UserIformation from '../../components/CardsInformation/UserInformation';
import DireccionInformation from '../../components/CardsInformation/DireccionInformation';
import CardLogout from '../../components/CardsInformation/CardLogout';
import AuthButtom from '../../components/Inputs/AuthButtom';
import OrdersInformation from '../../components/CardsInformation/OrdersInformation';


const ProfileScreen = ({ navigation }) => {

  const user = useSelector(state => state.authReducer.user)
  
  useEffect(() => {
    console.log('Login State: ', user);
  }, [user]); 

  return (
    <SafeAreaView>

      {
        !user
          ?
          <ImageBackground
            source={require("../../../assets/img/background.jpg")} // Ruta de la imagen
            style={styles.background}
            resizeMode="cover"
          >
            <View style={styles.welcomeLogo}>
              <Text style={styles.welcomeMessage}>Platillé</Text>
              <Image
                source={require("../../../assets/img/logoImage.jpg")} // Ruta de la imagen
                style={styles.image}
              />
            </View>

            <View style={styles.authContainer}>
              <AuthButtom navigation={navigation} />
            </View>
          </ImageBackground>


          :
          <View style={styles.container}>
            <UserIformation />
            <DireccionInformation />
            <OrdersInformation />
            <CardLogout />
          </View>
      }



    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    marginTop:30,
  },
  background: {
    resizeMode: "cover",
    height: 1000,
    justifyContent: 'center',
  },
  welcomeLogo:{
    alignItems: "center",
    marginBottom:300
  },
  welcomeMessage: {
    color: 'white',
    fontSize:40,
    marginBottom:30
  },
  image: {
    borderRadius: 100,
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  authContainer: {

  },
})