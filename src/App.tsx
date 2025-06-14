 import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import './styles/globals.css';
import load from "./assets/loading.svg"
import Experience from './components/Experience';
function App() {
 const [loading, setLoading] = useState(false);
   useEffect(()=>{
    const loader = setTimeout(()=>{
      setLoading(true);
    },2000)

    return ()=> clearTimeout(loader)
  },[])
  return (
   <>
   {!loading?
   (
     <div className="flex items-center justify-center h-[600px] ">
        <img src={load} className='w-20' alt="" />
    </div>
    
   )
    :(
       <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 pointer-events-none"></div>
      <div className="particles-bg fixed inset-0 pointer-events-none"></div>
      
      <Header />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Experience/>
        <TechStack />
        <Contact />
      </main>
    </div>
    )
   }
   
   </>
  );
}

export default App;
