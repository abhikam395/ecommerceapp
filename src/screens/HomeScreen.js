import React, {Component} from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    Image, 
    StatusBar, 
    TouchableOpacity, 
    FlatList, 
    ScrollView,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { addHomeBanner, addNewProducts, addSaleProducts } from '../../store/actions/homeActions';
import { LoadingComponent } from '../components/LoadingComponent';
import NewItemComponent from '../components/NewItemComponent';
import SaleItemComponent from '../components/SaleItemComponent';
import { getHomeBanner, getNewProducts, getSaleProducts } from '../services/homeServices';

function mapStateToProps(state) {
    let {home} = state;
    return {
        saleProducts: home.saleProducts || [],
        newProducts: home.newProducts || [],
        banner: home.banner || {}
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addNewProducts: (products) => dispatch(addNewProducts(products)),
        addSaleProducts: (products) => dispatch(addSaleProducts(products)),
        addBanner: (products) => dispatch(addHomeBanner(products)) 
    }
}


class HomeScreen extends Component{

    constructor(){
        super();
    }

    async componentDidMount(){
        let {addNewProducts, addSaleProducts, addBanner} = this.props;
        try {
            getSaleProducts().then(data => {
                addSaleProducts(data)
            }).catch((error) => new Error(error))

            getNewProducts().then(data => {
                addNewProducts(data)
            }).catch((error) => new Error(error))

            getHomeBanner().then(data => {
                addBanner(data)
            }).catch((error) => new Error(error))
        } catch (error) {
            console.log("Error occuered")
        }

    }

    renderBanner(){
        const {banner} = this.props;
        if(Object.keys(banner).length == 0)
            return <LoadingComponent />
        return (
            <View style={styles.header}>
                <Image source={{uri: banner.image}} style={styles.headerImage}/>
                <Text style={styles.headerTitle}>{banner.title}</Text>
            </View>
        )
    }

    renderSaleProducts(){
        const {
            saleProducts,
            navigation
        } = this.props;
        if(saleProducts.length == 0)
            return <LoadingComponent />
        return (
            <View style={styles.saleContainer}>
                <View style={styles.row}>
                    <Text style={styles.saleTitle}>Sale</Text>
                    <TouchableOpacity 
                        style={styles.viewAll} 
                        onPress={() => navigation.navigate('Shop', {screen: 'Catalog', title: 'Sale'})}>
                        <Text style={styles.viewAllText}>View All</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.label}>Super summer sale</Text>
                <FlatList
                        data={saleProducts}
                        renderItem={({item}) => (
                            <SaleItemComponent 
                                {...this.props} 
                                title={item.title}
                            />
                        )}
                        contentContainerStyle={{marginVertical: 30}}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={
                            () => <View style={{width: 20}}/>
                        }
                    />
            </View>
        )
    }

    renderNewProducts(){
        let {
            newProducts, 
            navigation
        } = this.props;

        if(newProducts.length == 0)
            return <LoadingComponent />

        return (
            <View style={styles.newClothsContainer}>
                <View style={styles.row}>
                    <Text style={styles.newClothTitle}>New</Text>
                    <TouchableOpacity 
                        style={styles.viewAll} 
                        onPress={() => navigation.navigate('Shop', {screen: 'Catalog', title: 'New Products'})}>
                        <Text style={styles.viewAllText}>View All</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.label}>You'ne never seen it before!</Text>
                <FlatList
                    data={newProducts}
                    renderItem={({item}) => (
                        <NewItemComponent 
                            {...this.props} 
                            title={item.title}
                        />
                    )}
                    contentContainerStyle={{marginVertical: 30}}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={
                        () => <View style={{width: 20}}/>
                    }
                    >

                </FlatList>
            </View>
        )
    }

    render(){
        let {
            newProducts, 
            saleProducts, 
            banner, 
            navigation
        } = this.props;
        return (
            <ScrollView style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" />
                {this.renderBanner()}
                {this.renderSaleProducts()}
                {this.renderNewProducts()}
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        height: 250,
        width: '100%'
    },
    headerImage: {
        height: '100%'
    },
    headerTitle: {
        position: 'absolute',
        bottom: 10,
        padding: 20,
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white'
    },
    saleContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    saleTitle: {
        fontSize: 33,
        fontWeight: 'bold',
        color: 'black'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewAll: {
        marginLeft: 'auto',
    },
    viewAllText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    newClothsContainer: {
        // paddingVertical: 10,
        paddingHorizontal: 10
    },
    newClothTitle: {
        fontSize: 33,
        fontWeight: 'bold',
        color: 'black'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewAll: {
        marginLeft: 'auto',
    },
    viewAllText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
})