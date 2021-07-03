import React, {Component} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Rating} from 'react-native-ratings';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_djpm0QdOAgvKxQhB3EZuT6JPHn1FcSDaw&usqp=CAU';

export default class FavoriteItemComponent extends Component{

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
        let {favorite} = this.state;
        return (
            <TouchableOpacity style={styles.container} onPress={this.navigateToProductScreen}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: imageUrl}} style={styles.image}/>
                    <TouchableOpacity 
                        style={styles.cartButton} 
                        onPress={this.navigateToBagScreen}
                        activeOpacity={.5}>
                        <MaterialIcons name='shopping-bag' size={15} color='white'/>
                    </TouchableOpacity>
                    <View style={styles.discountContainer}>
                        <Text style={styles.discount}>-20%</Text>
                    </View>
                    <TouchableOpacity style={styles.clearButton}>
                        <MaterialIcons name="clear" size={20} color="lightgrey"/>
                    </TouchableOpacity>
                </View>
                <View style={{padding: 10}}>
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
                    <Text style={styles.seller}>Dorothy Perkins</Text>
                    <Text style={styles.title}>Evening Dress</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.previousPrice}>15$</Text>
                        <Text style={styles.newPrice}>12$</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        width: '48%',
        backgroundColor: 'white'
    },
    imageContainer: {
        height: 200,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    image: {
        height: '100%',
        resizeMode: "stretch"
    },
    cartButton: {
        height: 40,
        width: 40,
        elevation: 5,
        backgroundColor: 'red',
        borderRadius: 20,
        position: 'absolute',
        bottom: -15,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        marginRight: 10
    },
    discountContainer: {
        backgroundColor: 'red',
        height: 26,
        width: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        margin: 10
    },
    discount: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
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
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold'
    },  
    priceContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    previousPrice: {
        fontSize: 13,
        textDecorationLine: 'line-through',
        fontWeight: 'bold',
    },
    newPrice: {
        fontSize: 13,
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