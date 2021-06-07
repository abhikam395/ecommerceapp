import React, {Component} from 'react';
import { forwardRef } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";

class SettingPasswordBSheet extends Component{
    render(){
        return (
            <RBSheet
                ref={this.props.bottomSheetRef}
                height={500}
                closeOnDragDown
                openDuration={250}
                customStyles={{
                    container: {
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50
                    },
                }}>
                <View style={styles.container}>
                    <Text style={styles.title}>Password Change</Text>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="Full name" style={styles.input}/>
                    </View>
                    <TouchableOpacity style={styles.forgetButton}>
                        <Text style={styles.label}>Forget Password?</Text>
                    </TouchableOpacity>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="New Password" style={styles.input}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="Repeat New Password" style={styles.input}/>
                    </View>
                    <TouchableOpacity style={styles.saveButton}>
                        <Text style={styles.saveButtonTitle}>SAVE PASSWORD</Text>
                    </TouchableOpacity>
                </View>
            </RBSheet>
        )
    }
}

export default forwardRef((props, ref) => <SettingPasswordBSheet bottomSheetRef={ref}/>);

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        flex: 1
    },
    forgetButton: {
        marginLeft: 'auto'
    },
    saveButton: {
        height: 60,
        backgroundColor: 'red',
        width: '100%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    saveButtonTitle: {
        color: 'white',
        fontSize: 14,
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
})