import React from 'react'
import {motion} from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { Line } from '@react-three/drei';
import { Link } from 'react-router-dom';
import myPDF from '/resources/MOHAMAD_ABDEEN_Resume.pdf'

const Hero = () => {
 
  return (
   <section className='relative flex flex-col w-full h-screen mx-auto '>
    <div 
    className={`${styles.paddingX}
     relative inset-0 top-[100px]
     max-w-7xl min-h-[50%] max-h-[50%] sm:max-h-[200px] mx-auto flex flex-row items-start justify-between
     gap-5 `}>
      <div className='flex flex-col justify-center items-center mt-5 '>
        <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
        <div className='w-1 sm:h-80 h-40 violet-gradient'/>
      </div>
      {/* custom Name and classes wit custom colors   */}
      <div className=''>
        <h1 className={`${styles.heroHeadText} text-white`}
        >Hi ,I 'm <span className='text-[#915eff]'>Mohamad</span>
        </h1>
          {/* here You can add the custom bio about the user */}
        <p className={`${styles.heroSubText}
        text-white-100
        `}>
              A Full Stack JavaScript Developer
        </p>
        <a href={myPDF} download='Resume'>
        <button 
           className='w-[70%] h-[45px] md:w-[40%]  bg-white text-[#7638fa] font-bold text-lg cursor-pointer  rounded-lg mt-7 '
          >
          Download Resume 
          </button>
        </a>
      </div>
    </div>
      <ComputersCanvas/>
      <div className='absolute xs:bottom-3 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[60px] rounded-3xl flex  border-4 border-secondary justify-center items-start p-2 '>
          <motion.div
          animate={{
            y:[0,25,0]
          }}
          transition={{
            duration:1.5,
            repeat:Infinity,
            repeatType:'loop'
          }}
          className='w-3 h-3 rounded-full bg-secondary mb-1 '
          />

          
          </div>
        </a>
      </div>
   </section>
  )
}

export default Hero