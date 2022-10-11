import { Flex, Icon, IconButton, useBreakpointValue} from "@chakra-ui/react";
import { Logo } from "../Header/Logo";
import { Notification } from "../Header/NotificationsNav";
import { Profile } from "../Header/Profile";
import { SearchBox } from "../Header/SearchBox";
import { useSideBarDrawer } from "../../contexts/SideBarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Header() {
    const {onOpen} = useSideBarDrawer()
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            {!isWideVersion && (
                <IconButton
                    aria-label="opren navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize='24'
                    variant='unstyled'
                    onClick={onOpen}
                    mr='2'
                >

                </IconButton>
            )}

            <Logo />
            {isWideVersion && (
                <SearchBox />
            )}
            

            <Flex
                align="center"
                ml="auto"
            >
               <Notification />

                <Profile showProfileData={isWideVersion}/>
                
            </Flex>

        </Flex>
    )
}