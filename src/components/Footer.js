import React from "react";
import { motion } from "framer-motion";


const Footer=()=>{
    return(
        <motion.footer 
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}
        viewport={{once:true}}
        className="bg-gray-900 dark:bg-gray-800 text-white py-6 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2025 viraj shedge. All rights reserved.</p>
            </div>

        </ motion.footer>
    )
}


export default Footer