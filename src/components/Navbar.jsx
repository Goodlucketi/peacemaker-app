import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logos/logo-black.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
    { name: "FAQs", to: "/faqs" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 px-4 py-2 sm:px-6 lg:px-8">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-3/12">
          <NavLink to="/" className="w-full">
            <img src={Logo} alt="Peace Maker Brand Logo" className="w-2/12" />
          </NavLink>
        </div>

        {/* Hamburger / Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-blue-700 focus:outline-none"
            aria-controls="menu"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open menu</span>
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Menu Links */}
        <div
          id="menu"
          className={`flex-1 flex flex-col md:flex-row md:flex md:items-center md:justify-end transition-all duration-300 ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              onClick={() => setMenuOpen(false)} // close menu on mobile
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md md:ml-6 md:py-0 md:px-0 font-medium ${
                  isActive
                    ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700"
                    : "text-gray-700 hover:text-white hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
