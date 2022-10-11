import { Box, Stack } from "@chakra-ui/react"
import { NavSection } from "../Sidebar/NavSection"
import { NavLink } from "../Sidebar/NavLink"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"

export function SideBarNav() {
    return (
        <Box as='aside' w='64' mr='8'>
            <Stack spacing='12' align='flex-start'>
                <NavSection title="GERAL">
                    <NavLink icon={RiDashboardLine} title='Dashboard' href="/dashboard"/>

                    <NavLink icon={RiContactsLine} title='Usuários' href="/users"/>
                </NavSection>
                
                <NavSection title="AUTOMAÇÂO">
                    <NavLink icon={RiInputMethodLine} title='Formulários' href="/"/>

                    <NavLink icon={RiGitMergeLine} title='Automação' href="/"/>
                </NavSection>
            </Stack>
        </Box>
    )
}