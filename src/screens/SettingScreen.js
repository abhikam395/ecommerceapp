import React, {Component} from 'react';
import { DatePickerIOSComponent, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SettingNotificationItem from '../components/SettingNotificationItem';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class SettingScreen extends Component{

    constructor(){
        super();
        this.state = {
            showDateDialog: false
        }
        this.showDateDialog = this.showDateDialog.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.currentDate = new Date();
    }

    showDateDialog(){
        this.setState({showDateDialog: true})
    }

    onDateChange(){
        console.log(1)
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.title}>Personal Information</Text>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="Full name" style={styles.input}/>
                    </View>
                    <TouchableOpacity 
                        style={styles.inputContainer}
                        onPress={this.showDateDialog}>
                        <Text style={styles.input}>Date of Birth</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.subContainer}>
                    <View style={styles.row}>
                        <Text style={styles.title}>Password</Text>
                        <TouchableOpacity style={styles.passwordChange}>
                            <Text style={styles.changeLabel}>Change</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput 
                            defaultValue="124W" 
                            placeholder="Password" 
                            style={styles.input} 
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <View style={styles.subContainer}>
                    <Text style={styles.title}>Notifications</Text>
                    <SettingNotificationItem title="Sales"/>
                    <SettingNotificationItem title="New arrivals"/>
                    <SettingNotificationItem title="Delivery status changes"/>
                </View>
                {this.state.showDateDialog && (
                    <DateTimePicker
                    mode="date"
                    minimumDate={new Date()}
                    maximumDate={new Date()}
                  />
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    title: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    },
    inputContainer: {
        height: 66,
        backgroundColor: 'white',
        elevation: 2,
        marginVertical: 15,
        justifyContent: 'center'
    },
    input: {
        padding: 20
    },
    subContainer: {
        marginVertical: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    passwordChange: {
        marginLeft: 'auto'
    },
    changeLabel: {
        fontSize: 14
    },
})