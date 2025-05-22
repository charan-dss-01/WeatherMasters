'use client'
import Link from 'next/link'
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {BackgroundGradient} from './ui/background-gradient';
import React, { useState, useEffect } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import { SignInButton } from '@clerk/nextjs';

// Define CSS for animations
const floatAnimation = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
  
  @keyframes float-slow {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
  }
`;
 
function HeroSection() {
  const [active, setActive] = useState<string | null>(null);
  const [currentTemp, setCurrentTemp] = useState<string>("24°C");
  const [location, setLocation] = useState<string>("New York");
  const router = useRouter();
  const { isSignedIn } = useAuth();

  const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  };
  
  const words = `Stay Ahead with Real-Time Weather Updates.
  Get accurate, location-based forecasts instantly at your fingertips.
  Designed for clarity, speed, and reliability—wherever you are.
  Built with a passion for clean code and seamless user experience.`;

  // Weather icons based on conditions
  const weatherIcons = [
    { icon: 'sun', label: 'Sunny' },
    { icon: 'cloud-sun', label: 'Partly Cloudy' },
    { icon: 'cloud', label: 'Cloudy' },
    { icon: 'cloud-rain', label: 'Rainy' },
    { icon: 'cloud-bolt', label: 'Thunderstorm' },
  ];

  const handleGetStarted = () => {
    if (isSignedIn) {
      router.push('/weather');
    }
  };

  return (
    <>
      {/* Add animation styles */}
      <style jsx global>{floatAnimation}</style>
      
      <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-4 py-12 bg-black relative overflow-hidden">
        {/* Animated weather background elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-1/4 text-4xl text-orange-500 animate-float-slow">
            <i className="fa-solid fa-sun"></i>
          </div>
          <div className="absolute top-1/3 right-1/4 text-5xl text-blue-400 animate-float">
            <i className="fa-solid fa-cloud"></i>
          </div>
          <div className="absolute bottom-1/4 left-1/3 text-3xl text-gray-400 animate-float-slow">
            <i className="fa-solid fa-cloud-rain"></i>
          </div>
        </div>

        {/* Add Spotlight directly in the main container for better visibility */}
        <Spotlight
          className="top-[-20%] left-0 md:left-0 lg:left-[20%]"
          fill="rgba(255,165,0,0.15)"
        />

        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          {/* Content Section */}
          <div className="space-y-8 text-center mt-24 lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Weather Master's
                </span>
              </h1>
              <div className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                <TextGenerateEffect duration={0.5} filter={false} words={words} />
              </div>
            </div>

            {/* Current Weather Preview */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 flex items-center gap-4 max-w-md mx-auto lg:mx-0 transform transition hover:scale-105">
              <div className="text-5xl text-orange-500">
                <i className="fa-solid fa-sun"></i>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Current Weather</p>
                <p className="text-white text-2xl font-bold">{currentTemp}</p>
                <p className="text-gray-300">{location}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {isSignedIn ? (
                <button 
                  onClick={handleGetStarted}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/30"
                >
                  Get Started
                </button>
              ) : (
                <SignInButton mode="modal">
                  <button 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/30"
                  >
                    Get Started
                  </button>
                </SignInButton>
              )}
              <div onClick={() => scrollToSection('features')} className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500/10 px-8 py-4 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 cursor-pointer">       
                Explore Features
              </div>
            </div>

            {/* Weather Types */}
            <div className="pt-8">
              <p className="text-gray-300 mb-4">Weather At Your Fingertips:</p>
              <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
                {weatherIcons.map((weather, index) => (
                  <div 
                    key={index}
                    className="bg-gray-900/30 p-3 rounded-lg flex flex-col items-center transition-all hover:bg-gray-800/50 cursor-pointer"
                  >
                    <i className={`fa-solid fa-${weather.icon} text-2xl ${index === 0 ? 'text-orange-500' : index === 1 ? 'text-blue-400' : index === 2 ? 'text-gray-400' : index === 3 ? 'text-blue-500' : 'text-yellow-500'}`}></i>
                    <span className="text-xs text-gray-300 mt-1">{weather.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Weather Visual Section */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden backdrop-blur-sm bg-gradient-to-b from-gray-900/40 to-black/40 border border-gray-800 p-6 flex flex-col justify-between">
              <div className="absolute -right-20 -top-20 text-9xl text-orange-500/20">
                <i className="fa-solid fa-sun"></i>
              </div>
              
              <div className="flex justify-between items-start z-10">
                <div>
                  <h3 className="text-gray-400 text-sm">Today's Forecast</h3>
                  <p className="text-5xl font-bold text-white">{currentTemp}</p>
                  <p className="text-lg text-gray-300">{location}</p>
                </div>
                <div className="text-5xl text-orange-500">
                  <i className="fa-solid fa-sun"></i>
                </div>
              </div>
              
              <div className="flex gap-4 mt-auto z-10">
                {[
                  { day: 'Mon', temp: '23°', icon: 'sun' },
                  { day: 'Tue', temp: '22°', icon: 'cloud-sun' },
                  { day: 'Wed', temp: '19°', icon: 'cloud' },
                  { day: 'Thu', temp: '18°', icon: 'cloud-rain' },
                  { day: 'Fri', temp: '20°', icon: 'sun' },
                ].map((day, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center bg-gray-900/30 p-2 rounded-lg">
                    <span className="text-xs text-gray-400">{day.day}</span>
                    <i className={`fa-solid fa-${day.icon} text-xl ${day.icon === 'sun' ? 'text-orange-500' : day.icon === 'cloud-sun' ? 'text-blue-300' : day.icon === 'cloud' ? 'text-gray-400' : 'text-blue-500'}`}></i>
                    <span className="text-sm font-medium text-white">{day.temp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
