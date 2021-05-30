import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgetPasswordScreen from './src/screens/ForgetPasswordScreen';
import MainScreen from './src/screens/MainScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="SignIn" component={SignInScreen}/>
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen}/>
        <Stack.Screen name="Main" component={MainScreen}/>
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
