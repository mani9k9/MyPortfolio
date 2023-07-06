import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'

const projects = () => {
  return (
    <>
      <Head>
        <title>Shubham | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
            <AnimatedText text="Imagination Trumps Knowledge!" />
        </Layout>
      </main>

    </>
  )
}

export default projects