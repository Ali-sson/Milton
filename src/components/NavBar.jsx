import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
  setIsOpen(false);
};

  return (
    <nav className="bg-FooterBg text-white px-2 md:px-20 py-5 z-50 sticky top-0">
      <div className="flex items-center justify-between">
        
           <h1 className="text-2xl font-bold font-inter">Milton <span className="text-accent">Services</span></h1>

        {/* Desktop */}
        <div className="hidden md:flex space-x-9 text-white px-4 font-medium text-sm font-inter">
          <Link className="hover:text-accent font-inter" to="/">Home</Link>
          <Link className="hover:text-accent" to="/about">About</Link>
          <Link className="hover:text-accent" to="/services">Services</Link>
          <Link className="hover:text-accent" to="/packages">Packages</Link>
          <Link className="hover:text-accent" to="/faq">FAQ</Link>
          <Link className="hover:text-accent" to="/contact">Contact</Link>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">

          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

       
      </div>

      {/* Mobile
      {isOpen && (
        <div className="absolute top-full left-0 w-full h-screen bg-primary text-black py-4 px-4 flex flex-col space-y-4 md:hidden">
          <Link to="/" onClick={handleLinkClick} className="text-white hover:text-accent">Home</Link>
          <Link to="/about" onClick={handleLinkClick} className="text-white hover:text-accent">About</Link>
          <Link to="/services" onClick={handleLinkClick} className="text-white hover:text-accent">Services</Link>
          <Link to="/packages" onClick={handleLinkClick} className="text-white hover:text-accent">Packages</Link>
          <Link to="/contact" onClick={handleLinkClick} className="text-white hover:text-accent">Contact</Link>
        </div>
      )} */}

      <div
  className={`absolute top-full left-0 w-full h-screen bg-primary text-black py-4 px-4 flex flex-col space-y-4 md:hidden
  transform transition-all duration-500 ease-in-out
  ${isOpen 
    ? "opacity-100 translate-y-0" 
    : "opacity-0 -translate-y-3 pointer-events-none"
  }`}
>
  <Link to="/" onClick={handleLinkClick} className="text-white hover:text-accent">Home</Link>
  <Link to="/about" onClick={handleLinkClick} className="text-white hover:text-accent">About</Link>
  <Link to="/services" onClick={handleLinkClick} className="text-white hover:text-accent">Services</Link>
  <Link to="/packages" onClick={handleLinkClick} className="text-white hover:text-accent">Packages</Link>
  <Link to="/contact" onClick={handleLinkClick} className="text-white hover:text-accent">Contact</Link>
</div>

    </nav>
  );
}

