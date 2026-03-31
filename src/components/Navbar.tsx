import { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/svcelogo2.jpg";
import logo2 from "../assets/ieeelogo.jpg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 shadow-lg text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo1} alt="SVC Logo" className="h-8 w-auto" />
          <img src={logo2} alt="IEEE Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          <li><Link to="/" className="hover:text-cyan-100 hover:scale-105 transition-all duration-200">Home</Link></li>
          <li><Link to="/about" className="hover:text-cyan-100 hover:scale-105 transition-all duration-200">About</Link></li>
          <li><Link to="/execom" className="hover:text-cyan-100 hover:scale-105 transition-all duration-200">Execom</Link></li>
          <li><Link to="/events" className="hover:text-cyan-100 hover:scale-105 transition-all duration-200">Events</Link></li>
          <li><Link to="/achievements" className="hover:text-cyan-100 hover:scale-105 transition-all duration-200">Achievements</Link></li>
          <li><Link to="/magazine" className="hover:text-cyan-100 hover:scale-105 transition-all duration-200">Magazine</Link></li>
          <li><Link to="/contact" className="hover:text-cyan-100 hover:scale-105 transition-all duration-200">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2 px-2">
          <li><Link to="/" className="hover:text-cyan-100 hover:scale-105 transition-all duration-200 block py-2" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="hover:text-cyan-100 hover:scale-105 transition-all duration-200 block py-2" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/execom" className="hover:text-cyan-100 hover:scale-105 transition-all duration-200 block py-2" onClick={() => setIsOpen(false)}>Execom</Link></li>
          <li><Link to="/events" className="hover:text-cyan-100 hover:scale-105 transition-all duration-200 block py-2" onClick={() => setIsOpen(false)}>Events</Link></li>
          <li><Link to="/achievements" className="hover:text-cyan-100 hover:scale-105 transition-all duration-200 block py-2" onClick={() => setIsOpen(false)}>Achievements</Link></li>
          <li><Link to="/magazine" className="hover:text-cyan-100 hover:scale-105 transition-all duration-200 block py-2" onClick={() => setIsOpen(false)}>Magazine</Link></li>
          <li><Link to="/contact" className="hover:text-cyan-100 hover:scale-105 transition-all duration-200 block py-2" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
