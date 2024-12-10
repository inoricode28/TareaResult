
import { View, StyleSheet, Text } from 'react-native'

export const FlexExcercises = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.box, styles.redBox ]} />
        <View style={[styles.box, styles.greenBox ]} />
        <View style={[styles.box, styles.blueBox ]} />
    </View>
  )
}


 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b6b6b6',
      flexDirection: 'column',   // column eje Y / row eje x
      justifyContent: 'center',  // mismo eje  Y
      alignItems: 'center'   //eje contrario X

    },
    box: {
      width: 100,
      height: 100,
      borderWidth: 10,
      borderColor: 'white'
    },
    redBox: {
      backgroundColor: '#ff5151',
    },
    greenBox: {
      width: '100%',
      backgroundColor: '#51ff8b',  // 1+2+1 = 4
    },
    blueBox: {
      backgroundColor: '#5188ff',
    }
  })