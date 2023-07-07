import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
      <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto justify-between'>
        <LiIcon reference={ref} />
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          <h3 className='capitalize font-bold text-2xl'>{type}&nbsp;</h3>
          <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
            {time} | {place}
          </span>
          <p className='font-medium w-full'>{info}</p>
        </motion.div>
      </li>
    );
  };
  
  const Education = () => {
    const ref = useRef(null);
    const { scrollYProgess } = useScroll({
      target: ref,
      offset: ['start end', 'center start'],
    });
  
    return (
      <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center '>
          Education
        </h2>
  
        <div ref={ref} className='w-[75%] mx-auto relative'>
          <motion.div
            style={{ scaleY: scrollYProgess }}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'
          />
          <ul>
            <Details
              type='Bachelor of Technology'
              time='2016-2020'
              place='Accurate Institute of Management and Technology'
              info='Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Operating System.'
            />
  
            <Details
              type='Senior Secondary School'
              time='2014-2016'
              place='Erny Memorial Senior Secondary School'
              info='Class 12th, Study Physics, Chemistry And Math'
            />
  
            <Details
              type='High School'
              time='2012-2014'
              place='Assumption Public School'
              info='Class 10th, Study basics of all subjects'
            />
          </ul>
        </div>
      </div>
    );
  };
  
  export default Education;  