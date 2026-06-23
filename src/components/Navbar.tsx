import React from 'react';
import { Bell, Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#0F1113] px-4 py-3 lg:px-8">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
            <img src="./expert-logo.png" alt="Expert Listing Logo" />
        </div>

        {/* Middle: Desktop Navigation Links */}
        <nav className="font-open-runde hidden items-center gap-6 text-sm font-medium text-zinc-400 md:flex">
          <a href="#" className="text-white border-b-1 border-[#1D3A25] pb-2">Feed</a>
          <a href="#" className="hover:text-white transition-colors pb-2">Rent</a>
          <a href="#" className="hover:text-white transition-colors pb-2">Buy</a>
          <a href="#" className="hover:text-white transition-colors pb-2">Snagging</a>
          <a href="#" className="hover:text-white transition-colors pb-2">Shortlets</a>
          <a href="#" className="hover:text-white transition-colors pb-2">Find Professionals</a>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 lg:gap-4">
          <button className="relative rounded-full p-2 cursor-pointer transition-all">
            <Bell className="h-5 w-5 text-[#B8B8B8]" />
            {/* <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-emerald-400" /> */}
          </button>
          
          <button className="hidden cursor-pointer text-sm font-medium text-[#B8B8B8] transition-colors md:block">
            List Property
          </button>
          
          <button className="rounded-full cursor-pointer bg-[#2F8F63] px-5 py-2 text-sm font-semibold text-open-runde hover:text-white transition-all">
            Sign In
          </button>

          <button className="rounded-full p-2 text-zinc-400 hover:bg-zinc-900 md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>

      </div>
    </header>
  );
};