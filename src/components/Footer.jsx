import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logos/logo-colour.png"


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Brand / Logo */}
            <div>
                <img src={Logo} alt="Peace Maker Brand Logo" className="w-2/12 md:w-3/12 mb-3 p-2"/>
                <p className="text-gray-400">
                    Building comfort, style, and modern living experiences for everyone.
                </p>
            </div>

            {/* Quick Links */}
            <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                    <li>
                    <Link to="/" className="hover:text-white transition">
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link to="/about" className="hover:text-white transition">
                        About
                    </Link>
                    </li>
                    <li>
                    <Link to="/contact" className="hover:text-white transition">
                        Contact
                    </Link>
                    </li>
                    <li>
                    <Link to="/faqs" className="hover:text-white transition">
                        FAQs
                    </Link>
                    </li>
                </ul>
            </div>

            {/* Services / Resources */}
            <div>
                <h3 className="text-lg font-bold mb-4">Services</h3>
                <ul className="space-y-2">
                    <li>
                    <Link to="/listings" className="hover:text-white transition">
                        Listings
                    </Link>
                    </li>
                    <li>
                    <Link to="/amenities" className="hover:text-white transition">
                        Amenities
                    </Link>
                    </li>
                    <li>
                    <Link to="/booking" className="hover:text-white transition">
                        Booking
                    </Link>
                    </li>
                </ul>
            </div>

            {/* Social / Contact */}
            <div>
                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4 mb-4">
                    <a href="https://www.facebook.com/perlygateresidence/" className="hover:text-white transition">
                    <FaFacebookF />
                    </a>
                    <a href="#" className="hover:text-white transition">
                    <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/pacemaker_hospitality/" className="hover:text-white transition">
                    <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/nsikak-edet-82182727/" className="hover:text-white transition">
                    <FaLinkedinIn />
                    </a>
                </div>
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Pacemaker Bookings. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
