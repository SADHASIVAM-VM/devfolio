import React from 'react';
import { Brain, Rocket, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Avatar and Visual Elements */}
          <div className="relative">
            <div className="avatar-container relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 glass-card rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center">
                    <div className="text-6xl text-cyan-400">S</div>
                  </div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-4 -right-4 w-16 h-16 glass-card rounded-full flex items-center justify-center animate-float">
                  <Brain className="text-cyan-400" size={24} />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 glass-card rounded-full flex items-center justify-center animate-float-delayed">
                  <Rocket className="text-blue-500" size={24} />
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 glass-card rounded-full flex items-center justify-center animate-float">
                  <Zap className="text-purple-400" size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
               I'm a passionate technologist with a deep curiosity for how things work — a curiosity that’s grown into a mission to build meaningful, future-forward tech. From AI and blockchain to quantum computing and immersive experiences, I love working at the edge of innovation and bringing advanced ideas into real-world applications. </p>
                
                <p>
                  My strength lies in connecting research with practical solutions — turning complex concepts into tools people can actually use. Whether it’s writing code, experimenting with new frameworks, or exploring emerging technologies, I’m always looking for ways to push the boundaries of what’s possible.
                </p>
                
                <p>
                  Outside of work, you’ll often find me reading research papers, contributing to open-source projects, or helping other developers grow — because I believe in building the future together.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center glass-card p-4 rounded-lg">
                <div className="text-2xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="text-center glass-card p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-500 mb-2">1+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center glass-card p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-400 mb-2">10000+</div>
                <div className="text-gray-400 text-sm">codeLine</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;