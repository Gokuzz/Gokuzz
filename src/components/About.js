import React from "react";

import { motion } from "framer-motion";

const About = ()=>{
    return(
        <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{once:true}}
                >About Me</motion.h2>
                <motion.p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{once:true}}
                >
                I'm a motivated Full Stack Developer with hands-on experience in building web applications using React.js for the 
                frontend and Python for the backend. I enjoy crafting clean, user-friendly interfaces and developing efficient
                 APIs. I also have a working knowledge of Docker, which helps me manage and deploy applications in a consistent and scalable way.
                 I'm passionate about learning new technologies and continuously improving my development workflow.
                </motion.p>
            </div>
        </section>

    )
}

export default About