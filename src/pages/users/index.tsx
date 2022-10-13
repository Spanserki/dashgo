import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Th, Thead, Tr, Td, Text } from "@chakra-ui/react"
import Head from "next/head"
import Link from "next/link"
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import { Header } from "../../components/Header"
import { Pagination } from "../../components/Pagination"
import { SideBar } from "../../components/Sidebar"

export default function UserList() {
    return (
        <Box>
            <Head><title>Usuários</title></Head>

            <Header />

            <Flex
                w="100%"
                my="6"
                maxW={1480}
                mx="auto"
                px="6"
                
            >
                <SideBar />

                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>Usuários</Heading>
                        
                        <Link  href="users/create" passHref>
                             <Button
                            as='a'
                            size='sm' 
                            fontSize='sm' 
                            colorScheme='teal'
                            leftIcon={<Icon as={RiAddLine} fontSize='20'/>}
                            cursor='pointer'
                         >
                            Criar novo</Button>
                        </Link>
                       
                    </Flex>

                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px='6' color='gray.300' width='8'>
                                    <Checkbox colorScheme='pink' />
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th width='8'></Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Guilherme Spanserki</Text>
                                        <Text fontSize='sm' color='gray.300'>guilhermespanserkiohc@hotmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <Text>10 de Outubro, 2022</Text>
                                </Td>
                                <Td>
                                    <Button
                                        as='a'
                                        size='sm' 
                                        fontSize='sm' 
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiPencilLine} />}
                                        cursor='pointer'
                            >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>

                        <Tbody>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Ellen Spanserki</Text>
                                        <Text fontSize='sm' color='gray.300'>EllenSchiesl@hotmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <Text>21 de Setembro, 2022</Text>
                                </Td>
                                <Td>
                                    <Button
                                        as='a'
                                        size='sm' 
                                        fontSize='sm' 
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiPencilLine} />}
                                        cursor='pointer'
                            >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>

                        <Tbody>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Thanos Equilibrio</Text>
                                        <Text fontSize='sm' color='gray.300'>Equilibrio@hotmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <Text>25 de Dezembro, 2022</Text>
                                </Td>
                                <Td>
                                    <Button
                                        as='a'
                                        size='sm' 
                                        fontSize='sm' 
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiPencilLine} />}
                                        cursor='pointer'
                            >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}