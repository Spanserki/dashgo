import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react"
import { useSideBarDrawer } from "../../contexts/SideBarDrawerContext"
import { SideBarNav } from "./SideBarNav"

export function SideBar() {
    const {isOpen, onClose} = useSideBarDrawer();

    const isDrawerSideBar = useBreakpointValue({
        base: true,
        lg: false,
    })

    if (isDrawerSideBar) {
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay> {/*Deixa a tela mais escura ao abrir a SideBar*/}
                <DrawerContent bg='gray.800' p='4'> {/*Conteudo da SideBar*/}
                    <DrawerCloseButton mt='6'/> {/*Botão para fechar a SideBar*/}
                    <DrawerHeader>Navegação</DrawerHeader>

                    <DrawerBody>
                        <SideBarNav />
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
        )
        
    }

    return (
        <Box as='aside' w='64' mr='8'>
            <SideBarNav />
        </Box>
    )
}