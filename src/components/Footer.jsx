import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border border-gray-200 py-10" >
  <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
    

    <div>
      <div className="flex items-center space-x-2 mb-2">
        <h3 className="text-xl font-bold">Edu<span className="text-primary">Spark</span></h3>
      </div>
      <p className="text-sm">Empowering learners and educators through trusted educational services.</p>
    </div>

    <div>
      <h3 className="font-semibold mb-2">Quick Links</h3>
      <ul className="space-y-1 text-sm">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/services" className="hover:underline">Services</Link></li>
        <li><Link to="/addService" className="hover:underline">Add Service</Link></li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-2">Follow Us</h3>
      <div className="flex space-x-4">
        <Link to="https://facebook.com" target="_blank" aria-label="Facebook">
          <FaFacebook size={24} className="w-6 h-6 " />
        </Link>
        <Link to="https://linkedin.com" target="_blank" aria-label="Facebook">
          <FaLinkedin  size={24} className="w-6 h-6 " />
        </Link>
        <Link to="https://twitter.com" target="_blank" aria-label="Facebook">
          <FaTwitter  size={24} className="w-6 h-6 " />
        </Link>

      </div>
      <p className="text-xs mt-4">&copy; 2025 EduSpark. All rights reserved.</p>
    </div>

  </div>
</footer>

  );
};

export default Footer;
