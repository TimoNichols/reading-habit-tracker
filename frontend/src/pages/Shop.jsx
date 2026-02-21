import React from 'react'
import { useApp, ANIMALS, SHOP_ITEMS } from '../context/AppContext'
import Avatar from '../components/Avatar'
import BottomNav from '../components/BottomNav'
import HamburgerMenu from '../components/HamburgerMenu'
import ReadAloud from '../components/ReadAloud'

const Shop = () => {
  const { avatar, goalsCompleted, setAnimal, toggleAccessory, setBackground } = useApp()
  const [activeTab, setActiveTab] = React.useState('animals')

  const isItemUnlocked = (unlockGoals) => {
    return goalsCompleted >= unlockGoals
  }

  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold flex items-center">
              Shop
              <ReadAloud text="Shop" />
            </h1>
            <HamburgerMenu />
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <div className="flex flex-col items-center mb-4">
            <div className="text-lg font-semibold mb-4 flex items-center">
              Your Avatar
              <ReadAloud text="Your Avatar" size="xs" />
            </div>
            <div className="flex justify-center">
              <Avatar size="xl" />
            </div>
            <div className="mt-4 text-sm text-gray-600 flex items-center">
              Goals Completed: <span className="font-bold text-green-600">{goalsCompleted}</span>
              <ReadAloud text={`Goals Completed: ${goalsCompleted}`} size="xs" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md mb-4">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('animals')}
              className={`flex-1 py-3 text-center font-medium flex items-center justify-center ${
                activeTab === 'animals'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500'
              }`}
            >
              Animals
              <ReadAloud text="Animals" size="xs" />
            </button>
            <button
              onClick={() => setActiveTab('accessories')}
              className={`flex-1 py-3 text-center font-medium flex items-center justify-center ${
                activeTab === 'accessories'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500'
              }`}
            >
              Accessories
              <ReadAloud text="Accessories" size="xs" />
            </button>
            <button
              onClick={() => setActiveTab('backgrounds')}
              className={`flex-1 py-3 text-center font-medium flex items-center justify-center ${
                activeTab === 'backgrounds'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500'
              }`}
            >
              Backgrounds
              <ReadAloud text="Backgrounds" size="xs" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4">
          {activeTab === 'animals' && (
            <div className="grid grid-cols-3 gap-4">
              {ANIMALS.map(animal => {
                const isSelected = avatar.animal === animal.id
                return (
                  <button
                    key={animal.id}
                    onClick={() => setAnimal(animal.id)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-4xl mb-2">{animal.emoji}</div>
                    <div className="text-xs font-medium flex items-center justify-center">
                      {animal.name}
                      <ReadAloud text={animal.name} size="xs" />
                    </div>
                  </button>
                )
              })}
            </div>
          )}

          {activeTab === 'accessories' && (
            <div className="grid grid-cols-3 gap-4">
              {SHOP_ITEMS.accessories.map(item => {
                const isUnlocked = isItemUnlocked(item.unlockGoals)
                const isSelected = avatar.accessories?.includes(item.id)
                return (
                  <button
                    key={item.id}
                    onClick={() => isUnlocked && toggleAccessory(item.id)}
                    disabled={!isUnlocked}
                    className={`p-4 rounded-xl border-2 transition-all relative ${
                      !isUnlocked
                        ? 'border-gray-200 opacity-50 cursor-not-allowed'
                        : isSelected
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {!isUnlocked && (
                      <div className="absolute top-1 right-1 bg-yellow-400 text-xs px-1.5 py-0.5 rounded font-bold">
                        🔒
                      </div>
                    )}
                    <div className="text-4xl mb-2">{item.emoji}</div>
                    <div className="text-xs font-medium text-center flex items-center justify-center">
                      {item.name}
                      <ReadAloud text={`${item.name}${!isUnlocked ? `, locked, requires ${item.unlockGoals} goals` : ''}`} size="xs" />
                    </div>
                    {!isUnlocked && (
                      <div className="text-xs text-gray-500 mt-1 flex items-center justify-center">
                        {item.unlockGoals} goals
                        <ReadAloud text={`Requires ${item.unlockGoals} goals to unlock`} size="xs" />
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          )}

          {activeTab === 'backgrounds' && (
            <div className="grid grid-cols-3 gap-4">
              {SHOP_ITEMS.backgrounds.map(bg => {
                const isUnlocked = isItemUnlocked(bg.unlockGoals)
                const isSelected = avatar.background === bg.id
                return (
                  <button
                    key={bg.id}
                    onClick={() => isUnlocked && setBackground(bg.id)}
                    disabled={!isUnlocked}
                    className={`p-4 rounded-xl border-2 transition-all relative ${
                      !isUnlocked
                        ? 'border-gray-200 opacity-50 cursor-not-allowed'
                        : isSelected
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {!isUnlocked && (
                      <div className="absolute top-1 right-1 bg-yellow-400 text-xs px-1.5 py-0.5 rounded font-bold">
                        🔒
                      </div>
                    )}
                    <div className="text-4xl mb-2">{bg.emoji}</div>
                    <div className="text-xs font-medium text-center flex items-center justify-center">
                      {bg.name}
                      <ReadAloud text={`${bg.name}${!isUnlocked ? `, locked, requires ${bg.unlockGoals} goals` : ''}`} size="xs" />
                    </div>
                    {!isUnlocked && (
                      <div className="text-xs text-gray-500 mt-1 flex items-center justify-center">
                        {bg.unlockGoals} goals
                        <ReadAloud text={`Requires ${bg.unlockGoals} goals to unlock`} size="xs" />
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

export default Shop
