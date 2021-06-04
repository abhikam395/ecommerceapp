import React, {Component} from 'react';
import { View, Image, Text, FlatList, StyleSheet } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

const IMAGE = 'https://i.pinimg.com/originals/87/07/90/87079055b55e4dab8117f6d580ec92d5.jpg';

const IMAGES = [
    {id: 1, image: IMAGE},
    {id: 2, image: IMAGE},
    {id: 3, image: IMAGE},
    {id: 4, image: IMAGE},
    {id: 5, image: IMAGE},
]

export default class CommentCardComponent extends Component{

    constructor(){
        super();
        this.state = {
            liked: false
        }
        this.renderImage = this.renderImage.bind(this);
    }

    renderImage({item}){
        return (
            <View style={{height: 100, width: 100}}>
                <Image source={{uri: item.image}} style={{height: 100, width: 100}}/>
            </View>
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={{
                            backgroundColor: 'red', 
                            height: 40, 
                            width: 40, 
                            borderRadius: 20, 
                            position: 'absolute',
                            top: -20,
                        }}>
                        <Image 
                            source={{uri: IMAGE}} 
                            style={{
                                height: 40, 
                                width: 40, 
                                borderRadius: 20,
                            }}/>
                    </View>
                    <Text style={styles.name}>Kim Shine</Text>
                    <View style={{
                            flexDirection: 'row', 
                            width: '100%', 
                            alignItems: 'center',
                            marginVertical: 5
                        }}>
                        <AirbnbRating
                            size={15}
                            showRating={false}
                            isDisabled
                        />
                        <Text style={{marginLeft: 'auto', fontSize: 13}}>August 13, 2019</Text>
                    </View>
                    <Text style={{fontSize: 15, lineHeight: 20, marginVertical: 10}}>
                        The first thing to keep in mind is that your number one goal is not to give her the impression that you’d like to get into her pants. Your compliment absolutely must be about her clothes - and not about the way she fills them out.
                    </Text>
                    {this.props.withPhotos && (
                        <FlatList
                            style={{marginVertical: 10}}
                            data={IMAGES}
                            renderItem={this.renderImage}
                            horizontal
                            keyExtractor={item => item.id.toString()}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{height: 100}}
                            ItemSeparatorComponent={() => <View style={{width: 15}}/>}
                        />
                    )}
                    <View style={{
                            marginLeft: 'auto', 
                            marginTop: 5, 
                            flexDirection: 'row', 
                            alignItems: 'center'
                        }}>
                        <Text>Helpful</Text>
                        <AntDesignIcons
                            onPress={() => this.setState({liked: !this.state.liked})}
                            name={this.state.liked ? 'like1': 'like2'} 
                            size={20} 
                            style={{marginHorizontal: 10}}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentContainer: {
       width: '98%',
       backgroundColor: 'white',
       elevation: 1,
       padding: 30,
       alignItems: 'flex-start'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    }
})