import React, {Component} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Rating} from 'react-native-ratings';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_djpm0QdOAgvKxQhB3EZuT6JPHn1FcSDaw&usqp=CAU';

export default class NewItemComponent extends Component{

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
            <TouchableOpacity style={styles.container} onPress={this.navigateToProductScreen}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: imageUrl}} style={styles.image}/>
                    <TouchableOpacity 
                        style={styles.favoriteButton} 
                        onPress={this.addToFavorite}>
                        <MaterialIcons name={icon} size={18} color={favorite ? 'red' : 'grey'}/>
                    </TouchableOpacity>
                    <View style={styles.newTagContainer}>
                        <Text style={styles.newTag}>New</Text>
                    </View>
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
        width: 180,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    imageContainer: {
        height: 200,
    },
    image: {
        height: '100%',
        resizeMode: 'stretch',
    },
    favoriteButton: {
        height: 40,
        width: 40,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        position: 'absolute',
        bottom: -25,
        right: 10,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
    },
    newTagContainer: {
        backgroundColor: 'black',
        height: 30,
        paddingHorizontal: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        margin: 10
    },
    newTag: {
        color: 'white',
        fontSize: 11,
        letterSpacing: 1
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
        fontSize: 11
    },  
    title: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        marginVertical: 5
    },  
    priceContainer: {
        flexDirection: 'row'
    },
    previousPrice: {
        fontSize: 12,
        textDecorationLine: 'line-through',
        fontWeight: 'bold',
    },
    newPrice: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        marginLeft: 5
    }
})