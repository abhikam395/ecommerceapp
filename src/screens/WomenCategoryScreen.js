import React, {Component, Fragment} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import CategoryItemComponent from '../components/CategoryItemComponent';

const DATA = [
    {
        id: '1',
        title: 'New',
    },
    {
        id: '2',
        title: 'Clothes',
    },
    {
        id: '3',
        title: 'Shoes',
    },
    {
        id: '4',
        title: 'Accesories',
    },
];

export default class WomenCategoryScreen extends Component{

    constructor(){
        super();
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem({item}){
        return <CategoryItemComponent title={item.title} {...this.props}/>;
    }
    
    render(){
        return (
            <FlatList style={styles.container}
                ListEmptyComponent={() => (
                    <FlatList
                        data={DATA}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                    />
                )}
                contentContainerStyle={{paddingBottom: 50}}>
                
            </FlatList>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    salesBanner: {
        height: 100,
        backgroundColor: 'red',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    salesTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
    discount: {
        fontSize: 15,
        color: 'white'
    }
})