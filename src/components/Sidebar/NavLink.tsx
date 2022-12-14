import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import Link from "next/link";
import { IconType } from "react-icons/lib";
import {ActiveLink} from '../ActiveLink'

interface NavLinkProps extends ChakraLinkProps {
    title: string;
    icon: IconType;
    href: string;
}


export function NavLink({title, icon, href, ...rest}: NavLinkProps) {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display='flex' alignItems='center' {...rest}>
                <Icon as={icon} fontSize='20'/>
                <Text ml='4' fontWeight='medium'>{title}</Text>
            </ChakraLink>
        </ActiveLink>
        
    )
}