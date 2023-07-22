import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import  {fadeIn,textVariant} from '../utils/motion';
import {services} from '../constants'
import { SectionWrapper } from './hoc';
const ServiceCard=({index,title,icon})=>{
return (
  <Tilt className='xs:w-[250px] w-full '>
      <motion.div 
      variants={fadeIn('right','spring',0.5*index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
            <img src={icon} className='w-16 h-16 object-contain' alt="" />
            <h1 className='text-white text-[20px] text-center font-semibold'>{title}</h1>
        </div>
      </motion.div>
  </Tilt>
)
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText}`}>Introduction</p>
      <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      <motion.p variants={fadeIn('',',0,1,1')}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      I'm A Computer Science Graduate With a proven ability to collaborate effectively, I
        specialize in Front-End Development and I'm willing to dedicate my full time and effort
      to excel and compete in my profession.
      </motion.p>
      <div className='mt-20 flex justify-center flex-wrap gap-10'>
        {services.map((service,index)=><ServiceCard key={service.title} index={index} {...service}/>)}
      </div>
    </motion.div>
    </>
    )
}

export default SectionWrapper(About,'about');