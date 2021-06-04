import React, {Component} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Rating} from 'react-native-ratings';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_djpm0QdOAgvKxQhB3EZuT6JPHn1FcSDaw&usqp=CAU';

export default class SaleItemComponent extends Component{

    constructor(){
        super();
        this.state = {
            favorite: false
        }
        this.addToFavorite = this.addToFavorite.bind(this);
        this.ratingCompleted = this.ratingCompleted.bind(this);
        this.navigateToProductScreen = this.navigateToProductScreen.bind(this);
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
    
    render(){
        let {title} = this.props;
        let {favorite} = this.state;
        let icon = favorite ? 'favorite' : 'favorite-outline'
        return (
            <TouchableOpacity 
                style={styles.container} 
                onPress={this.navigateToProductScreen}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: imageUrl}} style={styles.image}/>
                    <TouchableOpacity 
                        style={styles.favoriteButton} 
                        onPress={this.addToFavorite}>
                        <MaterialIcons name={icon} size={22} color={favorite ? 'red' : 'grey'}/>
                    </TouchableOpacity>
                    <View style={styles.discountContainer}>
                        <Text style={styles.discount}>-20%</Text>
                    </View>
                </View>
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
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 360,
        borderRadius: 10,
    },
    imageContainer: {
        height: 250,
    },
    image: {
        height: '100%',
        borderRadius: 10
    },
    favoriteButton: {
        height: 46,
        width: 46,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 23,
        position: 'absolute',
        bottom: -25,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
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
    }
})