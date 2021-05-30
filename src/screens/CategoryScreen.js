import React, {Component} from 'react';
import { Text, View } from 'react-native';

import MenCategoryScreen from './MenCategoryScreen';
import WomenCategoryScreen from './WomenCategoryScreen';
import KidsCategoryScreen from './KidsCategoryScreen';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

export default class CategoryScreen extends Component{
    render(){
        return (
            <Tab.Navigator
                initialRouteName="Women"
                tabBarOptions={{
                    labelStyle: {fontWeight: 'bold'},
                    indicatorStyle: {backgroundColor: 'red', height: 3}
                }}>
                <Tab.Screen name="Men" component={MenCategoryScreen} />
                <Tab.Screen name="Women" component={WomenCategoryScreen} />
                <Tab.Screen name="Kids" component={KidsCategoryScreen} />
            </Tab.Navigator>
        )
    }
}