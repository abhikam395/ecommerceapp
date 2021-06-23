import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import SortByBottomSheetComponent from '../components/SortByBottomSheetComponent';
import { createRef } from 'react/cjs/react.production.min';
import FavoriteProductsComponent from '../components/FavoriteProductsComponent';
import FavoriteHeaderComponent from '../components/FavoriteHeaderComponent';
import { getFavoriteCategories, getFavoriteProducts } from '../services/favoriteService';
import { connect } from 'react-redux';
import { addFavoriteCategories, addFavoriteProducts } from '../../store/actions/favoriteActions';
import { ORIENTATION } from '../../utils/orientation';

function mapStateToProps(state){
    let {favorite} = state;
    return { 
        products: favorite.products || [],
        categories: favorite.categories || [] 
    }
}

function mapDispatchToProps(dispatch){
    return {
        addProducts: (products) => dispatch(addFavoriteProducts(products)),
        addCategories: (categories) => dispatch(addFavoriteCategories(categories)),
    }
}

class FavoriteScreen extends Component{

    constructor(){
        super();
        this.state = {
            orientation: ORIENTATION.LIST
        }
        this.bottomSheetRef = createRef();
        this.toggleLayout = this.toggleLayout.bind(this);
    }

    componentDidMount(){
        let {addCategories, addProducts} = this.props;
        getFavoriteProducts()
            .then(products => {
                addProducts(products);
            })
            .catch(error => {
                console.log(error);
            });
        getFavoriteCategories()
            .then(categories => {
                addCategories(categories);
            })
            .catch(error => {
                console.log(error);
            });
    }

    toggleLayout(){
        let {orientation} = this.state;
        let newOrientation = 
            orientation == ORIENTATION.LIST ? ORIENTATION.GRID : ORIENTATION.LIST;
        this.setState({orientation: newOrientation});
    }
    
    render(){
        let {orientation} = this.state;
        let {categories, products, navigation} = this.props;

        return (
            <View style={styles.container}>
                <SortByBottomSheetComponent ref={this.bottomSheetRef}/>
                <FavoriteHeaderComponent 
                    categories={categories}
                    navigation ={navigation}
                    orientation={orientation}
                    toggleLayout={this.toggleLayout}
                    ref={this.bottomSheetRef}/>
                <FavoriteProductsComponent 
                    products={products} 
                    orientation={orientation}
                    navigation={navigation}/>
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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