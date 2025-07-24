// Home.tsx
// This version adds localStorage so added tools persist after refresh.

import { useState, useEffect, type JSXElementConstructor, type Key, type ReactElement, type ReactNode, type ReactPortal } from 'react'
import { WrenchScrewdriverIcon } from '@heroicons/react/24/solid'

// Default tools to show if no saved data exists
const defaultTools = [
  { name: 'React', description: 'Build modern UI with components' },
  { name: 'Tailwind CSS', description: 'Utility-first styling system' },
  { name: 'TypeScript', description: 'Typed JavaScript for better safety' },
  { name: 'Vite', description: 'Fast dev server & build tool' },
]

const Home = () => {
  // Load tools from localStorage or use default
  const [tools, setTools] = useState(() => {
    const stored = localStorage.getItem('frontend-tools')
    return stored ? JSON.parse(stored) : defaultTools
  })

  // Input states
  const [newToolName, setNewToolName] = useState('')
  const [newToolDescription, setNewToolDescription] = useState('')

  // Save to localStorage every time tools change
  useEffect(() => {
    localStorage.setItem('frontend-tools', JSON.stringify(tools))
  }, [tools])

  // Add tool handler
  const handleAddTool = () => {
    if (!newToolName || !newToolDescription) return
    setTools((prev: any) => [...prev, { name: newToolName, description: newToolDescription }])
    setNewToolName('')
    setNewToolDescription('')
  }

  return (
    <div className="min-h-screen px-4 py-10">
      {/* Welcome Section */}
      <section className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <WrenchScrewdriverIcon className="w-12 h-12 text-purple-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Frontend Developer Toolkit</h2>
        <p className="mt-2 text-gray-600 text-lg">
          A collection of tools I'm learning and working with.
        </p>
      </section>

      {/* Tool Cards */}
      <section className="grid gap-6 sm:grid-cols-2 mb-12">
        {tools.map((tool: { name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined }, index: Key | null | undefined) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-purple-600">{tool.name}</h3>
            <p className="text-gray-700 mt-1">{tool.description}</p>
          </div>
        ))}
      </section>

      {/* Add Tool Form */}
      <section className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow space-y-4">
        <h4 className="text-lg font-semibold text-gray-800">Add a New Tool</h4>

        <input
          type="text"
          placeholder="Tool name (e.g., Redux)"
          value={newToolName}
          onChange={(e) => setNewToolName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="text"
          placeholder="Short description"
          value={newToolDescription}
          onChange={(e) => setNewToolDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          onClick={handleAddTool}
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
        >
          Save Tool
        </button>
      </section>
    </div>
  )
}

export default Home
