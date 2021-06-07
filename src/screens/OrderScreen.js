import React, {Component} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import OrderDeliveredScreen from './OrderDeliveredScreen';
import OrderProcessingScreen from './OrderProcessingScreen';
import OrderCancelScreen from './OrderCancelScreen';

const Tab = createMaterialTopTabNavigator();

export default class OrderScreen extends Component{
    render(){
        return (
            <Tab.Navigator
                lazy={true}>
                <Tab.Screen 
                    name="OrderDelivered" 
                    component={OrderDeliveredScreen} 
                    options={{tabBarLabel:'Delivered'}} />
                <Tab.Screen 
                    name="OrderProcessing" 
                    component={OrderProcessingScreen}
                    options={{tabBarLabel:'Processing'}}  />
                <Tab.Screen 
                    name="OrderCancel" 
                    component={OrderCancelScreen} 
                    options={{tabBarLabel:'Cancelled'}} />
            </Tab.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})