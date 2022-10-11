import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext } from "react";
import { useEffect } from 'react'

interface  SideBarDrawerProviderProps {
    children: ReactNode;
}

type SideBarDrawerContextData = UseDisclosureReturn

const SideBarDrawerContext = createContext({} as SideBarDrawerContextData);

export function SideBarDrawerProvider({children}:SideBarDrawerProviderProps) {
    const disclousure = useDisclosure()
    const router = useRouter();

    useEffect(() => {
        disclousure.onClose();
    }, [router.asPath])

    return (
        <SideBarDrawerContext.Provider value={disclousure}>
            {children}
        </SideBarDrawerContext.Provider>
    )
} 

export const useSideBarDrawer = () => useContext(SideBarDrawerContext)