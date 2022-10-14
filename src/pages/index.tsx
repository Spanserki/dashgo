import {Button, Flex, Image, Stack, Text} from '@chakra-ui/react'
import { Input as ChakraInput } from '../components/Form/input'
import {useForm, SubmitHandler} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type SigninFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email(' '),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const {register, handleSubmit, formState: {errors = null, isSubmitting}} = useForm<SigninFormData>({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignin: SubmitHandler<SigninFormData> = async data => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      alignItems="center" 
      justify="center"
      flexDirection='column'
    >
        <Image 
          height='200'  
          borderRadius='10'
          mb='10'
          src='https://media4.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif' 
        />
        <Text
              fontSize={['2xl', '3xl']}
              fontWeight="bold"
              letterSpacing="tight"
              w="64"
              as='a'
              cursor='pointer'
              href="/"
              justifyContent='center'
              display='flex'
              mb='10'
      >
          DashGO
          <Text as="span" color="teal.200" ml="1">.</Text>
        </Text>
        
        <Flex
            as="form" //Transforma a div em um formulario
            width="100%"
            maxWidth={450}
            bg="gray.800"
            p="8"
            borderRadius={8}
            flexDir="column"
            onSubmit={handleSubmit(handleSignin)}
          >
          <Stack spacing="4">

            <ChakraInput 
              placeholder='E-mail' 
              name='email' 
              type='email' 
              {...register('email')}
              error={errors.email}
            />

            <ChakraInput 
              placeholder='Senha' 
              name='password' 
              type='password' 
              error={errors.password}
              {...register('password')}
            />

          </Stack>

          <Button 
            isLoading={isSubmitting} 
            type='submit' 
            mt="6" 
            colorScheme="teal"
            size="lg"
          >Entrar</Button>
          
        </Flex>
    </Flex>
  )
}