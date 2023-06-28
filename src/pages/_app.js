import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import Footer from '@/components/Footer'


import {Montserrat} from "next/font/google"

const monstserrat =Montserrat({
  subsets:["latin"],
  variable:"--front-mon"
})

export default function App({ Component, pageProps }) {
  return( 
   <>
    <head>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </head>
  <main className='{${montserrat.variable} font-mont bg-light w-full min-h-screen}' >
    <NavBar />
  <Component {...pageProps} />
  <Footer />
  </main>
   </>
  )
}
