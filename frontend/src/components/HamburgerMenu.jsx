import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ReadAloud from './ReadAloud'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/goals', label: 'Goals', icon: '🎯' },
    { path: '/log-reading', label: 'Log Reading', icon: '✏️' },
    { path: '/read-now', label: 'Resources', icon: '📚' },
    { path: '/shop', label: 'Shop', icon: '🛍' },
    { path: '/friends', label: 'Friends', icon: '👥' },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={toggleMenu}
        className="text-gray-600 hover:text-gray-800 transition-colors"
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={closeMenu}
        />
      )}

      {/* Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold flex items-center">
              Menu
              <ReadAloud text="Menu" />
            </h2>
            <button
              onClick={closeMenu}
              className="text-gray-600 hover:text-gray-800 text-2xl"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`flex items-center gap-3 p-4 rounded-xl transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="flex-1 flex items-center">
                    {item.label}
                    <ReadAloud text={item.label} size="xs" />
                  </span>
                  {isActive && <span className="text-blue-600">●</span>}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </>
  )
}

export default HamburgerMenu
