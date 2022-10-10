import { Box, Button, Divider, Flex, Heading, HStack, Icon, SimpleGrid, VStack } from "@chakra-ui/react"
import { RiAddLine, RiSaveLine } from "react-icons/ri"
import { Input } from "../../components/Form/input"
import { Header } from "../../components/Header"
import { SideBar } from "../../components/SideBar"

export default function CreateUsers() {
    return (
        <Box>
            <Header />

            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <SideBar />

                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>

                    <Divider my='6' borderColor='gray.700' />

                    <VStack spacing='8'>
                        <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
                            <Input name="Nome completo" type='name'/>
                            <Input name="E-mail" type='email'/>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
                            <Input name="Senha" type='password'/>
                            <Input name="Confirmar senha" type='password'/>
                        </SimpleGrid>
                    </VStack>

                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Button 
                                as='a'
                                href="/users/" 
                                cursor='pointer' 
                                colorScheme='whiteAlpha'
                            >Cancelar
                            </Button>

                            <Button leftIcon={<Icon as={RiSaveLine}/>} colorScheme='pink'>Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}