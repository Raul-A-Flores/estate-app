import React from 'react'
import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'




const Layout = ({children}) => (
    <>
        <Head>
            <title>Real Estate</title>
        </Head>
        <Box maxWidth='1280px' m='auto'>
            <header>
                <NavBar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Box>
    </>

)


export default Layout