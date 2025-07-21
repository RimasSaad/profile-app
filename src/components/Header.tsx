// Header.tsx
// This component renders the header of the application, which includes navigation links for all pages.

import { Link } from 'react-router-dom'
import { UserCircleIcon } from '@heroicons/react/24/solid'; // or use /outline for a lighter version


const Header = () => {
  return (
    <header className="bg-violet-300 shadow-md py-6 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <UserCircleIcon className="w-12 h-12 text-purple-600" />
        <h1 className="text-2xl font-bold text-purple-600">Profile App</h1>
      </div>

      {/* Navigation */}
      <nav className="space-x-4">
        <Link to="/" className="text-lg text-gray-700 hover:text-purple-600">Home</Link>
        <Link to="/login" className="text-lg text-gray-700 hover:text-purple-600">Login</Link>
        <Link to="/profile" className="text-lg text-gray-700 hover:text-purple-600">Profile</Link>
        <Link to="/logout" className="text-lg text-gray-700 hover:text-purple-600">Logout</Link>
      </nav>
    </header>
  )
}

export default Header
