# Dashboard de Automação Industrial

Sistema de monitoramento em tempo real para linha de produção industrial, desenvolvido como desafio técnico Full-stack Junior/Pleno.

![Dashboard Preview](./docs/preview.png)

---

## 🚀 Stack Tecnológico

- **Framework:** Next.js 16 com App Router
- **Linguagem:** TypeScript (strict mode)
- **Estilização:** Tailwind CSS v4
- **Monorepo:** Turborepo + pnpm workspaces
- **Banco de Dados:** SQLite (better-sqlite3)
- **Gráficos:** Recharts
- **Ícones:** Lucide React
- **Testes:** Jest + React Testing Library + Cypress E2E
- **Documentação:** Storybook

---

## 📁 Estrutura do Projeto
```
industrial-dashboard/
├── apps/
│   ├── web/                    # Frontend Next.js
│   │   ├── app/
│   │   │   ├── components/     # Componentes reutilizáveis
│   │   │   │   ├── cards/      # Cards de métricas
│   │   │   │   ├── charts/     # Gráficos
│   │   │   │   ├── alerts/     # Painel de alertas
│   │   │   │   └── layout/     # Header
│   │   │   ├── hooks/          # Hooks customizados
│   │   │   ├── lib/            # Serviços e utilitários
│   │   │   └── types/          # Re-exportação de tipos
│   │   └── cypress/            # Testes E2E
│   └── api/                    # Backend SQLite
│       └── src/
│           ├── database.ts     # Configuração do banco
│           ├── seed.ts         # Dados iniciais
│           └── mockData.ts     # Gerador de dados em tempo real
└── packages/
    ├── types/                  # Interfaces TypeScript compartilhadas
    └── ui/                     # Componentes compartilhados
```

---

## ⚙️ Como Instalar

**Pré-requisitos:**
- Node.js 18+
- pnpm
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/industrial-dashboard.git

# Entre na pasta
cd industrial-dashboard

# Instale as dependências
pnpm install
```

---

## ▶️ Como Executar
```bash
# Rodar o projeto em desenvolvimento
pnpm dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Testes
```bash
# Testes unitários com Jest
cd apps/web
npx jest --passWithNoTests

# Testes E2E com Cypress (com o projeto rodando)
cd apps/web
npx cypress open
```

---

## 📖 Storybook
```bash
# Documentação visual dos componentes
cd apps/web
pnpm run storybook
```

Acesse: [http://localhost:6006](http://localhost:6006)

---

## 🏭 Funcionalidades

### Monitoramento em Tempo Real
- Estados da máquina: Ligada, Desligada, Em Manutenção, Erro
- Métricas: Temperatura, RPM, Tempo de Operação
- Atualização a cada 3 segundos
- Indicação visual de perda de conexão

### Visualização de Dados
- Cards de métricas com valores atuais e indicadores de tendência (▲▼)
- Gráfico de histórico com escala dupla (temperatura/eficiência e RPM)
- Interface responsiva para desktop, tablet e mobile
- Feedback visual quando temperatura ultrapassa o limite

### Sistema de Alertas
- Níveis: INFO, WARNING, CRITICAL
- Priorização por severidade e timestamp
- Feedback visual e sonoro para alertas CRITICAL
- Histórico de alertas

### Métricas de Eficiência Industrial
- OEE (Overall Equipment Effectiveness)
- Disponibilidade
- Performance
- Qualidade

---

## 🎨 Diferenciais Implementados

- ✅ Dark/Light mode
- ✅ Histórico persistente com localStorage
- ✅ Animações suaves com tw-animate-css
- ✅ Acessibilidade (aria-label, role)
- ✅ Testes E2E com Cypress
- ✅ Documentação com Storybook
- ✅ Feedback sonoro para alertas CRITICAL

---

## 🏗️ Decisões Técnicas

**Turborepo** — Escolhido pela separação clara de responsabilidades entre frontend e backend, compartilhamento de tipos via `@repo/types` e escalabilidade do monorepo.

**Tailwind CSS v4** — Versão mais recente com suporte a variáveis CSS nativas e configuração simplificada via `@import`.

**SQLite com better-sqlite3** — Solicitado pelo teste para dados mockados. Banco leve e sem necessidade de servidor externo.

**Recharts com ComposedChart** — Permite escala dupla no eixo Y, essencial para visualizar simultaneamente temperatura (0-100) e RPM (800-1600) sem sobreposição.

**Web Audio API** — Escolhida para feedback sonoro por ser nativa do navegador, sem dependências externas.

---

## 📋 Interfaces TypeScript Obrigatórias
```ts
interface MachineStatus {
  id: string;
  timestamp: Date;
  state: "RUNNING" | "STOPPED" | "MAINTENANCE" | "ERROR";
  metrics: {
    temperature: number;
    rpm: number;
    uptime: number;
    efficiency: number;
  };
  oee: {
    overall: number;
    availability: number;
    performance: number;
    quality: number;
  };
}

interface Alert {
  id: string;
  level: "INFO" | "WARNING" | "CRITICAL";
  message: string;
  component: string;
  timestamp: Date;
  acknowledged: boolean;
}

interface MetricHistory {
  timestamp: Date;
  temperature: number;
  rpm: number;
  efficiency: number;
}
```

---

## 👤 Autor

Douglas Michel — [GitHub](https://github.com/DouglassenG)
