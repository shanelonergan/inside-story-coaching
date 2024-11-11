import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-rose-600" />
            <span className="ml-2 text-xl font-serif text-gray-900">The Inside Story</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-rose-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-rose-600 transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-rose-600 transition-colors">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-rose-600 transition-colors">Contact</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-rose-600">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-rose-600">About</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-rose-600">Services</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-rose-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;