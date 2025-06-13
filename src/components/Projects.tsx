import React from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const Projects = () => {
 const projects = [
  {
    title: "Lost and Found",
    description: "Lost and Found is a web-based platform that helps users report, search for, and recover lost items. It allows users to post lost or found item details, browse listings by category or location, and communicate securely with item owners or finders.",
    image: "https://github.com/SADHASIVAM-VM/devfolio/blob/main/src/assets/find.png",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Supabase", "shadCN","React"],
    github: "https://github.com/SADHASIVAM-VM",
    live: "#"
  },
  {
    title: "HireOne. ",
    description: "HireOne is a job-finding and recruitment platform focused on the creator economy, especially YouTube professionals. It connects content creators, editors, marketers, and other media talents with recruiters looking for skilled individuals in video production and digital media.",
    image: "https://github.com/SADHASIVAM-VM/devfolio/blob/main/src/assets/hireone.png",
    technologies: ["React", "Express.js", "PostgreSQL", "Redux", "RayzonPay", "Supabase", "shadCN","React"],
    github: "https://github.com/SADHASIVAM-VM",
    live: "#"
  },
  {
    title: "CoWrite",
    description: "CoWrite is a modern, responsive blog website that allows users to read and publish articles across various categories. It features a clean layout, user-friendly navigation, and supports post creation, editing, and commenting. ",
    image: "https://github.com/SADHASIVAM-VM/devfolio/blob/main/src/assets/cowrite.png",
    technologies: ["React", "Quill", "Cloudinary", "Tailwind CSS","RayzonPay", "Supabase", "shadCN","React"],
    github: "https://github.com/SADHASIVAM-VM",
    live: "https://co-write-d288.vercel.app/"
  },
  {
    title: "Aura",
    description: "Aura is a full-featured eCommerce platform with a modern user interface and integrated admin dashboard. Users can browse products, manage their cart, and place orders, while admins can add, update, or remove products, track orders, and manage users through a secure backend.",
    image: "https://github.com/SADHASIVAM-VM/devfolio/blob/main/src/assets/aura.png",
    technologies: ["RayzonPay", "Supabase", "JWT","React","RayzonPay", "Supabase", "shadCN","React","Express" ],
    github: "https://github.com/SADHASIVAM-VM",
    live: "#"
  },
  {
    title: "Profolio",
    description: "Personal portfolio website to showcase projects, skills, and contact info with smooth animations.",
    image: "https://github.com/SADHASIVAM-VM/devfolio/blob/main/src/assets/cowrite.png",
    technologies: ["React.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/SADHASIVAM-VM",
    live: "https://4k-one.vercel.app/"
  },
  {
    title: "RentalX",
    description: "A car rental app frontend with sleek UI and responsive design using React components.",
    image: "https://github.com/SADHASIVAM-VM/devfolio/blob/main/src/assets/rental.png",
    technologies: ["React", "Styled Components", "React Router"],
    github: "https://github.com/SADHASIVAM-VM",
    live: "#"
  },
  {
    title: "Adopet",
    description: "Pet adoption landing page featuring available pets, adoption info, and responsive design.",
    image: "https://github.com/SADHASIVAM-VM/devfolio/blob/main/src/assets/adopet.png",
    technologies: ["React", "CSS Modules", "React Router"],
    github: "https://github.com/SADHASIVAM-VM",
    live: "#"
  },
  {
    title: "Git Profile",
    description: "GitHub Profile Fetcher is a React-based app that retrieves and displays GitHub user profiles using the GitHub API. It allows users to enter a username and fetch details like avatar, bio, repositories, and followers with a simple action.",
    image: "https://github.com/SADHASIVAM-VM/devfolio/blob/main/src/assets/github.png",
    technologies: ["React","Api", "Tailwind", "Framer Motion"],
    github: "https://github.com/SADHASIVAM-VM",
    live: "#"
  }
];


  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my latest innovations in technology, from AI and machine learning to blockchain and quantum computing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card glass-card rounded-xl overflow-hidden group hover:scale-105 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 right-3 flex space-x-2">
                    <a
                      href={project.github}
                      className="flex items-center justify-center w-8 h-8 bg-gray-800/80 rounded-full hover:bg-cyan-500/80 transition-colors duration-300"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center justify-center w-8 h-8 bg-gray-800/80 rounded-full hover:bg-cyan-500/80 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-cyan-400 flex items-center">
                  <Sparkles className="mr-2" size={16} />
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-3 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs border border-gray-500/30">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
