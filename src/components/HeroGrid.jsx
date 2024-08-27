'use client'
import React, { useRef } from 'react';
import {delay, easeInOut, easeOut, motion, useScroll} from 'framer-motion'


const gridVariants={
    hidden:{opacity:0,} ,
    visible:{opacity:1, 
    transition:{
        staggerChildren:0.5
    },}
}


const gridSquareVariants ={
    hidden:{opacity:0},
    visible:{opacity:1}
}


const icon = {
    hidden: {
        opacity:0,
        pathLength: 0,
        fill: "rgba(252, 211, 77, 0)"
    },
    visible: {
        opacity:1,
        pathLength: 1,
        fill: "rgba(252, 211, 77, 1)",
      
    }
  }
    

const HeroGrid = () => {
    const dragcontainer = useRef(null);
    const {scrollYProgress: completionProgress} = useScroll();
  return (
    <div className=' flex flex-col gap-10 overflow-x-hidden overflow-y-hidden h-full mb-20'>
        <motion.section variants={gridVariants}
        initial='hidden'
        animate='visible' 
        transition={{delay:0.5}}
        className='grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 p-10 gap-10' >
            {/* fade up and down */}
            <motion.div variants={gridSquareVariants} className='bg-slate-800 flex items-center aspect-square rounded-lg justify-center gap-10'>
                <motion.div initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{duration:1, ease:easeOut ,delay:0.2}} className='w-20 h-20 rounded-lg bg-stone-100' />
                <motion.div initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} transition={{duration:1, ease:easeOut ,delay:0.3}} className='w-20 h-20 rounded-full bg-stone-100' />
            </motion.div>
            {/* rotating object / keyframes */}
            <motion.div variants={gridSquareVariants} className='bg-slate-800 flex items-center aspect-square rounded-lg justify-center gap-10'>
                <motion.div className='w-1/3 h-1/3 bg-rose-400 shadow-md' 
                animate={{
                    scale: [1,2,2,1],
                    rotate:[0,90,90,0],
                    borderRadius:['10%','10%','50%','10%']
                }} 
                transition={{ease:easeInOut, duration:5, repeat:Infinity, repeatDelay:1}}
                />
            </motion.div>
            
            {/* Button animaton */}
            <motion.div variants={gridSquareVariants} className='bg-slate-800 flex items-center aspect-square rounded-lg justify-center gap-10'>
                <motion.button 
                whileTap={{scale:0.9}}
                whileHover={{scale:1.1, backgroundColor:'#d1d5db',color:'black'}}
                transition={{bounceDamping:10,stiffness:600}}
                className='bg-emerald-600 rounded-lg w-1/2 text-2xl py-2 text-gray-200 font-light tracking-wide'>
                    click me
                </motion.button>
            </motion.div>
            <motion.div ref={dragcontainer} variants={gridSquareVariants} className='bg-slate-800 flex items-center aspect-square rounded-lg justify-center gap-10'>
                <motion.div className='bg-orange-500 w-1/3 h-1/3 rounded-3xl cursor-grab z-20' 
                drag
                dragConstraints={dragcontainer}
                transition={{
                    bounceDamping:10,
                    bounceStiffness:600
                }}
                />
            </motion.div>
            <motion.div variants={gridSquareVariants} className='bg-slate-800 flex items-center aspect-square rounded-lg justify-center gap-10'>
                <motion.div className='w-40 bg-gray-50/20 rounded-lg aspect-square'>
                    <motion.div className='w-full bg-gray-400 rounded-xl h-full origin-bottom' 
                    style={{scaleY:completionProgress}}
                    />
                </motion.div>
            </motion.div>
            <motion.div variants={gridSquareVariants} className='bg-slate-800 flex items-center aspect-square rounded-lg justify-center gap-10'>
            <svg
            xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 100 100"
            className='w-1/2 stroke-amber-500 stroke-[0.5]'
            >
            <motion.path
                d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                    default:{duration:2, ease:'easeInOut', delay:1, repeatDelay:1, repeat:Infinity, repeatType:'reverse'},
                    fill:{duration:2, ease:'easeIn', delay:2.5, repeat:Infinity, repeatType:'reverse',repeatDelay:1},
                }}
            />
        </svg>
            </motion.div>
        </motion.section>

        
    </div>
  )
}

export default HeroGrid