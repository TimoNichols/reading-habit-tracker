import React from 'react'
import { useApp, ANIMALS, SHOP_ITEMS } from '../context/AppContext'

const Avatar = ({ size = 'lg', showBackground = true }) => {
  const { avatar } = useApp()
  const animal = ANIMALS.find(a => a.id === avatar.animal) || ANIMALS[0]
  const background = SHOP_ITEMS.backgrounds.find(bg => bg.id === avatar.background) || SHOP_ITEMS.backgrounds[0]

  const sizeClasses = {
    sm: 'w-12 h-12 text-2xl',
    md: 'w-16 h-16 text-3xl',
    lg: 'w-24 h-24 text-5xl',
    xl: 'w-32 h-32 text-6xl',
  }

  const bgEmojis = {
    bg_default: '⚪',
    bg_forest: '🌲',
    bg_beach: '🏖',
    bg_space: '🌌',
    bg_library: '📚',
  }

  const hatAccessories = avatar.accessories?.filter(accId => 
    accId.startsWith('hat_')
  ) || []
  const otherAccessories = avatar.accessories?.filter(accId => 
    !accId.startsWith('hat_')
  ) || []

  const emojiSize = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-5xl',
    xl: 'text-6xl',
  }[size]

  return (
    <div className={`relative ${sizeClasses[size]} flex items-center justify-center`}>
      {showBackground && (
        <div className={`absolute inset-0 flex items-center justify-center ${emojiSize} opacity-20`}>
          {bgEmojis[avatar.background] || '⚪'}
        </div>
      )}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Hat accessories above animal */}
        {hatAccessories.length > 0 && (
          <div className="flex gap-1 mb-0">
            {hatAccessories.map(accId => {
              const accessory = SHOP_ITEMS.accessories.find(a => a.id === accId)
              return accessory ? (
                <span key={accId} className={`${emojiSize}`}>{accessory.emoji}</span>
              ) : null
            })}
          </div>
        )}
        {/* Animal */}
        <div className={emojiSize}>{animal.emoji}</div>
        {/* Other accessories below animal */}
        {otherAccessories.length > 0 && (
          <div className="flex gap-1 mt-0">
            {otherAccessories.map(accId => {
              const accessory = SHOP_ITEMS.accessories.find(a => a.id === accId)
              return accessory ? (
                <span key={accId} className={`${emojiSize}`}>{accessory.emoji}</span>
              ) : null
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Avatar
