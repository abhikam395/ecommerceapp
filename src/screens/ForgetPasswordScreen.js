import React, {Component} from 'react';
import { 
    Dimensions, 
    Image, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TextInput, 
    Touchable, 
    TouchableOpacity, 
    View } 
from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class ForgetPasswordScreen extends Component{

    constructor(){
        super();
        this.state = {
            email: null
        }
        this.send = this.send.bind(this);
        this.backPress = this.backPress.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
    }

    backPress(){
        let {navigation} = this.props;
        navigation.goBack();
    }

    send(){
        console.log('Send')
    }

    onEmailChange(email){
        console.log(email)
    }

    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.backPress}>
                    <MaterialIcons 
                        name="arrow-back-ios" 
                        style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.title}>Forget Password</Text>
                <Text style={styles.info}>Please, enter your email address. You will receive a 
                    link to create a new password via email.</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <View style={styles.row}>
                        <TextInput 
                            style={styles.input} 
                            keyboardType="email-address"
                            value={this.state.email}
                            onChangeText={this.onEmailChange}
                        />
                        <MaterialIcons 
                            name="clear" 
                            style={styles.clearIcon}
                        />
                    </View>
                </View>
                <TouchableOpacity 
                    style={styles.sendButton}
                    onPress={this.signUp}>
                    <Text style={styles.sendButtonText}>SEND</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: screenHeight,
        width: screenWidth,
    },
    title: {
        marginTop: 20,
        marginBottom: 70,
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black'
    },
    inputContainer: {
        height: 70,
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingTop: 10,
        alignItems: 'flex-start',
        marginTop: 10
    },
    label: {
        color: 'grey',
        fontSize: 12
    },
    input: {
        fontSize: 16,
        flex: 1
    },
    sendButton: {
        marginVertical: 50,
        backgroundColor: 'red',
        height: 57,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    sendButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    info: {
        fontSize: 14,
        color: 'black',
        marginTop: 50,
        marginBottom: 10
    },
    row: {
        flexDirection: 'row',
    },
    clearIcon: {
        fontSize: 25,
        color: 'red',
        height: 50,
        width: 50,
        textAlignVertical: 'center'
    },
    backIcon: {
        fontSize: 25,
        marginVertical: 20
    }
})