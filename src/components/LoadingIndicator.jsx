import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoadingIndicator = () => {
    return (
        <View style={styles.container}>
            < ActivityIndicator animating={true} style={styles.customIndicator} size={200} color="white" />
        </View>
    )
}

export default LoadingIndicator

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignSelf:'center',
        width:200
    },
    customIndicator: {
        backgroundColor: 'black',
        borderRadius: 100,
      },
})