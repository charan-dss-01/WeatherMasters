'use client'

import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
// import Link from 'next/link'
// import { Vortex } from './ui/vortex'

const content = [
  {
    title: "Who I Am",
    description:
      "I'm Charan Donthu, a passionate Full Stack Developer currently pursuing a B.Tech in Computer Science. With a love for building robust web applications, I focus on clean, scalable code and continuous learning to stay ahead in the fast-moving tech world.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Who I Am
      </div>
    ),
  },
  {
    title: "Technical Proficiency",
    description:
      "I specialize in the MERN stack along with strong backend knowledge using Flask and Express.js. I'm also experienced with databases like MongoDB, MySQL, and PostgreSQL, and have deployed projects using AWS, Cloudinary.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Technical Proficiency
      </div>
    ),
  },
  {
    title: "Real-World Experience",
    description:
      "As an intern at Shellex Software Solutions, I worked on projects involving Python, AWS, and technical product development. This role enhanced my problem-solving skills and taught me to deliver clean code in a collaborative setting.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Real-World Experience
      </div>
    ),
  },
  {
    title: "Project Highlights",
    description:
      "I've built applications like AgriConnect (farmer eCommerce), GenAIQuery Simulator (NLP to SQL converter using Gemini AI), and WeatherMaster (weather analytics with Flask and APIs). These showcase my full-stack, deployment, and UI/UX skills.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Project Highlights
      </div>
    ),
  },
  {
    title: "Continuous Growth",
    description:
      "Learning never stops. I'm certified in AWS Architecture, Front-End Engineering (Skyscanner), Oracle, Cisco, and Infosys Springboard. I constantly push myself with new challenges and tech stacks.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white">
        Continuous Growth
      </div>
    ),
  },
  {
    title: "Soft Skills & Values",
    description:
      "Beyond code, I bring strong communication, leadership, and collaboration skills. I believe in writing clean code, being a dependable team player, and staying solution-focused in fast-paced environments.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--green-500))] text-white">
        Soft Skills & Values
      </div>
    ),
  },
];



  function About() {
    return (
      <div>
        <StickyScroll content={content}/>
      </div>
    )
  }






// import React from 'react'
// import Link from 'next/link'
// import { Vortex } from './ui/vortex'

// function About() {
//   return (
//     <div className="relative w-[calc(100%-4rem)] mx-auto rounded-md h-screen overflow-hidden bg-black">
      
//       {/* Vortex Background with smooth animation */}
//       <div className="absolute inset-0 z-0">
//         <Vortex
//           backgroundColor="black"
//           rangeY={800}
//           particleCount={500}
//           baseHue={120}
//           className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
//         />
//       </div>

//       {/* Foreground Content with smooth transition */}
//       <div className="relative z-10 min-h-screen flex items-center justify-center py-20 px-4">
//         <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
//           {/* Image Section */}
//           <div className="relative group flex justify-center order-last lg:order-first">
//             <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
//               <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               <img
//                 src="/assets/charan.jpg"
//                 alt="Charan Donthu"
//                 className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-orange-500 transition-all duration-500">
//                 <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-spin-slow [border-style:dotted] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               </div>
//             </div>
//           </div>

//           {/* Text Content with soft overlay for readability */}
//           <div className="space-y-8 text-center lg:text-left relative z-10">
//             <div className="mb-12 relative inline-block">
//               <h1 className="text-5xl md:text-6xl font-bold relative">
//                 About Me
//                 <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-300 mt-2"></span>
//               </h1>
//             </div>

//             <div className="space-y-6">
//               <p className="text-lg md:text-xl leading-relaxed">
//                 I'm <span className="text-orange-500 font-semibold">Charan</span>, a passionate Computer Science Engineering student at MVSR Engineering College specializing in modern web development. My focus lies in creating innovative digital experiences that combine aesthetic appeal with technical excellence.
//               </p>
//               <p className="text-lg md:text-xl leading-relaxed">
//                 With expertise spanning full-stack development, I craft responsive websites and intuitive interfaces. Certified in cutting-edge web technologies, I'm committed to continuous innovation in this dynamic field.
//               </p>
//             </div>

//             <div className="pt-8">
//               <Link 
//                 href="/contact"
//                 className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/30"
//               >
//                 Let's Collaborate
//                 <i className="fa-solid fa-arrow-right ml-3 transition-transform group-hover:translate-x-1" />
//               </Link>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

export default About
