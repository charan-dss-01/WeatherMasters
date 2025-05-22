'use client';

import { SignIn } from "@clerk/nextjs";
import '@fortawesome/fontawesome-free/css/all.min.css';

// Animation style
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

  /* Override Clerk's default styling */
  :global(.cl-internal-b3fm6y) {
    color: white !important;
  }
  
  :global(.cl-userButtonPopoverCard) {
    background-color: #1f2937 !important;
    border: 1px solid #374151 !important;
  }
  
  :global(.cl-userButtonPopoverActionButton) {
    color: white !important;
  }
  
  :global(.cl-userButtonPopoverActionButtonText) {
    color: white !important;
  }
  
  :global(.cl-formButtonPrimary) {
    background-color: #f97316 !important;
  }
  
  :global(.cl-formFieldLabel) {
    color: #e5e7eb !important;
  }
  
  :global(.cl-formFieldInput) {
    color: white !important;
    background-color: rgba(31, 41, 55, 0.8) !important;
    border-color: #374151 !important;
  }
  
  :global(.cl-footerActionLink) {
    color: #f97316 !important;
  }
  
  :global(.cl-dividerText) {
    color: #9ca3af !important;
  }
  
  :global(.cl-socialButtonsBlockButtonText) {
    color: white !important;
  }
  
  :global(.cl-socialButtonsBlockButton) {
    background-color: rgba(31, 41, 55, 0.8) !important;
    border-color: #374151 !important;
  }
  
  :global(.cl-headerTitle) {
    color: white !important;
  }
  
  :global(.cl-headerSubtitle) {
    color: #d1d5db !important;
  }
  
  :global(.cl-identityPreview) {
    background-color: rgba(31, 41, 55, 0.8) !important;
    border-color: #374151 !important;
  }
  
  :global(.cl-identityPreviewText) {
    color: white !important;
  }
  
  :global(.cl-identityPreviewEditButton) {
    color: #f97316 !important;
  }
`;

export default function Page() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <style jsx global>{floatAnimation}</style>
      
      {/* Background animation elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 text-6xl text-orange-500/10 animate-float-slow">
          <i className="fa-solid fa-sun"></i>
        </div>
        <div className="absolute top-1/3 right-1/4 text-7xl text-blue-400/10 animate-float">
          <i className="fa-solid fa-cloud"></i>
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-5xl text-gray-400/10 animate-float-slow">
          <i className="fa-solid fa-cloud-rain"></i>
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-8xl text-orange-500/5 animate-float">
          <i className="fa-solid fa-sun"></i>
        </div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/90 pointer-events-none"></div>
      
      {/* Custom styled container for Clerk */}
      <div className="z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Weather Master's
            </span>
          </h1>
          <p className="mt-2 text-gray-300">Sign in to your account</p>
        </div>
        
        <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl shadow-2xl p-1 overflow-hidden">
          <SignIn 
            appearance={{
              elements: {
                formButtonPrimary: "bg-orange-500 hover:bg-orange-600 text-white",
                card: "bg-transparent shadow-none",
                headerTitle: "text-white",
                headerSubtitle: "text-gray-300",
                formFieldInput: "bg-gray-900/80 border-gray-700 text-white",
                formFieldLabel: "text-gray-300",
                footerActionLink: "text-orange-500 hover:text-orange-600",
                dividerLine: "bg-gray-700",
                dividerText: "text-gray-400",
                socialButtonsBlockButton: "border-gray-700 bg-gray-800 text-white",
                identityPreview: "bg-gray-800 border-gray-700",
                identityPreviewText: "text-white",
                identityPreviewEditButton: "text-orange-500"
              }
            }}
          />
        </div>
      </div>
    </div>
  );
} 