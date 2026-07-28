import { createElement, useState } from 'react'
import {
  ArrowRight, BarChart3, BriefcaseBusiness, Check, ChevronDown, ChevronRight,
  CircleDollarSign, ClipboardList, FileText, Globe2, Menu, Package, Receipt,
  ShoppingBag, Store, Truck, Users, UtensilsCrossed, Wallet, X, Zap
} from 'lucide-react'
import './App.css'

const whatsapp = 'https://wa.me/5571992930767?text=Olá!%20Quero%20conhecer%20o%20HUBPDV.'
const registerUrl = 'http://sistemahub.com.br'

const sectors = {
  varejo: {
    label: 'Varejo e comércio', icon: Store,
    eyebrow: 'Para quem vende no balcão, na loja ou em mais de uma unidade',
    title: 'Seu caixa vende. O HUBPDV organiza o resto.',
    text: 'Venda com agilidade, acompanhe o estoque e tenha financeiro e fiscal no mesmo fluxo — sem depender de planilhas para descobrir o que aconteceu no dia.',
    points: ['PDV com PIX, cartões e venda suspensa', 'Estoque, etiquetas, inventário e transferências', 'NFC-e ou comprovante integrado à venda'],
    panel: ['Venda concluída', 'Estoque atualizado', 'Caixa registrado', 'Documento fiscal pronto']
  },
  food: {
    label: 'Restaurantes e delivery', icon: UtensilsCrossed,
    eyebrow: 'Do pedido à cozinha, sem perder o ritmo do salão',
    title: 'Pedidos fluindo. Cozinha alinhada. Gestão sob controle.',
    text: 'Organize cardápio, mesas, comandas e delivery próprio no mesmo ambiente que alimenta seu caixa, estoque e relatórios.',
    points: ['Cardápio digital, mesas e comandas', 'Adicionais, pizzas e observações de pedido', 'Cozinha, motoboy e acompanhamento de pedidos'],
    panel: ['Pedido recebido', 'Cozinha acionada', 'Entrega acompanhada', 'Venda no relatório']
  },
  services: {
    label: 'Serviços', icon: BriefcaseBusiness,
    eyebrow: 'Para empresas que precisam transformar atendimento em faturamento',
    title: 'Da agenda à ordem de serviço, em uma jornada só.',
    text: 'Tenha visibilidade da agenda, da equipe e do que foi aplicado em cada atendimento — com venda, estoque e emissão conectados à operação.',
    points: ['Agenda com profissionais e horários', 'Ordens de serviço com itens e responsáveis', 'Metas e acompanhamento por atendimento'],
    panel: ['Horário agendado', 'OS em andamento', 'Produtos baixados', 'Atendimento faturado']
  },
  transport: {
    label: 'Transportes', icon: Truck,
    eyebrow: 'Para operações que precisam controlar frete e documentação',
    title: 'Frete, frota e fiscal trabalhando juntos.',
    text: 'Centralize veículos, despesas, receitas e os documentos da operação para enxergar cada etapa do transporte com mais clareza.',
    points: ['Cadastros de veículos, motoristas e fretes', 'Controle de despesas e manutenções', 'CT-e, CT-e OS e MDF-e conforme configuração'],
    panel: ['Frete registrado', 'Despesa vinculada', 'Documento emitido', 'Resultado acompanhado']
  }
}

const modules = [
  { icon: ShoppingBag, title: 'Venda sem travar a operação', text: 'PDV, caixa, pré-venda, orçamento, trocas, pagamentos e impressão.' },
  { icon: Package, title: 'Estoque que acompanha a realidade', text: 'Compras, XML, inventário, etiquetas, movimentações e locais de estoque.' },
  { icon: CircleDollarSign, title: 'Financeiro que conversa com a venda', text: 'Contas a pagar e receber, caixa, taxas, boletos e relatórios.' },
  { icon: Receipt, title: 'Fiscal no centro do negócio', text: 'NF-e, NFC-e, NFS-e, CT-e e MDF-e conforme plano e configuração.' },
  { icon: Globe2, title: 'Mais canais, uma única base', text: 'Delivery, e-commerce e integrações para expandir sem desconectar a gestão.' },
  { icon: Users, title: 'Equipe com acesso na medida', text: 'Multiempresa, multilocal, usuários e permissões por função.' }
]

