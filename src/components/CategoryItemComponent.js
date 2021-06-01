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
                <View style={styles.leftContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Image style={styles.image} source={{uri: imageUrl}}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'row',
        elevation: 3,
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        color: 'black'
    },
    image: {
        flex: 1,
        resizeMode: 'stretch',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    }
})