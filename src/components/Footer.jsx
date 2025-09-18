import React, { useState } from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email) {
      console.log('Newsletter subscription:', email)
      setIsSubscribed(true)
      setEmail('')
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false)
      }, 3000)
    }
  }

  const quickLinks = [
    { name: 'Funcionalidades', href: '#funcionalidades' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Demonstração', href: '#contato' },
    { name: 'Teste Grátis', href: '#contato' }
  ]

  const solutions = [
    { name: 'PDV Completo', href: '#' },
    { name: 'Notas Fiscais', href: '#' },
    { name: 'Gestão de Estoque', href: '#' },
    { name: 'Controle Financeiro', href: '#' },
    { name: 'E-commerce', href: '#' },
    { name: 'App Mobile', href: '#' }
  ]

  const support = [
    { name: 'Central de Ajuda', href: '#' },
    { name: 'Documentação', href: '#' },
    { name: 'Tutoriais', href: '#' },
    { name: 'Suporte Técnico', href: '#' },
    { name: 'Status do Sistema', href: '#' }
  ]

  const legal = [
    { name: 'Política de Privacidade', href: '#' },
    { name: 'Termos de Uso', href: '#' },
    { name: 'Política de Cookies', href: '#' },
    { name: 'LGPD', href: '#' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <div className="text-3xl font-bold text-primary-400 mb-4">
                HUBPDV
              </div>
              <p className="text-gray-300 leading-relaxed">
                Sistema completo de gestão empresarial que transforma a forma como você administra seu negócio.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <a href="tel:+5571987369653" className="text-gray-300 hover:text-white transition-colors">
                  (71) 9 8736-9653
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a href="mailto:contato@hubpdv.com" className="text-gray-300 hover:text-white transition-colors">
                  contato@hubpdv.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1" />
                <span className="text-gray-300">
                  Salvador, Bahia<br />
                  Brasil
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Soluções</h3>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <a 
                    href={solution.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {solution.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-6">
              Receba dicas, novidades e atualizações sobre gestão empresarial.
            </p>
            
            {isSubscribed ? (
              <div className="bg-green-900 border border-green-700 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300 font-medium">Inscrição realizada!</span>
                </div>
                <p className="text-green-400 text-sm mt-1">
                  Obrigado por se inscrever em nossa newsletter.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-white placeholder-gray-400"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Inscrever-se</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Support Links */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Suporte</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {support.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {legal.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 HUBPDV. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-gray-400 text-sm">Sistema Online</span>
              </div>
              <div className="text-gray-400 text-sm">
                Desenvolvido com ❤️ no Brasil
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer