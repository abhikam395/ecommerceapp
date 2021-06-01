import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FilterCategoryListComponent from '../components/FilterCategoryListComponent';
import SizeItemComponent from '../components/SizeItemComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const colors = [
    {id: 1, color: 'black'},
    {id: 2, color: 'red'},
    {id: 3, color: 'blue'},
    {id: 4, color: 'green'},
    {id: 5, color: 'grey'},
    {id: 6, color: 'lightgrey'},
];

const sizes = [
    {id: 1, name: 'XS'},
    {id: 2, name: 'S'},
    {id: 3, name: 'M'},
    {id: 4, name: 'L'},
    {id: 5, name: 'XL'},
    
]

export default class FilterScreen extends Component{

    constructor(){
        super();
        this.state = {
            selectedColorId: 1,
        }
        this.goBack = this.goBack.bind(this);
        this.renderSizeItem = this.renderSizeItem.bind(this);
        this.renderColorItem = this.renderColorItem.bind(this);
        this.onColorItemSelected = this.onColorItemSelected.bind(this);
        this.navigateToBrandScreen = this.navigateToBrandScreen.bind(this);
    }

    goBack(){
        let {navigation} = this.props;
        navigation.goBack();
    }

    onColorItemSelected(id){
        this.setState({selectedColorId: id});
    }

    navigateToBrandScreen(){
        let {navigation} = this.props;
        navigation.navigate('Brand');
    }

    renderColorItem({item}){
        let {selectedColorId} = this.state;
        let circleContainerStyle = item.id == selectedColorId ? styles.circleItemContainer : null;
        let style = Object.assign({...styles.colorListItem}, {backgroundColor: item.color});
        return (
            <TouchableOpacity 
                style={circleContainerStyle} 
                onPress={this.onColorItemSelected.bind(this, item.id)}>
                <View style={style}/>
            </TouchableOpacity>
        )
    }

    renderSizeItem({item}){
        return (
            <SizeItemComponent title={item.name}/>
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <FlatList
                    ListEmptyComponent={() => (
                        <View style={styles.subContainer}>
                            <View style={styles.box}>
                                <Text style={styles.title}>Price range</Text>
                                <View style={styles.card}></View>
                            </View>
                            <View style={styles.box}>
                                <Text style={styles.title}>Colors</Text>
                                <View style={styles.card}>
                                    <FlatList 
                                        data={colors}
                                        renderItem={this.renderColorItem}
                                        horizontal
                                        contentContainerStyle={{
                                            width: '100%', 
                                            justifyContent: 'space-around', 
                                            alignItems: 'center'
                                        }}
                                        keyExtractor={item => item.id.toString()}
                                    />
                                </View>
                            </View>
                            <View style={styles.box}>
                                <Text style={styles.title}>Sizes</Text>
                                <View style={styles.card}>
                                    <FlatList 
                                        data={sizes}
                                        renderItem={this.renderSizeItem}
                                        horizontal
                                        contentContainerStyle={{
                                            width: '100%',
                                            alignItems: 'center',
                                            paddingLeft: 20
                                        }}
                                        ItemSeparatorComponent={() => <View style={styles.separator}/>}
                                        keyExtractor={item => item.id.toString()}
                                    />
                                </View>
                            </View>
                            <View style={styles.box}>
                                <Text style={styles.title}>Category</Text>
                                <View style={styles.card}>
                                    <FilterCategoryListComponent />
                                </View>
                            </View>
                            <View style={styles.box}>
                                <Text style={styles.title}>Brand</Text>
                                <TouchableOpacity 
                                    style={styles.brandContainer} 
                                    onPress={this.navigateToBrandScreen}>
                                    <Text>Adidas Originals, Jack & Jones's, Oliver</Text>
                                    <MaterialIcons name="keyboard-arrow-right" style={styles.arrowIcon}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}>
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
    box: {
        // flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10
    },
    card: {
        backgroundColor: 'white',
        height: 120,
        marginVertical: 10,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleItemContainer: {
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 25
    },
    colorListItem: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 4,
        borderColor: 'white'
    },
 
    separator: {
        width: 20
    },
    brandContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    arrowIcon: {
        fontSize: 30,
        marginLeft: 'auto'
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