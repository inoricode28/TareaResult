import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Task_07 = () => {
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
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cajaAzul:{
        width:100,        
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#2B8BF2'
    },

    cajaVerde:{
        width:100,        
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#55F22B'
    },

    cajaRoja:{
        width:100,        
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F2312B'
    }   

});