import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BrandScreen from '../screens/BrandScreen';
import FilterScreen from '../screens/FilterScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import MainScreen from '../screens/MainScreen';
import ProductScreen from '../screens/ProductScreen';
import ReviewScreen from '../screens/ReviewScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
const Stack = createStackNavigator();

export default function(){
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Main" 
                screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignUp" component={SignUpScreen}/>
                <Stack.Screen name="SignIn" component={SignInScreen}/>
                <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen}/>
                <Stack.Screen name="Main" component={MainScreen}/>
                <Stack.Screen 
                    name="Product" 
                    component={ProductScreen} 
                    options={{headerShown: true, headerTitle: 'Short Dress', headerTitleAlign: 'center'}}
                    />
                <Stack.Screen 
                    name="Filters" 
                    component={FilterScreen} 
                    options={{headerShown: true}}
                />
                <Stack.Screen 
                    name="Brand" 
                    component={BrandScreen} 
                    options={{headerShown: true}}
                />
                <Stack.Screen 
                    name="Review" 
                    component={ReviewScreen} 
                    options={{headerShown: true, headerTitle: 'Rating and reviews', headerTitleAlign: 'center'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}