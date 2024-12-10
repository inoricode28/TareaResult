
import { View, StyleSheet, Text } from 'react-native'

export const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
        <View style={styles.redBox} >
            <Text>Hola Mundo</Text>
        </View>
        <View style={styles.purpleBox} >
            <Text>Hola Mundo</Text>
        </View>
    </View>
  )
}


 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    },
    redBox: {
        backgroundColor: 'red',
        margin: 10
    },
    purpleBox: {
        backgroundColor: 'purple',
        borderColor: 'black',
        borderWidth: 5,
        height: 50,
        padding: 5

    }
  })