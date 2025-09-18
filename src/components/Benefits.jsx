import React from 'react'
import { 
  Clock, 
  Shield, 
  HeadphonesIcon, 
  TrendingUp, 
  DollarSign, 
  Zap,
  CheckCircle,
  Star
} from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Economia de 70% do Tempo",
      description: "Automatize processos fiscais e reduza drasticamente o tempo gasto com burocracia",
      stats: "De 8h para 2h por dia",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Conformidade Fiscal",
      description: "Sistema sempre atualizado com a legislação vigente, eliminando riscos de multas",
      stats: "Zero multas fiscais",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Suporte Especializado 24/7",
      description: "Equipe técnica sempre disponível para resolver qualquer dúvida ou problema",
      stats: "Resposta em 2 minutos",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Aumento de 40% na Produtividade",
      description: "Processos otimizados que permitem focar no crescimento do seu negócio",
      stats: "Mais vendas, menos trabalho",
      color: "from-orange-500 to-orange-600"
    }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      company: "Distribuidora ABC",
      role: "Diretora Financeira",
      content: "O HUBPDV transformou nossa operação. Reduzimos 80% do tempo gasto com notas fiscais e nunca mais tivemos problemas com a Receita Federal.",
      rating: 5,
      savings: "R$ 15.000/mês economizados"
    },
    {
      name: "João Santos",
      company: "Supermercado Central",
      role: "Proprietário",
      content: "Impressionante como um sistema pode fazer tanta diferença. Nosso PDV ficou muito mais rápido e o controle de estoque é perfeito.",
      rating: 5,
      savings: "50% mais vendas"
    },
    {
      name: "Ana Costa",
      company: "Farmácia Saúde+",
      role: "Gerente",
      content: "O suporte é excepcional e o sistema nunca falha. Recomendo para qualquer empresa que quer crescer de forma organizada.",
      rating: 5,
      savings: "Zero problemas fiscais"
    }
  ]

  const stats = [
    { number: "5.000+", label: "Empresas Ativas" },
    { number: "99.9%", label: "Uptime Garantido" },
    { number: "2min", label: "Tempo de Resposta" },
    { number: "70%", label: "Economia de Tempo" }
  ]

  return (
    <section id="beneficios" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher o
            <span className="text-primary-600"> HUBPDV?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra os benefícios reais que milhares de empresas já estão aproveitando
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">{benefit.stats}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-3xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Números que comprovam nossa excelência
            </h3>
            <p className="text-xl text-blue-100">
              Resultados reais de empresas que confiam no HUBPDV
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h3>
            <p className="text-lg text-gray-600">
              Histórias reais de transformação e sucesso
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Savings Highlight */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-green-700 font-semibold">{testimonial.savings}</span>
                  </div>
                </div>

                {/* Author */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-primary-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Junte-se a milhares de empresas de sucesso
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Comece sua transformação digital hoje mesmo. Sem riscos, sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg py-4 px-8">
                🚀 Começar Teste Gratuito
              </button>
              <button className="btn-outline text-lg py-4 px-8">
                Falar com Especialista
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              ✓ 7 dias grátis • ✓ Sem cartão de crédito • ✓ Suporte incluído
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits