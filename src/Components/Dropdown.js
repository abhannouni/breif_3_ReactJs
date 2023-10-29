import React, { useState } from "react";

export default function Dropdown({ handleSortClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={toggleMenu}
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        aria-expanded={isMenuOpen}
        aria-haspopup="true"
      >
        Sort
        <svg
          className="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

      {isMenuOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <button
              onClick={() => handleSortClick("ownerName")}
              className="text-gray-700 block px-4 py-2 text-sm"
            >
              Sort by Owner Name
            </button>
            <button
              onClick={() => handleSortClick("petName")}
              className="text-gray-700 block px-4 py-2 text-sm"
            >
              Sort by Pet Name
            </button>
            <button
              onClick={() => handleSortClick("aptDate")}
              className="text-gray-700 block px-4 py-2 text-sm"
            >
              Sort by Date
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
