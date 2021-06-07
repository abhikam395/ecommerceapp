import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SettingNotificationItem from '../components/SettingNotificationItem';
import DatePicker from 'react-native-date-picker'
import SettingPasswordBSheet from '../components/SettingPasswordBSheet';
import { createRef } from 'react';
import RBSheet from "react-native-raw-bottom-sheet";


export default class SettingScreen extends Component{

    constructor(){
        super();
        this.state = {
            dateDialogVisible: false,
            oldDate: new Date(),
            updatedDate: new Date(),
        }
        this.showDateDialog = this.showDateDialog.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onDateSave = this.onDateSave.bind(this);
        this.onDateCancel = this.onDateCancel.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.bottomSheetRef = createRef();
    }
    
    changePassword(){
        this.bottomSheetRef.current.open();
    }

    showDateDialog(){
        this.setState({dateDialogVisible: true});
    }

    onDateChange(date){
        this.setState({updatedDate: date})
    }

    onDateSave(){
        this.setState({dateDialogVisible: false});
    }

    onDateCancel(){
        this.setState({updatedDate: this.state.oldDate, dateDialogVisible: false})
    }

    render(){
        let {dateDialogVisible} = this.state;
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
                        <Text style={styles.input}>{this.state.updatedDate.toDateString()}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.subContainer}>
                    <View style={styles.row}>
                        <Text style={styles.title}>Password</Text>
                        <TouchableOpacity 
                            style={styles.passwordChange} 
                            onPress={this.changePassword}>
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
                {dateDialogVisible && (
                    <View style={styles.dateContainer}>
                        <DatePicker
                            mode="date"
                            date={this.state.updatedDate}
                            onDateChange={this.onDateChange}
                        />
                        <View style={styles.dateButtonsContainer}>
                            <TouchableOpacity 
                                style={styles.cancelButton}
                                onPress={this.onDateCancel}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.saveButton}
                                onPress={this.onDateSave}>
                                <Text style={styles.buttonText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                <SettingPasswordBSheet ref={this.bottomSheetRef}/>
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
        elevation: 1,
        marginVertical: 15,
        justifyContent: 'center',
        width: '100%'
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
    dateContainer: {
        position: 'absolute',
        top: 100,
        left: 30,
        zIndex: 10,
        elevation: 5,
        backgroundColor: 'white',
        margin: 'auto',
        padding: 10
    },
    saveButton: {
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: 20,
        backgroundColor: '#43a047',
        elevation: 5
    },
    cancelButton: {
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        elevation: 5,
        backgroundColor: 'red'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    dateButtonsContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        alignSelf: 'center',
    },
})