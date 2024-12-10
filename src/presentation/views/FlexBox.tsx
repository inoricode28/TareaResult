
import { View, StyleSheet, Text } from 'react-native'

export const FlexBox = () => {
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
        backgroundColor: 'gray'
    },
    redBox: {
      flex: 1,                    //  1+2+3 = 6  -> 1/6
      backgroundColor: 'red'
    },
    purpleBox: {
      flex: 2,                  // 2/6
      backgroundColor: 'purple'
    },
    orangeBox: {
      flex: 3,                //3/6
      backgroundColor: 'orange'

    }
  })