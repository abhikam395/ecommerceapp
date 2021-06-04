import React, {Component} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SIZES = [
    {id: 1, name: 'XS'},
    {id: 2, name: 'S'},
    {id: 3, name: 'M'},
    {id: 4, name: 'L'},
    {id: 5, name: 'XL'},
]

export default class SelectSizeBottomSheet extends Component{

    constructor(){
        super();
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem({item}){
        return (
            <TouchableOpacity style={styles.sizeItem}>
                <Text style={styles.sizeItemTitle}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Select Size</Text>
                <FlatList
                    columnWrapperStyle={{justifyContent: 'space-between', marginTop: 20,}}
                    data={SIZES}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id.toString()}
                    numColumns={3}
                />
                <TouchableOpacity 
                    style={styles.sizeInfo} 
                    activeOpacity={.5}>
                    <Text style={styles.sizeInfoTitle}>Size Info</Text>
                    <MaterialIcons 
                        name="arrow-forward-ios" 
                        style={styles.sizeInfoIcon} size={16}/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.addToCartButton} 
                    activeOpacity={.5}>
                    <Text style={styles.addToCartButtonTitle}>ADD TO CART</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    
    },
    sizeItem: {
        width: '30.3%',
        backgroundColor: 'white',
        borderWidth: 1,
        height: 50,
        borderRadius: 10,
        borderColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sizeItemTitle: {
        color: 'black'
    },
    sizeInfoTitle: {
        fontSize: 17
    },
    sizeInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        alignItems: 'center',
        borderColor: 'lightgrey',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        height: 54,
        marginVertical: 30,
        paddingHorizontal: 20
        
    },
    sizeInfoIcon: {
        marginLeft: 'auto'
    },
    addToCartButton: {
        height: 56,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 28,
        backgroundColor: 'red',
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addToCartButtonTitle: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }

})