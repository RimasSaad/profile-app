// Profile.tsx
// This version adds editing capability to the profile using useState.

import { useState } from 'react'
import { UserCircleIcon } from '@heroicons/react/24/solid'

const Profile = () => {
  // Edit mode state 
  const [editMode, setEditMode] = useState(false)

  // Form state
  const [profile, setProfile] = useState({
    name: 'Rimas Saad',
    email: 'rimas@example.com',
    phone: '+966 555 123 456',
    bio: 'Passionate about UI design and modern web experiences.',
  })

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  // Toggle edit mode
  const toggleEdit = () => {
    setEditMode(!editMode)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md text-center">
        {/* Icon */}
        <UserCircleIcon className="w-16 h-16 text-purple-600 mx-auto mb-4" />

        {/* Name + Title */}
        <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
        <p className="text-gray-600 mb-6">Frontend Developer</p>

        {/* Profile Info */}
        <div className="text-left space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-500">Name</label>
            {editMode ? (
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="text-gray-800 font-medium">{profile.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-500">Email</label>
            {editMode ? (
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="text-gray-800 font-medium">{profile.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm text-gray-500">Phone</label>
            {editMode ? (
              <input
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="text-gray-800 font-medium">{profile.phone}</p>
            )}
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm text-gray-500">Bio</label>
            {editMode ? (
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="text-gray-800 font-medium">{profile.bio}</p>
            )}
          </div>
        </div>

        {/* Edit - Save Button */}
        <button
          type="button"
          onClick={toggleEdit}
          className="mt-8 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition"
        >
          {editMode ? 'Save' : 'Edit Profile'}
        </button>
      </div>
    </div>
  )
}

export default Profile
