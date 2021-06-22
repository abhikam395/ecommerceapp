import React from 'react';
import { StyleSheet, View, ActivityIndicator } from "react-native"

export function LoadingComponent({color = "red", size = "large"}) {
    return (
        <View style={styles.container}>
            <ActivityIndicator color={color} size={size}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        flex: 1,
        justifyContent: 'center'
    }
})