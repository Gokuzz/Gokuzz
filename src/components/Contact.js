import React from "react";
import { motion } from "framer-motion";


const Contact =()=>{

    return(
        <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center" 
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}
        viewport={{once:true}}
        >Get in Touch</motion.h2>
        <motion.p className="mt-6 text-lg text-gray-600 dark:text-gray-300 text-center"
         initial={{opacity:0,y:20}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:0.6,delay:0.4}}
         viewport={{once:true}}
        >
            Feel free to reach out for collaborations or inquiries!
        </motion.p>
        <motion.div 
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6,delay:0.6}}
        viewport={{once:true}}
        className="mt-10 flex justify-center space-x-6">
            <a href="mailto:viraj26012001@gmail.com" className="text-primary hover:text-primary-dark">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/viraj-shedge/" className="text-primary hover:text-primary-dark">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>
        </motion.div>

        </div>
        </section>

    )

}


export default Contact