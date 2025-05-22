'use client'
import { useState, useEffect } from 'react';
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import FeturedCourses from "@/components/FeturedCourses";
import About from "@/components/About";
import TestmonialCards from "@/components/TestmonialCards";
import Projects from "@/components/Projects";
import Skills from "@/components/FeturedCourses";
import Contact from "@/components/Contact";
import Loader from "@/components/ui/loader";
import { AnimatedTestimonialsDemo } from "@/components/Testimonials2";
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <section id="home">
        <HeroSection/>
      </section>
      
      <section id="features">
        <FeaturesSection/>
      </section>
      
      <section id="testimonials">
        <AnimatedTestimonialsDemo/>
      </section>
      
      <section id="contact">
        <Contact/>
      </section>


    </main>
  )
}
