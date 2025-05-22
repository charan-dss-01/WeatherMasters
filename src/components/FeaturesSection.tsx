'use client'
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useRouter } from 'next/navigation';

// Animated border styles
const animatedBorderStyles = `
  @keyframes borderAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .animated-border {
    position: relative;
    border-radius: 0.75rem;
    background: #000;
    padding: 1px;
    z-index: 1;
  }

  .animated-border::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 0.75rem;
    padding: 1px;
    background: linear-gradient(
      45deg,
      #ff7e00,
      #ff9500,
      #ffa600,
      #ffb700,
      #ffa600,
      #ff9500,
      #ff7e00
    );
    background-size: 200% 200%;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: borderAnimation 6s linear infinite;
    z-index: -1;
  }

  .animated-border:hover::before {
    animation: borderAnimation 3s linear infinite;
  }

  .feature-icon {
    transition: transform 0.3s ease, color 0.3s ease;
  }

  .animated-border:hover .feature-icon {
    transform: scale(1.1);
    color: #ff9500;
  }
`;

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="animated-border h-full">
      <div className="bg-gray-900 p-6 rounded-xl h-full flex flex-col">
        <div className="text-4xl text-orange-500 mb-4 feature-icon">
          <i className={`fa-solid fa-${icon}`}></i>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm flex-grow">{description}</p>
      </div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: 'location-dot',
      title: 'Location-Based Forecasts',
      description: 'Get hyper-local weather predictions based on your exact location with our advanced GPS tracking technology.'
    },
    {
      icon: 'bolt',
      title: 'Real-Time Updates',
      description: 'Weather changes? So do our forecasts. Receive immediate updates when conditions shift in your area.'
    },
    {
      icon: 'calendar-days',
      title: '3-Day Forecast',
      description: 'Plan your week with confidence using our accurate 7-day predictions, including temperature, precipitation, and wind.'
    },
    {
      icon: 'bell',
      title: 'Weather Alerts',
      description: 'Stay safe with customizable alerts for severe weather events, from thunderstorms to heatwaves.'
    },
    {
      icon: 'newspaper',
      title: 'Weather News',
      description: 'Stay informed with the latest weather-related news, climate updates, and global forecasts in one place.'
    },
    {
      icon: 'mobile-screen',
      title: 'Mobile Friendly',
      description: 'Take our weather service with you on any device with our responsive, easy-to-use mobile interface.'
    },
  ];
  const router=useRouter();

  return (
    <section id="features" className="py-20 bg-black relative">
      <style jsx global>{animatedBorderStyles}</style>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Powerful Weather Features
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover why Weather Master's gives you the most accurate, useful, and customizable 
            weather experience available.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/30"
          onClick={() => router.push('/')}
          >
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 