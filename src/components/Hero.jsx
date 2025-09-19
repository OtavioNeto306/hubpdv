import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { CheckCircle, Star, Users, TrendingUp, Shield } from 'lucide-react'

const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  whatsapp: yup.string().required('WhatsApp é obrigatório').min(10, 'WhatsApp deve ter pelo menos 10 dígitos')
})

const Hero = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log('Dados do formulário:', data)
    
    // Redireciona para o WhatsApp para agendar demonstração
    window.open('https://wa.me/+555571987369653?text=Gostaria%20de%20saber%20mais%20sobre%20o%20HUBPDV!', '_blank')
    
    setIsSubmitted(true)
    reset()
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section className="bg-gradient-to-br from-primary-50 to-blue-50 section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Trust Indicators */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-gray-600 ml-2">4.9/5 (500+ avaliações)</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transforme sua
                <span className="text-primary-600"> Gestão Empresarial</span>
                <br />em Minutos
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Sistema completo de PDV, emissão de notas fiscais e gestão empresarial. 
                <strong className="text-gray-900">Reduza 70% do tempo</strong> gasto com processos fiscais.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary-600" />
                <span className="text-gray-700">NF-e, NFC-e, CT-e automáticos</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary-600" />
                <span className="text-gray-700">PDV completo integrado</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary-600" />
                <span className="text-gray-700">Controle total de estoque</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary-600" />
                <span className="text-gray-700">Suporte 24/7 especializado</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">5.000+</div>
                  <div className="text-sm text-gray-600">Empresas ativas</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-secondary-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">70%</div>
                  <div className="text-sm text-gray-600">Economia de tempo</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Conformidade fiscal</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Lead Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Agende uma Demonstração Gratuita
              </h2>
              <p className="text-gray-600">
                Veja como o HUBPDV pode revolucionar sua empresa em apenas 15 minutos
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-secondary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Solicitação Enviada!
                </h3>
                <p className="text-gray-600">
                  Entraremos em contato em até 2 horas para agendar sua demonstração.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail Corporativo *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
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
                  className="w-full btn-primary text-lg py-4 mt-6"
                >
                  Agendar Demonstração Gratuita
                </button>

                <div className="text-center mt-4">
                  <p className="text-sm text-gray-500">
                    ✓ Sem compromisso • ✓ 100% gratuito • ✓ Resposta em 2h
                  </p>
                </div>
              </form>
            )}

            {/* Test CTA */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-base text-gray-700 mb-4 font-medium">
                Ou comece agora mesmo:
              </p>
              <a href="https://hubnfe.online/register" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg">
                🚀 Teste Grátis por 7 Dias
              </a>
              <p className="text-sm text-gray-500 mt-3">
                ✓ Sem cartão de crédito • ✓ Cancelamento a qualquer momento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero