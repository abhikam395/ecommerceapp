import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ProductItemComponent from '../components/ProductItemComponent';
import ProductColumnItemComponent from '../components/ProductColumnItem';
import SortByBottomSheetComponent from '../components/SortByBottomSheetComponent';
import { createRef } from 'react/cjs/react.production.min';

const DATA = [
    {
        id: '1',
        title: 'T-shirts',
    },
    {
        id: '2',
        title: 'Crop tops',
    },
    {
        id: '3',
        title: 'Blouses',
    },
    {
        id: '4',
        title: 'T-shirts',
    },
    {
        id: '5',
        title: 'Crop tops',
    },
    {
        id: '6',
        title: 'Blouses',
    },
    {
        id: '7',
        title: 'T-shirts',
    },
    {
        id: '8',
        title: 'Crop tops',
    },
    {
        id: '9',
        title: 'Blouses',
    },
  ];

export default class CatelogScreen extends Component{

    constructor(){
        super();
        this.state = {
            listGrid: false,
        }
        this.bottomSheet = createRef();
        this.changeListType = this.changeListType.bind(this);
        this.toggerBottomSheet = this.toggerBottomSheet.bind(this);
        this.renderChipItem = this.renderChipItem.bind(this);
        this.renderProductItem = this.renderProductItem.bind(this);
        this.renderProductColumnItem = this.renderProductColumnItem.bind(this);
    }

    componentDidMount(){
        this.bottomSheet.current.open();
    }

    changeListType(){
        let {listGrid} = this.state;
        this.setState({listGrid: !listGrid})
    }

    toggerBottomSheet(){
        this.bottomSheet.current.open();
    }

    renderChipItem({item}){
        return  (
            <TouchableOpacity 
                style={styles.chipItem}
                activeOpacity={.5}>
                <Text style={styles.chipTitle}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    renderProductItem({item}){
        return <ProductItemComponent title={item.title}/>;
    }

    renderProductColumnItem({item}){
        return <ProductColumnItemComponent title={item.title}/>
    }

    render(){
        let {listGrid} = this.state;

        return (
            <View style={styles.container}>
                <SortByBottomSheetComponent ref={this.bottomSheet}/>
                <View style={styles.headerContainer}>
                    <FlatList
                        style={styles.chiplist}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={DATA}
                        renderItem={this.renderChipItem}
                        keyExtractor={item => item.id}
                    />
                    <View style={styles.optionsRow}>
                        <View style={styles.filterContainer}>
                            <MaterialIcons name="filter-list" size={24} color="black"/>
                            <Text>Filters</Text>
                        </View>
                        <TouchableOpacity 
                            style={styles.priceContainer} 
                            onPress={this.toggerBottomSheet}>
                            <MaterialIcons name="swap-vert" size={24} color="black"/>
                            <Text>Price: lowest to high</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.listIcon}
                            onPress={this.changeListType}>
                            {listGrid && (
                                <MaterialIcons 
                                    name="view-list" 
                                    size={24} 
                                    color="black" 
                                />
                            )}
                            {!listGrid && (
                                <FontAwesome5 
                                   name="grip-vertical" 
                                   size={22} 
                                   color="black" 
                               /> 
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
                {listGrid && (
                    <FlatList
                        data={DATA}
                        renderItem={this.renderProductItem}
                        contentContainerStyle={{padding: 10}}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        columnWrapperStyle={{justifyContent: 'space-between'}}
                        ItemSeparatorComponent={
                            () => <View style={{height: 20}}/>
                        }
                    />
                )}
                {!listGrid && (
                    <FlatList
                        style={{
                            width: '100%'
                        }}
                        data={DATA}
                        renderItem={this.renderProductColumnItem}
                        contentContainerStyle={{padding: 10}}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={
                            () => <View style={{height: 30}}/>
                        }
                    />
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    chiplist: {
        flexGrow: 0,
        padding: 10,
    },
    chipItem: {
        margin: 5,
        backgroundColor: 'black',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chipTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12
    },
    optionsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#eeeeee',
        height: 50
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        flex: 2
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 2
    },
    listIcon: {
        flex: 1,
        paddingLeft: 'auto',
        paddingRight: 10,
        alignItems: 'flex-end',
    },
    headerContainer: {
        backgroundColor: 'white',
        elevation: 20
    },
})