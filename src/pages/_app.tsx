import {AppProps} from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from '../styles/theme'
import { SideBarDrawerProvider } from '../contexts/SideBarDrawerContext'
import { makeServer } from '../services/mirage'

if (process.env.NODE_ENV === 'development') { //Verifica se esta rodando a aplicação em ambiente de desenvolvimento 
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SideBarDrawerProvider>
        <Component {...pageProps} />
      </SideBarDrawerProvider>
    </ChakraProvider>
  )
  
  
}

export default MyApp
