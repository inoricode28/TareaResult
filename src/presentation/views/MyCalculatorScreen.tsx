

import { Text, View } from 'react-native'
import { colors, styles } from '../../config/appTheme'
import { CalculatorButton } from '../components/CalculatorButton'
import { useCalculator } from '../hooks/useCalculator'

export const MyCalculatorScreen = () => {

  const { result, lastResult, buildNumber,clean, toggleSign, 
    deleteOperation, divideOperation, multiplyOperation, 
    subtractOperation, addOperation, calculateOperation   } = useCalculator();

  return (
    <View style={ styles.container}>
        <View style={styles.containerResult}>
          <Text style={styles.result}
          adjustsFontSizeToFit
          numberOfLines={1}
          >{result}</Text>
           <Text style={styles.subResult}
          adjustsFontSizeToFit
          numberOfLines={1}
          >{lastResult}</Text>
        </View>

        <View style= {styles.row}>
          <CalculatorButton actionButton={ clean } label="C" blackText color = {colors.ligthGray } />
          <CalculatorButton actionButton={ toggleSign } label="+/-" blackText color = {colors.ligthGray } />
          <CalculatorButton actionButton={ deleteOperation} label="del"  blackText color = {colors.ligthGray } />
          <CalculatorButton actionButton={ divideOperation} label="÷" color = {colors.orange}/>
        </View>
        <View style= {styles.row}>
          <CalculatorButton actionButton={ () => buildNumber("7") } label="7" />
          <CalculatorButton actionButton={ () => buildNumber("8")} label="8" />
          <CalculatorButton actionButton={ () => buildNumber("9")} label="9" />
          <CalculatorButton actionButton={ multiplyOperation} label="x" color = {colors.orange}/>
        </View>
        <View style= {styles.row}>
          <CalculatorButton actionButton={ () => buildNumber("4")} label="4" />
          <CalculatorButton actionButton={ () => buildNumber("5")} label="5" />
          <CalculatorButton actionButton={ () => buildNumber("6")} label="6" />
          <CalculatorButton actionButton={ subtractOperation} label="-" color = {colors.orange}/>
        </View>
        <View style= {styles.row}>
          <CalculatorButton actionButton={ () => buildNumber("1")} label="1" />
          <CalculatorButton actionButton={ () => buildNumber("2")} label="2" />
          <CalculatorButton actionButton={ () => buildNumber("3")} label="3" />
          <CalculatorButton actionButton={ addOperation} label="+" color = {colors.orange}/>
        </View>
        <View style= {styles.row}>
          <CalculatorButton actionButton={ () => buildNumber("0")} label="0" doubleSize />
          <CalculatorButton actionButton={ () => buildNumber(".")} label="." />
          <CalculatorButton actionButton={ calculateOperation} label="=" color = {colors.orange} />
        </View>
    </View>
  )
}
