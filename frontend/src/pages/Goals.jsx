import React from 'react'
import { useApp, FIXED_GOALS } from '../context/AppContext'
import BottomNav from '../components/BottomNav'
import ReadAloud from '../components/ReadAloud'
import HamburgerMenu from '../components/HamburgerMenu'

const Goals = () => {
  const { goalProgress, goalsCompleted } = useApp()

  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold flex items-center">
              Goals
              <ReadAloud text="Goals" />
            </h1>
            <HamburgerMenu />
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        <div className="bg-emerald-50 rounded-2xl shadow-md p-6 mb-6 border-l-4 border-emerald-500">
          <div className="text-center mb-6">
            <div className="text-sm text-gray-700 mb-2 flex items-center justify-center font-medium">
              Total Goal Progress
              <ReadAloud text={`Total Goal Progress: ${goalsCompleted} Goals Accomplished`} size="xs" />
            </div>
            <div className="text-3xl font-bold text-emerald-600">
              {goalsCompleted} Goals Accomplished
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {goalProgress.map(goal => {
            const progress = (goal.current / goal.target) * 100
            return (
              <div
                key={goal.id}
                className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4 border border-gray-200"
              >
                <div className="text-3xl">📖</div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900 flex items-center">
                      {goal.name}
                      <ReadAloud 
                        text={`${goal.name}: ${goal.current} out of ${goal.target}${goal.completed ? ', Completed' : ''}`} 
                        size="xs" 
                      />
                    </span>
                    <span className="text-sm text-gray-700 font-medium">
                      {goal.current}/{goal.target}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all ${
                        goal.completed ? 'bg-emerald-600' : 'bg-blue-600'
                      }`}
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                  </div>
                  {goal.completed && (
                    <div className="text-xs text-emerald-600 mt-1 font-medium">✓ Completed!</div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

export default Goals