const faqs = [
  ['O HUBPDV serve para o meu tipo de empresa?', 'O sistema possui um núcleo de vendas, estoque, financeiro e fiscal e módulos para varejo, alimentação, serviços, transporte, hospedagem e outros segmentos. Na demonstração, avaliamos o fluxo mais adequado à sua operação.'],
  ['Consigo emitir documentos fiscais?', 'O HUBPDV oferece fluxos para NF-e, NFC-e, NFS-e, CT-e e MDF-e. A disponibilidade depende do seu segmento, plano, credenciamento e configuração fiscal.'],
  ['Posso começar somente com o que preciso?', 'Sim. A plataforma é modular: a operação pode começar pelo essencial e incorporar novos recursos, usuários, locais e canais quando fizer sentido para o negócio.'],
  ['Como funciona a migração?', 'O sistema possui recursos de importação de cadastros e XML. O melhor caminho de implantação depende do volume e da estrutura dos dados atuais — por isso a demonstração é personalizada.']
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSector, setActiveSector] = useState('varejo')
  const [openFaq, setOpenFaq] = useState(null)
  const [form, setForm] = useState({ name: '', whatsapp: '', business: '' })
  const [submitted, setSubmitted] = useState(false)
  const sector = sectors[activeSector]

  const track = (event) => typeof window.fbq === 'function' && window.fbq('track', event)
  const submitForm = (event) => {
    event.preventDefault()
    const message = `Olá! Quero uma demonstração do HUBPDV.\n\nNome: ${form.name}\nWhatsApp: ${form.whatsapp}\nEmpresa: ${form.business}`
    track('Contact')
    setSubmitted(true)
    window.open(`https://wa.me/5571992930767?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <main>
      <header className="site-header">
        <div className="shell nav-row">
          <a href="#inicio" className="brand" aria-label="HUBPDV início"><span>HUB</span>PDV</a>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <a onClick={() => setMenuOpen(false)} href="#solucao">Como funciona</a>
            <a onClick={() => setMenuOpen(false)} href="#segmentos">Soluções</a>
            <a onClick={() => setMenuOpen(false)} href="#recursos">Recursos</a>
            <a onClick={() => setMenuOpen(false)} href="#planos">Planos</a>
            <a onClick={() => setMenuOpen(false)} href="#perguntas">Dúvidas</a>
          </nav>
          <div className="nav-actions">
            <a onClick={() => track('Contact')} className="nav-phone" href="tel:+5571992930767">(71) 9 9293-0767</a>
            <a onClick={() => track('Lead')} className="button button-dark nav-cta" href="#demonstracao">Quero uma demonstração <ArrowRight size={16} /></a>
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> Gestão empresarial conectada para PMEs</div>
            <h1>Venda mais.<br /><em>Controle tudo.</em><br />Cresça com clareza.</h1>
            <p className="hero-description">HUBPDV conecta vendas, estoque, financeiro e emissão fiscal em uma única operação. Menos retrabalho para sua equipe. Mais visão para você decidir.</p>
            <div className="hero-actions">
              <a onClick={() => track('Lead')} href="#demonstracao" className="button button-accent">Quero ver funcionando <ArrowRight size={18} /></a>
              <a href="#solucao" className="text-link">Entenda o fluxo <ChevronRight size={18} /></a>
            </div>
            <div className="hero-notes"><span><Check size={16} /> Sem compromisso</span><span><Check size={16} /> Demonstração para seu segmento</span></div>
          </div>
          <div className="hero-visual" aria-label="Representação de painel HUBPDV">
            <div className="visual-chip chip-top"><Zap size={15} /> Operação conectada</div>
            <div className="app-window">
              <div className="app-top"><div className="app-brand"><span className="app-dot" /> HUBPDV</div><div className="app-user" /></div>
              <div className="app-body">
                <aside><span className="active" /><span /><span /><span /><span /></aside>
                <div className="dashboard">
                  <div className="dash-head"><div><small>Visão geral</small><strong>Bom dia, gestor</strong></div><button>Hoje ▾</button></div>
                  <div className="metric-row"><Metric label="Vendas" value="R$ 8.420" up /><Metric label="Pedidos" value="42" up /><Metric label="A receber" value="R$ 3.180" /></div>
                  <div className="chart-card"><div className="chart-title"><span>Faturamento da semana</span><b>+18,4%</b></div><div className="chart"><i style={{height:'30%'}}/><i style={{height:'46%'}}/><i style={{height:'39%'}}/><i style={{height:'64%'}}/><i style={{height:'58%'}}/><i style={{height:'82%'}}/><i style={{height:'73%'}}/></div></div>
                  <div className="activity"><strong>Fluxo da venda</strong><div><span className="success-dot" /> Pedido concluído <b>Estoque e financeiro atualizados</b></div><div><span className="success-dot" /> NFC-e emitida <b>Agora mesmo</b></div></div>
                </div>
              </div>
            </div>
            <div className="visual-chip chip-bottom"><Check size={15} /> Venda → estoque → fiscal</div>
          </div>
        </div>
      </section>

      <section className="proof-strip"><div className="shell proof-content"><p>Uma plataforma para centralizar a operação de</p><div><span>VAREJO</span><span>ALIMENTAÇÃO</span><span>SERVIÇOS</span><span>TRANSPORTES</span><span>HOSPEDAGEM</span></div></div></section>

      <section className="pain-section"><div className="shell narrow-head"><span className="section-kicker">Você reconhece essa rotina?</span><h2>Quando cada área usa uma ferramenta, <em>ninguém enxerga a empresa inteira.</em></h2><p>Venda de um lado. Planilha do outro. Estoque que não bate. Nota emitida depois. O resultado é tempo perdido — e decisões tomadas no escuro.</p></div>
        <div className="shell pain-grid"><Pain number="01" title="A venda acontece, mas a informação para no caixa." text="Você precisa atualizar estoque, financeiro e fiscal manualmente." /><Pain number="02" title="O estoque só revela o problema quando já é tarde." text="Falta produto, sobra mercadoria e a equipe perde tempo conferindo." /><Pain number="03" title="O gestor descobre o resultado depois que o mês acaba." text="Sem uma visão conectada, fica difícil agir no momento certo." /></div>
      </section>

      <section id="solucao" className="flow-section"><div className="shell"><div className="section-intro"><span className="section-kicker light">O que muda com o HUBPDV</span><h2>Uma venda movimenta a empresa inteira.</h2><p>O dado nasce uma vez e segue o fluxo da sua operação, reduzindo tarefas repetidas e dando contexto para cada decisão.</p></div><div className="flow-track"><FlowItem icon={ShoppingBag} title="Venda" text="PDV, pedido, atendimento ou canal digital" /><span className="flow-line" /><FlowItem icon={Package} title="Estoque" text="Saldo e movimentações acompanhados" /><span className="flow-line" /><FlowItem icon={Wallet} title="Financeiro" text="Caixa, contas e recebimentos conectados" /><span className="flow-line" /><FlowItem icon={FileText} title="Fiscal" text="Documento conforme configuração" /><span className="flow-line" /><FlowItem icon={BarChart3} title="Gestão" text="Relatórios para agir com visão" /></div><div className="flow-bottom"><span><Check size={17} /> Um único lugar para acompanhar o que importa</span><a href="#demonstracao">Quero ver esse fluxo na prática <ArrowRight size={17} /></a></div></div></section>

      <section id="segmentos" className="sectors-section"><div className="shell"><div className="section-head"><div><span className="section-kicker">Feito para a sua operação</span><h2>Um núcleo forte.<br /><em>Jornadas que fazem sentido.</em></h2></div><p>Você não precisa adaptar sua empresa a um sistema genérico. O HUBPDV reúne ferramentas para cada tipo de operação.</p></div><div className="sector-tabs">{Object.entries(sectors).map(([key, item]) => <button className={activeSector === key ? 'selected' : ''} onClick={() => setActiveSector(key)} key={key}>{createElement(item.icon, { size: 19 })} {item.label}</button>)}</div><div className="sector-detail"><div className="sector-copy"><span>{sector.eyebrow}</span><h3>{sector.title}</h3><p>{sector.text}</p><ul>{sector.points.map(point => <li key={point}><Check size={17} />{point}</li>)}</ul><a onClick={() => track('Lead')} href="#demonstracao" className="text-link dark">Conhecer a solução para meu negócio <ArrowRight size={18} /></a></div><div className="journey-card"><div className="journey-label">{createElement(sector.icon, { size: 19 })} Jornada HUBPDV</div>{sector.panel.map((step, index) => <div className="journey-step" key={step}><span>{String(index + 1).padStart(2, '0')}</span><b>{step}</b>{index < sector.panel.length - 1 && <i />}</div>)}</div></div></div></section>

      <section id="recursos" className="features-section"><div className="shell"><div className="narrow-head"><span className="section-kicker">Tudo se conecta aqui</span><h2>Mais do que um PDV. <em>Uma base para a empresa crescer.</em></h2></div><div className="feature-grid">{modules.map(({icon, title, text}) => <article className="feature-card" key={title}><div>{createElement(icon, { size: 23 })}</div><h3>{title}</h3><p>{text}</p><a href="#demonstracao">Ver na demonstração <ArrowRight size={16} /></a></article>)}</div></div></section>

      <section id="planos" className="plans-section"><div className="shell"><div className="plans-heading"><span className="section-kicker">Comece pelo que resolve agora</span><h2>Um plano para o seu momento.<br /><em>Uma plataforma para o seu crescimento.</em></h2><p>Escolha o ponto de partida que combina com sua operação. Nossa equipe ajuda a montar a solução com os módulos e recursos que você realmente precisa.</p></div><div className="plans-grid"><Plan title="Essencial" kicker="Para começar com organização" description="Tire vendas, caixa e estoque do improviso e tenha uma base confiável para operar todos os dias." items={['PDV e vendas', 'Caixa e formas de pagamento', 'Cadastro de produtos e estoque', 'Relatórios operacionais']} /><Plan featured title="Gestão" kicker="Para quem quer visão do negócio" description="Conecte a operação ao financeiro e tome decisões com uma visão mais completa da empresa." items={['Tudo do Essencial', 'Contas a pagar e receber', 'Compras, XML e fornecedores', 'Usuários, permissões e relatórios']} /><Plan title="Sob medida" kicker="Para operações que querem expandir" description="Adicione os recursos do seu segmento e novos canais de venda conforme sua empresa evolui." items={['Recursos fiscais por necessidade', 'Delivery, e-commerce ou integrações', 'Módulos por segmento', 'Estrutura para múltiplos locais']} /></div><div className="plans-footer"><span><Check size={17} /> A disponibilidade dos recursos depende do plano, segmento e configuração.</span><a onClick={() => track('Lead')} href="#demonstracao">Quero descobrir meu plano ideal <ArrowRight size={17} /></a></div></div></section>

      <section className="choice-section"><div className="shell choice-box"><div><span className="section-kicker light">Comece pelo que resolve hoje</span><h2>O seu negócio não precisa de mais um sistema.<br /><em>Precisa de uma operação que se conversa.</em></h2></div><div className="choice-points"><span><Check size={18} /> Módulos conforme plano e segmento</span><span><Check size={18} /> Usuários e permissões por função</span><span><Check size={18} /> Expansão para novos canais no seu ritmo</span></div></div></section>

      <section id="perguntas" className="faq-section"><div className="shell faq-grid"><div><span className="section-kicker">Tire suas dúvidas</span><h2>Antes de escolher,<br /><em>entenda o essencial.</em></h2><p>Quer uma resposta olhando para a sua operação? Fale com um especialista e veja o que faz sentido para seu segmento.</p><a href={whatsapp} target="_blank" rel="noreferrer" onClick={() => track('Contact')} className="text-link dark">Falar pelo WhatsApp <ArrowRight size={18} /></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <article className={openFaq === index ? 'faq-item open' : 'faq-item'} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><ChevronDown size={21} /></button>{openFaq === index && <p>{answer}</p>}</article>)}</div></div></section>

      <section id="demonstracao" className="demo-section"><div className="shell demo-grid"><div className="demo-copy"><span className="section-kicker light">Sua próxima decisão pode ser mais simples</span><h2>Veja onde sua operação pode ganhar <em>ritmo e clareza.</em></h2><p>Em uma conversa, mostramos a jornada mais indicada para sua empresa e respondemos às dúvidas sobre implantação, fiscal e recursos.</p><div><span><Check size={17} /> Demonstração personalizada</span><span><Check size={17} /> Sem compromisso</span></div></div><form onSubmit={submitForm} className="lead-form">{submitted ? <div className="form-success"><Check size={32} /><h3>Pronto para conversar!</h3><p>Abrimos o WhatsApp para você continuar o agendamento.</p></div> : <><h3>Quero conhecer o HUBPDV</h3><p>Preencha os dados e fale com nossa equipe.</p><label>Seu nome<input value={form.name} onChange={e => setForm({...form, name:e.target.value})} required placeholder="Como podemos te chamar?" /></label><label>WhatsApp<input value={form.whatsapp} onChange={e => setForm({...form, whatsapp:e.target.value})} required placeholder="(00) 00000-0000" /></label><label>Nome da empresa<input value={form.business} onChange={e => setForm({...form, business:e.target.value})} required placeholder="Sua empresa" /></label><button className="button button-accent" type="submit">Agendar minha demonstração <ArrowRight size={18} /></button><small>Ao enviar, você será direcionado para o WhatsApp.</small></>}</form></div></section>

      <footer><div className="shell footer-row"><a href="#inicio" className="brand"><span>HUB</span>PDV</a><p>Gestão empresarial conectada para empresas brasileiras.</p><div><a href="tel:+5571992930767">(71) 9 9293-0767</a><a href={registerUrl} target="_blank" rel="noreferrer">Acessar plataforma</a></div></div></footer>
    </main>
  )
}

function Metric({label, value, up}) { return <div className="metric"><small>{label}</small><strong>{value}</strong>{up && <b>↗ 12%</b>}</div> }
function Pain({number, title, text}) { return <article className="pain-card"><span>{number}</span><h3>{title}</h3><p>{text}</p></article> }
function FlowItem({icon, title, text}) { return <article className="flow-item"><div>{createElement(icon, { size: 22 })}</div><h3>{title}</h3><p>{text}</p></article> }
function Plan({title, kicker, description, items, featured = false}) { return <article className={featured ? 'plan-card featured' : 'plan-card'}>{featured && <span className="plan-badge">Mais escolhido</span>}<p className="plan-kicker">{kicker}</p><h3>{title}</h3><p className="plan-description">{description}</p><div className="plan-divider" /><ul>{items.map(item => <li key={item}><Check size={16} />{item}</li>)}</ul><a href="#demonstracao" className={featured ? 'button button-accent' : 'plan-link'}>Encontrar meu plano <ArrowRight size={17} /></a></article> }

export default App
