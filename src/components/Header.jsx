import React, { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl sm:text-2xl font-bold text-primary-600">
              HUBPDV
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#funcionalidades" className="text-gray-700 hover:text-primary-600 transition-colors text-sm lg:text-base">
              Funcionalidades
            </a>
            <a href="#beneficios" className="text-gray-700 hover:text-primary-600 transition-colors text-sm lg:text-base">
              Benefícios
            </a>
            <a href="#contato" className="text-gray-700 hover:text-primary-600 transition-colors text-sm lg:text-base">
              Contato
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>(71) 9 8736-9653</span>
            </div>
            <a href="https://hubnfe.online/register" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-4">
              Teste Grátis 7 Dias
            </a>
          </div>

          {/* Mobile CTA Button - visible on md screens */}
          <div className="hidden md:flex lg:hidden">
            <a href="https://hubnfe.online/register" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-3">
              Teste Grátis
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 transition-colors p-2"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <a
                href="#funcionalidades"
                className="block px-3 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Funcionalidades
              </a>
              <a
                href="#beneficios"
                className="block px-3 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefícios
              </a>
              <a
                href="#contato"
                className="block px-3 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              
              {/* Mobile Contact & CTA */}
              <div className="px-3 py-3 border-t border-gray-100 mt-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+5571993218281" className="hover:text-primary-600 transition-colors">
                    (71) 9 8736-9653
                  </a>
                </div>
                <a 
                  href="https://hubnfe.online/register" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary w-full text-center py-3 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  🚀 Teste Grátis 7 Dias
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header