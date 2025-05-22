'use client';
import React from 'react';
import {
  Server,
  LayoutTemplate,
  TerminalSquare,
  Database,
  Cloud,
  Code2,
  Coffee,
} from 'lucide-react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BackgroundGradient } from './ui/background-gradient';
import { SparklesCore } from "./ui/sparkles";

const mainStack = [
  {
    id: 1,
    title: 'MERN Stack',
    description: 'MongoDB, Express.js, React, and Node.js — full-stack web app development.',
    icon: <Server className="w-12 h-12 text-green-600" />,
  },
  {
    id: 2,
    title: 'Frontend Development',
    description: 'HTML, CSS, JavaScript, and React for responsive, dynamic UIs.',
    icon: <LayoutTemplate className="w-12 h-12 text-blue-500" />,
  },
  {
    id: 3,
    title: 'Backend & APIs',
    description: 'Node.js, Express.js, RESTful APIs for scalable backend systems.',
    icon: <TerminalSquare className="w-12 h-12 text-purple-500" />,
  },
  {
    id: 4,
    title: 'Database Management',
    description: 'MongoDB, MySQL, and SQLite3 — relational and NoSQL data modeling.',
    icon: <Database className="w-12 h-12 text-cyan-600" />,
  },
];

const additionalSkills = [
  {
    id: 5,
    title: 'Amazon Web Services (AWS)',
    description: 'Familiar with cloud deployment, EC2, and S3 for hosting and scalability.',
    icon: <Cloud className="w-12 h-12 text-orange-500" />,
  },
  {
    id: 6,
    title: 'Python',
    description: 'Versatile scripting and backend automation with Python.',
    icon: <i className="fa-brands fa-python text-yellow-500 text-4xl"></i>    ,
  },
  {
    id: 7,
    title: 'Java',
    description: 'OOP principles, backend systems, and Android basics with Java.',
    icon: <i className="fas fa-mug-hot text-red-600 text-3xl mx-2" title="Java"></i>,
  },
];

function FeaturedSkills() {
  return (
    <div className=" py-16 px-4 md:px-8 flex flex-col items-center justify-center">
      <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white">Tech Stack</h1>
        <div className="w-[40rem] h-40 relative text-center">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      </div>

      {/* Main Stack */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center mb-16">
        {mainStack.map((skill) => (
          <BackgroundGradient
            key={skill.id}
            className="rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden w-full h-[200px] flex flex-col items-center justify-center text-center p-6"
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{skill.title}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{skill.description}</p>
          </BackgroundGradient>
        ))}
      </div>

      {/* Additional Skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {additionalSkills.map((skill) => (
          <BackgroundGradient
            key={skill.id}
            className="rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden w-full h-[200px] flex flex-col items-center justify-center text-center p-6"
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{skill.title}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{skill.description}</p>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
}

export default FeaturedSkills;
