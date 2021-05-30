import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class FavoriteScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>FavoriteScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})