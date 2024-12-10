
import { View, StyleSheet, Text } from 'react-native'

export const Position = () => {
  return (
    <View style={styles.container}>
        <View style={styles.redBox} />
        <View style={styles.purpleBox} />
        <View style={styles.orangeBox} />
    </View>
  )
}


 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    },
    redBox: {
        flex: 1,
        width: "100%",
        height: 200,
        backgroundColor: 'red',
        borderWidth: 10,
        borderColor: 'white'
    },
    purpleBox: {
        width: 200,
        height: 200,
        backgroundColor: 'purple',
        borderWidth: 10,
        borderColor: 'white'
    },
    orangeBox: {
        width: 200,
        height: 200,
        backgroundColor: 'orange',
        borderWidth: 10,
        borderColor: 'white'
    }
  })