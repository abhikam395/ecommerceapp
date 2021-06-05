import React, {Component} from 'react';
import { forwardRef } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PromoCodeItem from './PromoCodeItem';

const PromoCodes = [
    {id: 1},
    {id: 2},
    {id: 3},
];

class PromoCodeBottomSheet extends Component{

    constructor(){
        super();
        this.renderPromoCodeItem = this.renderPromoCodeItem.bind(this);
    }

    renderPromoCodeItem(){
        return <PromoCodeItem />;
    }

    render(){
        return (
            <RBSheet
                ref={this.props.bottomSheetRef}
                height={700}
                openDuration={250}
                customStyles={{
                container: {
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 30
                }
            }}>
                <View style={styles.bottomSheetContainer}>
                    <View style={styles.promoCodeContainer}>
                        <TextInput style={styles.promoInput} placeholder="Enter your promo code"/>
                        <TouchableOpacity style={styles.arrowButton}>
                            <MaterialIcons name="arrow-forward" color="white" size={20}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold', marginVertical: 10}}>Your Promo Codes</Text>
                    <FlatList
                        style={{marginVertical: 10}}
                        data={PromoCodes}
                        renderItem={this.renderPromoCodeItem}
                        keyExtractor={item => item.id.toString()}
                        ItemSeparatorComponent={() => <View style={styles.separator}/>}
                    />
                </View>
            </RBSheet>
        )
    }
}

export default forwardRef((props, ref) => <PromoCodeBottomSheet bottomSheetRef={ref}/>)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#F5F5F5'
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
    bottomSheetContainer: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20
    }
})