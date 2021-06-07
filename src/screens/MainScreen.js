import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

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
import { TouchableOpacity } from 'react-native';
import OrderScreen from './OrderScreen';
import OrderDetails from './OrderDetails';
import SettingScreen from './SettingScreen';

const Tab = createBottomTabNavigator();

const FavoriteStack = createStackNavigator();
const BagStack = createStackNavigator();
const ProfileStack = createStackNavigator();

function FavoriteStackScreen(){
    return (
        <FavoriteStack.Navigator>
            <FavoriteStack.Screen 
                name="Favorite"
                component={FavoriteScreen}
                options={{
                    headerTitleStyle: {alignSelf: 'center'},
                    headerRight: function(){
                        return (
                            <TouchableOpacity>
                                <MaterialIcons name="search" size={24} color="black"/>
                            </TouchableOpacity>
                        )
                    }, headerRightContainerStyle: {paddingRight: 20}
                }}
            />
        </FavoriteStack.Navigator>
    )
}

function BagStackScreen(){
    return (
        <BagStack.Navigator>
            <BagStack.Screen 
                name="My Bag"
                component={BagScreen}
                options={{
                    headerTitleStyle: {alignSelf: 'center', color: 'black'},
                    headerRight: function(){
                        return (
                            <TouchableOpacity>
                                <MaterialIcons name="search" size={24} color="black"/>
                            </TouchableOpacity>
                        )
                    }, headerRightContainerStyle: {paddingRight: 20}
                }}
            />
        </BagStack.Navigator>
    )
}

const profileOptions = {
    // title: "Order Details",
    headerTitleAlign: 'center',
    headerTitleStyle: { color: 'black'},
    headerRight: function(){
        return (
            <TouchableOpacity>
                <MaterialIcons name="search" size={24} color="black"/>
            </TouchableOpacity>
        )
    }, headerRightContainerStyle: {paddingRight: 20}
}

function ProfileStackScreen(){
    return (
        <ProfileStack.Navigator initialRouteName="Settings">
            <ProfileStack.Screen 
                name="Profile"
                component={ProfileScreen}
                options={profileOptions}
            />
            <ProfileStack.Screen 
                name="Order"
                component={OrderScreen}
                options={profileOptions}
            />
            <ProfileStack.Screen 
                name="OrderDetails"
                component={OrderDetails}
                options={profileOptions}
            />
            <ProfileStack.Screen 
                name="Settings"
                component={SettingScreen}
                options={profileOptions}
            />
        </ProfileStack.Navigator>
    )
}


export default function MainScreen(){
    return (
        <Tab.Navigator
            initialRouteName='Profile'
            lazy={true}
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
            <Tab.Screen name="Bag" component={BagStackScreen}/>
            <Tab.Screen name="Favorite" component={FavoriteStackScreen}/>
            <Tab.Screen name="Profile" component={ProfileStackScreen}/>
        </Tab.Navigator>
    )
}