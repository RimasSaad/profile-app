// Header.tsx
// This component renders a responsive header with navigation links and a mobile menu toggle.

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserCircleIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
  // State to track mobile menu open/close
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <header className="bg-violet-300 shadow-md px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <UserCircleIcon className="w-8 h-8 text-purple-600" />
          <h1 className="text-xl font-bold text-purple-600">Profile App</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-6">
          <Link to="/" className="text-gray-700 hover:text-purple-600">Home</Link>
          <Link to="/login" className="text-gray-700 hover:text-purple-600">Login</Link>
          <Link to="/profile" className="text-gray-700 hover:text-purple-600">Profile</Link>
          <Link to="/logout" className="text-gray-700 hover:text-purple-600">Logout</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="sm:hidden" onClick={toggleMenu}>
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6 text-purple-700" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-purple-700" />
          )}
        </button>
      </div>

     {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="sm:hidden mt-3 px-6 space-y-2 flex flex-col items-center text-center">
          <Link to="/" className="block text-gray-700 hover:text-purple-600" onClick={toggleMenu}>Home</Link>
          <Link to="/login" className="block text-gray-700 hover:text-purple-600" onClick={toggleMenu}>Login</Link>
          <Link to="/profile" className="block text-gray-700 hover:text-purple-600" onClick={toggleMenu}>Profile</Link>
          <Link to="/logout" className="block text-gray-700 hover:text-purple-600" onClick={toggleMenu}>Logout</Link>
        </div>
      )}

    </header>
  );
};

export default Header;
