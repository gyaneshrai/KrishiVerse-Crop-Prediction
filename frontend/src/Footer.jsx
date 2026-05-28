// Footer.jsx
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";
import KrishiLogo from './assets/KrishiLogo.png'

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={KrishiLogo} alt="Krishi Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold">KrishiVerse</span>
          </div>
          <p className="text-sm text-gray-200">
            Promoting sustainable farming practices and connecting farmers to better resources.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-300">Home</a></li>
            <li><a href="#" className="hover:text-green-300">About Us</a></li>
            <li><a href="#" className="hover:text-green-300">Our Services</a></li>
            <li><a href="#" className="hover:text-green-300">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-300">Blog</a></li>
            <li><a href="#" className="hover:text-green-300">Farming Tips</a></li>
            <li><a href="#" className="hover:text-green-300">Support</a></li>
            <li><a href="#" className="hover:text-green-300">FAQ</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm mb-2">Email: nanherai48@gmail.com</p>
          <p className="text-sm mb-4">Phone: +91 9519164145</p>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-green-300"><FaFacebook /></a>
            <a href="#" className="hover:text-green-300"><FaTwitter /></a>
            <a href="#" className="hover:text-green-300"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400 border-t border-green-700 pt-4">
        &copy; {new Date().getFullYear()} KrishiVerse. All rights reserved.
      </div>
    </footer>
  );
}
