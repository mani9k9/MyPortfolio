import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/blog_pic.jpg"
import project2 from "../../public/images/projects/Car_show.jpg"
import project3 from "../../public/images/projects/running.jpg"
import project4 from "../../public/images/projects/people_talk.jpg"
import project5 from "../../public/images/projects/portfolio.jpg"
import TransitionEffect from '@/components/TransitionEffect'

/* const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl relative'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl' />
      <Link href={link} target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 '>
        <span className='text-primary font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark'>
          {summary}
        </p>
        <div className='mt-2 flex items-center '>
          <Link href={github} target='_blank' className='w-10'>{" "} <GithubIcon /></Link>
          <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>Visit Project</Link>
        </div>
      </div>
    </article>
  )
} */

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark
     bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
      <Link href={link} target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4 '>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl '>{title}</h2>
        </Link>

        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target='_blank' className='rounded-lg font-semibold underline md:text-base'>Visit</Link>
          <Link href={github} target='_blank' className='w-8 md:w-6'><GithubIcon />{" "}</Link>
        </div>
      </div>

    </article>
  )

}

const projects = () => {
  return (
    <>
      <Head>
        <title>Shubham | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>

      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Imagination Trumps Knowledge!"
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
          />

          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>

          <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Portfolio"
                img={project5}
                link="https://my-portfolio-mauve-eta.vercel.app"
                github="https://github.com/mani9k9/MyPortfolio"
                type="Featured Project"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Blog App"
                img={project1}
                link="/"
                github="https://github.com/mani9k9/BlogApp"
                type="Featured Project"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Car Show"
                img={project2}
                link="https://car-show-peach.vercel.app"
                github="https://github.com/mani9k9/CarShow"
                type="Featured Project"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Big Boss Running"
                img={project3}
                link="https://boss-gaming.netlify.app/"
                github="https://github.com/mani9k9/big-boss-running-"
                type="Featured Project"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="People's Talk"
                img={project4}
                link="/"
                github="https://github.com/mani9k9/people-talk"
                type="Featured Project"
              />
            </div>
          </div>

        </Layout>
      </main>

    </>
  )
}

export default projects