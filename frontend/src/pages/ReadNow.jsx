import React from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import ReadAloud from '../components/ReadAloud'
import HamburgerMenu from '../components/HamburgerMenu'

const ReadNow = () => {
  const navigate = useNavigate()

  const resources = [
    { name: 'Libraries Near You', icon: '🏛️', link: '#', description: 'Find local libraries in your area' },
    { name: 'Project Gutenberg', icon: '📚', link: 'https://www.gutenberg.org', description: 'Over 60,000 free eBooks' },
    { name: 'Open Library', icon: '📖', link: 'https://openlibrary.org', description: 'Free digital library' },
    { name: 'Dictionary', icon: '✏️', link: 'https://www.dictionary.com', description: 'Look up words and definitions' },
  ]

  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
              Reading Resources
              <ReadAloud text="Reading Resources" />
            </h1>
            <HamburgerMenu />
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-md p-6 mb-6 border-2 border-blue-200">
          <p className="text-sm text-gray-700 mb-6 flex items-center">
            Discover free books, libraries, and tools to help you read more and improve your reading skills.
            <ReadAloud text="Discover free books, libraries, and tools to help you read more and improve your reading skills." size="xs" />
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg transition-all transform hover:scale-[1.02]"
            >
              <div className="text-4xl">{resource.icon}</div>
              <div className="flex-1">
                <div className="font-semibold text-gray-800 text-lg mb-1 flex items-center">
                  {resource.name}
                  <ReadAloud text={`${resource.name}. ${resource.description}`} size="xs" />
                </div>
                <div className="text-sm text-gray-600">{resource.description}</div>
              </div>
              <div className="text-gray-400 text-xl">🔗</div>
            </a>
          ))}
        </div>

        {/* Log Reading CTA */}
        <button
          onClick={() => navigate('/log-reading')}
          className="w-full bg-orange-500 text-white rounded-xl py-5 px-6 text-lg font-bold shadow-lg hover:bg-orange-600 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3"
        >
          <span className="text-xl">✏️</span>
          <span>Log Reading</span>
          <ReadAloud text="Log Reading" />
        </button>
      </div>

      <BottomNav />
    </div>
  )
}

export default ReadNow
