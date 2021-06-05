import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_djpm0QdOAgvKxQhB3EZuT6JPHn1FcSDaw&usqp=CAU';

export default class    MyBagProductItem extends Component{

    constructor(){
        super();
        this.state = {
            price: 30,
            quantity: 1,
            showOptionContainer: false,
        }
        this.increaseQuantity = this.increaseQuantity.bind(this);
        this.decreaseQuantity = this.decreaseQuantity.bind(this);
        this.showOptions = this.showOptions.bind(this);
        this.optionSelected = this.optionSelected.bind(this);
    }

    increaseQuantity(){
        let {quantity} = this.state;
        this.setState({quantity: quantity + 1});
    }

    decreaseQuantity(){
        let {quantity} = this.state;
        if(quantity == 0) return;
            this.setState({quantity: quantity - 1});
    }

    showOptions(){
        this.setState({showOptionContainer: true});
    }

    optionSelected(){
        this.setState({showOptionContainer: false})
    }

    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: imageUrl}}/>
                <View style={{padding: 10, flex: 1}}>
                    <TouchableOpacity onPress={this.showOptions} 
                        style={{
                            position: 'absolute', 
                            right: 10, 
                            width: 40, 
                            height: 40,
                            padding: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Entypo 
                            name="dots-three-vertical" 
                            size={24} 
                            color="lightgrey"
                        />
                    </TouchableOpacity>
                    <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>Pullover</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{fontSize: 13}}>Color: </Text>
                            <Text style={{color: 'black'}}>Black</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                            <Text style={{fontSize: 13}}>Size: </Text>
                            <Text style={{color: 'black'}}>L</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 'auto', marginBottom: 5, alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity 
                                onPress={this.decreaseQuantity}
                                style={{
                                    height: 36, 
                                    width: 36, 
                                    elevation: 1,  
                                    borderRadius: 18, 
                                    justifyContent: 'center', 
                                    alignItems: 'center',
                                    backgroundColor: 'white'
                                }}>
                                <AntDesign name="minus" size={20}/>
                            </TouchableOpacity>
                            <Text style={{marginHorizontal: 15}}>{this.state.quantity}</Text>
                            <TouchableOpacity
                                onPress={this.increaseQuantity} 
                                style={{
                                    height: 36, 
                                    width: 36, 
                                    elevation: 1,  
                                    borderRadius: 18, 
                                    justifyContent: 'center', 
                                    alignItems: 'center',
                                    backgroundColor: 'white'
                                }}>
                                <AntDesign name="plus" size={20}/>
                            </TouchableOpacity>
                        </View>
                        <Text 
                            style={{marginLeft: 'auto', fontWeight: 'bold', fontSize: 16}}>
                            ${this.state.quantity * this.state.price}
                        </Text>
                    </View>
                </View>
                {this.state.showOptionContainer && (
                    <View style={styles.optionContainer}>
                        <TouchableOpacity
                            onPress={this.optionSelected}
                            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{ fontSize: 13}}>Add to favorites</Text>  
                        </TouchableOpacity>
                        <View style={{height: 1, backgroundColor: 'lightgrey'}}/>
                        <TouchableOpacity
                            onPress={this.optionSelected} 
                            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{ fontSize: 13}}>Delete from the list</Text>  
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 2,
        flexDirection: 'row'
    },
    image: {
        height: 120,
        width: 120,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    optionContainer: {
        backgroundColor: 'white',
        width: 180,
        height: 100,
        position: 'absolute',
        bottom: 30,
        right: 50,
        elevation: 10,
        borderRadius: 15,
    }
})