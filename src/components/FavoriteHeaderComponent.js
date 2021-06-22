import React, { forwardRef } from 'react';
import {FlatList, View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ORIENTATION } from '../../utils/orientation';

function FavoriteHeaderComponent(props){
    let {
        categories, 
        navigation, 
        bottomSheetRef, 
        orientation, 
        toggleLayout
    } = props;

    function navigateToFilterScreen(){
        navigation.navigate('Filters');
    }

    function toggerBottomSheet(){
        bottomSheetRef.current.open();
    }

    return (
        <View style={styles.headerContainer}>
            <FlatList
                style={styles.chiplist}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categories}
                renderItem={({item}) => (
                    <TouchableOpacity 
                        style={styles.chipItem}
                        activeOpacity={.5}>
                        <Text style={styles.chipTitle}>{item.title}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />
            <View style={styles.optionsRow}>
                <TouchableOpacity 
                    style={styles.filterContainer}
                    onPress={() => navigateToFilterScreen()}>
                    <MaterialIcons name="filter-list" size={24} color="black"/>
                    <Text>Filters</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.priceContainer} 
                    onPress={() => toggerBottomSheet()}>
                    <MaterialIcons name="swap-vert" size={24} color="black"/>
                    <Text>Price: lowest to high</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.listIcon}
                    onPress={toggleLayout}>
                    {orientation == ORIENTATION.GRID && (
                        <MaterialIcons 
                            name="view-list" 
                            size={24} 
                            color="black" 
                        />
                    )}
                    {orientation == ORIENTATION.LIST && (
                        <FontAwesome5 
                            name="grip-vertical" 
                            size={22} 
                            color="black" 
                        /> 
                    )}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default forwardRef((props, ref) => (
    <FavoriteHeaderComponent 
        {...props} bottomSheetRef={ref}/>
))

const styles = StyleSheet.create({
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