import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainScreen from '../screens/MainScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}>

            <Tab.Screen
                name='ShopStack'
                component={MainScreen}
                />

        </Tab.Navigator>
    )
}

export default TabNavigator;

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#ccc',
        elevation: 1,
        position: 'absolute',
        bottom: 10,
        left: 20,
        right: 20,
        borderRadius: 20,
        height: 50,
    }
})