import {  Container, Stack, TextField } from '@mui/material';
import ButtonStyled from './components/ButtonStyled';
import { useApp } from './hooks/useApp';

function App() {

  const { 
    currentNumber, 
    handleOnClear, 
    handleAddNumber, 
    handleSumNumbers, 
    handleMinusNumbers,
    handleDivisionNumbers,
    handleMultiplicationNumbers,
    handleHandleEquals 
  } = useApp();

  return (
    <Container maxWidth='sm'>
      <TextField  
        value={currentNumber} 
        fullWidth  
        InputProps={{sx: { height: 75, backgroundColor: '#AAAAFF', border: 0, fontSize: 24, color: "#FFF"}}}
      />

      <Stack flexDirection='row'>
        <ButtonStyled variant='contained' onClick={handleMultiplicationNumbers}>X</ButtonStyled>
        <ButtonStyled variant='contained' onClick={handleDivisionNumbers}>/</ButtonStyled>
        <ButtonStyled variant='contained' onClick={handleOnClear}>c</ButtonStyled>
        <ButtonStyled variant='contained'>.</ButtonStyled>
      </Stack>


      <Stack flexDirection='row'>
        <ButtonStyled variant='contained' onClick={() => handleAddNumber('7')}>7</ButtonStyled>
        <ButtonStyled variant='contained' onClick={() => handleAddNumber('8')}>8</ButtonStyled>
        <ButtonStyled variant='contained' onClick={() => handleAddNumber('9')}>9</ButtonStyled>
        <ButtonStyled variant='contained' onClick={handleMinusNumbers}>-</ButtonStyled>
      </Stack>

      <Stack flexDirection='row'>
        <ButtonStyled variant='contained' onClick={() => handleAddNumber('4')}>4</ButtonStyled>
        <ButtonStyled variant='contained' onClick={() => handleAddNumber('5')}>5</ButtonStyled>
        <ButtonStyled variant='contained' onClick={() => handleAddNumber('6')}>6</ButtonStyled>
        <ButtonStyled variant='contained' onClick={handleSumNumbers}>+</ButtonStyled>
      </Stack>

      <Stack flexDirection='row'>
        <ButtonStyled variant='contained' onClick={() => handleAddNumber('1')}>1</ButtonStyled>
        <ButtonStyled variant='contained' onClick={() => handleAddNumber('2')}>2</ButtonStyled>
        <ButtonStyled variant='contained' onClick={() => handleAddNumber('3')}>3</ButtonStyled>
        <ButtonStyled variant='contained' onClick={handleHandleEquals}>=</ButtonStyled>
      </Stack>
    </Container>
  );
}

export default App;
