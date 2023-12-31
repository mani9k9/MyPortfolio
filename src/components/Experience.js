import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref =useRef(null);
    return ( 
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'> 

<LiIcon reference ={ref} />  
<motion.div initial={{y:50}}
whileInView={{y:0}}
transition={{duration:0.5, type:"spring"}}
>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {position}&nbsp;<a href={companyLink} target="_blank" className="text-primary dark:text-primaryDark capitalize">@{company} </a>
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
            </motion.div>
    </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
const {scrollYProgess} = useScroll(
    {
        target: ref,
        offset: ["start end" , "center start"]
    }
)

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>


                <motion.div 
                style={{scaleY: scrollYProgess}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
                md:w-[2px] md:left-[30px] xs:left-[20px]
                ' />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        position="Software Developer/Analyst" company="1K Kirana"
                        companyLink="https://www.1knetworks.com"
                        time="11/2021-03/2023" address="Gurgoan, Haryana"
                        work="Developed core functionalities, streamlined sales processes, and enhanced customer relationships. Implemented customer data management, order processing, inventory tracking, and sales analytics. Led migration to interactive dashboards, reducing report production time by 75% and increasing data accuracy by 25%. Collaborated with cross-functional teams, delivering actionable insights and recommendations. Contributed to the successful implementation and continuous improvement of the CRM system."

                    />

                    <Details
                        position="Software Developer" company="Satin CreditCare Network Limited"
                        companyLink="https://satincreditcare.com"
                        time="03/2021-10/2021" address="Gurgoan, Haryana"
                        work="I have extensive experience in web application development, specializing in HTML, CSS, and JavaScript. I am skilled in building user interfaces and front-end functionality to create engaging and responsive websites. Additionally, I am proficient in backend development using Java, Spring Boot, Hibernate, and MySQL. I have successfully worked on my company's internal website, delivering high-quality code within specified timelines. With strong problem-solving and troubleshooting skills, I am able to identify and resolve technical issues efficiently. Overall, I am a reliable and experienced web developer capable of delivering top-notch solutions."
                    />
                    <Details
                        position="Freelancer" company="Fiverr"
                        companyLink="https://www.fiverr.com/users/shubhammanitrip"
                        time="03/2021-10/2021" address="Gurgoan, Haryana"
                        work="With over a 2 year of experience in the web design and development industry, I bring a wealth of knowledge and expertise to every project. I have a deep understanding of various technologies including HTML-5, CSS, Next.Js , Java and Shopify. My focus is on transforming complex briefs into stunning, abstract, modern, and realistic designs that captivate audiences. I strive to create visually striking products that tell a compelling story and showcase the original concept behind each business. I am passionate about curating stunning designs for the digital age, and I am dedicated to helping companies reach their audiences in engaging and meaningful ways. With a strong emphasis on user experience, I ensure that the designs I create not only look aesthetically pleasing but also function seamlessly. I am committed to staying up to date with the latest design trends and best practices to provide innovative and cutting-edge solutions. Whether it's a website, e-commerce platform, or custom application, I have the skills and creativity to bring your vision to life."
                    />
                </ul>

            </div>
        </div>
    )
}

export default Experience