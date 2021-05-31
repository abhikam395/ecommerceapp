import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from './CategoryScreen';
import CatelogScreen from './CatelogScreen';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity, View } from 'react-native';

const ShopStack = createStackNavigator();

export default class ShopScreen extends Component{


    render(){
        return (
            <ShopStack.Navigator 
                initialRouteName="Catelog" 
                screenOptions={{headerTitleStyle: {alignSelf: 'center'}, 
                headerLeft: function(){
                    return (
                        <TouchableOpacity>
                            <MaterialIcons name="arrow-back-ios" size={18} color="black"/>
                        </TouchableOpacity>
                    )
                }, headerLeftContainerStyle: {paddingLeft: 20},
                headerRight: function(){
                    return (
                        <TouchableOpacity>
                            <MaterialIcons name="search" size={24} color="black"/>
                        </TouchableOpacity>
                    )
                }, headerRightContainerStyle: {paddingRight: 20}}}>
                <ShopStack.Screen name="Categories" component={CategoryScreen} />
                <ShopStack.Screen 
                    name="Catelog" 
                    component={CatelogScreen} 
                    options={{
                        headerTitle: "Women's tops", 
                        headerTintColor: 'black'
                    }}
                />
            </ShopStack.Navigator>
        )
    }
}
