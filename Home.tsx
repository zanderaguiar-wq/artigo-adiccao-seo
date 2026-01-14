import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Play, Volume2, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Professional Medical Article
 * - Clean, accessible layout with clear hierarchy
 * - Emphasis on credibility and scientific authority
 * - Strategic use of whitespace and typography
 * - Warm, compassionate color palette (blues and teals)
 * - Mobile-first responsive design
 */

export default function Home() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [formData, setFormData] = useState<{
    nome: string;
    email: string;
    telefone: string;
    data: string;
    hora: string;
    mensagem: string;
  }>({
    nome: "",
    email: "",
    telefone: "",
    data: "",
    hora: "",
    mensagem: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): Record<string, string> => {
    const errors: Record<string, string> = {};
    if (!formData.nome.trim()) errors.nome = "Nome e obrigatorio";
    if (!formData.email.trim()) errors.email = "Email e obrigatorio";
    if (!formData.telefone.trim()) errors.telefone = "Telefone e obrigatorio";
    if (!formData.data) errors.data = "Data e obrigatoria";
    if (!formData.hora) errors.hora = "Hora e obrigatoria";
    return errors;
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const mensagemWhatsApp = `Ola Zander! Gostaria de agendar uma consulta.\n\nNome: ${formData.nome}\nEmail: ${formData.email}\nTelefone: ${formData.telefone}\nData desejada: ${formData.data}\nHora desejada: ${formData.hora}\n\nMensagem: ${formData.mensagem || "Sem mensagem adicional"}`;
    const urlWhatsApp = `https://wa.me/5521972560779?text=${encodeURIComponent(mensagemWhatsApp)}`;
    window.open(urlWhatsApp, "_blank");

    setFormSubmitted(true);
    setFormData({ nome: "", email: "", telefone: "", data: "", hora: "", mensagem: "" });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const tableOfContents = [
    { id: "inicio", label: "Início" },
    { id: "pilares", label: "Os Três Pilares" },
    { id: "quatro-pilares", label: "Os Quatro Pilares" },
    { id: "neurociencia", label: "Neurociência" },
    { id: "uso-vs-doenca", label: "Uso vs Doença" },
    { id: "fatores-risco", label: "Fatores de Risco" },
    { id: "impacto", label: "Impacto Multidimensional" },
    { id: "recuperacao", label: "Caminhos para Recuperação" },
    { id: "videos", label: "Vídeos" },
    { id: "recursos", label: "Recursos e Ajuda" },
    { id: "autor", label: "Sobre o Autor" },
  ];

  const videos = [
    {
      id: "5P34Ve2sp3s",
      title: "Entendendo a Adicção como Doença Cerebral",
      description: "Neste vídeo, exploramos os fundamentos científicos da adicção e como ela afeta o cérebro humano.",
      duration: "12:34",
      category: "Conceitos",
    },
    {
      id: "lQI0lsiqcZQ",
      title: "Caminhos para a Recuperação da Adicção",
      description: "Conheça as estratégias e caminhos eficazes para a recuperação da adicção, incluindo tratamentos baseados em evidências e suporte profissional.",
      duration: "15:47",
      category: "Recuperação",
    },
    {
      id: "QpZ5NESDJco",
      title: "Fatores de Risco da Adicção",
      description: "Descubra os principais fatores genéticos, ambientais e psicológicos que aumentam a vulnerabilidade à adicção e como identificá-los precocemente.",
      duration: "14:12",
      category: "Prevenção",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      {/* Schema Markup para SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Entendendo a Adicção: Uma Doença Crônica e Multifacetada",
          description: "Guia completo sobre adicção como doença cerebral, com base em neurociência e evidências científicas",
          author: {
            "@type": "Person",
            name: "Zander Aguiar",
            jobTitle: "Psicólogo e Conselheiro em Dependência Química",
            url: "https://www.youtube.com/@zanderconselheiro",
          },
          datePublished: "2025-01-10",
          image: "https://via.placeholder.com/1200x630",
          articleBody: "Conteúdo completo sobre adicção como doença cerebral...",
        })}
      </script>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">ZA</span>
            </div>
            <h1 className="text-xl font-bold text-slate-900">Zander Aguiar</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#inicio" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Artigo</a>
            <a href="#autor" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Sobre</a>
            <a href="#recursos" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Recursos</a>
          </nav>
        </div>
      </header>

      <main className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Índice de Conteúdo */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-xl p-6 shadow-md border border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Índice</h2>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                    className={`block text-sm px-3 py-2 rounded-lg transition ${
                      activeSection === item.id
                        ? "bg-blue-100 text-blue-700 font-semibold"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:col-span-3 space-y-12">
            {/* Hero Section */}
            <section id="inicio" className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  Saúde Mental & Neurociência
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Entendendo a Adicção: Uma Doença Crônica e Multifacetada
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                A adicção não é uma falha moral ou falta de caráter. É uma doença crônica do cérebro, reconhecida pela ciência médica e pela Organização Mundial da Saúde. Compreender sua natureza complexa é o primeiro passo para o tratamento eficaz e a recuperação sustentável.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-8">
                <span>📅 10 de janeiro de 2025</span>
                <span>⏱️ Leitura: 15 minutos</span>
                <span>✍️ Por Zander Aguiar</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Play className="w-4 h-4 mr-2" /> Assistir Vídeo
                </Button>
                <Button variant="outline" className="border-slate-300">
                  <Volume2 className="w-4 h-4 mr-2" /> Ouvir Podcast
                </Button>
              </div>
            </section>

            {/* O Que É Adicção */}
            <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">O Que É Adicção: Muito Além do Uso</h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                A adicção é uma condição neurobiológica caracterizada por três componentes essenciais que trabalham em conjunto, criando um ciclo difícil de romper sem intervenção adequada.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Quando falamos de adicção, não estamos nos referindo ao uso ocasional ou recreativo de substâncias. Estamos descrevendo uma alteração profunda nos circuitos cerebrais que governam motivação, recompensa e tomada de decisão. Esta doença afeta pessoas de todas as idades, classes sociais e contextos culturais. Não discrimina, não escolhe, e certamente não é resultado de fraqueza pessoal. É uma condição médica que requer tratamento especializado, compaixão e compreensão.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6 border-l-4 border-blue-600 mb-8">
                <h3 className="font-bold text-slate-900 mb-4">Principais Características</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Alterações neurobiológicas documentadas</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Padrão crônico e recorrente</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Impacto em múltiplas áreas da vida</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Necessidade de tratamento especializado</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Potencial de recuperação com suporte adequado</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Os Três Pilares */}
            <section id="pilares" className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Os Três Pilares da Adicção</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-red-200">
                  <div className="text-4xl mb-4">🧠</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Obsessão</h3>
                  <p className="text-slate-700 leading-relaxed">
                    A mente fica constantemente preocupada com a substância ou comportamento. Pensamentos intrusivos e recorrentes dominam o dia a dia, interferindo na capacidade de concentração em outras atividades essenciais.
                  </p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Compulsão</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Uma força irresistível que impulsiona o comportamento aditivo, mesmo diante de consequências negativas evidentes. Não se trata de escolha consciente, mas de um impulso neurobiológico.
                  </p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Egocentrismo</h3>
                  <p className="text-slate-700 leading-relaxed">
                    O foco excessivo em si mesmo e nas próprias necessidades imediatas, com dificuldade crescente de considerar o impacto das ações sobre outros. É uma consequência neurológica da doença.
                  </p>
                </Card>
              </div>

              <p className="text-slate-600 leading-relaxed bg-white p-6 rounded-lg border border-slate-200">
                Estes três elementos formam um ciclo auto-reforçador que perpetua a adicção. A obsessão alimenta a compulsão, que por sua vez intensifica o egocentrismo, criando um padrão de comportamento cada vez mais isolado e destrutivo.
              </p>
            </section>

            {/* Os Quatro Pilares */}
            <section id="quatro-pilares" className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Os Quatro Pilares Fundamentais</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                A neurociência identifica quatro características centrais que definem a adicção como doença cerebral. Cada pilar representa uma alteração específica no funcionamento neurológico.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Compulsão", desc: "Impulso irresistível de buscar e consumir a substância, independente das consequências negativas conhecidas. O sistema de recompensa cerebral fica sequestrado." },
                  { title: "Perda de Controle", desc: "Incapacidade de regular ou limitar o uso uma vez iniciado. A pessoa não consegue parar quando planeja, consumindo quantidades maiores ou por períodos mais longos." },
                  { title: "Tolerância", desc: "Necessidade crescente de quantidades maiores para obter o mesmo efeito. O cérebro se adapta à presença da substância, exigindo doses progressivamente mais altas." },
                  { title: "Abstinência", desc: "Sintomas físicos e psicológicos desconfortáveis quando o uso é reduzido ou interrompido. Pode incluir ansiedade, tremores, sudorese, insônia e outros sinais de desconforto." },
                ].map((pilar, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border border-slate-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">{pilar.title}</h4>
                      <p className="text-slate-600 text-sm">{pilar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Neurociência */}
            <section id="neurociencia" className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 border border-blue-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">A Neurociência por Trás da Adicção</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Como o Cérebro Muda</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Estudos de neuroimagem revelam alterações estruturais e funcionais significativas no cérebro de pessoas com adicção. O córtex pré-frontal, responsável pelo julgamento e tomada de decisão, apresenta atividade reduzida.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Simultaneamente, o sistema límbico, que processa emoções e recompensas, torna-se hiperativo na presença de estímulos relacionados à substância. Esta desregulação explica por que a força de vontade sozinha raramente é suficiente para superar a adicção.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    As vias dopaminérgicas são profundamente alteradas, criando um novo "ponto de ajuste" que torna experiências naturalmente prazerosas menos gratificantes, enquanto amplifica o desejo pela substância viciante.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
                  <p className="text-slate-700 leading-relaxed">
                    <strong className="text-green-700">✓ Importante:</strong> Estas mudanças cerebrais não são permanentes. Com tratamento adequado, abstinência sustentada e suporte terapêutico, o cérebro pode recuperar grande parte de sua funcionalidade normal através da neuroplasticidade.
                  </p>
                </div>
              </div>
            </section>

            {/* Uso vs Doença */}
            <section id="uso-vs-doenca" className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Uso vs Doença: Uma Distinção Crítica</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-bold text-green-900 mb-4">Uso Recreativo ou Social</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Controle sobre frequência e quantidade</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Ausência de consequências negativas significativas</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Capacidade de parar quando desejado</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Funcionamento normal em todas as áreas da vida</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Uso ocasional sem preocupação constante</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-xl font-bold text-red-900 mb-4">Adicção como Doença</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Perda progressiva de controle</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Consequências negativas graves e crescentes</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Incapacidade de parar apesar do desejo</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Deterioração em múltiplas áreas da vida</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Obsessão e preocupação constante</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-slate-600 mt-8 leading-relaxed bg-slate-50 p-6 rounded-lg border border-slate-200">
                A linha entre uso e doença pode ser sutil inicialmente, mas com o tempo, a diferença torna-se inconfundível. A adicção não surge de repente; é um processo gradual onde o controle vai se perdendo progressivamente. Reconhecer esta transição precocemente aumenta significativamente as chances de recuperação bem-sucedida.
              </p>
            </section>

            {/* Fatores de Risco */}
            <section id="fatores-risco" className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Fatores de Risco e Vulnerabilidade</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                A adicção não escolhe suas vítimas aleatoriamente. Diversos fatores aumentam a vulnerabilidade de uma pessoa desenvolver esta doença. Compreender estes fatores não é sobre culpar ou julgar, mas sobre identificar quem pode precisar de maior atenção e suporte preventivo.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "🧬", title: "Genética", desc: "50-60% do risco é hereditário. Histórico familiar de adicção aumenta significativamente a probabilidade." },
                  { icon: "📅", title: "Idade de Início", desc: "Uso precoce durante a adolescência, quando o cérebro ainda está em desenvolvimento, aumenta drasticamente o risco." },
                  { icon: "💔", title: "Trauma", desc: "Experiências traumáticas, especialmente na infância, criam vulnerabilidade neurobiológica para dependências." },
                  { icon: "🧠", title: "Saúde Mental", desc: "Transtornos como depressão, ansiedade e TEPT frequentemente coexistem com adicção." },
                  { icon: "👥", title: "Ambiente Social", desc: "Pressão de pares, acesso fácil a substâncias e normalização do uso aumentam o risco." },
                ].map((fator, idx) => (
                  <Card key={idx} className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200">
                    <div className="text-3xl mb-3">{fator.icon}</div>
                    <h4 className="font-bold text-slate-900 mb-2">{fator.title}</h4>
                    <p className="text-slate-600 text-sm">{fator.desc}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Impacto Multidimensional */}
            <section id="impacto" className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 md:p-12 border border-orange-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">O Impacto Multidimensional da Adicção</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                A adicção não afeta apenas o indivíduo que sofre com ela. Como uma pedra jogada na água, suas consequências se espalham em ondas concêntricas, impactando famílias inteiras, comunidades e a sociedade.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Impacto Familiar", desc: "Relacionamentos sofrem com confiança quebrada, comunicação deteriorada e padrões de codependência. Filhos de pais com adicção enfrentam riscos aumentados de problemas emocionais e comportamentais." },
                  { title: "Consequências Profissionais", desc: "Absenteísmo, baixa produtividade, acidentes de trabalho e perda de emprego são comuns. A instabilidade financeira resultante agrava ainda mais o ciclo da doença." },
                  { title: "Saúde Física", desc: "Doenças hepáticas, cardiovasculares, infecções, desnutrição e complicações médicas diversas. O uso de substâncias compromete o sistema imunológico e acelera o envelhecimento." },
                ].map((impacto, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg border border-orange-200">
                    <h4 className="font-bold text-slate-900 mb-2">{impacto.title}</h4>
                    <p className="text-slate-600 text-sm">{impacto.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-green-500">
                <p className="text-slate-700 leading-relaxed">
                  <strong className="text-green-700">✓ Boa notícia:</strong> Com tratamento adequado e suporte contínuo, é possível reverter muitos destes impactos e reconstruir uma vida plena e significativa.
                </p>
              </div>
            </section>

            {/* Caminhos para Recuperação */}
            <section id="recuperacao" className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Caminhos para a Recuperação</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                A recuperação da adicção é não apenas possível, mas alcançável com as ferramentas e suporte adequados. Não existe um único caminho para todos; cada jornada de recuperação é única e deve ser personalizada às necessidades individuais.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { step: 1, title: "Reconhecimento", desc: "Aceitar que existe um problema e que ajuda é necessária. Este primeiro passo, embora difícil, é fundamental." },
                  { step: 2, title: "Buscar Apoio", desc: "Procurar profissionais especializados, grupos de apoio e construir uma rede de suporte sólida e confiável." },
                  { step: 3, title: "Tratamento Ativo", desc: "Engajar-se plenamente no processo terapêutico, seja ambulatorial, intensivo ou em regime de internação quando necessário." },
                  { step: 4, title: "Manutenção", desc: "Desenvolver estratégias de prevenção de recaída, cultivar hábitos saudáveis e manter conexões de suporte a longo prazo." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-200">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                <p className="text-slate-700 leading-relaxed">
                  <strong className="text-blue-700">Importante:</strong> A recuperação não é linear. Recaídas podem ocorrer e devem ser vistas não como fracassos, mas como oportunidades de aprendizado e ajuste do plano de tratamento. O que importa é perseverar com compaixão e determinação.
                </p>
              </div>
            </section>

            {/* Recursos e Ajuda */}
            <section id="recursos" className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border border-green-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Recursos e Próximos Passos</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Se você ou alguém que você ama está lutando contra a adicção, saiba que não está sozinho e que ajuda está disponível. O primeiro passo é sempre o mais difícil, mas é também o mais importante e corajoso que você pode dar.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6 bg-white border-green-200 flex flex-col">
                  <div className="text-3xl mb-3">📞</div>
                  <h3 className="font-bold text-slate-900 mb-2">CVV - Centro de Valorização da Vida</h3>
                  <p className="text-sm text-slate-600 mb-4 flex-grow">Apoio emocional e prevenção do suicídio</p>
                  <div className="space-y-2">
                    <p className="font-bold text-green-700">☎️ 188 (24h, gratuito)</p>
                    <p className="text-xs text-slate-500">Telefone, email e chat</p>
                    <a href="tel:188" className="inline-block mt-3 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-semibold transition">
                      Ligar Agora
                    </a>
                  </div>
                </Card>

                <Card className="p-6 bg-white border-green-200 flex flex-col">
                  <div className="text-3xl mb-3">🏥</div>
                  <h3 className="font-bold text-slate-900 mb-2">CAPS-AD</h3>
                  <p className="text-sm text-slate-600 mb-4 flex-grow">Centros de Atenção Psicossocial</p>
                  <div className="space-y-2">
                    <p className="font-bold text-green-700">Atendimento Gratuito</p>
                    <p className="text-xs text-slate-500">SUS em todo Brasil</p>
                    <a href="https://www.gov.br/saude/pt-br" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-semibold transition">
                      Saiba Mais
                    </a>
                  </div>
                </Card>

                <Card className="p-6 bg-white border-green-200 flex flex-col">
                  <div className="text-3xl mb-3">👥</div>
                  <h3 className="font-bold text-slate-900 mb-2">Grupos de Apoio</h3>
                  <p className="text-sm text-slate-600 mb-4 flex-grow">NA, AA e Naranon para familiares</p>
                  <div className="space-y-2">
                    <a href="https://www.na.org.br/" target="_blank" rel="noopener noreferrer" className="block text-sm font-semibold text-green-700 hover:text-green-800 transition">
                      🔗 NA (Pacientes)
                    </a>
                    <a href="https://www.naranon.org.br/" target="_blank" rel="noopener noreferrer" className="block text-sm font-semibold text-green-700 hover:text-green-800 transition">
                      🔗 Naranon (Familiares)
                    </a>
                    <p className="text-xs text-slate-500 mt-2">Reuniões gratuitas em diversas cidades</p>
                  </div>
                </Card>
              </div>

              <div className="bg-white p-6 rounded-lg border border-green-200 mb-8">
                <p className="text-slate-700 italic text-center text-lg">
                  "A adicção é a única prisão onde as correntes são invisíveis e a chave está dentro de você. A recuperação é possível, e você merece uma vida livre e plena."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/5521972560779?text=Ola%20Zander!%20Gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                    Ajuda Profissional
                  </Button>
                </a>
                <a href="https://youtu.be/OKQ6WCCjFqU" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" className="border-green-300 w-full">
                    Saiba Mais
                  </Button>
                </a>
              </div>
            </section>

            {/* Perfil do Autor */}
            <section id="autor" className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-8">Sobre o Autor</h2>
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center text-5xl">
                    👨‍⚕️
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Zander Aguiar</h3>
                  <p className="text-blue-100 mb-4 text-lg">Psicólogo e Conselheiro em Dependência Química</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold mb-3 text-white">Mais de 20 Anos Ajudando Pessoas na Recuperação</h4>
                    <p className="text-blue-100 leading-relaxed mb-4">
                      Sou Zander Aguiar, Psicólogo e Conselheiro em Dependência Química, com mais de 20 anos de experiência dedicados à recuperação e ao cuidado em saúde mental. Minha trajetória une prática clínica, ensino e atuação direta com dependentes químicos e suas famílias, sempre com um olhar humano, ético e comprometido com o processo de transformação pessoal.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">💼 Experiência Profissional</h5>
                      <ul className="text-sm text-blue-100 space-y-1">
                        <li>• Primeira Clínica Pública do Estado do Rio de Janeiro (11 anos)</li>
                        <li>• Clínica Aldeia</li>
                        <li>• Casa de Saúde Saint Roman</li>
                        <li>• Comunidades Terapêuticas</li>
                      </ul>
                    </div>

                    <div className="bg-white/10 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">🎓 Formação</h5>
                      <ul className="text-sm text-blue-100 space-y-1">
                        <li>• Psicólogo (CRP-05/83129)</li>
                        <li>• UNESA</li>
                        <li>• Conselheiro em Dependência Química</li>
                        <li>• Grupo Alívio (1999)</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-blue-100 mb-6">
                    Especialista na aplicação dos 12 Passos no tratamento da dependência química, com foco em transformação pessoal e recuperação sustentável.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a href="https://www.youtube.com/@zanderconselheiro" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition">
                      <span>📺</span> YouTube
                    </a>
                    <a href="https://www.instagram.com/zanderconselheiro/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition">
                      <span>📷</span> Instagram
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100049409713481" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition">
                      <span>👥</span> Facebook
                    </a>
                    <a href="https://wa.me/5521972560779" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition">
                      <span>💬</span> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção de Vídeos */}
            <section id="videos" className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Vídeos Complementares</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Assista aos vídeos abaixo para aprofundar ainda mais seu conhecimento sobre adicção como doença cerebral. Estes conteúdos complementam as informações apresentadas neste artigo.
              </p>

              <div className="mb-8 flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition">
                  Todos ({videos.length})
                </button>
                <button className="px-4 py-2 bg-slate-200 text-slate-700 rounded-full text-sm font-semibold hover:bg-slate-300 transition">
                  Conceitos
                </button>
                <button className="px-4 py-2 bg-slate-200 text-slate-700 rounded-full text-sm font-semibold hover:bg-slate-300 transition">
                  Recuperacao
                </button>
                <button className="px-4 py-2 bg-slate-200 text-slate-700 rounded-full text-sm font-semibold hover:bg-slate-300 transition">
                  Prevencao
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {videos.map((video) => (
                  <div key={video.id} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg overflow-hidden border border-slate-200 hover:shadow-lg transition flex flex-col">
                    <div className="px-6 pt-4">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                        {video.category}
                      </span>
                    </div>

                    {/* Video Player */}
                    <div className="relative w-full bg-black" style={{ paddingBottom: "56.25%" }}>
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>

                    {/* Video Info */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{video.title}</h3>
                      <p className="text-slate-600 text-sm mb-4 flex-grow">{video.description}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                        <span className="text-xs text-slate-500">⏱️ {video.duration}</span>
                        <a
                          href={`https://youtu.be/${video.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
                        >
                          Ver no YouTube →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Placeholder para mais vídeos */}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border-2 border-dashed border-blue-300 text-center">
                <p className="text-slate-700 mb-3">
                  <span className="text-2xl mb-2 block">🎬</span>
                  Mais vídeos em breve!
                </p>
                <p className="text-sm text-slate-600">
                  Inscreva-se no canal para não perder os próximos conteúdos sobre adicção, recuperação e saúde mental.
                </p>
                <a
                  href="https://www.youtube.com/@zanderconselheiro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition"
                >
                  Inscrever-se no YouTube
                </a>
              </div>
            </section>

            {/* Formulario de Contato */}
            <section id="contato" className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12 shadow-lg border border-blue-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">Agende sua Consulta</h2>
              <p className="text-slate-600 text-center mb-8 leading-relaxed">
                Preencha o formulario abaixo para agendar uma consulta comigo. Entrarei em contato em breve para confirmar sua disponibilidade.
              </p>

              {formSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-700 font-semibold">Formulario enviado com sucesso! Redirecionando para WhatsApp...</p>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Nome Completo *</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleFormChange}
                      placeholder="Seu nome"
                      className={`w-full px-4 py-3 rounded-lg border ${formErrors.nome ? "border-red-500" : "border-slate-300"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                    />
                    {formErrors.nome && <p className="text-red-600 text-xs mt-1">{formErrors.nome}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="seu@email.com"
                      className={`w-full px-4 py-3 rounded-lg border ${formErrors.email ? "border-red-500" : "border-slate-300"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                    />
                    {formErrors.email && <p className="text-red-600 text-xs mt-1">{formErrors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Telefone/WhatsApp *</label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleFormChange}
                      placeholder="(21) 99999-9999"
                      className={`w-full px-4 py-3 rounded-lg border ${formErrors.telefone ? "border-red-500" : "border-slate-300"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                    />
                    {formErrors.telefone && <p className="text-red-600 text-xs mt-1">{formErrors.telefone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Data Desejada *</label>
                    <input
                      type="date"
                      name="data"
                      value={formData.data}
                      onChange={handleFormChange}
                      className={`w-full px-4 py-3 rounded-lg border ${formErrors.data ? "border-red-500" : "border-slate-300"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                    />
                    {formErrors.data && <p className="text-red-600 text-xs mt-1">{formErrors.data}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Hora Desejada *</label>
                  <input
                    type="time"
                    name="hora"
                    value={formData.hora}
                    onChange={handleFormChange}
                    className={`w-full px-4 py-3 rounded-lg border ${formErrors.hora ? "border-red-500" : "border-slate-300"} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                  />
                  {formErrors.hora && <p className="text-red-600 text-xs mt-1">{formErrors.hora}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Mensagem Adicional</label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleFormChange}
                    placeholder="Conte-me um pouco sobre sua situacao (opcional)"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold">
                    <Send className="w-4 h-4 mr-2" /> Agendar Consulta
                  </Button>
                  <Button type="reset" variant="outline" className="flex-1 border-slate-300 py-3 font-semibold">
                    Limpar
                  </Button>
                </div>
              </form>

              <p className="text-xs text-slate-500 text-center mt-6">
                Ao enviar este formulario, voce sera redirecionado para o WhatsApp para confirmar sua consulta.
              </p>
            </section>

            {/* CTA Final */}
            <section className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Pronto para Começar sua Jornada de Recuperação?</h2>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                Entre em contato comigo através do WhatsApp ou redes sociais. Estou aqui para ajudar você ou alguém que você ama.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/5521972560779" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                    <Phone className="w-4 h-4 mr-2" /> Conversar no WhatsApp
                  </Button>
                </a>
                <Button variant="outline" className="border-slate-300 w-full sm:w-auto">
                  Enviar Email
                </Button>
              </div>
            </section>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 mt-20">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Zander Aguiar</h4>
              <p className="text-sm leading-relaxed">Psicólogo e Conselheiro em Dependência Química com 20+ anos de experiência.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#recursos" className="hover:text-white transition">Ajuda Profissional</a></li>
                <li><a href="#recuperacao" className="hover:text-white transition">Recuperação</a></li>
                <li><a href="#neurociencia" className="hover:text-white transition">Neurociência</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.youtube.com/@zanderconselheiro" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">YouTube</a></li>
                <li><a href="https://www.instagram.com/zanderconselheiro/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100049409713481" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Facebook</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contato</h4>
              <a href="https://wa.me/5521972560779" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition flex items-center gap-2">
                <Phone className="w-4 h-4" /> +55 21 97256-0779
              </a>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>&copy; 2025 Zander Aguiar. Todos os direitos reservados. | Artigo sobre Adicção como Doença Cerebral</p>
          </div>
        </div>
      </footer>

      {/* Botao Flutuante WhatsApp */}
      <a
        href="https://wa.me/5521972560779?text=Ola%20Zander!%20Gostaria%20de%20agendar%20uma%20consulta."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce"
        title="Conversar com Zander no WhatsApp"
      >
        <Phone className="w-7 h-7" />
      </a>
    </div>
  );
}
