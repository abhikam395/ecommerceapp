import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import OrderItemComponent from '../components/OrderItemComponent';

const orders = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
]

export default class OrderProcessingScreen extends Component{

    constructor(){
        super();
        this.renderOrderItem = this.renderOrderItem.bind(this);
    }

    renderOrderItem({item}){
        return <OrderItemComponent status="Processing"/>
    }

    render(){
        return (
            <FlatList
                style={styles.list}
                data={orders}
                renderItem={this.renderOrderItem}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator}/>}>
            </FlatList>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        padding: 20
    },
    separator: {
        height: 30
    }
})