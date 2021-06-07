import React, {Component} from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default class SettingNotificationItem extends Component{

    constructor(){
        super();
        this.state = {
            isEnabled : false
        }
        this.toggleSwitch = this.toggleSwitch.bind(this);
    }

    toggleSwitch(){
        let {isEnabled} = this.state;
        this.setState({isEnabled: !isEnabled});
    }

    render(){
        let {isEnabled} = this.state;
        return (
            <View style={styles.notificationItem}>
                <Text style={styles.label}>{this.props.title}</Text>
                <Switch
                    style={styles.switchButton}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={this.toggleSwitch}
                    value={isEnabled}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    label: {
        fontSize: 17,
        color: 'black',
    },
    notificationItem: {
        marginTop: 20,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    switchButton: {
        marginLeft: 'auto'
    }
})