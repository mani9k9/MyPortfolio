import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type, time, place, info }) => {
    const ref =useRef(null);
    return ( 
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'> 

<LiIcon reference ={ref} />  
<motion.div initial={{y:50}}
whileInView={{y:0}}
transition={{duration:0.5, type:"spring"}}
>
            <h3 className='capitalize font-bold text-2xl'>
            </h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {place}
            </span>
            <p className='font-medium w-full'>
                {info}
            </p>
            </motion.div>
    </li>
    );
};

const Education = () => {
    const ref = useRef(null);
const {scrollYProgess} = useScroll(
    {
        target: ref,
        offset: ["start end" , "center start"]
    }
)

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Education
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div 
                style={{scaleY: scrollYProgess}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />
                <ul>
                    <Details
                        position="Data Analyst" company="1K Kirana"
                        companyLink="https://www.1knetworks.com"
                        time="11/2021-03/2023" address="Gurgoan, Haryana"
                        work="In my role, I performed daily sales report analysis to assess store performance and identify trends. I conducted market analysis to understand the supply and demand dynamics of the product. Additionally, I spearheaded the migration from static reporting to interactive dashboards using MS Excel, Tableau, and Power BI, resulting in a significant reduction in report production time and improved data accuracy. I collaborated with vendors and partners to facilitate data sharing and ensure seamless collaboration. Working closely with cross-functional teams, I delivered actionable insights and recommendations to stakeholders."

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
                        work="With over a 3 year of experience in the web design and development industry, I bring a wealth of knowledge and expertise to every project. I have a deep understanding of various technologies including HTML-5, CSS, Next.Js , Java and Shopify. My focus is on transforming complex briefs into stunning, abstract, modern, and realistic designs that captivate audiences. I strive to create visually striking products that tell a compelling story and showcase the original concept behind each business. I am passionate about curating stunning designs for the digital age, and I am dedicated to helping companies reach their audiences in engaging and meaningful ways. With a strong emphasis on user experience, I ensure that the designs I create not only look aesthetically pleasing but also function seamlessly. I am committed to staying up to date with the latest design trends and best practices to provide innovative and cutting-edge solutions. Whether it's a website, e-commerce platform, or custom application, I have the skills and creativity to bring your vision to life."
                    />
                </ul>

            </div>
        </div>
    )
}

export default Education