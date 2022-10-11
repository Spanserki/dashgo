import { Avatar, Box, Flex, Text } from "@chakra-ui/react";


export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Guilherme Spanserki</Text>
                <Text
                    color="gray.300"
                    fontSize="small"
                >
                guilhermespanserkiohc@hotmail.com</Text>
            </Box>

            <Avatar size="md" name="Guilherme Spanserki" src="http://github.com/Spanserki.png" />
    </Flex>
    )
}