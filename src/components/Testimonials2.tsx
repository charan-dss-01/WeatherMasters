import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { WavyBackground } from "@/components/ui/wavy-background";

export function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
          quote:
            "As someone who relies heavily on accurate weather information, Weather Masters has impressed me with its precision and simplicity.",
          name: "Priya Sharma",
          designation: "Outdoor Event Organizer",
          src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "The interface is super intuitive, and I love how fast I can get weather info for any city. Great job by the Weather Masters team!",
          name: "Rahul Verma",
          designation: "Software Engineer",
          src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "Whether I'm planning a trip or just checking the local forecast, Weather Masters delivers exactly what I need, every time.",
          name: "Sneha Iyer",
          designation: "Digital Nomad",
          src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "Simple, fast, and dependable. Weather Masters is a must-have tool for anyone who wants real-time weather updates without the clutter.",
          name: "Karan Joshi",
          designation: "Logistics Manager",
          src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "Weather Masters has become my go-to source for reliable weather updates. The clean interface and accurate forecasts make planning my day so much easier!",
          name: "Akshay Mangalgiri",
          designation: "Student",
          src: "/assets/a2.jpg",
        },
      ];
      
  return (
      <div className="min-h-screen bg-black flex items-center justify-center flex-col mx-auto px-4">
          <div className="text-center mt-20 md:mt-0 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              What Our Users Say
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
          Join thousands of users who stay ahead of the weather with real-time forecasts and accurate updates from Weather Masters.
          </p>
        </div>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
  );
}
