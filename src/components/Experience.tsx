import { Briefcase, MapPin } from 'lucide-react'
import React from 'react'

const Experience = () => {

    const experienceData =[
        {
            id:1,
            companyName:"Codtech IT Solution",
            period:"Aug 2024 - Sep 2024",
            location:'remote',
            role:"Backend development Intern",
            description:
                "Engineered a full-stack blog platform implementing robust CRUD operations using MongoDB, Express.js, and Node.js.\n Worked in an Agile team to optimize backend performance and enhance application responsiveness.\nIntegrated Clerk for secure user authentication and role-based authorization.\nDesigned and connected scalable RESTful APIs, refining backend architecture for better maintainability."
            
        }
        
    ]



  return (
    <div>
         <h2 className="text-4xl md:text-5xl text-center font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ">
              Experience
            </span>
          </h2>

 <div className="grid md:grid-cols-2 gap-3 xl:grid-cols-2 p-5">
  
{
    experienceData.map((e,index)=>(
      <div key={index} className="project-card glass-card rounded-xl overflow-hidden group space-y-2  p-8 transition-all duration-500">
  <div className="flex items-center justify-between">
    <div className='flex justify-between items-center w-full'>
      <h2 className="text-xl text-cyan-300 font-semibold">{e.companyName}</h2>
      <p className="text-xs text-green-400">{e.period}</p>
    </div>
    <div className="text-blue-500">
    </div>
  </div>
<div className="flex gap-2 items-center text-white/60">
    <span><MapPin size={'18px'}/></span>
    <p>{e.location}</p>
</div>
  <div>
    <h3 className="text-lg font-medium text-white/90 flex gap-2 items-center"><Briefcase className="w-6 text-white/60 p-1" />{e.role}</h3>
    <ul className="mt-2 list-disc list-inside text-blue-300 space-y-3">
      {e.description.split("\n").map((line, index) => (
        <li  key={index} className='list-none'>{line.trim()}</li>
      ))}
    </ul>
  </div>
    </div>
    ))
}
    
    </div>
    </div>
  )
}

export default Experience
