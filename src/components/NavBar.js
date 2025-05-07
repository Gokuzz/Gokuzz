import React,{useState} from "react";
import {motion}from "framer-motion"



const NavBar = ({isDarkMode,setIsDarkMode}) =>{

    const [open,setOpen] = useState(false);

    return(
        <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10 transistion-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex items-center">
                    <motion.span initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.5}} className="text-2xl font-bold text-primary dark:text-primary-light">VIRAJ SHEDGE</motion.span>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <motion.a href="#hero" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition-colors" whileHover={{scale:1.1}}>Home</motion.a>
                    <motion.a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition-colors" whileHover={{scale:1.1}}>About</ motion.a>
                    <motion.a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition-colors" whileHover={{scale:1.1}}>Project</motion.a>
                    <motion.a href="#skills" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition-colors" whileHover={{scale:1.1}} >Skills</motion.a>
                    <motion.a href="#contact"   className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition-colors" whileHover={{scale:1.1}}>Contact</motion.a>
                    <motion.button onClick={()=>setIsDarkMode(!isDarkMode)} 
                        className="text-gray-700 dark:text-gray-light-200" whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                            {isDarkMode ? '☀️' : '🌙'}
                    </motion.button>
                </div>
                <div className="md:hidden flex items-center">

                <button onClick={()=>setOpen(!open)} className="text-gray-700 dark:text-gray-200" >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />):
                (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />)}
                </svg>
                </button>
                </div>
            </div>
            </div>
            {open && (
                <motion.div className="md:hidden overflow:hidden" initial={{height:0}} animate={{height:'auto'}} transition={{duration:0.1}} >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#hero" className="block text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light">Home</a>
                        <a href="#about" className="block text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light">About</a>
                        <a href="#projects" className="block text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light">Project</a>
                        <a href="#skills" className="block text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light">Skills</a>
                        <a href="#contact" className="block text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light">Contact</a>
                        <motion.button onClick={()=>setIsDarkMode(!isDarkMode)} 
                        className="text-gray-700 dark:text-gray-light-200" whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                            {isDarkMode ? '☀️' : '🌙'}
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </nav>

    )



}

export default NavBar