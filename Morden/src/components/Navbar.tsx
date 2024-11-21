import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="img/Logo.jpeg" 
                alt="Dr. MT Mmako Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-4 mx-auto">
            <a href="https://www.facebook.com/share/13zuXPmLWm/?mibextid=LQQJ4d" className="text-gray-700 hover:text-[#00A86B] transition-colors">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/drtracymmako?igsh=ejd4MWFpbjZ1aDkx&utm_source=qr" className="text-gray-700 hover:text-[#00A86B] transition-colors">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/dr-tracy-mmako-052a16328/" className="text-gray-700 hover:text-[#00A86B] transition-colors">
              <FaLinkedinIn />
            </a>
            <a href="https://www.tiktok.com/@drtracymmako?_t=8qEmDR2OWwv&_r=1" className="text-gray-700 hover:text-[#00A86B] transition-colors">
              <FaTiktok />
            </a>
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

          {/* Mobile Navigation Button and Social Media Icons */}
          <div className="md:hidden flex items-center justify-between w-full">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#00A86B] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/share/13zuXPmLWm/?mibextid=LQQJ4d" className="text-gray-700 hover:text-[#00A86B] transition-colors">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/drtracymmako?igsh=ejd4MWFpbjZ1aDkx&utm_source=qr" className="text-gray-700 hover:text-[#00A86B] transition-colors">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/dr-tracy-mmako-052a16328/" className="text-gray-700 hover:text-[#00A86B] transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="https://www.tiktok.com/@drtracymmako?_t=8qEmDR2OWwv&_r=1" className="text-gray-700 hover:text-[#00A86B] transition-colors">
                <FaTiktok />
              </a>
            </div>
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