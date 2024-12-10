import { useRef, useState } from "react"

enum Operation{
    add,
    subtract,
    multiply,
    divide,
}

export const useCalculator = () => {

  const [result, setResult] = useState('0');
  const [lastResult, setLastResult] = useState('0');

  const lastOperation = useRef<Operation>();

  const buildNumber = (numberString: string) => {

    // punto decimal no me deje poner mas puntos
    if(result.includes('.') && numberString === '.') return;

    // evaluar cuando comienza con un cero
    if(result.startsWith('0') || result.startsWith('-0')){

        // decimal
        if(numberString === '.'){
            return setResult(result + numberString);
        }

        // evalua si es decimal y me deja continuar
        if(numberString === '0' && result.includes('.')){
           return setResult(result + numberString);
        } 

        if(numberString !== '0' && !result.includes('.')){
            return setResult(numberString);
        }

        //  si es que tengo un cero, no es decimal y viene un numero lo reemplaza
        if(numberString === '0' && !result.includes('.')){
            return setResult(numberString);
        }

        //00000000000
        if(numberString === '0' && !result.includes('.')){
            return;
        }

    }

     setResult(result + numberString);
  }

  const clean = () => {
    setResult('0');
    setLastResult('0');
  }


const toggleSign = () => {
    if(result.includes('-')){
        return setResult(result.replace('-',''));
    }
    setResult('-' + result);
}

const deleteOperation = () => {   // -123123
    let currentSign = '';   //
    let temporalResult = result;  // -123123

    if( result.includes('-')){  
        currentSign = '-';  // -
        temporalResult = result.substring(1); // 123123
    }

    if(temporalResult.length > 1){   // 123123 12312 1231 123 12 1 ''
        return setResult(currentSign + temporalResult.slice(0,-1));  // -12312 -123 -1
    }

    setResult('0');
}

const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operation.divide;
}
const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operation.multiply;
}
const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operation.subtract;
}
const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operation.add;
}

const setLastNumber = () => {
    setLastResult(result);
    setResult('0');
}

const calculateOperation = () => {
    let resultCalculate;
    const num1 = Number(result);
    const num2 = Number(lastResult);
    switch(lastOperation.current){
        case Operation.add:
            resultCalculate = num1 + num2;
            break;
        case Operation.subtract:
            resultCalculate = num2 - num1;
            break;
        case Operation.multiply:
            resultCalculate = num1 * num2;
            break;
        case Operation.divide:
            resultCalculate = num2 / num1;
            break;
        default:
            throw new Error('La operación no está implementada');
    }

    finalOperation(resultCalculate);
}

const finalOperation = (resultOperation: number) => {
    setResult(`${resultOperation}`);
    setLastResult('0');

    lastOperation.current = undefined;
    
}
    
  return {
    //variables
    result,
    lastResult,

    //metodos
    buildNumber,
    clean,
    toggleSign, 
    deleteOperation, 
    divideOperation, 
    multiplyOperation, 
    subtractOperation, 
    addOperation, 
    calculateOperation
  }
}
