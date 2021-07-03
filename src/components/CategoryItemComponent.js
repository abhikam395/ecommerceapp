import React, {Component} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const imageUrl = 'https://www.thoughtco.com/thmb/C7RiS4QG5TXcBG2d_Sh9i4hFpg0=/3620x2036/smart/filters:no_upscale()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg';

export default class CategoryItemComponent extends Component{

    constructor(props){
        super(props);
        this.navigateToCatalogScreen = this.navigateToCatalogScreen.bind(this);
    }

    navigateToCatalogScreen(){
        let {navigation} = this.props;
        navigation.navigate('Catalog');
    }

    render(){
        let {title} = this.props;
        return (
            <TouchableOpacity 
                style={styles.container} 
                activeOpacity={.5} 
                onPress={this.navigateToCatalogScreen}>
                <Image style={styles.image} source={{uri: imageUrl}}/>
                <View style={styles.leftContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'row',
        elevation: 1,
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 20,
        color: 'black',
    },
    image: {
        flex: 1,
        resizeMode: 'stretch',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    }
})