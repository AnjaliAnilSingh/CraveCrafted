import React from "react";
import Logo1 from '../assets/Logo1.png';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-[100px] py-6">
      <div className="container mx-auto">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <a href="#">
              <img src={Logo1} alt="Logo" className="h-30 w-40" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <h3 className="text-lg font-semibold">QUICK LINKS</h3>
              <ul>
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About us</a></li>
                <li><a href="#" className="hover:underline">Recipes</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">LEGAL</h3>
              <ul>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms &amp; Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-700" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-400">
            &copy; 2024 CraveCrafted™. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;