'use client'
import React, { useState } from 'react'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ColourfulText } from "@/components/ui/colourful-text";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
    title: string;
    description: string;
    image: string;
    documentation?: string;
    ppt?: string;
    technologies: string[];
    features: string[];
}

const projects: Project[] = [
    {
      title: "Agri Connect",
      description:
        "AgriConnect is a MERN stack-based eCommerce platform that connects farmers directly with consumers, ensuring fair pricing and transparency. It features a user-friendly design with Tailwind CSS and MySQL for efficient data management.",
      image: "/assets/agri-connect.png",
      documentation: "/docs/agri-connect1.pdf",
      ppt: "/ppts/agri-connect.pdf",
      technologies: ["MERN Stack", "Tailwind CSS", "Cloudinary"],
      features: [
        "Farmer-Consumer Direct Connect",
        "Real-time Price Updates",
        "Secure Payment Gateway",
        "Order Tracking System"
      ]
    },
    {
      title: "Weather Masters",
      description:
        "Weather Masters is a Flask and JavaScript-based web application that provides real-time weather information. This documentation aims to guide users through the application's structure, functionality, and usage.",
      image: "/assets/wm.PNG",
      documentation: "/docs/weather-masters.pdf",
      ppt: "/ppts/weather-masters.pdf",
      technologies: ["Flask", "JavaScript", "OpenWeather API"],
      features: [
        "Real-time Weather Updates",
        "5-day Forecast",
        "Location-based Weather",
        "Weather Alerts"
      ]
    },
    {
      title: "Cipher Hub",
      description:
        "The Cipher Hub presentation explores the art of encrypting and decrypting text using HTML, CSS, JS, and Flask. It demonstrates various encryption algorithms and how to implement them in web development.",
      image: "/assets/pic11.PNG",
      documentation: "",
      ppt: "/ppts/cipher-hub.pptx",
      technologies: ["Flask", "HTML/CSS", "JavaScript", "Cryptography Algorithms"],
      features: [
        "Multiple Encryption Algorithms",
        "Text Encryption/Decryption",
        "File Encryption",
        "Secure Key Management"
      ]
    },
    {
      title: "Meme Generator",
      description:
        "The HTML/CSS/JS/Flask Meme Generator is a web application that allows users to create custom memes using a collection of popular meme templates sourced from the internet.",
      image: "/assets/mm-1.PNG",
      documentation: "",
      ppt: "",
      technologies: ["Flask", "HTML/CSS", "JavaScript"],
      features: [
        "Custom Meme Creation",
        "Template Library",
        "Text Customization",
        "Image Upload"
      ]
    },
    {
      title: "Game Nexus",
      description:
        "Game Nexus is an immersive online gaming platform crafted using HTML, CSS, and JavaScript. It boasts a sleek and responsive design, captivating users with a dynamic interface.",
      image: "/assets/gn1.PNG",
      documentation: "",
      ppt: "/ppts/game-nexus.pptx",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: [
        "Multiple Game Modes",
        "User Authentication",
        "Score Tracking",
        "Real-time Multiplayer"
      ]
    },
];

function page() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className='bg-black min-h-screen py-12 pt-36'>
        <div className='text-center'>
            <div className="inline-block border-b-4 border-orange-500 pb-2">
                <h1 className="text-6xl font-extrabold text-white">
                <ColourfulText text="Projects" />
                </h1>
            </div>
        </div>
        <div className='flex flex-wrap justify-center gap-8'>
            {
                projects.map((project:Project)=>(
                    <CardContainer key={project.title} className="inter-var">
                      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                        <CardItem
                          translateZ="50"
                          className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                          {project.title}
                        </CardItem>
                        <CardItem
                          as="p"
                          translateZ="60"
                          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                          {project.description}
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                          <img
                            src={project.image}
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                          />
                        </CardItem>

                        <div className="flex justify-between items-center mt-6">
                          <CardItem
                            translateZ={20}
                            as="button"
                            onClick={() => setSelectedProject(project)}
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:bg-orange-500/20 transition-colors duration-300"
                          >
                            View Details →
                          </CardItem>
                        </div>
                      </CardBody>
                    </CardContainer>
                ))
            }
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="bg-zinc-900 p-8 rounded-2xl shadow-2xl border border-zinc-800 max-w-2xl w-full mx-4"
                onClick={e => e.stopPropagation()}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-orange-500 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-orange-500/10 text-orange-500 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-orange-500 mb-2">Key Features</h4>
                    <ul className="text-gray-300 text-left">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 mb-2">
                          <i className="fa-solid fa-check text-orange-500"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Documentation Links */}
                  <div className="flex justify-center gap-4">
                    {selectedProject.documentation && (
                      <a
                        href={selectedProject.documentation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center gap-2"
                      >
                        <i className="fa-solid fa-file-pdf"></i>
                        View Documentation
                      </a>
                    )}
                    {selectedProject.ppt && (
                      <a
                        href={selectedProject.ppt||"#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center gap-2"
                      >
                        <i className="fa-solid fa-file-powerpoint"></i>
                        View Presentation
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="mt-6 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  )
}

export default page
