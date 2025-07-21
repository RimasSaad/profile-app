// Login.tsx
// This component renders the login page UI with a simple form layout using Tailwind CSS and Heroicons.

import { LockClosedIcon } from '@heroicons/react/24/solid'

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      {/* Container Card */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        
        {/* Icon + Title */}
        <div className="flex flex-col items-center mb-6">
          <LockClosedIcon className="w-10 h-10 text-purple-600 mb-2" />
          <h2 className="text-2xl font-bold text-gray-800">Login to your account</h2>
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="abcdefgh@example.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Login Button */}
        <button
          type="button"
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition cursor-pointer"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
