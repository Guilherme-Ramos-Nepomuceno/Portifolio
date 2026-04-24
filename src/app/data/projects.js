export const projects = [
  {
    id: 1,
    title: "Dominio",
    description: "Plataforma inteligente de gestão financeira com arquitetura offline-first. Possui dashboards gerenciais, controle interativo de receitas/despesas, cálculo de parcelas nativo e modo escuro premium. O sistema salva os dados localmente e sincroniza em background com o backend via fila quando a conexão retorna.",
    image: "/images/dominio.png",
    category: "front_end",
    categoryLabel: "Front-end",
    stack: [
      { name: "Next.js", icon: "▲", color: "#ffffff" },
      { name: "React", icon: "⚛️", color: "#61DAFB" },
      { name: "TypeScript", icon: "🔷", color: "#3178C6" },
      { name: "Tailwind CSS", icon: "🎨", color: "#38BDF8" },
      { name: "Framer Motion", icon: "✨", color: "#E0234E" },
    ],
    githubUrl: "https://github.com/Guilherme-Ramos-Nepomuceno/Dominio",
    liveUrl: "https://dominio-fawn.vercel.app/",
  }, {
    id: 2,
    title: "Rumo",
    description: "Plataforma de produtividade e gestão ágil de tarefas com interface interativa baseada em Kanban. A aplicação engloba visões gerenciais através de dashboards inteligentes, painel para gestão de subtarefas com métricas ricas (comparando tempo estimado x tempo gasto) e componentes UI modulares altamente estilizáveis. Possui design premium e foco intenso em experiência do usuário com animações e micro-interações fluidas.",
    image: "/images/rumo.png",
    category: "front_end",
    categoryLabel: "Front-end",
    stack: [
      { name: "Next.js", icon: "▲", color: "#ffffff" },
      { name: "React", icon: "⚛️", color: "#61DAFB" },
      { name: "TypeScript", icon: "🔷", color: "#3178C6" },
      { name: "Tailwind CSS", icon: "🎨", color: "#38BDF8" },
      { name: "Framer Motion", icon: "✨", color: "#E0234E" },
      { name: "Radix UI", icon: "🧩", color: "#645CFF" }
    ],
    githubUrl: "https://github.com/Guilherme-Ramos-Nepomuceno/Rumo",
    liveUrl: "https://rumo-lime.vercel.app/",
  },
  {
    "id": 3,
    "title": "Domínio API",
    "description": "Backend API para o Domínio SaaS - Plataforma de Gerenciamento Financeiro Pessoal, desenvolvido com foco em segurança, autenticação JWT, e validações robustas com Zod.",
    "image": "/images/project-backend.jpg",
    "category": "back_end",
    "categoryLabel": "Back-end",
    "stack": [
      { "name": "Node.js", "icon": "🟢", "color": "#339933" },
      { "name": "Express", "icon": "🚂", "color": "#000000" },
      { "name": "TypeScript", "icon": "📘", "color": "#3178C6" },
      { "name": "PostgreSQL", "icon": "🐘", "color": "#336791" },
      { "name": "Prisma", "icon": "◆", "color": "#5A67D8" }
    ],
    "githubUrl": "https://github.com/Guilherme-Ramos-Nepomuceno/dominio-api",
    "liveUrl": "#"
  },
  {
    "id": 4,
    "title": "Estoque",
    "description": "MVP de uma plataforma de produtividade e gestão ágil de tarefas com interface interativa baseada em Kanban. A aplicação engloba visões gerenciais através de dashboards inteligentes, painel para gestão de subtarefas com métricas ricas (comparando tempo estimado x tempo gasto) e componentes UI modulares altamente estilizáveis. Possui design premium e foco intenso em experiência do usuário com animações e micro-interações fluidas.",
    "image": "/images/sistema-estoque.png",
    "category": "front_end",
    "categoryLabel": "Front-end",
    "stack": [
      {
        "name": "Next.js",
        "icon": "▲",
        "color": "#ffffff"
      },
      {
        "name": "React",
        "icon": "⚛️",
        "color": "#61DAFB"
      },
      {
        "name": "TypeScript",
        "icon": "🔷",
        "color": "#3178C6"
      },
      {
        "name": "Tailwind CSS",
        "icon": "🎨",
        "color": "#38BDF8"
      },
      {
        "name": "Framer Motion",
        "icon": "✨",
        "color": "#E0234E"
      },
      {
        "name": "Radix UI",
        "icon": "🧩",
        "color": "#645CFF"
      }
    ],
    "githubUrl": "https://github.com/Guilherme-Ramos-Nepomuceno/Rumo",
    "liveUrl": "https://sistema-esstoque.vercel.app/"
  },
  {
    "id": 5,
    "title": "Rumo API",
    "description": "Backend robusto desenvolvido em Laravel para a plataforma Rumo, focado em sincronização offline-first, gestão de tarefas via Kanban e análises preditivas de produtividade com arquitetura service-based.",
    "image": "/images/project-backend.jpg",
    "category": "back_end",
    "categoryLabel": "Back-end",
    "stack": [
      { "name": "PHP", "icon": "🐘", "color": "#777BB4" },
      { "name": "Laravel", "icon": "🧡", "color": "#FF2D20" },
      { "name": "PostgreSQL", "icon": "🐘", "color": "#336791" },
      { "name": "Docker", "icon": "🐳", "color": "#2496ED" },
      { "name": "Sanctum", "icon": "🛡️", "color": "#F05340" }
    ],
    "githubUrl": "https://github.com/Guilherme-Ramos-Nepomuceno/rumo-api",
    "liveUrl": "#"
  },
  {
    "id": 6,
    "title": "Engine de Banco de Dados Acadêmico",
    "description": "Arquitetura de banco de dados para gestão educacional com procedimentos de cálculo de desempenho, triggers de validação e infraestrutura containerizada.",
    "image": "/images/data_science.png",
    "category": "data_science",
    "categoryLabel": "Data Science",
    "stack": [
      { "name": "MySQL", "icon": "🐬", "color": "#4479A1" },
      { "name": "Docker", "icon": "🐳", "color": "#2496ED" },
      { "name": "SQL", "icon": "📜", "color": "#336791" }
    ],
    "githubUrl": "https://github.com/Guilherme-Ramos-Nepomuceno/ia_db_p1",
    "liveUrl": "#"
  },
  {
    "id": 7,
    "title": "Kapitalia",
    "description": "MVP de uma plataforma de educação financeira gamificada inspirada na dinâmica do Duolingo. O projeto transforma o aprendizado de finanças em uma jornada interativa com XP, níveis e missões práticas, unindo teoria profunda em trilhas de aprendizado a um laboratório financeiro com simuladores de mercado realistas.",
    "image": "/images/kapitalia.png",
    "category": "front_end",
    "categoryLabel": "Front-end",
    "stack": [
      {
        "name": "Next.js",
        "icon": "▲",
        "color": "#ffffff"
      },
      {
        "name": "React",
        "icon": "⚛️",
        "color": "#61DAFB"
      },
      {
        "name": "TypeScript",
        "icon": "🔷",
        "color": "#3178C6"
      },
      {
        "name": "Tailwind CSS",
        "icon": "🎨",
        "color": "#38BDF8"
      },
      {
        "name": "Zustand",
        "icon": "🐻",
        "color": "#43392b"
      },
      {
        "name": "Radix UI",
        "icon": "🧩",
        "color": "#645CFF"
      }
    ],
    "githubUrl": "https://github.com/Guilherme-Ramos-Nepomuceno/kapitalia",
    "liveUrl": "https://main.dsvvpxqbtxusv.amplifyapp.com/"
  },
  {
    "id": 8,
    "title": "Centralizador PoC",
    "description": "Prova de Conceito de um hub de eventos distribuído utilizando arquitetura orientada a eventos (Event-Driven). O sistema implementa o padrão Producer-Consumer com Apache Kafka para garantir o desacoplamento total entre serviços, alta escalabilidade e resiliência no processamento de mensagens em tempo real, utilizando Clean Architecture para manter a lógica de negócio isolada de implementações externas.",
    "image": "/images/project-backend.jpg",
    "category": "back_end",
    "categoryLabel": "Back-end",
    "stack": [
      {
        "name": "Node.js",
        "icon": "🟢",
        "color": "#339933"
      },
      {
        "name": "TypeScript",
        "icon": "📘",
        "color": "#3178C6"
      },
      {
        "name": "Apache Kafka",
        "icon": "⚙️",
        "color": "#231F20"
      },
      {
        "name": "Express",
        "icon": "🚂",
        "color": "#000000"
      },
      {
        "name": "PostgreSQL",
        "icon": "🐘",
        "color": "#336791"
      },
      {
        "name": "Tsyringe",
        "icon": "💉",
        "color": "#ED1C24"
      }
    ],
    "githubUrl": "https://github.com/Guilherme-Ramos-Nepomuceno/centralizador-poc",
    "liveUrl": "#"
  },
  {
    "id": 9,
    "title": "Jenpex AI Chat",
    "description": "Interface inteligente de chat web desenvolvida para o Jenpex (IFMT), permitindo a orquestração de LLMs locais via Ollama. O sistema conta com gestão de histórico em tempo real, seleção dinâmica de modelos e personalidades customizáveis via System Prompts. Desenvolvido para democratizar o uso de IA Generativa privada no ambiente acadêmico.",
    "image": "/images/chatbot.png",
    "category": "data_science",
    "categoryLabel": "AI & Python",
    "stack": [
      { "name": "Python", "icon": "🐍", "color": "#3776AB" },
      { "name": "Streamlit", "icon": "🎈", "color": "#FF4B4B" },
      { "name": "Ollama", "icon": "🦙", "color": "#ffffff" },
      { "name": "AI", "icon": "🤖", "color": "#00A67E" }
    ],
    "githubUrl": "https://github.com/Guilherme-Ramos-Nepomuceno/jenpex_chat",
    "liveUrl": "#"
  }
];

export const categories = [
  { key: "front_end", label: "Front-end" },
  { key: "back_end", label: "Back-end" },
  { key: "data_science", label: "Data Science" },
];
