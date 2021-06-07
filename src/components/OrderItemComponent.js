import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class OrderItemComponent extends Component{
    render(){
        let {status, navigation} = this.props;
        let orderStatusColor = status == 'Delivered' ? '#4caf50' :
            status == 'Processing' ? '#1e88e5' : 'red';
        orderStatusColor = Object.assign({...styles.orderStatus}, {color: orderStatusColor});
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.orderNo}>Order No 1947034</Text>
                    <Text style={styles.orderDate}>05-12-2019</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Tracking number: </Text>
                    <Text style={styles.value}>IW3475453455</Text>
                </View>
                <View style={styles.row}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Quantity: </Text>
                        <Text style={styles.value}>3</Text>
                    </View>
                    <View style={styles.amountContainer}>
                        <Text style={styles.label}>Total Amount: </Text>
                        <Text style={styles.value}>112$</Text>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.detailButton} onPress={() => navigation.navigate('OrderDetails')}>
                        <Text style={styles.detailButtonLabel}>Details</Text>
                    </TouchableOpacity>
                    <Text style={orderStatusColor}>{this.props.status}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        elevation: 2,
        borderRadius: 5,
        padding: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    orderNo: {
        color: 'black',
        fontSize: 17
    },
    orderDate: {
        marginLeft: 'auto'
    },
    value: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    },
    label: {
        color: '#bdbdbd'
    },
    amountContainer: {
        marginLeft: 'auto',
        flexDirection: 'row'
    },
    detailButton: {
        height: 42,
        width: 100,
        borderWidth: 1,
        borderRadius: 21,
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailButtonLabel: {
        color: 'black'
    },
    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    orderStatus: {
        marginLeft: 'auto'
    }
})