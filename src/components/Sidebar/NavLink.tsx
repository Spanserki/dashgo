import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface NavLinkProps extends ChakraLinkProps {
    title: string;
    icon: IconType;
    href: string;
}


export function NavLink({title, icon, href, ...rest}: NavLinkProps) {
    return (
        <Link href={href} display='flex' alignItems='center' color='pink.400' {...rest}>
            <Icon as={icon} fontSize='20'/>
            <Text ml='4' fontWeight='medium'>{title}</Text>
        </Link>
    )
}