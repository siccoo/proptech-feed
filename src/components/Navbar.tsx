import React, { useState } from 'react';
import { Bell, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#0F1113] px-4 py-3 lg:px-8">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between">

          {/* Left: Logo - Reduced size on mobile */}
          <div className="flex items-center gap-2">
            <img
              src="./expert-logo.png"
              alt="Expert Listing Logo"
              className="h-4 md:h-6 w-auto object-contain"
            />
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
          <div className="flex items-center gap-4">
            {/* Notification Bell - Hidden on mobile view */}
            <button className="relative rounded-full p-2 cursor-pointer transition-all hidden md:block">
              <Bell className="h-5 w-5 text-[#B8B8B8]" />
            </button>

            <button className="hidden cursor-pointer text-sm font-medium text-[#B8B8B8] transition-colors md:block">
              List Property
            </button>

            {/* Sign In Button - Plain text on mobile, standard pill button layout on desktop */}
            <button className="cursor-pointer transition-all text-sm font-medium text-[#B8B8B8] hover:text-white bg-transparent p-0 rounded-none md:bg-[#2F8F63] md:px-5 md:py-2 md:font-semibold md:text-white md:rounded-full">
              Sign In
            </button>

            {/* Hamburger Trigger Menu Button */}
            <button
              onClick={toggleMenu}
              className="rounded-full p-1 text-white hover:bg-zinc-900 md:hidden cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <Menu className="h-6 w-6 " />
            </button>
          </div>

        </div>
      </header>

      {/* Responsive Mobile Navigation Off-Canvas Side Overlay Drawer System */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden animate-fade-in">

          {/* Left Portion: Remaining 30% interactive clickable click-out mask backdrop */}
          <div
            className="w-[30vw] bg-black/60 backdrop-blur-xs cursor-pointer"
            onClick={closeMenu}
          />

          {/* Right Portion: 70% deep black content navigation drawer */}
          <div className="w-[70vw] h-full bg-[#0B0C0F] p-6 flex flex-col space-y-6 shadow-2xl border-l border-zinc-900 animate-slide-in">

            {/* Drawer Header Close Row Action Button */}
            <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
              {/* <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Navigation</span> */}
              <button
                onClick={closeMenu}
                className="text-zinc-400 p-1 rounded-full hover:bg-zinc-900 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Replicated Mobile Context Navigation Route Menu List */}
            <nav className="font-open-runde flex flex-col gap-4 text-base font-medium text-zinc-400">
              <a
                href="#"
                onClick={closeMenu}
                className="text-white border-l-2 border-[#2F8F63] pl-3 py-1 bg-zinc-900/40"
              >
                Feed
              </a>
              <a href="#" onClick={closeMenu} className="hover:text-white pl-3 py-1 transition-colors">Rent</a>
              <a href="#" onClick={closeMenu} className="hover:text-white pl-3 py-1 transition-colors">Buy</a>
              <a href="#" onClick={closeMenu} className="hover:text-white pl-3 py-1 transition-colors">Snagging</a>
              <a href="#" onClick={closeMenu} className="hover:text-white pl-3 py-1 transition-colors">Shortlets</a>
              <a href="#" onClick={closeMenu} className="hover:text-white pl-3 py-1 transition-colors">Find Professionals</a>

              <div className="border-t border-zinc-900 my-2 pt-4">
                <a href="#" onClick={closeMenu} className="hover:text-white text-sm pl-3 py-1 transition-colors block">List Property</a>
              </div>
            </nav>

          </div>
        </div>
      )}
    </>
  );
};