import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

//vistas
import HomeScreen from "../screens/HomeStack/HomeScreen"
import CategoryProducts from "../screens/HomeStack/CategoryProducts";


const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            cardShadowEnabled={true}
            screenOptions={{
                headerShown: false,
                animationEnabled: true,
            }}
        >
            <Stack.Screen
                name='Home'
                component={HomeScreen}
            />

            <Stack.Screen
                name='Category'
                component={CategoryProducts}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigation

const styles = StyleSheet.create({})