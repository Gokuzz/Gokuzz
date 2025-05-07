import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";


const skills = ['Python','Javascript','Flask','React','Docker','HTML','GIT','CSS','Tailwind','Robot Framework']


const Skills = ()=>{

    const scrollRef = useRef(null);

    useEffect(()=>{
        const scrollContainer = scrollRef.current;
        let scrollAmount=0;

        const scroll=()=>{
            scrollAmount+=1
            if (scrollAmount>=scrollContainer.scrollWidth/2){
                scrollAmount=0
            }
            scrollContainer.scrollTo(scrollAmount,0)
        };

        const interval = setInterval(scroll,30);
        return ()=>clearInterval(interval)

    })

    return(
        <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center"
                initial={{opacity:0,y:20}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.6}}
                viewport={{once:true}}
                >My Skills</motion.h2>
                
                <div ref={scrollRef}  className="mt-10 flex justify-center overflow-x-auto scrollbar-hide" style={{scrollBehavior:'smooth'}}>
                    <div className="flex space-x-4">
                    {[...skills,...skills].map((item,index)=>(
                        <motion.span key={index} className={`bg-primary dark:bg-primary-light text-white px-4 py-2 
                        rounded-full text-sm whitespace-nowrap ${index >= skills.length?'lg:hidden':'' } `} whileHover={{scale:1.1}}>
                            {item}
                        </ motion.span>
                    ))}
                    </div>
                </div>

            </div>

        </section>
    )

}


export default Skills