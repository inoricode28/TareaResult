
import { View, StyleSheet, Text } from 'react-native'

export const FlexDirection = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.box, styles.redBox]} />
        <View style={[styles.box, styles.purpleBox]} />
        <View style={[styles.box, styles.orangeBox]} />
        <View style={[styles.box, styles.redBox]} />
        <View style={[styles.box, styles.purpleBox]} />
        <View style={[styles.box, styles.orangeBox]} />
        <View style={[styles.box, styles.redBox]} />
        <View style={[styles.box, styles.purpleBox]} />
        <View style={[styles.box, styles.orangeBox]} />
        <View style={[styles.box, styles.redBox]} />
        <View style={[styles.box, styles.purpleBox]} />
        <View style={[styles.box, styles.orangeBox]} />
        <View style={[styles.box, styles.redBox]} />
        <View style={[styles.box, styles.purpleBox]} />
        <View style={[styles.box, styles.orangeBox]} />
        <View style={[styles.box, styles.redBox]} />
        <View style={[styles.box, styles.purpleBox]} />
        <View style={[styles.box, styles.orangeBox]} />
    </View>
  )
}


 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        flexDirection: 'row', // column define Y , row define eje X
        //justifyContent: 'center',  // centrado del flexDirection
        //alignItems: 'stretch'  // alinea al transversal 
        flexWrap: 'wrap',
        gap: 50
    },
    box:{
      width: 100,
      height: 100
    },
    redBox: {
      backgroundColor: 'red'
    },
    purpleBox: {
      backgroundColor: 'purple',
    },
    orangeBox: {
      backgroundColor: 'orange'

    }
  })