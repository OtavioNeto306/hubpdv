import React, { useState } from 'react'
import { 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  MessageCircle, 
  Mail,
  Clock,
  Shield,
  Zap
} from 'lucide-react'

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    interest: 'demo'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simular envio
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      
      // Redirecionar para WhatsApp após 2 segundos
      setTimeout(() => {
        const message = `Olá! Gostaria de agendar uma demonstração do HUBPDV.
        
Dados:
- Nome: ${formData.name}
- Email: ${formData.email}
- Telefone: ${formData.phone}
- Empresa: ${formData.company}
- Funcionários: ${formData.employees}
- Interesse: ${formData.interest === 'demo' ? 'Demonstração' : 'Teste Gratuito'}`
        
        const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank')
      }, 2000)
    }, 1500)
  }

  const benefits = [
    {
      icon: <Clock className="w-4 lg:w-5 h-4 lg:h-5" />,
      text: "Implementação em 24h"
    },
    {
      icon: <Shield className="w-4 lg:w-5 h-4 lg:h-5" />,
      text: "Dados 100% seguros"
    },
    {
      icon: <Zap className="w-4 lg:w-5 h-4 lg:h-5" />,
      text: "Suporte especializado"
    }
  ]

  if (isSubmitted) {
    return (
      <section className="section-padding bg-gradient-to-br from-primary-600 via-blue-600 to-purple-600">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-6 lg:p-8 xl:p-12 shadow-2xl">
              <div className="w-16 lg:w-20 h-16 lg:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 lg:w-10 h-8 lg:h-10 text-green-600" />
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Solicitação Enviada com Sucesso!
              </h2>
              
              <p className="text-base lg:text-lg text-gray-600 mb-6">
                Você será redirecionado para o WhatsApp em instantes para finalizar o agendamento.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-primary-600">
                <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contato" className="section-padding bg-gradient-to-br from-primary-600 via-blue-600 to-purple-600">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
              Pronto para transformar seu negócio?
            </h2>
            
            <p className="text-lg lg:text-xl text-blue-100 mb-6 lg:mb-8 leading-relaxed">
              Agende uma demonstração gratuita e veja como o HUBPDV pode revolucionar sua gestão empresarial em apenas 30 minutos.
            </p>

            {/* Benefits */}
            <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 lg:w-10 h-8 lg:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <span className="text-blue-100 text-sm lg:text-base">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Contact Options */}
            <div className="space-y-3 lg:space-y-4">
              <div className="text-blue-100">
                <p className="font-semibold mb-2 text-sm lg:text-base">Prefere falar diretamente?</p>
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                  <a 
                    href="https://wa.me/5511999999999" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg px-3 lg:px-4 py-2 text-sm lg:text-base"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                  <a 
                    href="tel:+5511999999999"
                    className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg px-3 lg:px-4 py-2 text-sm lg:text-base"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(11) 99999-9999</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                  Agende sua Demonstração
                </h3>
                <p className="text-sm lg:text-base text-gray-600">
                  Preencha os dados e receba acesso imediato
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm lg:text-base"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Corporativo *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm lg:text-base"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm lg:text-base"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm lg:text-base"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Número de Funcionários
                    </label>
                    <select
                      name="employees"
                      value={formData.employees}
                      onChange={handleInputChange}
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm lg:text-base"
                    >
                      <option value="">Selecione</option>
                      <option value="1-10">1-10 funcionários</option>
                      <option value="11-50">11-50 funcionários</option>
                      <option value="51-200">51-200 funcionários</option>
                      <option value="200+">Mais de 200</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interesse
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm lg:text-base"
                    >
                      <option value="demo">Demonstração</option>
                      <option value="trial">Teste Gratuito</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white font-semibold py-3 lg:py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 text-sm lg:text-base"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>Agendar Demonstração Gratuita</span>
                      <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5" />
                    </>
                  )}
                </button>

                <p className="text-xs lg:text-sm text-gray-500 text-center">
                  ✓ Sem compromisso • ✓ Demonstração personalizada • ✓ Suporte incluído
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA