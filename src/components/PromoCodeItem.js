import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class PromoCodeItem extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={{
                    width: 110, 
                    backgroundColor: 'red', 
                    borderTopLeftRadius: 10, 
                    borderBottomLeftRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{fontSize: 22, fontWeight: 'bold', color: 'white'}}>10% off</Text>
                </View>
                <View style={{padding: 10, justifyContent: 'center'}}>
                    <Text style={{fontSize: 16, color: 'black'}}>Personal offer</Text>
                    <Text>mypromocode2020</Text>
                </View>
                <View style={{paddingVertical: 20}}>
                    <Text style={{fontSize: 10}}>6 days remains</Text>
                    <TouchableOpacity 
                        style={{
                            height: 36, 
                            backgroundColor: 'red', 
                            borderRadius: 20, 
                            paddingHorizontal: 20, 
                            justifyContent: 'center',
                            marginTop: 10,
                            elevation: 5
                        }}>
                        <Text style={{color: 'white'}}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 110,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 2,
        flexDirection: 'row'
    }
})