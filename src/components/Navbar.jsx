'use client'

import React, { useState } from "react";
import { X, Search, ShoppingBasket, Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  /**
   * @type {string | number | NodeJS.Timeout | undefined}
   */
  let dropdownTimeout;

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const handleSearchToggle = () => {
    setIsSearching(!isSearching);
  };

  return (
    <nav className="bg-gray-800 text-white fixed z-50 w-dvw">
      <div className="container mx-auto py-4 px-6">
        {/* Search Mode */}
        {isSearching ? (
          <div className="flex items-center justify-between w-full animate-fade-in-down">
            {/* Search Button */}
            <button className="bg-purple-800 hover:bg-blue-600 px-4 py-2 rounded mr-2 text-sm">
            <Search />
            </button>
            {/* Search Input */}
            <input
              type="text"
              placeholder="جستجو کنید"
              className="flex-grow bg-gray-700 text-white px-4 py-2 rounded focus:outline-none"
            />
            {/* Close Icon */}
            <button
              className="text-white ml-2"
              onClick={handleSearchToggle}
            >
              <span className=""><X /></span>
            </button>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            {/* Left Side: Buttons */}
            <div className="flex space-x-4">
              <button
                className="bg-purple-800 hover:bg-blue-600 px-4 py-2 rounded text-sm"
                onClick={handleSearchToggle}
              >
                <Search />
              </button>
              <button
                className="bg-purple-800 hover:bg-blue-600 px-4 py-2 rounded text-sm"
                onClick={handleSearchToggle}
              >
                <ShoppingBasket />
              </button>
              <button className="bg-purple-800 hover:bg-blue-600 px-4 py-2 rounded text-sm">
              ورود | ثبت‌نام
              </button>
            </div>

            {/* Right Side: Logo and Menu */}
            <div className="flex items-center">
              

              {/* Desktop Menu */}
              <ul className="hidden md:flex space-x-6 relative text-sm">
                <li className="hover:text-gray-300">تماس با ما</li>
                <li
                  className="hover:text-gray-300 relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  خدمات
                  {/* Dropdown Menu */}
                  <ul
                    className={`absolute left-0 mt-2 bg-gray-700 rounded shadow-lg w-40 transition-opacity duration-200 ${
                      dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  >
                    <li className="px-4 py-2 hover:bg-gray-600">خدمات</li>
                    <li className="px-4 py-2 hover:bg-gray-600">خدمات</li>
                  </ul>
                </li>
                <li className="hover:text-gray-300">آکادمی آموزشی</li>
                <li className="hover:text-gray-300">خانه</li>
              </ul>

              {/* Logo */}
              <div className="ml-20 hidden md:flex">
                <h1 className="text-lg font-bold">LOGO</h1>
              </div>

              {/* Hamburger Icon */}
              <button
                className="md:hidden ml-4"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="material-icons">
                  <Menu />
                </span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer */}
      {!isSearching && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      {!isSearching && (
        <div
          className={`fixed top-0 right-0 h-full bg-gray-800 text-white w-64 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 z-50`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsOpen(false)}
          >
            <span className=""><X /></span>
          </button>
          <ul className="mt-12 space-y-6 px-6 pt-9 text-sm text-right">
            <li className="hover:text-gray-300">خانه</li>
            <li
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              خدمات
              {/* Nested Menu for Mobile */}
              <ul
                className={`pl-4 mt-2 space-y-2 text-sm ${
                  dropdownOpen ? "block" : "hidden"
                }`}
              >
                <li className="hover:text-gray-400">خدمات</li>
                <li className="hover:text-gray-400">خدمات</li>
              </ul>
            </li>
            <li className="hover:text-gray-300">آکادمی آموزشی</li>
            <li className="hover:text-gray-300">تماس با ما</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
