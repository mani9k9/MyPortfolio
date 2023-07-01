import AnimatedText from '@/components/AnimatedText'
import React from 'react'
import Head from 'next/head'

const about = () => {
  return (
    <>
    <Head>
      <title>Shubham | About Page</title>
      <meta name="description" content="any description" />
    </Head>
    <main>
      <AnimatedText text="Passion Fuels Purpose! " />
    </main>
    </>
  )
}

export default about