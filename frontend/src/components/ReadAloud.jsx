import React, { useState } from 'react'

const ReadAloud = ({ text, size = 'sm' }) => {
  const [isReading, setIsReading] = useState(false)

  const speak = () => {
    if ('speechSynthesis' in window) {
      // Stop any current speech
      window.speechSynthesis.cancel()
      
      // Small delay to ensure cancellation completes
      setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.lang = 'en-US'
        utterance.rate = 0.9 // Slightly slower for clarity
        utterance.pitch = 1.0
        utterance.volume = 1.0
        
        utterance.onstart = () => setIsReading(true)
        utterance.onend = () => setIsReading(false)
        utterance.onerror = () => setIsReading(false)
        
        window.speechSynthesis.speak(utterance)
      }, 100)
    }
  }

  const stop = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      setIsReading(false)
    }
  }

  const handleClick = (e) => {
    e.stopPropagation()
    if (isReading) {
      stop()
    } else {
      speak()
    }
  }

  const sizeClasses = {
    xs: 'w-3 h-3 text-xs',
    sm: 'w-4 h-4 text-sm',
    md: 'w-5 h-5 text-base',
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center ml-1.5 text-gray-400 hover:text-blue-600 transition-colors focus:outline-none ${sizeClasses[size]}`}
      aria-label={isReading ? 'Stop reading' : 'Read aloud'}
      title={isReading ? 'Stop reading' : 'Read aloud'}
    >
      {isReading ? (
        <span className="animate-pulse">🔊</span>
      ) : (
        <span>🔊</span>
      )}
    </button>
  )
}

export default ReadAloud
