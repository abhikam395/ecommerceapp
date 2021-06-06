import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const image = 'https://i.pinimg.com/originals/a1/5f/65/a15f654ef33e4e5bf1883d56562ff549.jpg';

export default class ProfileScreen extends Component{
    render(){
        return (
            <ScrollView style={styles.container}>
                <View style={styles.profileContent}>
                    <Image 
                        source={{uri: image}} 
                        style={styles.image}
                    />
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>John</Text>
                        <Text style={styles.email}>john@gmail.com</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.item}>
                    <View>
                        <Text style={styles.title}>My orders</Text>
                        <Text style={styles.label}>Already have 12 orders</Text>
                    </View>
                    <MaterialIcons 
                        name="keyboard-arrow-right" 
                        size={26} 
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <View style={styles.line}/>
                <TouchableOpacity style={styles.item}>
                    <View>
                        <Text style={styles.title}>Shipping addresses</Text>
                        <Text style={styles.label}>3 addresses</Text>
                    </View>
                    <MaterialIcons 
                        name="keyboard-arrow-right" 
                        size={26} 
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <View style={styles.line}/>
                <TouchableOpacity style={styles.item}>
                    <View>
                        <Text style={styles.title}>Payment methods</Text>
                        <Text style={styles.label}>Visa **34</Text>
                    </View>
                    <MaterialIcons 
                        name="keyboard-arrow-right" 
                        size={26} 
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <View style={styles.line}/>
                <TouchableOpacity style={styles.item}>
                    <View>
                        <Text style={styles.title}>Promocodes</Text>
                        <Text style={styles.label}>You have special promocodes</Text>
                    </View>
                    <MaterialIcons 
                        name="keyboard-arrow-right" 
                        size={26} 
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <View style={styles.line}/>
                <TouchableOpacity style={styles.item}>
                    <View>
                        <Text style={styles.title}>My reviews</Text>
                        <Text style={styles.label}>Reviews for 4 items</Text>
                    </View>
                    <MaterialIcons 
                        name="keyboard-arrow-right" 
                        size={26} 
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <View style={styles.line}/>
                <TouchableOpacity style={styles.item}>
                    <View>
                        <Text style={styles.title}>Settings</Text>
                        <Text style={styles.label}>Notifications, password</Text>
                    </View>
                    <MaterialIcons 
                        name="keyboard-arrow-right" 
                        size={26} 
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileContent: {
        flexDirection: 'row',
        height: 200,
        paddingHorizontal: 15,
        paddingTop: 26
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    nameContainer: {
        padding: 20,
        
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 15,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    label: {
        marginTop: 3,
        fontSize: 13,
        color: '#bdbdbd'
    },
    icon: {
        marginLeft: 'auto'
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: 'lightgrey',
        marginVertical: 15
    }
})