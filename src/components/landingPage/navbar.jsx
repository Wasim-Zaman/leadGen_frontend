import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import assets from "../../assets/index";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setOpen(false); // Close the menu when a link is clicked
  };

  const redirectToWhatsApp = () => {
    window.location.href = "https://wa.me/+919989439202";
  };

  return (
    <>
      {/* Top bar */}
      <div className={`bg-white border-b border-gray-200 text-black flex justify-between items-center px-4 py-2 ${scrolled ? 'shadow-lg' : ''}`}>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-600 transition-colors"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-gray-600 transition-colors"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-gray-600 transition-colors"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="hover:text-gray-600 transition-colors"><i className="fab fa-youtube"></i></a>
          <a href="#" onClick={redirectToWhatsApp} className="hover:text-gray-600 transition-colors"><i className="fab fa-whatsapp"></i></a>
        </div>
        <Link to="/estimation" className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-500 transition-colors">
          Estimation Request
        </Link>
        <div className="flex space-x-4">
          <a href="mailto:LeadgenGroup97@gmail.com" className="hover:text-gray-600 transition-colors flex items-center">
            <i className="fas fa-envelope mr-1"></i> LeadgenGroup97@gmail.com
          </a>
          <a href="tel:+91 9392123831" className="hover:text-gray-600 transition-colors flex items-center">
            <i className="fas fa-phone mr-1"></i> +91 8121923831
          </a>
        </div>
      </div>

      {/* Navbar */}
      <header className={`w-full bg-white border-b border-gray-200 ${scrolled ? 'shadow-lg fixed top-0 left-0 right-0 z-50' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="relative flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <a href="/#" className="block w-full py-5">
                <img
                  src={assets.logo} 
                  alt="logo"
                  className="w-full"
                />
              </a>
            </div>
            <div className="flex w-full items-center justify-between px-4 lg:px-0">
              <div>
                <button
                  onClick={() => setOpen(!open)}
                  className={` ${
                    open ? "navbarTogglerActive" : ""
                  } lg:hidden block text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary`}
                >
                  <span className="block h-1 w-6 bg-gray-600 mb-1"></span>
                  <span className="block h-1 w-6 bg-gray-600 mb-1"></span>
                  <span className="block h-1 w-6 bg-gray-600"></span>
                </button>
                <nav
                  className={`lg:block ${open ? "block" : "hidden"} transition-all duration-300 ease-in-out lg:static absolute bg-white top-full right-0 w-full lg:w-auto`}
                >
                  <ul className="lg:flex lg:space-x-8">
                    <ListItem NavLink="/#" activeLink={activeLink} handleLinkClick={handleLinkClick}>Home</ListItem>
                    <ListItem NavLink="/about" activeLink={activeLink} handleLinkClick={handleLinkClick}>About Us</ListItem>
                    <ListItem NavLink="/services" activeLink={activeLink} handleLinkClick={handleLinkClick}>Service</ListItem>
                    <ListItem NavLink="/careers" activeLink={activeLink} handleLinkClick={handleLinkClick}>Career</ListItem>
                    <ListItem NavLink="/clients" activeLink={activeLink} handleLinkClick={handleLinkClick}>Clients</ListItem>
                    <ListItem NavLink="/products" activeLink={activeLink} handleLinkClick={handleLinkClick}>Products</ListItem>
                    <ListItem NavLink="/contact" activeLink={activeLink} handleLinkClick={handleLinkClick}>Contact Us</ListItem>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink, activeLink, handleLinkClick }) => {
  return (
    <li className="group">
      <Link
        to={NavLink}
        onClick={() => handleLinkClick(children)}
        className={`block py-2 px-4 text-base font-medium transition-colors ${activeLink === children ? 'bg-orange-600 text-white' : 'text-gray-600 hover:text-primary'}`}
      >
        {children}
      </Link>
    </li>
  );
};
