import '../styles/globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
  )
}

export default MyApp
