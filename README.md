# React Admin

Um kit inicial moderno e pronto para produção de dashboard administrativo em React, construído com Vite, Redux Toolkit, React Router e Tailwind CSS v4. Este projeto fornece uma base sólida para construir painéis administrativos, dashboards ou qualquer aplicação web autenticada.
Projeto baseado no [Building a Modern Admin Dashboard with React JS and Tailwind CSS](https://www.youtube.com/watch?v=xsqwRN8w_MU)

## ✨ Funcionalidades

- **Stack Moderna**: React 19, Vite, Redux Toolkit, React Router v7
- **Interface Elegante**: Tailwind CSS v4 com sistema de tema personalizado
- **Modo Escuro**: Suporte completo a modo claro/escuro com transições suaves
- **Customização de Tema**: Múltiplas cores de destaque (Blue, Emerald, Violet)
- **Autenticação**: Fluxo completo de autenticação com rotas protegidas
- **Design Responsivo**: Layout mobile-first com navegação por sidebar
- **Integração com API**: RTK Query para busca eficiente de dados
- **Mock Service Worker**: Mock de API para desenvolvimento
- **Arquitetura Modular**: Estrutura de pastas baseada em features
- **Acessível**: Construído seguindo boas práticas de acessibilidade
- **Gerenciamento de Estado**: Redux Toolkit com persistência

---

## 🛠️ Stack Tecnológica

- **React 19** – Biblioteca de UI
- **Vite** – Ferramenta de build e servidor de desenvolvimento
- **Redux Toolkit** – Gerenciamento de estado
- **RTK Query** – Busca e cache de dados
- **React Router v7** – Roteamento
- **git CSS v4** – Estilização
- **MSW (Mock Service Worker)** – Mock de API
- **PostCSS** – Processamento de CSS
- **Yarn** - gerenciador de pacotes
- **Husk** - gerenciador de commits

---

## 📁 Estrutura do Projeto

```
.husky/
├── pre-commit
├── commit-msg
└── pre-push
public/
src/
├── api/                    # Configuração e endpoints de API
│   ├── baseApi.js         # Configuração base do RTK Query
│   └── userApi.js         # Endpoints da API de usuários
├── app/                    # Configurações em nível de aplicação
│   ├── hooks.js           # Hooks tipados do Redux
│   └── store.js           # Configuração da store Redux
├── assets/                 # Arquivos estáticos
├── components/             # Componentes reutilizáveis
│   ├── common/            # Componentes comuns (ThemeSwitcher, ConfirmDialog)
│   ├── layout/            # Componentes de layout (Header, Sidebar, DashboardLayout)
│   └── ui/                # Componentes básicos de UI (Button, Input, Select)
├── features/               # Módulos organizados por funcionalidade
│   ├── auth/              # Funcionalidade de autenticação
│   │   ├── authSlice.js   # Slice Redux de autenticação
│   │   └── authSelectors.js # Selectors de autenticação
│   └── theme/             # Funcionalidade de tema
│       ├── themeSlice.js  # Slice Redux de tema
│       └── themeSelectors.js # Selectors de tema
├── mocks/                 # Handlers de mock do MSW
│   ├── browser.js         # Configuração do MSW no navegador
│   └── handlers.js        # Handlers de mock da API
├── pages/                  # Componentes de páginas
│   ├── auth/              # Páginas de autenticação (Login, Register)
│   ├── dashboard/         # Páginas do dashboard
│   └── users/             # Páginas de gerenciamento de usuários
├── routes/                 # Configuração de rotas
│   ├── AppRoutes.jsx      # Configuração principal de rotas
│   ├── PrivateRoute.jsx   # Wrapper de rota protegida
│   └── PublicRoute.jsx    # Wrapper de rota pública
├── utils/                  # Funções utilitárias
│   ├── classnames.js      # Utilitário para classes CSS
│   ├── constants.js       # Constantes da aplicação
│   └── storage.js         # Utilitários para LocalStorage
├── App.jsx                 # Componente raiz
├── main.jsx                # Ponto de entrada
└── index.css               # Estilos globais e imports do Tailwind
```

---

## 🚀 Como Começar

### Pré-requisitos

- Node.js 22+ e npm

### Instalação

1. **Clone ou baixe este projeto**
2. **Instale as dependências**

```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

4. **Abra o navegador**
   - Acesse `http://localhost:5173`
   - Credenciais padrão (via MSW):
     - Email: `admin@example.com`
     - Senha: `password`

---

## 📜 Scripts Disponíveis

- `npm run dev` – Inicia o servidor de desenvolvimento
- `npm run build` – Gera build para produção
- `npm run preview` – Visualiza build de produção
- `npm run lint` – Executa ESLint

---

## 🏗️ Visão Geral da Arquitetura

### Estrutura Baseada em Features

O projeto segue uma **arquitetura baseada em funcionalidades**, onde o código relacionado é agrupado por feature e não por tipo de arquivo.

Cada feature contém:

- **Slice** – Gerenciamento de estado (`*Slice.js`)
- **Selectors** – Selectors memorizados (`*Selectors.js`)
- **API** – Endpoints RTK Query (`api/`)
- **Components** – Componentes específicos da feature
- **Pages** – Páginas da feature (`pages/`)

---

### Gerenciamento de Estado

- **Redux Toolkit** – Estado centralizado
- **RTK Query** – Chamadas de API, cache e sincronização
- **LocalStorage** – Persistência de autenticação e preferências de tema

---

### Roteamento

- **Rotas Públicas** – Login, Register
- **Rotas Privadas** – Dashboard, Users
- **Rotas com Layout** – DashboardLayout envolve rotas privadas

---

### Estilização

- **Tailwind CSS v4**
- **Variáveis CSS** para temas dinâmicos
- **Modo Escuro** com prefixo `dark:`
- **Responsividade mobile-first** (sm, md, lg)

---

## 🎨 Sistema de Temas

### Modo Escuro

Implementado com variante `dark:` do Tailwind. A preferência é salva no localStorage.

### Cores de Destaque

- **Blue** (padrão)
- **Emerald**
- **Violet**

### Customização

Adicionar novas cores em `src/index.css`:

```css
[data-accent="your-color"] {
  --accent-50: #...;
  --accent-100: #...;
  --accent-500: #...;
  --accent-600: #...;
}
```

---

## 🔐 Autenticação

### Fluxo

1. Login via `/login`
2. Validação (mock via MSW)
3. Token salvo no Redux + localStorage
4. Redirecionamento para dashboard
5. Rotas protegidas validam autenticação

---

## 📡 Integração com API

Endpoints definidos com RTK Query em `api/`.

Para usar API real:

- Atualizar `baseUrl` em `src/api/baseApi.js`
- Remover MSW em produção

---

## 🧩 Adicionando Novas Features

1. Criar Slice
2. Adicionar à Store
3. Criar Endpoints de API
4. Criar Pages/Components
5. Adicionar Rotas

---

## 🎯 Conceitos Importantes

### Hooks Tipados do Redux

Use hooks de `src/app/hooks.js`:

```javascript
import { useAppDispatch, useAppSelector } from "./app/hooks";
```

---

## 🔧 Arquivos de Configuração

- `vite.config.js`
- `tailwind.config.js`
- `postcss.config.js`
- `eslint.config.js`

---

## 📦 Build para Produção

```bash
npm run build
```

O build será gerado na pasta `dist/`.

---

## 🤝 Contribuição

Este é um template inicial. Sinta-se livre para:

- Clonar
- Customizar
- Adicionar features
- Compartilhar melhorias

---

## 👨‍💻 Autor

Desenvolvido e mantido por [@renan-meneses](https://github.com/renan-meneses)

---

## 📝 Licença

Projeto open source sob licença **MIT**.

**Bom código! 🚀**
