import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import NewItemComponent from '../components/NewItemComponent';
import SaleItemComponent from '../components/SaleItemComponent';

const imageUrl = 'https://img.freepik.com/free-photo/dark-haired-woman-with-red-lipstick-smiles-leans-stand-with-clothes-holds-package-pink-background_197531-17609.jpg?size=626&ext=jpg';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',

    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

export default class HomeScreen extends Component{

    constructor(){
        super();
        this.renderSaleItem = this.renderSaleItem.bind(this);
        this.renderNewItem = this.renderNewItem.bind(this);
    }

    renderSaleItem({item}){
        return <SaleItemComponent title={item.title}/>;
    }

    renderNewItem({item}){
        return <NewItemComponent title={item.title}/>;
    }

    render(){
        return (
            <ScrollView style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" />
                <View style={styles.header}>
                    <Image source={{uri: imageUrl}} style={styles.headerImage}/>
                    <Text style={styles.headerTitle}>Street clothes</Text>
                </View>
                <View style={styles.saleContainer}>
                    <View style={styles.row}>
                        <Text style={styles.saleTitle}>Sale</Text>
                        <TouchableOpacity style={styles.viewAll}>
                            <Text style={styles.viewAllText}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.label}>Super summer sale</Text>
                    <FlatList
                        data={DATA}
                        renderItem={this.renderSaleItem}
                        contentContainerStyle={{marginVertical: 30}}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={
                            () => <View style={{width: 20}}/>
                        }
                        >

                    </FlatList>
                </View>
                <View style={styles.newClothsContainer}>
                    <View style={styles.row}>
                        <Text style={styles.newClothTitle}>New</Text>
                        <TouchableOpacity style={styles.viewAll}>
                            <Text style={styles.viewAllText}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.label}>You'ne never seen it before!</Text>
                    <FlatList
                        data={DATA}
                        renderItem={this.renderNewItem}
                        contentContainerStyle={{marginVertical: 30}}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={
                            () => <View style={{width: 20}}/>
                        }
                        >

                    </FlatList>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        height: 250,
        width: '100%'
    },
    headerImage: {
        height: '100%'
    },
    headerTitle: {
        position: 'absolute',
        bottom: 10,
        padding: 20,
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white'
    },
    saleContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    saleTitle: {
        fontSize: 33,
        fontWeight: 'bold',
        color: 'black'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewAll: {
        marginLeft: 'auto',
    },
    viewAllText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    newClothsContainer: {
        // paddingVertical: 10,
        paddingHorizontal: 10
    },
    newClothTitle: {
        fontSize: 33,
        fontWeight: 'bold',
        color: 'black'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewAll: {
        marginLeft: 'auto',
    },
    viewAllText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
})