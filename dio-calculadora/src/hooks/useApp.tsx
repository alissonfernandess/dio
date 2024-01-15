import { useState } from "react"

interface IUseApp {
    currentNumber: string,
    handleOnClear(): void,
    handleAddNumber(number: string): void,
    handleSumNumbers(): void,
    handleMinusNumbers(): void,
    handleMultiplicationNumbers(): void,
    handleDivisionNumbers(): void,
    handleHandleEquals(): void
}

export const useApp = ():IUseApp => {
const [currentNumber, setCurrentNumber] = useState<string>('0')
const [firstNumber, setFirstNumber] = useState<string>('0')
const [operation, setOperation] = useState<string>('')

function handleOnClear(): void {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
}

function handleAddNumber(number: string): void {
    setCurrentNumber(prevState => `${prevState === '0' ? '' : prevState}${number}`)
}

function handleSumNumbers(): void {
    if(firstNumber === '0') {
        setFirstNumber(currentNumber)
        setCurrentNumber('0')
        setOperation('+')
    } else {
        const sum = Number(firstNumber) + Number(currentNumber)
        setCurrentNumber(String(sum))
        setOperation('')
    }
}


function handleMinusNumbers(): void {
    if(firstNumber === '0') {
        setFirstNumber(currentNumber)
        setCurrentNumber('0')
        setOperation('-')
    } else {
        const sum = Number(firstNumber) - Number(currentNumber)
        setCurrentNumber(String(sum))
        setOperation('')
    }
}

function handleMultiplicationNumbers(): void {
    if(firstNumber === '0') {
        setFirstNumber(currentNumber)
        setCurrentNumber('0')
        setOperation('*')
    } else {
        const sum = Number(firstNumber) * Number(currentNumber)
        setCurrentNumber(String(sum))
        setOperation('')
    }
}

function handleDivisionNumbers(): void {
    if(firstNumber === '0') {
        setFirstNumber(currentNumber)
        setCurrentNumber('0')
        setOperation('/')
    } else {
        const sum = Number(firstNumber) / Number(currentNumber)
        setCurrentNumber(String(sum))
        setOperation('')
    }
}

function handleHandleEquals(): void  {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
        if(operation === '+') {
            handleSumNumbers()
        } else if (operation === '-') {
            handleMinusNumbers()
        } else if (operation === '*') {
            handleMultiplicationNumbers()
        } else if (operation === '/') {
            handleDivisionNumbers()
        }
    }
}


  return {
    currentNumber,
    handleOnClear,
    handleAddNumber,
    handleSumNumbers,
    handleMinusNumbers,
    handleMultiplicationNumbers,
    handleDivisionNumbers,
    handleHandleEquals
  }
}
