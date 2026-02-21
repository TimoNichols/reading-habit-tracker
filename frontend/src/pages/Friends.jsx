import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp, MOCK_FRIENDS, ANIMALS } from '../context/AppContext'
import BottomNav from '../components/BottomNav'
import ReadAloud from '../components/ReadAloud'
import HamburgerMenu from '../components/HamburgerMenu'

const Friends = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold flex items-center">
              Friends
              <ReadAloud text="Friends" />
            </h1>
            <HamburgerMenu />
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="text-lg font-semibold mb-4 flex items-center">
            Friend Suggestions
            <ReadAloud text="Friend Suggestions" size="xs" />
          </div>
          <div className="space-y-4">
            {MOCK_FRIENDS.map(friend => {
              const friendAnimal = ANIMALS.find(a => a.id === friend.animal) || ANIMALS[0]
              return (
                <button
                  key={friend.id}
                  onClick={() => navigate(`/friend/${friend.id}`)}
                  className="w-full flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-left"
                >
                  <div className="text-5xl">{friendAnimal.emoji}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg flex items-center">
                      {friend.name}
                      <ReadAloud 
                        text={`${friend.name}, ${friend.goalsCompleted} Goals Done${friend.currentReading ? `, Reading ${friend.currentReading}` : ''}`} 
                        size="xs" 
                      />
                    </div>
                    <div className="text-sm text-gray-600 mb-1 flex items-center">
                      {friend.goalsCompleted} Goals Done
                      <ReadAloud text={`${friend.goalsCompleted} Goals Done`} size="xs" />
                    </div>
                    {friend.currentReading && (
                      <div className="text-sm text-blue-600 font-medium flex items-center">
                        📚 Reading: {friend.currentReading}
                        <ReadAloud text={friend.currentReading} size="xs" />
                      </div>
                    )}
                  </div>
                  <div className="text-gray-400">›</div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

export default Friends
