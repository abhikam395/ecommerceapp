import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class SizeItemComponent extends Component{

    constructor(){
        super();
        this.state = {
            selected: false
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        let {selected} = this.state;
        this.setState({selected: !selected});
        console.log(selected)
    }

    render(){
        let {title} = this.props;
        let {selected} = this.state;
        let style = selected ? 
            Object.assign({...styles.container}, 
                {backgroundColor: 'red', borderColor: 'red'}) : styles.container;
        let titleStyle = selected ? Object.assign({...styles.title}, {color: 'white'}) : styles.title;
        return (
            <TouchableOpacity 
                style={style} 
                activeOpacity={.5} 
                onPress={this.onClick}>
                <Text style={titleStyle}>{title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 44,
        width: 44,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 15,
        color: 'black',
    },
})