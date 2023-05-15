import { 
    Button as ChakraButton
  } from '@chakra-ui/react'

interface Props {
    onClick: () => void
    children: React.ReactNode
}  

const Button: React.FC<Props> = ({onClick, children}) => {
  return (
    <ChakraButton onClick={onClick} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
        {children}
    </ChakraButton>
  )
}

export default Button