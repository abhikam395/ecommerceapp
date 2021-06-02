import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgetPasswordScreen from './src/screens/ForgetPasswordScreen';
import MainScreen from './src/screens/MainScreen';
import FilterScreen from './src/screens/FilterScreen';
import BrandScreen from './src/screens/BrandScreen';
import ProductScreen from './src/screens/ProductScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Product" 
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
