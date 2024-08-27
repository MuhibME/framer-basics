'use client'
import React, { useEffect } from 'react'
import {motion, useInView, useScroll, useAnimation ,useTransform} from 'framer-motion'
import { useRef } from 'react'

const TextSection = ({children, all}) => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, {once:true});
    const mainControls = useAnimation();
    const {scrollYProgress}=useScroll({
        target:containerRef,
        offset:['start end','end end']
    });

    const pOne = useTransform(scrollYProgress, [0,1], [-100,0])
    const pTwo = useTransform(scrollYProgress, [0,1], [100,0])

    useEffect(()=>{
        if(isInView){
            mainControls.start('visible');
        }
    },[isInView])
    return (
    <motion.section  ref={containerRef} className='flex flex-col gap-10 mb-10 mx-auto my-auto'>
        <motion.h1 className='text-5xl font-bold tracking-wide text-slate-100 text-center'
            animate={mainControls}
            initial='hidden'
            variants={{
                hidden:{opacity:0,y:75},
                visible:{opacity:1,y:0, transition:{delay:0.5}}
            }}
        >{children}</motion.h1>
        {all?
        <>
        <motion.p style={{translateX:pOne}} className='text-slate-100 font-thin text-2xl md:text-4xl w-1/2 mx-auto text-center '>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio modi aliquid, reiciendis, odio incidunt accusantium nulla tenetur eaque voluptates dicta numquam voluptatibus sint ab consequatur excepturi aut quod. Vero, necessitatibus.            
        </motion.p>
        <motion.p style={{translateX:pTwo}} className='text-slate-100 font-thin text-2xl md:text-4xl w-1/2 mx-auto text-center '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt inventore minima neque a nulla velit culpa saepe ipsam error odit exercitationem omnis, officia eligendi magnam molestiae! Laborum obcaecati ea consequatur!
        </motion.p>
        </>:
        null
        }
    </motion.section>    
  )
}

export default TextSection;