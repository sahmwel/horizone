/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full absolute top-0 left-0 z-30 bg-transparent text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/90" />
          <span className="text-white font-semibold text-lg">Horizone</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm opacity-95">
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Hotel</a>
            <a href="#" className="hover:underline">Flight</a>
            <a href="#" className="hover:underline">Train</a>
            <a href="#" className="hover:underline">Travel</a>
            <a href="#" className="hover:underline">Car Rental</a>
          </div>

          <div className="w-[420px] max-w-xs">
            <input
              className="w-full rounded-full bg-white/20 backdrop-blur-md text-white px-4 py-2 placeholder-white border border-white/25 focus:outline-none"
              placeholder="Search destination..."
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-white text-sm hidden md:block">EN</button>
          <button className="text-white text-sm hidden md:block">Log In</button>
          <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
