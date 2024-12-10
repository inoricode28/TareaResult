
import { Pressable, Text } from 'react-native'
import { colors, styles } from '../../config/appTheme'

interface Props{
    label: string;
    color?: string;
    doubleSize?: boolean;
    actionButton: () => void;
    blackText?: boolean;
}

export const CalculatorButton = ({
    label,
    color = colors.darkGray,
    doubleSize = false,
    actionButton,
    blackText = false
    }:Props) => {
  return (
    <Pressable
        onPress = { () => actionButton() } 
        style={ ({pressed}) => ({...styles.button, 
            backgroundColor: color,
            width: (doubleSize)? 170 : 80,
            opacity: (pressed)? 0.8 : 1,
            })   }>
        <Text style= {{...styles.buttonText, color: (blackText)? 'black': 'white'}}>{label}</Text>
    </Pressable>
  )
}
