import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, GlobeIcon } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("xnnzzrwb");
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: ''
  // });



  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   // Simulate form submission
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setFormData({ name: '', email: '', subject: '', message: '' });
  //     // You would handle actual form submission here
  //   }, 2000);
  // };

    if (state.succeeded) {
      alert("message sent !")
  }
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-3 md:px-6">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-sm md:text-xl  text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on the next big innovation? Let's build something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white text-sm">sadha4k@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white text-sm">+91 8248586299</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white text-sm">chennai,Tamilnadu, IN</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-bold text-cyan-400 mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {[
                  { icon: <Github size={24} />, href: "https://github.com/SADHASIVAM-VM", label: "GitHub" },
                  { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/sadhasivamvm/", label: "LinkedIn" },
                  { icon: <GlobeIcon size={24} />, href: "#", label: "Website" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center text-cyan-400 hover:text-white hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-4 md:p-8 rounded-xl">
           
             <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="col-span-1 md:col-span-2">
          <label htmlFor="email" className="block text-sm md:text-md text-gray-300 mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            placeholder="you@example.com"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="text-red-500 mt-2 text-sm"
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="email" className="block text-sm md:text-md text-gray-300 mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            placeholder="you@example.com"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500 mt-2 text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm md:text-md text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
          placeholder="Tell me about your project..."
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 mt-2 text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full text-sm md:text-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/25 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {state.submitting ? (
          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white"></div>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z" />
            </svg>
            Send Message
          </>
        )}
      </button>

      {state.succeeded && (
        <p className="text-green-400 text-center mt-4">
          Thanks! Your message has been sent.
        </p>
      )}
    </form>


          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="glass-card inline-block px-8 py-4 rounded-full">
            <p className="text-gray-400 text-sm">
              © 2025 Sadha
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;