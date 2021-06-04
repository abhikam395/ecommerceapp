import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Rating} from 'react-native-ratings';
import NewItemComponent from './../components/NewItemComponent';

import RBSheet from "react-native-raw-bottom-sheet";
import { createRef } from 'react';
import SelectSizeBottomSheet from '../components/SelectSizeBottomSheet';

const imageUrl = 'https://img.freepik.com/free-photo/dark-haired-woman-with-red-lipstick-smiles-leans-stand-with-clothes-holds-package-pink-background_197531-17609.jpg?size=626&ext=jpg';

const images = [
    {id: 1, url: imageUrl},
    {id: 2, url: imageUrl},
    {id: 3, url: imageUrl},
    {id: 4, url: imageUrl},
]

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

export default class ProductScreen extends Component{

    constructor(){
        super();
        this.state = {
            favoriteButtonSelected: false,

        }
        this.bottomSheet = createRef();
        this.onFavoriteSelected = this.onFavoriteSelected.bind(this);
        this.renderImageItem = this.renderImageItem.bind(this);
        this.renderNewProduct = this.renderNewProduct.bind(this);
        this.showSizeBottomSheet = this.showSizeBottomSheet.bind(this);
    }

    showSizeBottomSheet(){
        this.bottomSheet.current.open();
    }

    onFavoriteSelected(){
        let {favoriteButtonSelected} = this.state;
        this.setState({favoriteButtonSelected: !favoriteButtonSelected});
    }

    renderImageItem({item}){
        return (
            <View style={styles.imageContainer}>
                <Image source={{uri: item.url}} style={styles.image}/>
            </View>
        )
    }

    renderNewProduct(){
        return <NewItemComponent {...this.props}/>
    }

    renderBottomSheet(){
        return (
            <RBSheet
                ref={this.bottomSheet}
                height={400}
                openDuration={250}
                closeOnDragDown
          >
            <SelectSizeBottomSheet />
          </RBSheet>
        )
    }

    render(){
        let {favoriteButtonSelected} = this.state;
        return (
            <View style={{flex: 1}}>
                <FlatList 
                    ListEmptyComponent={
                        <View style={{paddingBottom: 80}}>
                            <FlatList
                                data={images}
                                horizontal
                                renderItem={this.renderImageItem}
                                showsHorizontalScrollIndicator={true}
                                contentContainerStyle={{height: 400}}
                                keyExtractor={item => item.id.toString()}
                                style={{height: 400}}
                                ItemSeparatorComponent={() => <View style={styles.imageItemSeparator}/>} 
                            /> 
                            <View style={styles.row}>
                                <TouchableOpacity
                                    activeOpacity={.5} 
                                    style={styles.sizeContainer}
                                    onPress={this.showSizeBottomSheet}>
                                    <Text style={styles.sizeTitle}>Size</Text>
                                    <MaterialIcons 
                                        name="keyboard-arrow-down" 
                                        style={styles.arrowIcon} 
                                        size={20}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={.5}  
                                    style={styles.colorContainer}>
                                    <Text style={styles.colorTitle}>Black</Text>
                                    <MaterialIcons 
                                        name="keyboard-arrow-down" 
                                        style={styles.arrowIcon} 
                                        size={20}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={.5} 
                                    style={styles.favoriteButton} 
                                    onPress={this.onFavoriteSelected}>
                                    <MaterialIcons 
                                        name={favoriteButtonSelected ? "favorite" : "favorite-outline" } 
                                        size={20}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.productInfo}>
                                <View style={styles.productNameRow}>
                                    <Text style={styles.productName}>H&M</Text>
                                    <Text style={styles.productPrice}>$19.99</Text>
                                </View>
                                <Text style={styles.productCategory}>Short black dress</Text>
                                <Rating
                                    type='star'
                                    ratingCount={5}
                                    imageSize={16}
                                    readonly
                                    jumpValue={1}
                                    startingValue={3}
                                    style={styles.rating}
                                    />
                                <Text style={styles.productDescription}>A short dress looks pretty, feminine and gorgeous. Whether you are attending parties or going out on a date, you can wear a short dress to look fashionable. In the eighteenth century, loosely fitted short gowns, which were commonly called frocks were worn by women of the upper classes.</Text>
                            </View>
                            <View style={styles.divider}/>
                            <View style={styles.option}>
                                <Text style={styles.optionTitle}>Items details</Text>
                                <MaterialIcons 
                                    name="arrow-forward-ios" 
                                    style={styles.optionIcon} size={16}/>
                            </View>
                            <View style={styles.divider}/>
                            <View style={styles.option}>
                                <Text style={styles.optionTitle}>Shipping info</Text>
                                <MaterialIcons 
                                    name="arrow-forward-ios" 
                                    style={styles.optionIcon} size={16}/>
                            </View>
                            <View style={styles.divider}/>
                            <View style={styles.option}>
                                <Text style={styles.optionTitle}>Support</Text>
                                <MaterialIcons 
                                    name="arrow-forward-ios" 
                                    style={styles.optionIcon} size={16}/>
                            </View>
                            <View style={styles.divider}/>
                            <View style={styles.newProductsContainer}>
                                <View style={styles.newProductRow}>
                                    <Text style={styles.label}>You can also like this</Text>
                                    <Text style={styles.itemLabel}>{DATA.length} items</Text>
                                </View>
                                <FlatList
                                    style={styles.productList}
                                    data={DATA}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={this.renderNewProduct}
                                    keyExtractor={item => item.id}
                                    ItemSeparatorComponent={() => <View style={styles.newItemSeparator}/>}
                                />
                            </View>
                        </View>
                    }
                />
                <TouchableOpacity 
                    style={styles.addToCartButton} 
                    activeOpacity={.5}>
                    <Text style={styles.addToCartButtonTitle}>ADD TO CART</Text>
                </TouchableOpacity>
                {this.renderBottomSheet()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    content: {
        flex: 1,
    },
    header: {
        height: 400,
        width: '100%'
    },
    imageContainer: {
        height: 400
    },
    image: {
        height: 400,
        width: 250
    },
    imageItemSeparator: {
        width: 5
    },
    row: {
        flexDirection: 'row',
        marginVertical: 20,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sizeContainer: {
        height: 40,
        backgroundColor: 'white',
        width: 140,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'red',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    sizeTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    arrowIcon: {
        marginLeft: 'auto',
    },
    colorContainer: {
        height: 40,
        backgroundColor: 'white',
        width: 140,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    colorTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    favoriteButton: {
        height: 40,
        width: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    favoriteIcon: {

    },

    productInfo: {
        paddingHorizontal: 10
    },
    productNameRow: {
        flexDirection: 'row'
    },
    productName: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'black'
    },
    productPrice: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 'auto'
    },
    rating: {
        alignSelf: 'flex-start',
        marginVertical: 8,
    },
    productCategory: {
        fontSize: 13
    },
    divider: {
        borderTopWidth: 1,
        width: '100%',
        borderColor: 'lightgrey',
        marginVertical: 15
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    optionTitle: {
        fontSize: 16
    },
    optionIcon: {
        marginLeft: 'auto'
    },
    newProductRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemLabel: {
        marginLeft: 'auto',
        fontSize: 12
    },
    newProductsContainer: {
        padding: 15
    },
    label: {
        fontSize: 18,
        color: 'black'
    },
    productList: {
        marginVertical: 15
    },
    newItemSeparator: {
        width: 13
    },
    addToCartButton: {
        height: 56,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 28,
        position: 'absolute',
        backgroundColor: 'red',
        bottom: 20,
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