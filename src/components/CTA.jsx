import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { 
  CheckCircle, 
  Clock, 
  Shield, 
  Zap, 
  ArrowRight,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react'

const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  whatsapp: yup.string().required('WhatsApp é obrigatório').min(10, 'WhatsApp deve ter pelo menos 10 dígitos'),
  company: yup.string().required('Nome da empresa é obrigatório')
})

const CTA = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState('demo')
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log('Dados do formulário CTA:', data)
    
    if (activeTab === 'trial') {
      // Redireciona para o link de registro para teste gratuito
      window.open('https://hubnfe.online/register', '_blank')
      return
    }
    
    if (activeTab === 'demo') {
      // Redireciona para o WhatsApp para agendar demonstração
      window.open('https://wa.me/+555571987369653?text=Gostaria%20de%20saber%20mais%20sobre%20o%20HUBPDV!', '_blank')
      return
    }
    
    // Processa o formulário normalmente (caso padrão)
    setIsSubmitted(true)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const benefits = [
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Implementação em 24 horas"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Dados 100% seguros e protegidos"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Suporte técnico especializado"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Garantia de satisfação"
    }
  ]

  return (
    <section id="contato" className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Pronto para transformar
                <span className="text-yellow-400"> sua empresa?</span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Mais de 5.000 empresas já revolucionaram sua gestão com o HUBPDV. 
                Seja a próxima história de sucesso.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-primary-900">
                    {benefit.icon}
                  </div>
                  <span className="text-blue-100">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Urgency Elements */}
            <div className="bg-yellow-400 bg-opacity-20 border border-yellow-400 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
                <span className="font-semibold text-yellow-400">Oferta Limitada</span>
              </div>
              <p className="text-blue-100">
                <strong className="text-white">Primeiros 100 clientes</strong> ganham 3 meses grátis + 
                implementação sem custo adicional. Restam apenas 23 vagas!
              </p>
            </div>

            {/* Contact Options */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Ou entre em contato diretamente:</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+5571987369653"
                  className="flex items-center space-x-3 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg p-4 transition-all duration-200"
                >
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <div>
                    <div className="font-medium">(71) 9 8736-9653</div>
                    <div className="text-sm text-blue-200">Ligue agora</div>
                  </div>
                </a>
                <a 
                  href="mailto:contato@hubpdv.com"
                  className="flex items-center space-x-3 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg p-4 transition-all duration-200"
                >
                  <Mail className="w-5 h-5 text-yellow-400" />
                  <div>
                    <div className="font-medium">contato@hubpdv.com</div>
                    <div className="text-sm text-blue-200">Envie um e-mail</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 text-gray-900 shadow-2xl">
            {/* Tab Navigation */}
            <div className="flex bg-gray-100 rounded-xl p-1 mb-8">
              <button
                onClick={() => setActiveTab('demo')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'demo' 
                    ? 'bg-primary-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Demonstração
              </button>
              <button
                onClick={() => setActiveTab('trial')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'trial' 
                    ? 'bg-secondary-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Teste Grátis
              </button>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-20 h-20 text-secondary-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {activeTab === 'demo' ? 'Demonstração Agendada!' : 'Teste Ativado!'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {activeTab === 'demo' 
                    ? 'Nossa equipe entrará em contato em até 1 hora para confirmar o horário da sua demonstração personalizada.'
                    : 'Enviamos as instruções de acesso para seu e-mail. Você já pode começar a usar o HUBPDV!'
                  }
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-700 font-medium">
                    ✓ Confirmação enviada por e-mail e WhatsApp
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {activeTab === 'demo' 
                      ? 'Agende sua Demonstração Personalizada'
                      : 'Comece seu Teste Gratuito Agora'
                    }
                  </h3>
                  <p className="text-gray-600">
                    {activeTab === 'demo' 
                      ? 'Veja o HUBPDV funcionando com os dados da sua empresa'
                      : 'Acesso completo por 7 dias, sem compromisso'
                    }
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome da Empresa *
                    </label>
                    <input
                      type="text"
                      id="company"
                      {...register('company')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Sua Empresa Ltda"
                    />
                    {errors.company && (
                      <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="seu@empresa.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      {...register('whatsapp')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                    {errors.whatsapp && (
                      <p className="text-red-500 text-sm mt-1">{errors.whatsapp.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={`w-full font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-lg ${
                      activeTab === 'demo'
                        ? 'bg-primary-600 hover:bg-primary-700 text-white'
                        : 'bg-secondary-600 hover:bg-secondary-700 text-white'
                    }`}
                  >
                    <span>
                      {activeTab === 'demo' ? 'Agendar Demonstração' : 'Iniciar Teste Gratuito'}
                    </span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <div className="text-center">
                    <p className="text-sm text-gray-500">
                      {activeTab === 'demo' 
                        ? '✓ Demonstração personalizada • ✓ Sem compromisso • ✓ Resposta imediata'
                        : '✓ 7 dias grátis • ✓ Sem cartão de crédito • ✓ Acesso completo'
                      }
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA