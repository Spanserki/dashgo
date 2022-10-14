import {Input as ChakraInput, Stack, InputProps as ChakraInputProps, FormControl, FormErrorMessage} from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    {name, type, placeholder, error,  ...rest}, ref) => {

    return (
        <FormControl isInvalid={!!error}>
            <Stack>
                <ChakraInput 
                    name={name}
                    type={type}
                    focusBorderColor='teal.200'
                    bgColor="gray.900"
                    variant="filled"
                    _hover={{
                        bgColor: 'gray.900'
                    }}
                    size="lg"
                    placeholder={placeholder}
                    ref={ref}
                    {...rest}
                />
                { !!error && (
                    <FormErrorMessage>
                        {error.message}
                    </FormErrorMessage>
                 ) }
            </Stack>
        </FormControl>
        
    )
}

export const Input = forwardRef(InputBase);