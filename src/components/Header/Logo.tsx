import { Text } from "@chakra-ui/react";

export function Logo() {
    return (
        <Text
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="tight"
            w="64"
            as='a'
            cursor='pointer'
            href="/"
    >
        DashGO
        <Text as="span" color="pink.500" ml="1">.</Text>
    </Text>
    )
}