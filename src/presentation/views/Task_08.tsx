import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Task_08 = () => {
  return (
    <View style = {styles.container}>
        <View style={styles.cajaRoja}/>        
        <View style={styles.cajaVerde}/>
        <View style={styles.cajaAzul}/>
        
            
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'space-between'
    },
    cajaAzul:{
        flex:2,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#2B8BF2'
    },

    cajaVerde:{
        flex:4.3,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#55F22B'
    },

    cajaRoja:{
        flex:5.3,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F2312B'
    }   

});
