import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logos/logo-black.png";
import Logo_Mobile from "../assets/images/logos/logo-colour.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
    { name: "FAQs", to: "/faqs" },
  ];

  return (
    <nav className="sticker top-0 left-0 w-full z-100 bg-white shadow-md">
      <div className="w-11/12 mx-auto flex items-center justify-between p-2">
        {/* Logo */}
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <img src={Logo} alt="Peace Maker Brand Logo" className="w-9 md:w-12" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-blue-700"
                    : "text-gray-700 hover:text-blue-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* CTA */}
          <NavLink
            to="/contact"
            className="bg-blue-700 text-white px-5 py-2 rounded-md hover:bg-blue-800 transition"
          >
            Book Now
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden p-2 text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-slate-900/70 backdrop-blur-sm flex flex-col z-100 transition-transform duration-500 md:hidden ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <img src={Logo_Mobile} alt="Logo" className="w-12 brightness-200" />
          <button onClick={() => setMenuOpen(false)} className="text-white">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col items-left px-8 py-4 my-10 flex-1 gap-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-2xl font-semibold transition ${
                  isActive
                    ? "text-blue-400"
                    : "text-white hover:text-blue-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* CTA */}
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-700 transition"
          >
            Book Now
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
