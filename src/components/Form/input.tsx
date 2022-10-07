import {Input as ChakraInput, Stack, InputProps as ChakraInputProps} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}

export function Input({name, type, ...rest}: InputProps) {
    return (
        <Stack>

            <ChakraInput 
                name={name}
                type={type}
                focusBorderColor='pink.500'
                bgColor="gray.900"
                variant="filled"
                _hover={{
                    bgColor: 'gray.900'
                }}
                size="lg"
                placeholder={name}
                {...rest}
            />
        </Stack>
        
    )
}