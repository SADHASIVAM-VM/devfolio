import React from 'react';
import { 
  Code2, 
  Database, 
  Brain, 
  Cpu, 
  Globe, 
  Server,
  GitBranch,
Cloud
} from 'lucide-react';

const TechStack = () => {
  const technologies = [
  { name: "React", icon: <Code2 />, color: "text-cyan-400" },
  { name: "Next.js", icon: <Server />, color: "text-black dark:text-white" },
  { name: "Node.js", icon: <Server />, color: "text-green-500" },
  { name: "JavaScript", icon: <Code2 />, color: "text-yellow-400" },
  { name: "Cpp", icon: <Code2 />, color: "text-blue-500" },
  { name: "Python", icon: <Cpu />, color: "text-yellow-400" },
  { name: "PostgreSQL", icon: <Database />, color: "text-blue-600" },
  { name: "MongoDB", icon: <Database />, color: "text-green-500" },
  { name: "Supabase", icon: <Cloud />, color: "text-emerald-400" },
  { name: "Clerk Auth", icon: <Cloud />, color: "text-pink-500" },
  { name: "Firebase", icon: <Cloud />, color: "text-orange-400" },
  { name: "Git & GitHub", icon: <GitBranch />, color: "text-green-400" },
  { name: "REST APIs", icon: <GitBranch />, color: "text-yellow-400" },
  { name: "GraphQL", icon: <GitBranch />, color: "text-pink-400" },
  { name: "Tailwind CSS", icon: <Code2 />, color: "text-sky-400" },
  { name: "Framer Motion", icon: <Code2 />, color: "text-fuchsia-400" },
  { name: "VS Code", icon: <Cpu />, color: "text-indigo-400" },
  { name: "Microservices", icon: <Server />, color: "text-blue-400" },
  { name: "Vercel", icon: <Cloud />, color: "text-black dark:text-white" }
];


  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tech Skills
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Learn. Build. Evolve.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="tech-card glass-card p-4 rounded-lg hover:scale-110 transition-all duration-300 group cursor-pointer flex flex-col items-center text-center"
            >
              <div className={`${tech.color} mb-2 group-hover:scale-125 transition-transform duration-300`}>
                {tech.icon}
              </div>
              <span className="text-white text-xs font-medium group-hover:text-cyan-400 transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Interactive Tech Orbit */}
        <div className="mt-20 flex justify-center">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-spin-slow"></div>
            <div className="absolute inset-8 rounded-full border border-blue-500/30 animate-spin-reverse"></div>
            <div className="absolute inset-16 rounded-full border border-purple-500/30 animate-spin-slow"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-card rounded-full w-24 h-24 flex items-center justify-center">
                <Brain className="text-cyan-400 animate-pulse" size={32} />
              </div>
            </div>
            
            {/* Orbiting Icons */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="glass-card rounded-full w-12 h-12 flex items-center justify-center">
                <Code2 className="text-blue-400" size={20} />
              </div>
            </div>
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
              <div className="glass-card rounded-full w-12 h-12 flex items-center justify-center">
                <Database className="text-green-400" size={20} />
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="glass-card rounded-full w-12 h-12 flex items-center justify-center">
                <Cloud className="text-purple-400" size={20} />
              </div>
            </div>
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="glass-card rounded-full w-12 h-12 flex items-center justify-center">
                <Globe className="text-cyan-400" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;