import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";




const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-white" />
            <h3 className="text-white font-semibold">Horizone</h3>
          </div>
          <p className="text-sm max-w-[220px]">
            Our mission is to equip modern explorers with cutting-edge, functional, and stylish gear that elevates every adventure.
          </p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">About</h4>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-white">About Us</a></li>
            <li><a className="hover:text-white">Blog</a></li>
            <li><a className="hover:text-white">Career</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-white">Contact Us</a></li>
            <li><a className="hover:text-white">Return</a></li>
            <li><a className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Get Updates</h4>
          <div className="flex">
            <input className="bg-gray-800 text-white px-3 py-2 rounded-l-md w-full" placeholder="Enter your email" />
            <button className="bg-white text-black px-4 py-2 rounded-r-md">Subscribe</button>
          </div>

          <div className="flex gap-3 mt-4 text-xl">
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaFacebook className="hover:text-white cursor-pointer" />
            <SiTiktok className="hover:text-white cursor-pointer" />

          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between text-sm">
          <div>©2024 Horizone. All rights reserved.</div>
          <div className="mt-3 md:mt-0 space-x-4">
            <a className="hover:text-white">Privacy Policy</a>
            <a className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
