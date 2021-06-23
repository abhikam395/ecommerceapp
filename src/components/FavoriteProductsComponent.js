import React from 'react';
import { FlatList, View } from 'react-native';
import { ORIENTATION } from '../../utils/orientation';
import FavoriteColumnItem from './FavoriteColumnItem';
import FavoriteItemComponent from './FavoriteItemComponent';

function renderSeparator(size) {
    return (
        <View style={{height: size}}/>
    )
}

function renderItem(props){
    let {item, navigation, orientation} = props;
    if(orientation == ORIENTATION.GRID)
        return (
            <FavoriteItemComponent 
                title={item.title} 
                navigation={navigation} />
        )
    return (
        <FavoriteColumnItem 
            title={item.title} 
            navigation={navigation} />
    )
}

export default function FavoriteProductsComponent(props){
    let {orientation, navigation, products} = props;
    if(orientation == ORIENTATION.GRID){
        return (
            <FlatList
                key={"_"}
                keyExtractor={item => "_" + item.id}
                data={products}
                renderItem={({item}) => renderItem({item: item, navigation: navigation, orientation: orientation})}
                contentContainerStyle={{padding: 10}}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                ItemSeparatorComponent={() => renderSeparator(20)}
            />
        )
    }
    else {
        return (
            <FlatList
                key={"#"}
                keyExtractor={item => "#" + item.id}
                data={products}
                contentContainerStyle={{flex: 1}}
                renderItem={(item) => renderItem({item: item, navigation: navigation, orientation: orientation})}
                ItemSeparatorComponent={() => renderSeparator(30)}
                style={{flex: 1, paddingVertical: 20, width: '100%', paddingHorizontal: 10}}
            />
        )
    }
}
