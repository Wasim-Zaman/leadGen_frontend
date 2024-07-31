import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import assets from "../../assets/index"; // Ensure the assets index includes the new logo
import '../../assets/css/style.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  {/* Toggle sidebar for Desktop and Mobile view */}
  const toggleSidebar = () => {    
    setIsSidebarOpen(!isSidebarOpen);
  };

  const redirectToWhatsApp = () => {
    window.location.href = "https://wa.me/+919989439202";
  };

  return (
    <>
      {/* Top bar */}
      <div className={`bg-white border-b border-gray-200 text-black flex flex-col md:flex-row justify-between items-center px-6 py-2 ${scrolled ? 'shadow-lg' : ''}`}>
        <div className="flex space-x-3">
          <a href="#" className="hover:text-gray-600 transition-colors"><i className="fab fa-facebook-f text-xl"></i></a>
          <a href="#" className="hover:text-gray-600 transition-colors"><i className="fab fa-twitter text-xl"></i></a>
          <a href="#" className="hover:text-gray-600 transition-colors"><i className="fab fa-linkedin text-xl"></i></a>
          <a href="#" className="hover:text-gray-600 transition-colors"><i className="fab fa-youtube text-xl"></i></a>
          <a href="#" onClick={redirectToWhatsApp} className="hover:text-gray-600 transition-colors"><i className="fab fa-whatsapp text-xl"></i></a>
        </div>
        <Link to="/estimation" className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition-colors mt-2 md:mt-0">
          Estimation Request
        </Link>
        <div className="flex space-x-4 mt-2 md:mt-0">
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
          <div className="relative flex items-center justify-between py-3">
            <div className="px-4">
              <a href="/#" className="block">
                <img
                  src={assets.logo} 
                  alt="logo"
                  style={{ width: '150px' }} // Set a fixed width for the logo
                  className="h-auto"
                />
              </a>
            </div>
            <div className="flex w-full items-center justify-between px-4 lg:px-0">
              <div>
                <button
                  onClick={toggleSidebar}
                  className={` ${open ? "navbarTogglerActive" : ""} lg:hidden block text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary`}
                  aria-expanded={isSidebarOpen} 
                  aria-controls="sidebar"
                  aria-label="Toggle navigation"
                >
                  <span className="block h-1 w-6 bg-gray-600 mb-1"></span>
                  <span className="block h-1 w-6 bg-gray-600 mb-1"></span>
                  <span className="block h-1 w-6 bg-gray-600"></span>
                </button>
                
                {/* Overlay */}
                {isSidebarOpen && (
                  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 lg:hidden" onClick={toggleSidebar}></div>
                )}

                {/* Nav Menu */}
                <div
                  id="sidebar"
                  className={`fixed inset-0 left-0 w-64 bg-white shadow-lg transform lg:transform-none lg:relative lg:flex lg:w-auto lg:bg-transparent lg:shadow-none ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                  } transition-transform duration-200 ease-in-out`}
                > 
                  <ul className="flex flex-col lg:flex-row lg:space-x-6 p-4 lg:p-0">
                    <ListItem NavLink="/#" activeLink={activeLink} handleLinkClick={handleLinkClick}>Home</ListItem>
                    <ListItem NavLink="/about" activeLink={activeLink} handleLinkClick={handleLinkClick}>About Us</ListItem>
                    <ListItem NavLink="/services" activeLink={activeLink} handleLinkClick={handleLinkClick}>Service</ListItem>
                    <ListItem NavLink="/careers" activeLink={activeLink} handleLinkClick={handleLinkClick}>Career</ListItem>
                    <ListItem NavLink="/clients" activeLink={activeLink} handleLinkClick={handleLinkClick}>Clients</ListItem>
                    <ListItem NavLink="/products" activeLink={activeLink} handleLinkClick={handleLinkClick}>Products</ListItem>
                    <ListItem NavLink="/contact" activeLink={activeLink} handleLinkClick={handleLinkClick}>Contact Us</ListItem>
                  </ul>
                </div>
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
        className={`block py-2 px-4 text-base font-medium transition-colors ${activeLink === children ? 'bg-orange-600 text-white rounded-full' : 'text-gray-600 hover:text-primary'}`}
      >
        {children}
      </Link>
    </li>
  );
};
