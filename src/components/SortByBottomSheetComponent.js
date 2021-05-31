import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const list = [
    {id: 1, name: 'Popular'},
    {id: 2, name: 'Newest'},
    {id: 3, name: 'Customer review'},
    {id: 4, name: 'Price: lowest to high'},
    {id: 5, name: 'Price: higest to low'},
]

class SortByBottomSheetComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedItemId: 1,
        }
        this.listItem = this.listItem.bind(this);
    }

    onListItemSelect(id){
        this.setState({selectedItemId: id});
    }

    listItem({item}){
        let {selectedItemId} = this.state;
        let style = item.id == selectedItemId ? 
            Object.assign({...styles.listItem}, {backgroundColor: 'red'}) : styles.listItem;
        let titleStyle = item.id == selectedItemId ? 
        Object.assign({...styles.listItemName}, {color: 'white'}) : styles.listItemName;
        return (
            <TouchableOpacity
                activeOpacity={.5} 
                style={style} 
                onPress={this.onListItemSelect.bind(this, item.id)}>
                <Text style={titleStyle}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    render(){
        return (
            <RBSheet
                ref={this.props.innerRef}
                height={330}
                openDuration={250}
                closeOnDragDown >
                <View style={styles.bottomSheet}>
                    <Text style={styles.bottomSheetTitle}>Sort by</Text>
                    <FlatList
                        data={list}
                        renderItem={this.listItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>   
        </RBSheet>
        )
    }
}

export default React.forwardRef(
        (props, ref) => 
            <SortByBottomSheetComponent innerRef={ref} {...props}/>
    )
const styles = StyleSheet.create({
    bottomSheet: {
        height: 300,
        width: '100%',
    },
    bottomSheetTitle: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'black',
        marginTop: 10,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    listItem: {
        flex: 1,
        height: 50,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    listItemName: {
        fontSize: 16,
        color: 'grey'
    }
})