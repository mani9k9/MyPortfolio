import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import Footer from '@/components/Footer'


import {Montserrat} from "next/font/google"
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const monstserrat =Montserrat({
  subsets:["latin"],
  variable:"--front-mon"
})

export default function App({ Component, pageProps }) {
const router =useRouter();

  return( 
   <>
    <head>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </head>
  <main className='{${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen}' >
    <NavBar />
  <AnimatePresence mode="wait">
  <Component key={router.asPath} {...pageProps} />
  </AnimatePresence>
  <Footer />
  </main>
   </>
  )
}
