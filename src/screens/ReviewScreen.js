import React, {Component} from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, } from 'react-native';
import { AirbnbRating, Rating } from 'react-native-ratings';
import CheckBox from 'react-native-check-box';
import CommentCardComponent from '../components/CommentCardComponent';
import Octicons from 'react-native-vector-icons/Octicons';
import { createRef } from 'react';
import ClientReviewBottomSheet from '../components/ClientReviewBottomSheet';

const COMMENTS = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
]

export default class ReviewScreen extends Component{

    constructor(){
        super();
        this.state = {
            withPhoto: false
        }
        this.bottomSheetRef = createRef();
        this.renderCommentCard = this.renderCommentCard.bind(this);
        this.onWriteButtonClick = this.onWriteButtonClick.bind(this);
    }

    onWriteButtonClick(){
        this.bottomSheetRef.current.open();
    }

    renderCommentCard({item}){
        return <CommentCardComponent withPhotos = {this.state.withPhoto}/>
    }
    
    renderRow({size, value}){
        const maxValue = 12;
        let average = value / maxValue * 100;
        return (
            <View style={{flexDirection: 'row', width: '100%'}}>
                 <View style={{width: 80, alignItems: 'flex-end'}}>
                    <AirbnbRating
                        defaultRating={size}
                        count={size}
                        size={14}
                        selectedColor="#ffb300"
                        showRating={false}
                    />
                </View>
                <View style={{flex: 1, justifyContent: 'center', paddingLeft: 10, paddingRight: 20}}>
                    <View style={{
                        backgroundColor: 'red', 
                        width: `${average}%`, 
                        height: 10, 
                        borderRadius: 6, 
                    }}/>
                </View>
                <Text style={{width: 20}}>{value}</Text>
            </View>
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={
                        <View>
                            <View style={styles.row}>
                                <View style={styles.left}>
                                    <View style={{flexDirection: 'column'}}>
                                        <Text style={{fontSize: 42, fontWeight: 'bold', color: 'black'}}>4.3</Text>
                                        <Text style={{fontSize: 16, color: 'grey'}}>23 ratings</Text>
                                    </View>
                                </View>
                                <View style={styles.right}>
                                    {this.renderRow({size: 5, value: 12})}
                                    {this.renderRow({size: 4, value: 4})}
                                    {this.renderRow({size: 3, value: 2})}
                                    {this.renderRow({size: 2, value: 12})}
                                    {this.renderRow({size: 1, value: 12})}
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontSize: 26, color: 'black'}}>8 reviews</Text>
                                <View style={{marginLeft: 'auto', flexDirection: 'row', alignItems: 'center'}}>
                                        <CheckBox
                                            isChecked={this.state.withPhoto}
                                            style={{marginHorizontal: 10, }}
                                            onClick={() => {this.setState({withPhoto: !this.state.withPhoto})}}
                                            />
                                        <Text style={{fontSize: 17}}>With photo</Text>
                                </View>
                            </View>
                            <FlatList
                                data={COMMENTS}
                                renderItem={this.renderCommentCard}
                                keyExtractor={item => item.id.toString()}
                                style={{marginVertical: 50}}
                                ItemSeparatorComponent={() => <View style={{height: 50}}/>}
                            />
                        </View>
                    }>
                </FlatList>
                <TouchableOpacity 
                    style={{
                        height: 46, 
                        backgroundColor: 'red', 
                        position: 'absolute', 
                        bottom: 50, 
                        padding: 20,
                        right: 30,
                        borderRadius: 23,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        elevation: 10
                    }}
                    activeOpacity={0.5}
                    onPress={this.onWriteButtonClick}>
                    <Octicons name="pencil" color="white" size={20}/>
                    <Text style={{color: 'white', fontWeight: 'bold', marginHorizontal: 10}}>Write a review</Text>
                </TouchableOpacity>
                <ClientReviewBottomSheet ref={this.bottomSheetRef}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 20,
    },
    left: {
        flexDirection: 'row',
        width: 100,
    },
    right: {
        flex: 1,
    },
    column: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    ratings: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: 100,
    },
    averageRating: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'black',
    },
    totalRating: {
        fontSize: 14
    },
    ratingSizes: {
        justifyContent: 'space-between',
        height: 100,
        marginLeft: 10
    },
    ratingSizeContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    sizeCounterTitle: {
        marginLeft: 10
    }
})