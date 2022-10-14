import { Box, Button, Divider, Flex,  Heading, HStack, Icon, SimpleGrid, VStack } from "@chakra-ui/react"
import Head from "next/head"
import Link from "next/link"

import { RiSaveLine } from "react-icons/ri"

import {useForm, SubmitHandler} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from "../../components/Form/input"
import { Header } from "../../components/Header"
import { SideBar } from "../../components/Sidebar"

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }
  
  const CreateUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email(' '),
    password: yup.string().required('Senha obrigatória').min(6, 'Minimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas não são iguais'),
  })

export default function CreateUsers() {
    const {register, handleSubmit, formState: {errors = null, isSubmitting}} = useForm<CreateUserFormData>({
        resolver: yupResolver(CreateUserFormSchema)
      })

      const handleCreate: SubmitHandler<CreateUserFormData> = async data => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data)
      }

    return (
        <Box>
            <Head><title>Novo usuário</title></Head>
            
            <Header />

            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <SideBar />

                <Box 
                    flex='1' 
                    borderRadius={8} 
                    bg='gray.800' 
                    p='8' 
                    as='form' 
                    onSubmit={handleSubmit(handleCreate)}
                >
                    <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>

                    <Divider my='6' borderColor='gray.700' />

                    <VStack spacing='8'>
                        <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
                            <Input
                                placeholder='Nome' 
                                name="name" 
                                type='name' 
                                {...register('name')} 
                                error={errors.name}
                            />
                            <Input 
                                placeholder='E-mail' 
                                name='email' 
                                type='email' 
                                {...register('email')}
                                 error={errors.email}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
                            <Input 
                                placeholder='Senha' 
                                name="password" 
                                type='password' 
                                {...register('password')} 
                                error={errors.password}
                            />
                            <Input 
                                placeholder='Confirmar senha' 
                                name="password_confirmation" 
                                type='password' 
                                {...register('password_confirmation')} 
                                error={errors.password_confirmation}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Link href="/users/" passHref>
                                <Button 
                                    as='a' 
                                    cursor='pointer' 
                                    colorScheme='whiteAlpha'
                                >Cancelar
                            </Button>

                            </Link>
                            <Button 
                                isLoading={isSubmitting}
                                type="submit" 
                                leftIcon={<Icon as={RiSaveLine}/>} 
                                colorScheme='teal'
                            >Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}