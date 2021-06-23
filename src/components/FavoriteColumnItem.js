import React, {Component} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Rating} from 'react-native-ratings';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_djpm0QdOAgvKxQhB3EZuT6JPHn1FcSDaw&usqp=CAU';

export default class FavoriteColumnItem extends Component{

    constructor(){
        super();
        this.state = {
            favorite: false
        }
        this.addToFavorite = this.addToFavorite.bind(this);
        this.ratingCompleted = this.ratingCompleted.bind(this);
        this.navigateToProductScreen = this.navigateToProductScreen.bind(this);
        this.navigateToBagScreen = this.navigateToBagScreen.bind(this);
    }

    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }

    addToFavorite(){
        let {favorite} = this.state;
        this.setState({favorite: !favorite});
    }

    navigateToProductScreen(){
        let {navigation} = this.props;
        navigation.navigate('Product');
    }

    navigateToBagScreen(){
        let {navigation} = this.props;
        navigation.navigate('Bag');
    }
    
    render(){
        return (
            <TouchableOpacity style={styles.container} onPress={this.navigateToProductScreen}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: imageUrl}} style={styles.image}/>
                </View>
                <View style={styles.column}>
                    <Text style={styles.title}>Evening Dress</Text>
                    <Text style={styles.seller}>Dorothy Perkins</Text>
                    <View style={styles.ratingContainer}>
                        <Rating
                            type='star'
                            ratingCount={5}
                            imageSize={16}
                            readonly
                            jumpValue={1}
                            fractions={1}
                            startingValue={3}
                            style={styles.rating}
                        />
                        <Text style={styles.ratingCount}>(10)</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.previousPrice}>15$</Text>
                        <Text style={styles.newPrice}>12$</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.clearButton}>
                    <MaterialIcons name="clear" size={26}/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.cartButton} 
                    onPress={this.navigateToBagScreen}
                    activeOpacity={.5}>
                    <MaterialIcons name='shopping-bag' size={20} color='white'/>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 3,
        width: '100%'
    },
    imageContainer: {
        width: 120,
    },
    image: {
        height: '100%',
        borderRadius: 10
    },
    column: {
        flexDirection: 'column',
        paddingLeft: 15
    },
    cartButton: {
        height: 44,
        width: 44,
        elevation: 5,
        backgroundColor: 'red',
        borderRadius: 22,
        position: 'absolute',
        bottom: -15,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10
    },
    discountContainer: {
        backgroundColor: 'red',
        height: 30,
        width: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        margin: 10
    },
    discount: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 2
    },
    ratingContainer: {
        alignSelf: 'flex-start',
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    rating: {
        color: "white",
        backgroundColor: "white"
    },
    ratingCount: {
        marginLeft: 10,
        fontSize: 12
    },
    seller: {
        fontSize: 12
    },  
    title: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    },  
    priceContainer: {
        flexDirection: 'row'
    },
    previousPrice: {
        fontSize: 16,
        textDecorationLine: 'line-through',
        fontWeight: 'bold',
    },
    newPrice: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold',
        marginLeft: 5
    },
    clearButton: {
        position: 'absolute',
        right: 10,
        margin: 5,
        zIndex: 10
    }
})