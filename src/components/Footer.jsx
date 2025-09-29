import React, { useState } from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
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
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Funcionalidades', href: '#funcionalidades' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Contato', href: '#contato' }
  ]

  const solutions = [
    { name: 'PDV Completo', href: '#' },
    { name: 'Gestão de Estoque', href: '#' },
    { name: 'Emissão de NFe', href: '#' },
    { name: 'Relatórios Gerenciais', href: '#' },
    { name: 'Controle Financeiro', href: '#' }
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

  const socialLinks = [
    { icon: <Facebook className="w-4 lg:w-5 h-4 lg:h-5" />, href: '#', name: 'Facebook' },
    { icon: <Instagram className="w-4 lg:w-5 h-4 lg:h-5" />, href: '#', name: 'Instagram' },
    { icon: <Linkedin className="w-4 lg:w-5 h-4 lg:h-5" />, href: '#', name: 'LinkedIn' },
    { icon: <Youtube className="w-4 lg:w-5 h-4 lg:h-5" />, href: '#', name: 'YouTube' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-12 lg:py-16">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary-400 mb-4">
                HUBPDV
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                A solução completa para gestão empresarial que transforma a forma como você administra seu negócio.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 lg:w-5 h-4 lg:h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div className="text-sm lg:text-base">
                  <p className="text-gray-300">
                    Rua das Empresas, 123<br />
                    Centro, São Paulo - SP<br />
                    CEP: 01234-567
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 lg:w-5 h-4 lg:h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+5511999999999" className="text-gray-300 hover:text-primary-400 transition-colors text-sm lg:text-base">
                  (11) 99999-9999
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 lg:w-5 h-4 lg:h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:contato@hubpdv.com" className="text-gray-300 hover:text-primary-400 transition-colors text-sm lg:text-base">
                  contato@hubpdv.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-4 lg:w-5 h-4 lg:h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">
                  Seg - Sex: 8h às 18h
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-sm lg:text-base">Siga-nos</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 lg:w-10 h-8 lg:h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 lg:mb-6 text-base lg:text-lg">Links Rápidos</h4>
            <ul className="space-y-2 lg:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm lg:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4 lg:mb-6 text-base lg:text-lg">Soluções</h4>
            <ul className="space-y-2 lg:space-y-3">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <a 
                    href={solution.href} 
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm lg:text-base"
                  >
                    {solution.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 lg:mb-6 text-base lg:text-lg">Suporte</h4>
            <ul className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
              {support.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm lg:text-base"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="bg-gray-800 rounded-xl p-4 lg:p-6">
              <h5 className="font-semibold mb-3 text-sm lg:text-base">Newsletter</h5>
              <p className="text-gray-300 mb-4 text-xs lg:text-sm">
                Receba dicas e novidades sobre gestão empresarial
              </p>
              
              {isSubscribed ? (
                <div className="flex items-center space-x-2 text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-xs lg:text-sm">Inscrito com sucesso!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu e-mail"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 text-sm"
                  >
                    <span>Inscrever</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-xs lg:text-sm">
                © 2024 HUBPDV. Todos os direitos reservados.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-6">
              {legal.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-xs lg:text-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-gray-800">
            <div className="text-center">
              <p className="text-gray-500 text-xs lg:text-sm">
                HUBPDV - CNPJ: 12.345.678/0001-90 | Desenvolvido com ❤️ para empresas brasileiras
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer