import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CheckBox from 'react-native-check-box'

const brands = [
    {id: 1, name: 'Adidas', selected: false},
    {id: 2, name: 'Adidas Originals', selected: false},
    {id: 3, name: 'Blend', selected: true},
    {id: 4, name: 'Boutique Moschino', selected: false},
    {id: 5, name: 'Champion', selected: false},
    {id: 6, name: 'Diesel', selected: true},
    {id: 7, name: 'Jack & Jones', selected: false},
    {id: 8, name: 'Blend', selected: false},
    {id: 9, name: 'Red Valentino', selected: false},
    {id: 10, name: 'S.Oliver', selected: false},
];


export default class BrandScreen extends Component{

    constructor(){
        super();
        this.state = {
            selectedColorId: 1,
            brands: brands
        }
        this.goBack = this.goBack.bind(this);
        this.renderBrandItem = this.renderBrandItem.bind(this);
    }

    goBack(){
        let {navigation} = this.props;
        navigation.goBack();
    }


    onBrandItemSelected(id){
        let brands = [...this.state.brands];
        brands[id - 1].selected = !brands[id - 1].selected;
        this.setState({brands: brands});
    }

    renderBrandItem({item}){
        let brandTitleStyle = item.selected ? 
            Object.assign({...styles.brandTitle}, {color: 'red'}) : styles.brandTitle;
        let checkBoxColor = item.selected ? 'red' : 'grey';
        return (
            <TouchableOpacity 
                style={styles.brandItem} 
                onPress={this.onBrandItemSelected.bind(this, item.id)}>
                <Text style={brandTitleStyle}>{item.name}</Text>
                <CheckBox
                    style={styles.checkbox}
                    checkBoxColor={checkBoxColor}
                    onClick={() => false}
                    isChecked={item.selected}
                />
            </TouchableOpacity>
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.brands}
                    renderItem={this.renderBrandItem}
                    contentContainerStyle={{
                        width: '100%', 
                        padding: 10,
                        marginBottom: 120
                    }}
                    keyExtractor={item => item.id.toString()}>
                </FlatList>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.discardButton} onPress={this.goBack}>
                        <Text style={styles.discardButtonTitle}>Discard</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.applyButton} onPress={this.goBack}>
                        <Text style={styles.applyButtonTitle}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position:'relative',
        flex:1
    },
    subContainer: {
        paddingVertical: 10,
        flex: 1,
        marginBottom: 120
    },
    brandItem: {
        height: 50,
        alignItems: 'center',
        flexDirection: 'row'
    },
    brandTitle: {
        color: 'black',
        fontSize: 16
    },
    checkbox: {
        marginLeft: 'auto',
        padding: 10
    },
    footer: {
        height: 120,
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    discardButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        height: 44,
        marginHorizontal: 20,
        borderRadius: 22
    },
    applyButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        height: 44,
        marginHorizontal: 20,
        backgroundColor: 'red',
        borderColor: 'red',
        borderRadius: 22
    },
    discardButtonTitle: {
        color: 'black',
        fontWeight: 'bold'
    },
    applyButtonTitle: {
        color: 'white',
        fontWeight: 'bold'
    }
})