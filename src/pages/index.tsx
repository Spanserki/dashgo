import {Button, Center, Flex, Input, Stack} from '@chakra-ui/react'

export default function Home() {
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
            <Input 
              name="email" 
              type="email"
              focusBorderColor='pink.500'
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}
              size="lg"
              placeholder='E-mail'
            />

            <Input 
              name="password" 
              type="password"
              focusBorderColor='pink.500'
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}
              size="lg"
              placeholder='Senha'
            />
            </Stack>

            <Button type='submit' mt="6" colorScheme="pink" size="lg">Entrar</Button>
          
        </Flex>
    </Flex>
  )
}
