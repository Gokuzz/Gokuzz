import React from "react";
import { motion } from "framer-motion";

const projects = [
    {
      title: 'File Share Management Platform',
      description: 'Led backend development and contributed to React frontend for a secure file sharing platform with cloud integration (AWS, GCP, Azure), encrypted data handling, mail notifications, and ChatGPT integration.',
      link: '#',
    },
    {
      title: 'Contract Management Platform',
      description: 'Built a full contract workflow system, contributing to both backend and React-based frontend. Integrated OCR, Zoho digital signatures, S3 backups, and GPT-powered mail notifications.',
      link: '#',
    },
    {
      title: 'Ticket Management Platform',
      description: 'Developed a ticketing solution with S3 file storage and custom notifications. Handled backend and React UI, using Celery for asynchronous tasks like email and file handling.',
      link: '#',
    },
  ];

const Projects = ()=>{
    return(
        <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center"
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}
        viewport={{once:true}}
        >
          My Projects</motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project,index)=>(
                <motion.div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                initial={{opacity:0,y:20}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.6,delay:0.2*index}}
                whileHover={{scale:1.05, transition:{duration:0.2}}}
                viewport={{once:true}}>
                  <div className="p-6">
                <h3 className="text-xl font-semibold text-primary dark:text-primary-light">{project.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>    
                </div>
                </motion.div>
            ))}
        </div>
        </div>

        </section>
    )
}


export default Projects