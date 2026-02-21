import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MOCK_FRIENDS, ANIMALS } from '../context/AppContext'
import BottomNav from '../components/BottomNav'
import ReadAloud from '../components/ReadAloud'
import HamburgerMenu from '../components/HamburgerMenu'

const FriendDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const friend = MOCK_FRIENDS.find(f => f.id === parseInt(id))

  if (!friend) {
    return (
      <div className="min-h-screen pb-20 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl font-semibold mb-2 flex items-center justify-center">
            Friend not found
            <ReadAloud text="Friend not found" size="xs" />
          </div>
          <button
            onClick={() => navigate('/friends')}
            className="text-blue-600 flex items-center justify-center mx-auto"
          >
            Back to Friends
            <ReadAloud text="Back to Friends" size="xs" />
          </button>
        </div>
      </div>
    )
  }

  const friendAnimal = ANIMALS.find(a => a.id === friend.animal) || ANIMALS[0]

  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/friends')}
              className="text-gray-600 flex items-center"
            >
              ← Back
              <ReadAloud text="Back" size="xs" />
            </button>
            <h1 className="text-2xl font-bold flex items-center">
              {friend.name}
              <ReadAloud text={friend.name} />
            </h1>
            <HamburgerMenu />
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <div className="flex flex-col items-center mb-6">
            <div className="text-8xl mb-4">{friendAnimal.emoji}</div>
            <h2 className="text-2xl font-semibold flex items-center">
              {friend.name}'s Reading Profile
              <ReadAloud text={`${friend.name}'s Reading Profile`} />
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-red-50 rounded-xl p-4">
              <div className="text-sm text-gray-600 mb-1 flex items-center">
                Current Streak
                <ReadAloud text={`Current Streak: ${friend.currentStreak} Days`} size="xs" />
              </div>
              <div className="text-2xl font-bold text-red-600">{friend.currentStreak} Days</div>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <div className="text-sm text-gray-600 mb-1 flex items-center">
                Goals Completed
                <ReadAloud text={`Goals Completed: ${friend.goalsCompleted} Goals`} size="xs" />
              </div>
              <div className="text-2xl font-bold text-green-600">{friend.goalsCompleted} Goals</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="text-sm text-gray-600 mb-1 flex items-center">
                Minutes Read
                <ReadAloud text={`Minutes Read: ${friend.totalMinutes.toLocaleString()} Minutes`} size="xs" />
              </div>
              <div className="text-2xl font-bold text-blue-600">
                {friend.totalMinutes.toLocaleString()} Min
              </div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4">
              <div className="text-sm text-gray-600 mb-1 flex items-center">
                Books Read
                <ReadAloud text={`Books Read: ${friend.booksFinished} Books`} size="xs" />
              </div>
              <div className="text-2xl font-bold text-purple-600">{friend.booksFinished} Books</div>
            </div>
          </div>

          {friend.currentReading && (
            <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
              <div className="text-sm text-gray-600 mb-2 flex items-center">
                Currently Reading
                <ReadAloud text={`Currently Reading: ${friend.currentReading}`} size="xs" />
              </div>
              <div className="text-xl font-bold text-blue-800 flex items-center">
                📚 {friend.currentReading}
                <ReadAloud text={friend.currentReading} size="sm" />
              </div>
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

export default FriendDetail
