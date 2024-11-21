import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8" 
                alt="Dr. MT Mmako Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#00A86B] transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#00A86B] transition-colors">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-[#00A86B] transition-colors">Services</Link>
            <Link to="/contact" className="bg-[#00A86B] text-white px-4 py-2 rounded-md hover:bg-[#008f5a] transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#00A86B] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-[#00A86B] transition-colors">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-[#00A86B] transition-colors">About</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-[#00A86B] transition-colors">Services</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-[#00A86B] transition-colors">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}