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
            selectedItemId: -1
        }
        this.increaseQuantity = this.increaseQuantity.bind(this);
        this.decreaseQuantity = this.decreaseQuantity.bind(this);
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

    showOptions(item){
        this.setState({showOptionContainer: true});
        console.log(item)
    }

    optionSelected(){
        this.setState({showOptionContainer: false})
    }

    render(){
        let {navigation} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                    <Image style={styles.image} source={{uri: imageUrl}}/>
                </TouchableOpacity>
                <View style={{padding: 10, flex: 1}}>
                    <TouchableOpacity onPress={() => this.showOptions(this.props.item)} 
                        style={{
                            position: 'absolute', 
                            right: 0, 
                            width: 50, 
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 1
                        }}>
                        <Entypo 
                            name="dots-three-vertical" 
                            size={20} 
                            color="lightgrey"
                        />
                    </TouchableOpacity>
                    <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>Pullover</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{fontSize: 11}}>Color: </Text>
                            <Text style={{color: 'black', fontSize: 12}}>Black</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                            <Text style={{fontSize: 11}}>Size: </Text>
                            <Text style={{color: 'black', fontSize: 12}}>L</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 'auto', marginBottom: 5, alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity 
                                onPress={this.decreaseQuantity}
                                style={{
                                    height: 30, 
                                    width: 30, 
                                    elevation: 1,  
                                    borderRadius: 15, 
                                    justifyContent: 'center', 
                                    alignItems: 'center',
                                    backgroundColor: 'white'
                                }}>
                                <AntDesign name="minus" size={15}/>
                            </TouchableOpacity>
                            <Text style={{marginHorizontal: 15}}>{this.state.quantity}</Text>
                            <TouchableOpacity
                                onPress={this.increaseQuantity} 
                                style={{
                                    height: 30, 
                                    width: 30, 
                                    elevation: 1,  
                                    borderRadius: 15, 
                                    justifyContent: 'center', 
                                    alignItems: 'center',
                                    backgroundColor: 'white'
                                }}>
                                <AntDesign name="plus" size={15}/>
                            </TouchableOpacity>
                        </View>
                        <Text 
                            style={{marginLeft: 'auto', color: 'black', fontSize: 13}}>
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