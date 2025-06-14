import React from 'react';
import { ChevronDown, Code, Zap, Rocket } from 'lucide-react';
import resume from '../assets/resume/Sadha_Resume.pdf'

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="hero-content space-y-8">
            <div className="space-y-3">
              
              
              <h1 className="text-5xl mt-20 md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">I'm </span>
                <span className="bg-gradient-to-r from-yellow-300 via-orange-200 to-yellow-50 bg-clip-text text-transparent radien">
                  SADHASIVAM
                </span>
                <br />
                <i className="  text-gray-300 rounded-md text-xl">
                  Full-Stack Developer / MERN-Stack
                </i>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Crafting innovative digital experiences with cutting-edge technology. 
                Transforming ideas into reality through code, design, and endless curiosity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProjects}
                className="glow-button bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/25 hover:shadow-2xl flex items-center justify-center"
              >
                <Rocket className="mr-2" size={20} />
                Explore My Work
              </button>
              
              <a href={resume} className="border border-cyan-400/50 text-cyan-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400 flex items-center justify-center">
                <Code className="mr-2" size={20} />
                View Resume
              </a>
            </div>

    
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="container">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Main Circle */}
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full"></div>
                  <div className="absolute inset-4 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-full "></div>
                  <div className="absolute inset-8 glass-card rounded-full flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Code className="text-cyan-400 animate-bounce" size={32} />
                      <Zap className="text-blue-500 animate-pulse" size={32} />
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-8 -right-5 md:-right-8 glass-card rounded-xl p-4 animate-float">
                  <div className="text-cyan-400 text-sm font-medium">React</div>
                </div>
                <div className="absolute -bottom-8 -left-5 md:-left-8 glass-card rounded-xl p-4 animate-float-delayed">
                  <div className="text-blue-400 text-sm font-medium">Node</div>
                </div>
                <div className="absolute top-1/2 -right-5 md:-right-12 glass-card rounded-xl p-4 animate-float">
                  <div className="text-purple-400 text-sm font-medium">MERN</div>
                </div>
                <div className="absolute top-1/4 -left-5 md:-left-12 glass-card rounded-xl p-4 animate-float-delayed">
                  <div className="text-green-400 text-sm font-medium">cpp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-cyan-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;