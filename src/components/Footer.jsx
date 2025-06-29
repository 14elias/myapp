import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">NIB Organic Honey</h3>
            <p className="text-amber-100 mb-6 max-w-md">
              Bringing you the finest organic honey from the highlands of Ethiopia, 
              crafted with traditional methods and modern quality standards.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-amber-700 hover:bg-amber-600 p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-amber-700 hover:bg-amber-600 p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-amber-700 hover:bg-amber-600 p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-amber-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-amber-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="text-amber-100 hover:text-white transition-colors">Products</a></li>
              <li><a href="#contact" className="text-amber-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-amber-100 text-sm">niborganichoney@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-amber-100 text-sm">+251 911 123 456</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-100">
            &copy; 2024 NIB Organic Honey. All rights reserved. 
            <span className="block sm:inline sm:ml-2">
              Contact: <strong>Zeikros Gebremariam</strong>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
