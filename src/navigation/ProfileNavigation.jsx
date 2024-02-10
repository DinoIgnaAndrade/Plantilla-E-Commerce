import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

//vistas
import ProfileScreen from "../screens/ProfileStack/ProfileScreen";
import LoginScreen from "../screens/ProfileStack/LoginScreen";
import SignUpScreen from "../screens/ProfileStack/SignUpScreen"

const Stack = createNativeStackNavigator();

const ProfileNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            cardShadowEnabled={true}
            screenOptions={{
                headerShown: false,
                animationEnabled: true,
            }}
        >
            <Stack.Screen
                name='Profile'
                component={ProfileScreen}
            />

            <Stack.Screen
                name='Login'
                component={LoginScreen}
            />

            <Stack.Screen
                name='SignUp'
                component={SignUpScreen}
            />
        </Stack.Navigator>
    )
}

export default ProfileNavigation

const styles = StyleSheet.create({})