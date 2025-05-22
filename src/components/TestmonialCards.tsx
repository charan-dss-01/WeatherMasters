'use client';

import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { cn } from '@/lib/utils';
import { motion } from "motion/react";
import { LampContainer } from "./ui/lamp";


const testimonials = [
    {
      quote:
        'Started with C programming: learned data types, control structures, and memory concepts, building the foundation of logic.',
      name: 'C Programming',
      title: 'My First Step into Programming',
    },
    {
      quote:
        'Explored OOP with Java and understood classes, inheritance, and file handling—realized the power of structured software design.',
      name: 'Java',
      title: 'OOP Concepts & Backend Basics',
    },
    {
      quote:
        'Wrote Python scripts and learned about automation, APIs, and simplicity—Python became my go-to for quick solutions.',
      name: 'Python',
      title: 'Code Made Simple',
    },
    {
      quote:
        'Built dynamic websites with the MERN stack, combining MongoDB, Express, React, and Node.js to develop full-stack applications.',
      name: 'MERN Stack',
      title: 'Full Stack Web Development',
    },
    {
      quote:
        'Integrated AWS and Cloudinary for scalable hosting and image uploads—gained cloud experience beyond local development.',
      name: 'AWS & Cloudinary',
      title: 'Cloud Integration and Image Management',
    },
    {
      quote:
        'Developed real-world projects: Portfolio Website, Weather Master App, Speed News, and a Farmers eCommerce platform.',
      name: 'Projects',
      title: 'From Ideas to Deployments',
    },
  ];
  

function TestmonialCards() {
  return (
    <div className="w-full h-full relative py-12 md:py-20">
      {/* Background Effect */}
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:20px_20px]',
          '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
          'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]',
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      
      {/* Title */}
    {/* <h2 className="relative z-20 text-3xl font-bold text-center mb-8 z-10">
        My Tech Journey: Step by Step
    </h2> */}
        <LampContainer className="my-8">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
      >
        From Hello World to Here: My Tech Journey
      </motion.h1>
    </LampContainer>

      
      {/* Testimonial Cards */}
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-10 lg:px-12">
        <div className="w-full max-w-6xl relative z-20">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestmonialCards;
