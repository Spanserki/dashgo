import {Button, Flex, Input, Stack} from '@chakra-ui/react'
import { Input as ChakraInput } from '../components/Form/input'

export default function SignIn() {
  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      alignItems="center" 
      justify="center"
    >
        <Flex
            as="form"
            width="100%"
            maxWidth={450}
            bg="gray.800"
            p="8"
            borderRadius={8}
            flexDir="column"
          >
          <Stack spacing="4">

            <ChakraInput name='E-mail' type='email'/>
            <ChakraInput name='Senha' type='password'/>

          </Stack>

            <Button type='submit' mt="6" colorScheme="pink" size="lg">Entrar</Button>
          
        </Flex>
    </Flex>
  )
}
