import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native"

interface Props{
    name?: string
}


export const CounterApp = ({name = 'IDAT'}:Props) => {

    const [count, setCount] = useState(1);


  return (
    <View style={styles.container}>
        <Text style={styles.title}>Hola {name}</Text>
        <Text style={styles.title}>Contador {count}</Text>
        <View style={styles.containerButton}>
            {/* <Button
                onPress={ () => setCount(count + 1) }
                title="Presionar aquí"
            ></Button> */}
            <Pressable
                onPress={ () => setCount(count + 1) }
                onLongPress={ () => setCount(0) }
                style={styles.button}
            >
                <Text style={styles.subtitle}>Presionar aquí</Text>
            </Pressable>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'white'
        },
        title:{
            fontSize: 25,
            textAlign: 'center',
            color: 'black',
        },
        containerButton:{
            margin: 50
        },
        button:{
            backgroundColor: '#5856D6',
            borderRadius: 10,
            alignItems: 'center',
            padding: 10
        },
        subtitle:{
            fontSize:15,
            color: 'white'
        }
    }
)