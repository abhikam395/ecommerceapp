import React, {Component} from 'react';
import { forwardRef } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AirbnbRating, Rating } from 'react-native-ratings';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RBSheet from 'react-native-raw-bottom-sheet';

class ClientReviewBottomSheet extends Component{

    constructor(){
        super();
        // this.bottomSheet
    }

    render(){
        return (
            <RBSheet
                height={750}
                ref={this.props.bottomSheetRef}
                closeOnDragDown
                customStyles={{
                    container: { 
                        borderTopEndRadius: 40, 
                        borderTopLeftRadius: 40,
                        backgroundColor: "#f5f5f5",
                    }
                }}>
                
                <View style={{alignItems: 'center', padding: 10, height: '100%'}}>
                    <Text style={{fontSize: 20, color: 'black'}}>What is you rate?</Text>
                    <AirbnbRating
                        type="custom"
                        count={5}
                        defaultRating={0}
                        ratingBackgroundColor="#fb8c00"
                        selectedColor="#fb8c00"
                        showRating={false}
                        ratingContainerStyle={{marginVertical: 30}}
                    />
                    <Text style={{
                        fontSize: 20, 
                        color: 'black', 
                        textAlign: 'center',
                        width: '80%'
                        }}>
                        Please share your opinion about the product
                    </Text>
                    <View style={{
                        elevation: 1, 
                        width: '100%', 
                        backgroundColor: 'white', 
                        marginVertical: 30,
                    }}>
                        <TextInput 
                            placeholder="Your review" 
                            style={{
                                width: '100%', 
                                height: 230,
                                alignSelf: 'flex-start',
                                textAlignVertical: 'top',
                                padding: 20,
                                fontSize: 16
                            }}/>

                    </View>
                    <TouchableOpacity style={{
                            height: 120, 
                            width: 120, 
                            borderRadius: 5, 
                            backgroundColor: 'white',
                            alignSelf: 'flex-start',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <View style={{
                                height: 54, 
                                width: 54, 
                                borderRadius: 27, 
                                backgroundColor: 'red',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <MaterialIcons name="camera-alt" color="white" size={24}/>
                        </View>
                        <Text style={{
                            marginVertical: 10, 
                            color: 'black', 
                            fontSize: 13,
                            fontWeight: 'bold'
                        }}>
                            Add your photos
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.4}
                        style={{
                            width: '100%', 
                            height: 56, 
                            borderRadius: 28, 
                            backgroundColor: 'red', 
                            position: 'absolute', 
                            bottom: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            elevation: 5
                        }}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>SEND REVIEW</Text>
                    </TouchableOpacity>
                </View>
            </RBSheet>
        )
    }
}

export default forwardRef((props, ref) => (<ClientReviewBottomSheet bottomSheetRef={ref}/>) );