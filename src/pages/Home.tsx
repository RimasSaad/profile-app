// Home.tsx
// This component renders the home page with a welcoming message and feature highlights.

import { IdentificationIcon, UserPlusIcon, PencilSquareIcon } from '@heroicons/react/24/solid'

const Home = () => {
  return (
    <div className="min-h-screen px-4 py-10">

      {/* Top section */}
      <section className="text-center mb-12">
        {/* Icon at top */}
        <div className="flex justify-center mb-4">
          <IdentificationIcon className="w-12 h-12 text-purple-600" />
        </div>

        {/* Welcome message */}
        <h2 className="text-3xl font-bold text-gray-800">Welcome to Profile App</h2>
        <p className="mt-2 text-gray-600 text-lg">
          Manage your profile easily and effortlessly.
        </p>
      </section>

      {/* Buttom (Features) Section */}
      <section className="grid gap-6 sm:grid-cols-2">
        {/* Card 1 - Create Profile - UI for now, page to be added later */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <div className="flex items-center mb-4">
            <UserPlusIcon className="w-6 h-6 text-purple-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">Create Profile</h3>
          </div>
          <p className="text-gray-600">
            Get started by setting up your profile with essential details.
          </p>
        </div>

        {/* Card 2 - Update Profile - UI for now, page to be added later */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <div className="flex items-center mb-4">
            <PencilSquareIcon className="w-6 h-6 text-purple-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">Update Profile</h3>
          </div>
          <p className="text-gray-600">
            Make changes to your profile anytime and keep your information up to date.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
