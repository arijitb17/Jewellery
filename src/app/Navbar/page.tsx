"use client";

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faUserCircle,
  faHeart,
  faShoppingCart,
  faBars,
  faTimes,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

interface DropdownItem {
  label: string;
  path: string;
}

interface NavItemProps {
  label: string;
  onClick: () => void;
  dropdownItems?: DropdownItem[];
}

const NavItem: React.FC<NavItemProps> = ({ label, onClick, dropdownItems = [] }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative group">
      <button
        className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out block w-full text-left"
        onMouseEnter={toggleDropdown}
        onMouseLeave={closeDropdown}
        onClick={onClick}
      >
        {label}
      </button>
      {isDropdownOpen && dropdownItems.length > 0 && (
        <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
          <div className="py-1">
            {dropdownItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleNavigation = (path: string) => {
    if (isMounted) {
      window.location.href = path;
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Upper Navbar */}
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Mobile number section */}
            <div className="flex items-center">
              <span className="text-white mr-2">+1234567890  | </span>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
            </div>

            {/* Search bar (always visible in upper navbar) */}
            <div className="hidden flex-1 sm:flex justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="max-w-md w-full lg:max-w-xs">
                <div className="relative">
                  <div className="absolute inset-y-0 right-5 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="block w-full bg-gray-700 text-white rounded-md pl-7 pr-3 py-1 focus:outline-none focus:bg-gray-600 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Account, Wishlist, Cart Icons */}
            <div className="flex items-center space-x-4">
              {/* Account Icon */}
              <div className="relative group">
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="h-6 w-6 text-white cursor-pointer group-hover:text-gray-300"
                  onClick={() => handleNavigation('/LoginSignupForm')}
                  title="Account"
                />
                <span className="tooltip absolute top-full left-0 w-full text-center text-xs text-white py-1 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
                  Account
                </span>
              </div>

              {/* Wishlist Icon */}
              <div className="relative group">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="h-6 w-6 text-white cursor-pointer group-hover:text-gray-300"
                  onClick={() => handleNavigation('/Wishlist')}
                  title="Wishlist"
                />
                <span className="tooltip absolute top-full left-0 w-full text-center text-xs text-white py-1 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
                  Wishlist
                </span>
              </div>

              {/* Cart Icon */}
              <div className="relative group">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="h-6 w-6 text-white cursor-pointer group-hover:text-gray-300"
                  onClick={() => handleNavigation('/cart')}
                  title="Cart"
                />
                <span className="tooltip absolute top-full left-0 w-full text-center text-xs text-white  py-1 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
                  Cart
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Lower Navbar (Hamburger menu) */}
      <nav className="bg-yellow-500">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo */}
            <div
              className="flex-shrink-0 cursor-pointer"
              onClick={() => {
                window.location.href = '/'; // Replace with your home page URL
              }}
            >
              <img
                className="block lg:hidden h-8 w-auto transition-opacity duration-300 ease-in-out transform hover:opacity-80 hover:scale-105"
                src="https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHN0b3JlcyUyMGxvZ298ZW58MHx8MHx8fDA%3D"
                alt="Logo"
              />
              <img
                className="hidden lg:block h-8 w-auto transition-opacity duration-300 ease-in-out transform hover:opacity-80 hover:scale-105"
                src="https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHN0b3JlcyUyMGxvZ298ZW58MHx8MHx8fDA%3D"
                alt="Logo"
              />
            </div>

            {/* Hamburger icon for mobile */}
            <div className="hidden sm:flex sm:items-center sm:ml-6">
              <div className="flex space-x-4">
                <NavItem
                  label="Gems"
                  onClick={() => handleNavigation('/Gems')}
                  dropdownItems={[
                    { label: 'Diamond', path: '/Diamond' },
                    { label: 'Emerald', path: '/Emerald' },
                    { label: 'Ruby', path: '/Ruby' },
                    { label: 'Sapphire', path: '/Sapphire' },
                  ]}
                />
                <NavItem
                  label="Collections"
                  onClick={() => handleNavigation('/Collections')}
                  dropdownItems={[
                    { label: 'Rings', path: '/' },
                    { label: 'Pendants', path: '/SummerCollection' },
                    { label: 'Lockets', path: '/FallCollection' },
                    { label: 'Necklaces', path: '/WinterCollection' },
                  ]}
                />
                <NavItem label="Astro" onClick={() => handleNavigation('/Gemr')} />
                <NavItem label="Contact" onClick={() => handleNavigation('/ContactForm')} />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? (
                  <FontAwesomeIcon icon={faTimes} className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavItem label="Gems" onClick={() => handleNavigation('/Gems')} />
            <NavItem label="Collections" onClick={() => handleNavigation('/Collections')} />
            <NavItem label="Astro" onClick={() => handleNavigation('/Gemr')} />
            <NavItem label="Contact" onClick={() => handleNavigation('/ContactForm')} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
