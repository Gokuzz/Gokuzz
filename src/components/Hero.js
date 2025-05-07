import React from "react";
import { motion } from "framer-motion";

const Hero = () =>{

    return(
    
    <section id="hero" className="min-h-screen flex items-center hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8}} className="text-4xl md:text-6xl font-bold text-offwhite shadow-text">
                Hi, I'm <span className="text-primary-accent shadow-text">Viraj Shedge</span>
            </ motion.h1>
            <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.3}}  className="mt-4 text-xl text-gray-300 shadow-text">
                Full Stack Developer | Building Web Applications
            </ motion.p>
            <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 inline-block bg-primary-accent text-offwhite px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors shadow-text"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
            View My Work
            </ motion.a>
        </div>
    </section>



    )


}


export default Hero