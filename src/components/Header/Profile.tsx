import { Avatar, Box, Flex, Text, useBreakpoint, useBreakpointValue } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData} : ProfileProps) {

    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                <Text>Guilherme Spanserki</Text>
                <Text
                    color="gray.300"
                    fontSize="small"
                >
                guilhermespanserkiohc@hotmail.com</Text>
            </Box>
            )}
            

            <Avatar size="md" name="Guilherme Spanserki" src="http://github.com/Spanserki.png" />
    </Flex>
    )
}