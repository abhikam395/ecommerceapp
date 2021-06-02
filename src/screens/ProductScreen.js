import React, {Component} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const imageUrl = 'https://img.freepik.com/free-photo/dark-haired-woman-with-red-lipstick-smiles-leans-stand-with-clothes-holds-package-pink-background_197531-17609.jpg?size=626&ext=jpg';

const images = [
    {id: 1, url: imageUrl},
    {id: 2, url: imageUrl},
    {id: 3, url: imageUrl},
    {id: 4, url: imageUrl},
]

export default class ProductScreen extends Component{

    constructor(){
        super();
        this.state = {
            favoriteButtonSelected: false
        }
        this.onFavoriteSelected = this.onFavoriteSelected.bind(this);
        this.renderImageItem = this.renderImageItem.bind(this);
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

    render(){
        let {favoriteButtonSelected} = this.state;
        return (
            <View style={styles.container}>
                <FlatList
                    data={images}
                    horizontal
                    renderItem={this.renderImageItem}
                    showsHorizontalScrollIndicator={true}
                    contentContainerStyle={{height: 400}}
                    style={{height: 400}}
                    ItemSeparatorComponent={() => <View style={styles.imageItemSeparator}/>}
                />
                <View style={styles.row}>
                    <TouchableOpacity
                        activeOpacity={.5} 
                        style={styles.sizeContainer}>
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
                    <Text style={styles.productName}>H&M</Text>
                    <Text style={styles.productPrice}>$19.99</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
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
        paddingHorizontal: 20,
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

    }
})