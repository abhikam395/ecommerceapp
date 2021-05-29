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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

 import facebookIcon from './../../assets/images/facebookicon.png';
 import googleIcon from './../../assets/images/googleicon.png';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class SignInScreen extends Component{

    constructor(){
        super();
        this.signUp = this.signUp.bind(this);
        this.navToSignUpScreen = this.navToSignUpScreen.bind(this);
        this.navToForgetPasswordScreen = this.navToForgetPasswordScreen.bind(this);
    }

    navToSignUpScreen(){
        let {navigation} = this.props;
        navigation.navigate('SignUp');
    }

    navToForgetPasswordScreen(){
        let {navigation} = this.props;
        navigation.navigate('ForgetPassword')
    }

    signUp(){
        console.log('signUp')
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput 
                        style={styles.input} 
                        keyboardType="email-address"
                    />
                </View> 
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput 
                        style={styles.input} 
                        secureTextEntry={true}
                    />
                </View> 
                <TouchableOpacity 
                    style={styles.loginLink}
                    onPress={this.navToSignUpScreen}>
                    <Text style={styles.loginLinkText}>Don't have an account?</Text>
                    <FontAwesome  
                        name="long-arrow-right" 
                        style={styles.loginLinkIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.loginLink}
                    onPress={this.navToForgetPasswordScreen}>
                    <Text style={styles.loginLinkText}>Forget your password?</Text>
                    <FontAwesome  
                        name="long-arrow-right" 
                        style={styles.loginLinkIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.signUpButton}
                    onPress={this.signUp}>
                    <Text style={styles.signUpButtonText}>LOGIN</Text>
                </TouchableOpacity>
                <View style={styles.otherSignUpContainer}>
                    <Text style={styles.otherSignUpText}>Or login with social acount</Text>
                    <View style={styles.otherSignUpOptions}>
                        <TouchableOpacity style={styles.otherSignupOption}>
                            <Image style={styles.icon} source={googleIcon}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.otherSignupOption}>
                            <Image style={styles.icon} source={facebookIcon}/>
                        </TouchableOpacity>
                    </View>
                </View>
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
        width: '100%'
    },
    loginLink: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        marginTop: 10
    },
    loginLinkIcon: {
        color: 'red',
        marginLeft: 10,
        fontSize: 18
    },
    loginLinkText: {
        fontSize: 14,
        color: 'black',
    },
    signUpButton: {
        marginVertical: 40,
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
    signUpButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    otherSignUpContainer: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    otherSignUpText: {
        fontSize: 16,
        color: 'black'
    },
    otherSignUpOptions: {
        marginTop: 20,
        flexDirection: 'row',
    },
    otherSignupOption: {
        height: 60,
        width: 80,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        elevation: 3,
        shadowColor: 'lightgrey',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        borderColor: 'lightgrey'
    },
    icon: {
        height: 25,
        width: 25
    }
})