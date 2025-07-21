// Logout.tsx
// This component renders a simple logout confirmation message with a button to go back to login.

import { Link } from 'react-router-dom'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Logout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      {/* Card container */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md text-center">

        {/* Icon */}
        <CheckCircleIcon className="w-12 h-12 text-green-500 mx-auto mb-4" />

        {/* Message */}
        <h2 className="text-2xl font-bold text-gray-800">You’ve been logged out</h2>

        <p className="mt-2 text-gray-600">Thanks for using Profile App!</p>

        {/* Button to go back to Login */}
        <Link
          to="/login"
          className="inline-block mt-6 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition"
        >
          Go to Login
        </Link>
      </div>
    </div>
  )
}

export default Logout
