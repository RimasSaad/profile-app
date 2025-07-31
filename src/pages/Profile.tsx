// Profile.tsx
// This version loads and saves profile data to localStorage.

import { useState } from 'react'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { profileData } from '../data/mockData'

const STORAGE_KEY = 'user-profile'

const Profile = () => {
  // Whether we're in edit mode
  const [editMode, setEditMode] = useState(false)

  // Load profile from localStorage or fall back to mockData
  const [profile, setProfile] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : profileData
  })

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfile((prev: any) => ({ ...prev, [name]: value }))
  }

  // Toggle between edit and view mode, and save to localStorage on save
  const toggleEdit = () => {
    if (editMode) {
      // Save to localStorage when saving
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile))
    }
    setEditMode(!editMode)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md text-center">
        <UserCircleIcon className="w-16 h-16 text-purple-600 mx-auto mb-4" />
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

        {/* Save/Edit Button */}
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
