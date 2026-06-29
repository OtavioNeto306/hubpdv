import React from 'react'
import { 
  FileText, 
  ShoppingCart, 
  Package, 
  Users, 
  CreditCard, 
  TrendingUp,
  Smartphone,
  BarChart3,
  Truck,
  Download,
  Globe,
  Calculator
} from 'lucide-react'

const Features = () => {
  const mainFeatures = [
    {
      icon: <FileText className="w-6 lg:w-8 h-6 lg:h-8" />,
      title: "Documentos Fiscais Completos",
      description: "NF-e, NFC-e, CT-e, MDF-e e NFS-e automatizados com total conformidade fiscal",
      highlight: "Economia de 70% do tempo"
    },
    {
      icon: <ShoppingCart className="w-6 lg:w-8 h-6 lg:h-8" />,
      title: "PDV Completo Integrado",
      description: "Sistema de vendas com suporte a NFC-e, controle de comissões e pré-vendas",
      highlight: "Vendas mais rápidas"
    },
    {
      icon: <Package className="w-6 lg:w-8 h-6 lg:h-8" />,
      title: "Gestão Inteligente de Estoque",
      description: "Controle completo de produtos, categorias, entradas e saídas em tempo real",
      highlight: "Zero ruptura de estoque"
    },
    {
      icon: <BarChart3 className="w-6 lg:w-8 h-6 lg:h-8" />,
      title: "Dashboard Analítico",
      description: "Visualize todos os dados do seu negócio com gráficos e indicadores claros",
      highlight: "Decisões baseadas em dados"
    }
  ]

  const additionalFeatures = [
    {
      icon: <Users className="w-5 lg:w-6 h-5 lg:h-6" />,
      title: "Gestão de Clientes",
      description: "Cadastro completo e histórico de relacionamento"
    },
    {
      icon: <CreditCard className="w-5 lg:w-6 h-5 lg:h-6" />,
      title: "Contas a Receber/Pagar",
      description: "Controle financeiro completo e automático"
    },
    {
      icon: <Smartphone className="w-5 lg:w-6 h-5 lg:h-6" />,
      title: "App Mobile",
      description: "Acesse de qualquer lugar, a qualquer momento"
    },
    {
      icon: <Truck className="w-5 lg:w-6 h-5 lg:h-6" />,
      title: "Gestão de Transporte",
      description: "CT-e e MDF-e para operações logísticas"
    },
    {
      icon: <Download className="w-5 lg:w-6 h-5 lg:h-6" />,
      title: "Importação Excel/XML",
      description: "Migre seus dados facilmente"
    },
    {
      icon: <Globe className="w-5 lg:w-6 h-5 lg:h-6" />,
      title: "E-commerce Integrado",
      description: "Loja online conectada com marketplaces"
    },
    {
      icon: <Calculator className="w-5 lg:w-6 h-5 lg:h-6" />,
      title: "Folha de Pagamento",
      description: "Gestão completa de RH e benefícios"
    },
    {
      icon: <TrendingUp className="w-5 lg:w-6 h-5 lg:h-6" />,
      title: "Relatórios Avançados",
      description: "Análises detalhadas para crescimento"
    }
  ]

  return (
    <section id="funcionalidades" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Tudo que sua empresa precisa
            <span className="text-primary-600"> em um só lugar</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Sistema completo de gestão empresarial que integra vendas, estoque, 
            fiscal e financeiro para maximizar seus resultados.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {mainFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 lg:p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 lg:w-16 h-12 lg:h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm lg:text-base leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs lg:text-sm font-medium">
                    ✓ {feature.highlight}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-gray-50 rounded-3xl p-6 lg:p-8 xl:p-12">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              E muito mais funcionalidades
            </h3>
            <p className="text-base lg:text-lg text-gray-600">
              Descubra todas as ferramentas que vão transformar sua gestão empresarial
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-4 lg:p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300 text-center group"
              >
                <div className="w-10 lg:w-12 h-10 lg:h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mx-auto mb-3 lg:mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">
                  {feature.title}
                </h4>
                <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-6 lg:p-8 xl:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Pronto para revolucionar sua gestão?
            </h3>
            <p className="text-lg lg:text-xl mb-6 lg:mb-8 opacity-90">
              Junte-se a mais de 5.000 empresas que já transformaram seus resultados
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center max-w-2xl mx-auto">
              <a href="https://hubnfe.online/register" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base lg:text-lg">
                🚀 Teste Grátis por 7 Dias
              </a>
              <a href="https://wa.me/5571992930767?text=Gostaria%20de%20saber%20mais%20sobre%20o%20HUBPDV!" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base lg:text-lg">
                📞 Agendar Demonstração
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features