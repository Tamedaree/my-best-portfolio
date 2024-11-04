import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Tamiru's Portfolio</h2>
          <p className="text-gray-400">
            Building the future with code and creativity
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start space-x-6 text-2xl">
          <a
            href="https://drive.google.com/file/d/18stuxEc4nSh0V2kQZcnc1UY85VUtIvpG/view?usp=drive_link"
            download
            className="bg-[#915EFF] text-white font-bold py-2 px-6 rounded-full hover:bg-purple-700 hover:scale-105 transition-transform"
          >
            Download CV
          </a>
          <a
            href="https://github.com/Tamedaree"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tamiru-dereje-b55b5323a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/nasisdare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <FaTwitter />
          </a>
          <a
            href="https://t.me/Tamesg21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <FaTelegramPlane />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-4">
        &copy; {new Date().getFullYear()} Tamiru. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
