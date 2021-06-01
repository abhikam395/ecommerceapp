import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const categories = [
    {id: 1, name: 'All'},
    {id: 2, name: 'Women'},
    {id: 3, name: 'Men'},
    {id: 4, name: 'Boys'},
    {id: 5, name: 'Girls'},
];

export default class FilterCategoryListComponent extends Component{

    constructor(){
        super();
        this.state = {
            selectedCategoryId: 1
        }
        this.renderItem = this.renderItem.bind(this);
    }

    selectCategory(id){
        this.setState({selectedCategoryId: id});
    }

    renderItem({item}){
        let {selectedCategoryId} = this.state;
        let itemStyle = item.id == selectedCategoryId ? 
            Object.assign({...styles.item}, {backgroundColor: 'red', borderColor: 'red'}) :
            styles.item;
        let titleStyle = item.id == selectedCategoryId ? 
            Object.assign({...styles.title}, {color: 'white'}) : styles.title;


        return (
            <TouchableOpacity style={itemStyle} 
                onPress={this.selectCategory.bind(this, item.id)}>
                <Text style={titleStyle}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    render(){
        return (
            <FlatList
                style={styles.list}
                data={categories}
                renderItem={this.renderItem}
                numColumns={3}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                ItemSeparatorComponent={() => <View style={styles.separator}/>}
                keyExtractor={item => item.id.toString()}
            />
        )
    }
}

const styles = StyleSheet.create({
    list: {
        width: '100%',
        padding: 20
    },
    item: {
        height: 45,
        borderWidth: 1,
        minWidth: 100,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'lightgrey'
    },
    title: {
        color: 'black'
    },
    separator: {
        height: 10,
    }
})