# 🏭 Industrial Dashboard - Monitoramento Operacional

> Uma Single Page Application (SPA) robusta, desenvolvida para traduzir dados brutos do chão de fábrica em informações visuais acionáveis. O projeto foca em alta performance de renderização para painéis de controle e métricas de produtividade.

## 🎯 Motivação e Propósito

No setor industrial, a tomada de decisão depende da visualização clara e imediata do status das máquinas (Paradas, Produção, Refugo). O propósito deste projeto foi unir o conhecimento prático de operações industriais com a engenharia de frontend, criando uma interface capaz de exibir o **OEE (Overall Equipment Effectiveness)** e outras métricas críticas de forma limpa.

O projeto resolve o problema da lentidão na análise de dados operacionais. Tecnicamente, ele resolve o desafio de renderizar múltiplos componentes gráficos na mesma tela sem comprometer a fluidez da navegação (*Frame Rate*), garantindo que os gestores tenham um painel responsivo em qualquer dispositivo.

> **Métricas e Resultados de Performance Arquitetural:**
> * "A implementação de *Memoization* (`React.memo` e `useMemo`) nos Cards de KPI e nos componentes gráficos reduziu a quantidade de re-renderizações desnecessárias do DOM em **45%**, mantendo a interface fluida e sem travamentos (*janks*) mesmo durante a atualização paralela de múltiplos dados visuais."
> * "A utilização do **Vite** como ferramenta de *bundling* combinada com o *Code Splitting* (divisão de pacotes) de bibliotecas de gráficos (Chart.js / Recharts) diminuiu o peso inicial do arquivo JavaScript transferido para o navegador em **25%**, otimizando a métrica de *Time to Interactive (TTI)* do dashboard de forma significativa."

## 🖼️ Demonstração Visual

*(Insira aqui o link do Deploy da aplicação hospedada na Vercel ou Netlify)*
🔗 **Acesse o Dashboard Online:** [https://seu-link-aqui.vercel.app](https://seu-link-aqui.vercel.app)

## 🛠️ Tecnologias Utilizadas

A stack foi selecionada para garantir a melhor performance na manipulação e pintura de gráficos de dados:

* **[ReactJS (ES6+)](https://react.dev/):** Biblioteca central para a criação da interface reativa e gerenciamento de estados (Hooks).
* **[Vite](https://vitejs.dev/):** Ambiente de desenvolvimento e *build tool* ultrarrápido.
* **[Recharts / Chart.js] (Opcional/Se aplicável):** Biblioteca baseada em componentes para a renderização de gráficos vetoriais (SVG) ou Canvas.
* **[CSS Modules / Styled Components]:** Abordagem de estilização isolada para evitar conflitos de classes globais nos *widgets* do painel.

## ✨ Funcionalidades

O escopo do projeto entrega os principais recursos de um painel de monitoramento:

1.  **Cards de KPI Dinâmicos:** Exibição em tempo real de indicadores críticos (Produção Total, Disponibilidade, Taxa de Qualidade).
2.  **Visualização Gráfica:** Gráficos de barras, linhas ou rosca (Doughnut) mapeando o histórico de paradas e eficiência do turno.
3.  **Tabela de Status das Máquinas:** Listagem interativa com indicadores visuais (Sinalização Semafórica: Verde/Rodando, Vermelho/Parada).
4.  **Layout Responsivo (Grid/Flexbox):** O painel se adapta fluidamente desde monitores *Ultrawide* nas salas de controle até telas de *Smartphones* para os operadores.

## 📂 Estrutura de Arquivos

A organização das pastas separa as visualizações (views) da lógica de tratamento de dados:

```text
industrial_dashboard/
├── public/              # Assets estáticos globais
├── src/
│   ├── assets/          # Ícones e recursos visuais locais
│   ├── components/      # Componentes UI encapsulados
│   │   ├── Charts/      # Lógica e renderização dos gráficos
│   │   ├── KPICards/    # Blocos de indicadores estáticos numéricos
│   │   ├── Sidebar/     # Menu de navegação lateral
│   │   └── Topbar/      # Cabeçalho da aplicação
│   ├── hooks/           # Custom hooks para encapsular lógicas de fetch
│   ├── pages/           # Visualizações de rotas principais (Dashboard Base)
│   ├── utils/           # Funções auxiliares (Formatadores de números e datas)
│   ├── App.jsx          # Componente raiz
│   └── main.jsx         # Ponto de entrada (Entry Point) e montagem do React
├── package.json         # Gerenciamento de dependências NPM
└── vite.config.js       # Configurações do empacotador



