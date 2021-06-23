import React, {Component} from 'react';
import { createRef } from 'react';
import { StyleSheet, View, FlatList, TextInput, TouchableOpacity, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PromoCodeBottomSheet from '../components/PromoCodeBottomSheet';
import RBSheet from "react-native-raw-bottom-sheet";

import MyBagProductItem from './../components/MyBagProductItem';
import PromoCodeItem from '../components/PromoCodeItem';
import { connect } from 'react-redux';
import { addBagProducts } from '../../store/actions/bagActions';
import { getBagProducts } from '../services/bagService';

function mapStateToProps(state){
    let {bag} = state;
    return {
        products: bag.products
    }
}

function mapDispatchToProps(dispatch){
    return {
        addProducts: (products) => dispatch(addBagProducts(products))
    }
}

class BagScreen extends Component{

    constructor(){
        super();
        this.bottomSheet = createRef();
        this.renderProductItem = this.renderProductItem.bind(this);
        this.openPromoCodeBottomSheet = this.openPromoCodeBottomSheet.bind(this);
    }

    async componentDidMount(){
        let {addProducts} = this.props;
        try {
            const products = await getBagProducts();
            addProducts(products);
        } catch (error) {
            console.log(error)
        }
    }

    openPromoCodeBottomSheet(){
        this.bottomSheet.current.open()
    }

    renderProductItem(){
        return (
            <MyBagProductItem />
        )
    }

    render(){
        let {products} = this.props;
        return (
            <View>
                <FlatList style={styles.container}
                    ListEmptyComponent={
                        <View style={styles.container}>
                            <FlatList
                                data={products}
                                renderItem={this.renderProductItem}
                                keyExtractor={item => item.id.toString()}
                                contentContainerStyle={{padding: 20}}
                                ItemSeparatorComponent={() => <View style={styles.separator}/>}
                            />
                            <TouchableOpacity 
                   export default              style={styles.promoCodeContainer}
                                onPress={this.openPromoCodeBottomSheet}>
                                <Text style={{textAlignVertical: 'center', paddingLeft: 10}}>Enter your promo code</Text>
                                <TouchableOpacity style={styles.arrowButton}>
                                    <MaterialIcons name="arrow-forward" color="white" size={24}/>
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <View style={{flexDirection: 'row', height: 60}}>
                                <Text style={styles.amountLabel}>Total amount:</Text>
                                <Text style={styles.amount}>124$</Text>
                            </View>
                            <TouchableOpacity style={styles.checkoutButton}>
                                <Text style={styles.checkoutLabel}>CHECK OUT</Text>
                            </TouchableOpacity>
                        </View>
                        }>
                </FlatList>
                <PromoCodeBottomSheet ref={this.bottomSheet}/>
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BagScreen);

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    separator: {
        height: 30,
    },
    promoCodeContainer: {
        height: 40,
        backgroundColor: 'white',
        marginVertical: 20,
        elevation: 1,
        flexDirection: 'row',
        borderBottomRightRadius: 25,
        borderTopRightRadius: 25,
        borderRadius: 10
    },
    arrowButton: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: 'black',
        marginLeft: 'auto',
        justifyContent: 'center',
        alignItems: 'center'
    },
    promoInput: {
        paddingHorizontal: 10,
        width: '100%'
    },
    amount: {
        marginLeft: 'auto',
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    },
    amountLabel: {
        fontSize: 15
    },
    checkoutButton: {
        height: 50,
        backgroundColor: 'red',
        borderRadius: 25,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5
    },
    checkoutLabel: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
})