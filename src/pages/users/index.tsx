import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Th, Thead, Tr, Td, Text, Spinner, useRangeSlider } from "@chakra-ui/react"
import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import { Header } from "../../components/Header"
import { Pagination } from "../../components/Pagination"
import { SideBar } from "../../components/Sidebar"
import { useUsers } from "../../services/hooks/useUsers"

export default function UserList() {
    const {data, isLoading, error, isFetching} = useUsers()
    const [page, setPage] = useState(1)

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
                        <Heading 
                            size='lg' 
                            fontWeight='normal'
                            >
                                Usuários
                                {!isLoading && isFetching && <Spinner size='sm' color="gray.500" ml='4' />}
                        </Heading>
                        
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

                    { isLoading ? (
                        <Flex justify='center'>
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify='center'>
                            <Text>Falha ao obter informações dos usuários</Text>
                        </Flex>
                    ) : (
                        <>
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
                                    {data.map(user => {
                                        return (
                                            <Tr key={user.id}>
                                                <Td px='6'>
                                                    <Checkbox colorScheme='pink' />
                                                </Td>
                                                <Td>
                                                    <Box>
                                                        <Text fontWeight='bold'>{user.name}</Text>
                                                        <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                                                    </Box>
                                                </Td>
                                                <Td>
                                                    <Text>{user.createAt}</Text>
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
                                        )
                                    })}
                                    
                                </Tbody>
                        </Table>
                    </>
                    )}
                        <Pagination 
                            totalCountOfRegisters={200}
                            currentPage={page}
                            onPageChange={setPage}
                            
                        />
                </Box>
            </Flex>
        </Box>
    )
}