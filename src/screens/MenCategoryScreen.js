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

export default class MenCategoryScreen extends Component{

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
                ListHeaderComponent={() => (
                    <View style={styles.salesBanner}>
                        <Text style={styles.salesTitle}>SUMMER SALES</Text>
                        <Text style={styles.discount}>Up to 10% off</Text>
                    </View>
                )}
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
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    discount: {
        fontSize: 12,
        color: 'white'
    }
})