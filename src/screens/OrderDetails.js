import React, {Component} from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tYgk3D42D2fuzoHjs9i6-rmS5pCu--ekWQ&usqp=CAU';

const items = [
    {id: 1},
    {id: 2},
    {id: 3},
];

export default class OrderDetails extends Component{

    constructor(){
        super();
        this.renderOrderedItem = this.renderOrderedItem.bind(this);
    }

    renderOrderedItem({item}){
        return (
            <View style={styles.orderItemContainer}>
                <Image source={{uri: image}} style={styles.image}/>
                <View style={styles.orderItemDetains}>
                    <Text style={styles.itemName}>Pullover</Text>
                    <Text style={styles.itemSeller}>Mango</Text>
                    <View style={styles.row}>
                        <View style={styles.colorContainer}>
                            <Text style={styles.label}>Color: </Text>
                            <Text style={styles.value}>Grey</Text>
                        </View>
                        <View style={styles.sizeContainer}>
                            <Text style={styles.label}>Size: </Text>
                            <Text style={styles.value}>L</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.unitContainer}>
                            <Text style={styles.label}>Units: </Text>
                            <Text style={styles.value}>1</Text>
                        </View>
                        <Text style={styles.itemPrice}>51$</Text>
                    </View>
                </View>
            </View>
        )
    }

    render(){
        return (
            <FlatList 
                style={styles.container}
                ListHeaderComponent={
                    <View style={styles.header}> 
                        <View style={styles.orderRow}>
                            <Text style={styles.orderNumber}>Order No 1234533</Text>
                            <Text style={styles.orderDate}>05-12-2019</Text>
                        </View>
                        <View style={styles.trackingContainer}>
                            <View style={styles.row}>
                                <Text style={styles.label}>Tracking number: </Text>
                                <Text style={styles.value}>IW2345676543</Text>
                            </View>
                            <Text style={styles.status}>Delivered</Text>
                        </View>
                        <Text style={styles.itemsCount}>3 items</Text>
                    </View>
                }
                ListEmptyComponent={
                    <FlatList
                        style={styles.orderedItems}
                        data={items}
                        renderItem={this.renderOrderedItem}
                        keyExtractor={item => item.id.toString()}
                        ItemSeparatorComponent={() => <View style={styles.separator}/>}>

                    </FlatList>
                }
                ListFooterComponent={
                    <View style={styles.footer}>
                        <Text style={styles.footerTitle}>Order Information</Text>
                        <View style={styles.footerRow}>
                            <Text style={styles.label}>Shipping Address: </Text>
                            <Text style={styles.value}>123 Main Street, New York, NY 10030 123 Main Street, New York, NY 10030</Text>
                        </View>
                        <View style={styles.footerRow}>
                            <Text style={styles.label}>Payment method: </Text>
                            <View style={styles.row}>
                                <FontAwesome name="cc-mastercard" size={22} style={styles.cardIcon}/>
                                <Text style={styles.value}>**** **** **** 3949</Text>
                            </View>
                        </View>
                        <View style={styles.footerRow}>
                            <Text style={styles.label}>Delivery method: </Text>
                            <Text style={styles.value}>FedEX, 3 days, 15$</Text>
                        </View>
                        <View style={styles.footerRow}>
                            <Text style={styles.label}>Discount: </Text>
                            <Text style={styles.value}>10%, Personal promo code</Text>
                        </View>
                        <View style={styles.footerRow}>
                            <Text style={styles.label}>Total Amount: </Text>
                            <Text style={styles.value}>122$</Text>
                        </View>
                        <View style={styles.row}>
                            <TouchableOpacity style={styles.reorderButton}>
                                <Text style={styles.reorderButtonTitle}>Reorder</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.feedbackButton}>
                                <Text style={styles.feedbackButtonTitle}>Leave feedback</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
                ListFooterComponentStyle={{
                    marginBottom: 10
                }}>
                
            </FlatList>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: 20,
        paddingHorizontal: 15,
    },
    orderRow: {
        flexDirection: 'row'
    },
    orderNumber: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    },
    orderDate: {
        marginLeft: 'auto',
    },
    trackingContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    value: {
        color: 'black',
        fontSize: 13,
        fontWeight: 'bold'
    },
    status: {
        marginLeft: 'auto',
        color: '#4caf50'
    },
    itemsCount: {
        marginTop: 10,
        color: 'black'
    },

    orderItemContainer: {
        height: 120,
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row'
    },
    separator: {
        height: 25,
    },
    orderedItems: {
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    image: {
        height: 120,
        width: 120,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    itemName: {
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold'
    },
    itemSeller: {
        fontSize: 12
    },
    label: {
        fontSize: 13,
        alignSelf: 'flex-start'
    },
    value: {
        fontSize: 13,
        color: 'black',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    colorContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    sizeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
    },
    unitContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemPrice: {
        marginLeft: 'auto',
        fontSize: 16,
        color: 'black'
    },
    orderItemDetains: {
        flex: 1,
        padding: 10
    },
    footer: {
        backgroundColor: 'white',
        paddingTop: 20,
        paddingHorizontal: 15,
    },
    shippingAddress: {
        flexDirection: 'row',
        marginVertical: 10
    },
    footerRow: {
        flexDirection: 'row',
        marginTop: 20,
    },
    footerTitle: {
        fontSize: 16,
        color: 'black'
    },
    reorderButton: {
        height: 40,
        flex: 1,
        borderWidth: 1,
        borderRadius: 20,
        marginVertical: 30,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    reorderButtonTitle: {
        color: 'black'
    },
    feedbackButton: {
        height: 40,
        flex: 1,
        borderRadius: 20,
        marginVertical: 30,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    feedbackButtonTitle: {
        color: 'white',
        fontSize: 14
    },
    cardIcon: {
        marginHorizontal: 10
    }
})