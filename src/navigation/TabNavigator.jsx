import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Easing, Animated } from 'react-native';


import { AntDesign } from '@expo/vector-icons';

import HomeNavegation from './HomeNavigation';
import FavoriteScreen from '../screens/FavoriteScreen';
import CartScreen from '../screens/CartScreen';
import ProfileNavigation from './ProfileNavigation';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {


    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                tabBarHideOnKeyboard: true,
            }}>

            <Tab.Screen
                name='HomeStack'
                component={HomeNavegation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <AntDesign
                            name="home"
                            size={focused ? 50 : 30 }
                            color={focused ? 'black' : 'white'}
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
                            size={focused ? 40 : 30 }
                            color={focused ? 'black' : 'white'}
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
                            size={focused ? 40 : 30 }
                            color={focused ? 'black' : 'white'}
                            style={focused ? styles.focusedIcon : styles.unfocusedIcon}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name='ProfileStack'
                component={ProfileNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <AntDesign
                            name="user"
                            size={focused ? 40 : 30 }
                            color={focused ? 'black' : 'white'}
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
        backgroundColor:'black',
        borderTopLeftRadius: 20,
        borderTopEndRadius:20
    },
    focusedIcon: {
        position:'absolute',
        bottom:15,
        zIndex: 1,
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 5,
    },
    unfocusedIcon: {
    },
})