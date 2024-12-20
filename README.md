# next.js-project-didgital-watch 
<br>
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Search Icon */}
        <div className="flex items-center">
          <button aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M15.5 10.5a5 5 0 11-10 0 5 5 0 0110 0z"
              />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <div className="text-lg font-semibold tracking-wide text-gray-800">
          Avion
        </div>

        {/* Cart Icon */}
        <div className="flex items-center">
          <button aria-label="Cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 2.4a1 1 0 001.1 1.6h12a1 1 0 001.1-1.6L17 13M7 13H3m4 0l1.5 3m6.5-3l1.5 3M5 21h14a2 2 0 002-2v-1a2 2 0 00-2-2H5a2 2 0 00-2 2v1a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="bg-white">
        <ul className="flex justify-center items-center space-x-8 text-gray-600 text-sm font-medium py-3">
          <li>
            <a href="#" className="hover:text-gray-900">
              Plant pots
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900">
              Ceramics
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900">
              Tables
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900">
              Chairs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900">
              Crockery
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900">
              Tableware
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900">
              Cutlery
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
