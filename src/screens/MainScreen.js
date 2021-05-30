import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import ShopScreen from './ShopScreen';
import BagScreen from './BagScreen';
import FavoriteScreen from './FavoriteScreen';
import ProfileScreen from './ProfileScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function MainScreen(){
    return (
        <Tab.Navigator
            initialRouteName="Shop"
            shifting={true}
            activeColor='red'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName, colorName;
        
                    if (route.name === 'Home') {
                        colorName = focused ? 'red' : 'grey';
                        iconName = focused ? 'home' : 'home-outline';
                        return <Ionicons name={iconName} size={22} color={colorName}/>
                    } 
                    else if (route.name === 'Shop') {
                        colorName = focused ? 'red' : 'grey';
                        iconName = focused ? 'shopping-cart' : 'add-shopping-cart';
                        return <MaterialIcons name={iconName} size={22} color={colorName}/>
                    }
                    else if (route.name === 'Bag') {
                        colorName = focused ? 'red' : 'grey';
                        return focused ? 
                            <EntypoIcons name="shopping-bag" size={22} color={colorName}/> : 
                                <FeatherIcons name="shopping-bag" size={22} color={colorName}/> 
                            
                    }
                    else if (route.name === 'Favorite') {
                        colorName = focused ? 'red' : 'grey';
                        iconName = focused ? 'favorite' : 'favorite-border';
                        return <MaterialIcons name={iconName} size={22} color={colorName}/>
                    }
                    else if (route.name === 'Profile') {
                        colorName = focused ? 'red' : 'grey';
                        iconName = focused ? 'user' : 'user-o';
                        return <FontAwesome name={iconName} size={22} color={colorName}/>
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: 'red',
                inactiveTintColor: 'gray',
                style: {
                    height: 57,
                    flexDirection: 'row',
                    padding: 10
                }
              }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Shop" component={ShopScreen} />
            <Tab.Screen name="Bag" component={BagScreen}/>
            <Tab.Screen name="Favorite" component={FavoriteScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
        </Tab.Navigator>
    )
}