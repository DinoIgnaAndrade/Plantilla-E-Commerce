import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign } from '@expo/vector-icons';

import HomeNavegation from './HomeNavigation';
import FavoriteScreen from '../screens/FavoriteScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

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
                name='HomeStack'
                component={HomeNavegation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <AntDesign
                            name="home"
                            size={40}
                            color={focused ? 'white' : 'black'}
                            style={focused ? styles.focusedIcon : styles.unfocusedIcon}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name='FavoriteStack'
                component={FavoriteScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <AntDesign
                            name="hearto"
                            size={40}
                            color={focused ? 'white' : 'black'}
                            style={focused ? styles.focusedIcon : styles.unfocusedIcon}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name='CartStack'
                component={CartScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <AntDesign
                            name="shoppingcart"
                            size={40}
                            color={focused ? 'white' : 'black'}
                            style={focused ? styles.focusedIcon : styles.unfocusedIcon}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name='ProfileStack'
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <AntDesign
                            name="user"
                            size={40}
                            color={focused ? 'white' : 'black'}
                            style={focused ? styles.focusedIcon : styles.unfocusedIcon}
                        />
                    ),
                }}
            />

        </Tab.Navigator>


    )
}

export default TabNavigator;

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#ccc',
        elevation: 5,
        position: 'absolute',
        bottom: 10,
        left: 20,
        right: 20,
        borderRadius: 20,
        height: 55,
    },
    focusedIcon: {
        zIndex: 1,
        backgroundColor: 'black',
        borderRadius: 30,
        padding: 5,
    },
    unfocusedIcon: {
    },
})