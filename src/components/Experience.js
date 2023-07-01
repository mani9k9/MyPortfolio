import React from 'react'

const Details = ({ position, company, companyLink, time, address, work }) => {
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <div>
            <h3 className='capitalize font-bold text-2xl'>
                {position}&nbsp;<a href={companyLink} target="_blank" className="text-primary capitalize">@{company} </a>
            </h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </div>
    </li>
}

const Experience = () => {
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                Experience
            </h2>

            <div className='w-[75%] mx-auto relative'>

                <ul>
                    <Details
                        position="Data Analyst" company="1K Kirana"
                        companyLink="https://www.1knetworks.com"
                        time="11/2021-03/2023" address="Gurgoan, Haryana"
                        work="In my role, I performed daily sales report analysis to assess store performance and identify trends. I conducted market analysis to understand the supply and demand dynamics of the product. Additionally, I spearheaded the migration from static reporting to interactive dashboards using MS Excel, Tableau, and Power BI, resulting in a significant reduction in report production time and improved data accuracy. I collaborated with vendors and partners to facilitate data sharing and ensure seamless collaboration. Working closely with cross-functional teams, I delivered actionable insights and recommendations to stakeholders."

                    />
                </ul>

            </div>
        </div>
    )
}

export default Experience