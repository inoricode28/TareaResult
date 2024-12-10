import { StyleSheet, Text, View } from "react-native"

interface Props{
    name?: string
}


export const HelloWorld = ({name = 'IDAT'}:Props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Hola {name}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: 'center'
        },
        title:{
            fontSize: 25,
            textAlign: 'center',
            color: 'black',
        }
    }
)