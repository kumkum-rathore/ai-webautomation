import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  const linkClass = "text-white/80 hover:text-white transition duration-200 text-sm mb-3 block";

  const socialIconClass = "text-xl text-white cursor-pointer hover:text-blue-500 transition duration-200";

  return (
    <footer className="bg-black text-white px-4 md:px-12 lg:px-20 py-16">
      <div className="flex flex-wrap justify-between border-b border-gray-800 pb-12 mb-8">
        
        
        <div className="w-full lg:w-1/4 mb-10 lg:mb-0 pr-8">
          <h2 className="text-3xl font-bold mb-3">Ganify.</h2>
          <p className="text-white/70 mb-10 text-sm leading-relaxed">
            Built for forward-thinking teams. Powered by ethical AI.
          </p>
          
          <h3 className="text-base font-semibold uppercase tracking-wider mb-4">Newsletter</h3>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email" 
              className="py-3 px-4 border-none outline-none bg-gray-900 text-white placeholder-gray-500 w-full rounded-l-md focus:ring-2 focus:ring-blue-500" 
            />
            <button 
              className="py-3 px-6 text-sm font-semibold text-white rounded-r-md 
                         bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition"
            >
              Subscribe
            </button>
          </div>
        </div>
        
        <div className="flex flex-wrap w-full lg:w-3/4">
          
          <div className="w-1/2 sm:w-1/4 mb-6 md:mb-0">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">PAGES</h4>
            <a href="/home" className={linkClass}>Home</a>
            <a href="/about" className={linkClass}>About</a>
            <a href="/features" className={linkClass}>Features</a>
            <a href="/blog" className={linkClass}>Blog</a>
            <a href="/pricing" className={linkClass}>Pricing</a>
          </div>
          
        
          <div className="w-1/2 sm:w-1/4 mb-6 md:mb-0">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">INNER PAGES</h4>
            <a href="/blog-single" className={linkClass}>Blog Single</a>
            <a href="/pricing-single" className={linkClass}>Pricing Single</a>
            <a href="/contact" className={linkClass}>Contact</a>
            <a href="/404" className={linkClass}>404</a>
          </div>

          {/* UTILITY Column */}
          <div className="w-1/2 sm:w-1/4 mt-6 sm:mt-0">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">UTILITY</h4>
            <a href="/style-guide" className={linkClass}>Style Guide</a>
            <a href="/password" className={linkClass}>Password</a>
            <a href="/change-log" className={linkClass}>Change Log</a>
            <a href="/license" className={linkClass}>License</a>
          </div>
          
          {/* Social Media Column */}
          <div className="w-1/2 sm:w-1/4 mt-6 sm:mt-0">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Social Media</h4>
            <div className="flex space-x-4 mb-8">
              <div className="p-2 border border-white rounded-full hover:border-blue-500">
                <FaFacebookF className={socialIconClass + " !text-sm"} />
              </div>
              <div className="p-2 border border-white rounded-full hover:border-blue-500">
                <FaTwitter className={socialIconClass + " !text-sm"} />
              </div>
              <div className="p-2 border border-white rounded-full hover:border-blue-500">
                <FaInstagram className={socialIconClass + " !text-sm"} />
              </div>
             
              <FaBehance className={socialIconClass} />
              <FaDribbble className={socialIconClass} />
            </div>
            
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">Email</h4>
            <a href="mailto:support@onixtheme.com" className="text-white text-sm hover:text-blue-500 transition">
              support@onixtheme.com
            </a>
          </div>
        </div>
      </div>
      
     
      <div className="text-center text-xs text-white/70">
        © Copyright 2025 | Design & Developed By 
        <span className="font-bold text-blue-500 ml-1">Onixtheme</span> - 
        <span className="font-bold ml-1">License</span> | Powered By 
        <span className="font-bold ml-1">Webflow</span>
      </div>
    </footer>
  );
};

export default Footer;