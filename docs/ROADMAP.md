# Roadmap — `{{NOME_DO_PROJETO}}`

> Template padrão de documentação de projeto do ecossistema `elizabetesousafabri.com.br`.
>
> **Como usar:** duplique este arquivo para cada novo projeto, renomeie-o para `ROADMAP.md` e substitua os placeholders `{{...}}` pelos dados reais. Remova as seções que não forem relevantes (`Backend`, por exemplo, se o projeto for só frontend).
>
> Ele serve como manual de consulta interno e, ao final, como fonte única dos dados que serão replicados no portfólio.
>
> - Data de início: `{{DD/MM/AAAA}}`
> - Última atualização: `{{DD/MM/AAAA}}`
> - Status: `[ ] Em andamento | [ ] Finalizado | [ ] Arquivado`

---

## 1. Identidade do projeto

| Campo             | Valor                                                                          |
| ----------------- | ------------------------------------------------------------------------------ |
| `slug`            | `{{slug-unico-sem-espacos}}`                                                   |
| Título            | `{{Nome legível do projeto}}`                                                  |
| Categoria         | `Frontend / Backend / Cloud / Estudos`                                         |
| Tipo              | `Pessoal / Profissional`                                                       |
| Escopo            | `Frontend / Backend / Full-stack / CLI`                                        |
| Domínio principal | `https://{{nome}}.elizabetesousafabri.com.br` ou `https://{{nome}}.vercel.app` |

- **Descrição curta (1–2 frases):** `{{Resumo do que o projeto faz.}}`
- **Propósito / por quê foi criado:** `{{Explique o problema pessoal ou objetivo de estudo.}}`
- **O que resolve:** `{{Benefício principal para quem usar.}}`

---

## 2. Introdução

`{{Uma breve apresentação sobre o que é o projeto, o que ele faz e as informações iniciais que alguém precisa saber ao abrir este documento.}}`

---

## 3. Índice

1. [Identidade do projeto](#1-identidade-do-projeto)
2. [Introdução](#2-introdução)
3. [Habilidades e pré-requisitos](#4-habilidades-e-pré-requisitos)
4. [Stack técnica e tópicos de estudo](#5-stack-técnica-e-tópicos-de-estudo)
5. [Como executar](#6-como-executar)
6. [Estrutura de repositório](#7-estrutura-de-repositório)
7. [Deploy e configurações](#8-deploy-e-configurações)
8. [Screenshots e ativos visuais](#9-screenshots-e-ativos-visuais)
9. [Dados do portfólio](#10-dados-do-portfólio)
10. [Backend (se existir)](#11-backend-se-existir)
11. [Checklist de finalização](#12-checklist-de-finalização)
12. [Links e referências](#13-links-e-referências)
13. [Notas de evolução](#14-notas-de-evolução)

---

## 4. Habilidades e pré-requisitos

`{{Liste o que é necessário saber ou ter instalado para estudar, rodar ou contribuir com este projeto.}}`

### Conhecimentos esperados

- `{{Item 1}}`
- `{{Item 2}}`

### Ferramentas / versões

- `{{Node.js 22, Angular 21, Go 1.24, Docker, etc.}}`
- `{{Outras dependências globais.}}`

---

## 5. Stack técnica e tópicos de estudo

### Tecnologias

| Tecnologia       | Uso / papel no projeto                |
| ---------------- | ------------------------------------- |
| `{{Angular}}`    | `{{Framework principal do frontend}}` |
| `{{TypeScript}}` | `{{Linguagem}}`                       |
| `{{SCSS}}`       | `{{Estilização}}`                     |
| `{{PrimeNG}}`    | `{{Componentes de UI}}`               |
| `{{NgRx}}`       | `{{Gerenciamento de estado}}`         |
| `{{Jest}}`       | `{{Testes unitários}}`                |
| `{{Go}}`         | `{{Backend / API}}`                   |
| `{{MongoDB}}`    | `{{Banco de dados}}`                  |
| `{{Docker}}`     | `{{Ambiente local}}`                  |

### Tópicos de estudo / aprofundamento

> Use este espaço para registrar o que precisa ser estudado, o que foi aprendido e os recursos usados.

- `{{Conceito/tecnologia 1 — por quê foi escolhida / o que se aprendeu}}`
- `{{Conceito/tecnologia 2}}`
- `{{localStack? Outro ambiente local?}}`

---

## 6. Como executar

### Desenvolvimento local

```bash
# Frontend
cd frontend
npm install
npm run start:dev   # ou ng serve --port {{PORTA}}

# Backend (se existir)
cd backend
cp .env.example .env   # ajuste segredos
go run ./cmd/server

# Stack completa com Docker
# Na raiz do projeto:
cp .env.example .env   # ajuste segredos antes de subir
docker compose up -d --build
```

### Acesso após subir

| Serviço | URL local                               |
| ------- | --------------------------------------- |
| Web     | `http://localhost:{{PORTA_FRONT}}`      |
| API     | `http://localhost:{{PORTA_API}}/api/v1` |
| Health  | `http://localhost:{{PORTA_API}}/health` |
| MongoDB | `mongodb://localhost:{{PORTA_MONGO}}`   |

### Variáveis de ambiente relevantes

- `{{PROJECT_NAME}}`
- `{{API_PORT}}`
- `{{MONGO_URI}}`
- `{{ALLOWED_ORIGINS}}`
- `{{JWT_SECRET}}` (nunca commitado)

---

## 7. Estrutura de repositório

```txt
{{nome-do-projeto}}/
├── .env.example
├── .gitignore
├── README.md
├── docker-compose.yml
├── .github/
│   └── workflows/
│       └── ci.yml
├── docs/
│   └── screenshots/              # prints das telas capturados automaticamente
├── backend/                      # se existir
│   ├── cmd/server/
│   ├── config/
│   ├── internal/
│   ├── docker/
│   ├── Dockerfile
│   ├── Makefile
│   └── go.mod
└── frontend/                     # se existir
    ├── src/
    ├── docs/screenshots/
    ├── scripts/
    │   └── screenshots.mjs
    ├── angular.json
    └── package.json
```

---

## 8. Deploy e configurações

### Provedor / plataforma

- **Frontend:** `{{Vercel / Hostinger (subdomínio) / Render}}`
- **Backend:** `{{Render / Fly / Heroku / VPS}}`
- **Banco:** `{{MongoDB Atlas / Local / PostgreSQL}}`

### Domínios e URLs

| Ambiente | URL                                          |
| -------- | -------------------------------------------- |
| Produção | `https://{{dominio}}.com`                    |
| Preview  | `https://{{preview}}.com`                    |
| Repo     | `https://github.com/elizabetefabri/{{repo}}` |

### Credenciais de acesso (ambiente de teste/dev)

- **Usuário:** `{{user}}`
- **Senha:** `{{senha}}` (nunca commitar; anotar apenas em `.env` local ou secrets)

### Portas planejadas

| Serviço  | Porta local | Observação                     |
| -------- | ----------- | ------------------------------ |
| Frontend | `{{PORTA}}` | `{{ex: 6004 para Dose Certa}}` |
| API      | `{{PORTA}}` | `{{ex: 8080}}`                 |
| MongoDB  | `{{PORTA}}` | `{{ex: 27017}}`                |

---

## 9. Screenshots e ativos visuais

Os prints são gerados automaticamente pelo script `frontend/scripts/screenshots.mjs` (Puppeteer + Chrome headless), baseado no mesmo padrão usado em `dose-certa`.

### Rotas a capturar

Atualize o array `ROUTES` do `screenshots.mjs` conforme as páginas do projeto:

```js
const ROUTES = [
  { path: "/", name: "01-home" },
  { path: "/{{rota-2}}", name: "02-{{nome}}" },
  { path: "/{{rota-3}}", name: "03-{{nome}}" },
];
```

### Estrutura de páginas / imagens

| Ordem | Rota          | Nome do arquivo   | Descrição da tela              | Destino no portfólio                        |
| ----- | ------------- | ----------------- | ------------------------------ | ------------------------------------------- |
| 1     | `/`           | `01-home.png`     | `{{Tela inicial / dashboard}}` | `/images/projects/{{slug}}/01-home.png`     |
| 2     | `/{{rota-2}}` | `02-{{nome}}.png` | `{{Descrição}}`                | `/images/projects/{{slug}}/02-{{nome}}.png` |
| 3     | `/{{rota-3}}` | `03-{{nome}}.png` | `{{Descrição}}`                | `/images/projects/{{slug}}/03-{{nome}}.png` |

### Comandos

```bash
# Sobe ng serve temporário e captura todos os prints
cd frontend
npm run screenshots

# Usa um servidor já rodando
SHOTS_BASE_URL=http://localhost:{{PORTA}} npm run screenshots

# Captura também variante de tema (nome da env var varia por projeto: SHOTS_LIGHT ou SHOTS_DARK)
SHOTS_LIGHT=1 npm run screenshots
SHOTS_DARK=1 npm run screenshots

# Define caminho alternativo do Chrome
CHROME_PATH=/caminho/do/chrome npm run screenshots
```

### Diretórios de saída

| Origem    | Destino dos screenshots            | Finalidade                               |
| --------- | ---------------------------------- | ---------------------------------------- |
| Projeto   | `frontend/docs/screenshots/`       | Documentação do próprio projeto e README |
| Portfólio | `public/images/projects/{{slug}}/` | Exibição no portfólio Angular            |

### Nomeação dos arquivos

- Use o padrão `NN-nome-da-tela.png`.
- Variantes de tema: `NN-nome-da-tela-light.png` ou `NN-nome-da-tela-dark.png`.
- Logo/capa: `logo.png` ou `logo.svg`.

### Fluxo de publicação dos ativos

1. Após finalizar o frontend, execute `npm run screenshots`.
2. Valide os arquivos em `frontend/docs/screenshots/`.
3. Copie os arquivos selecionados para o README do GitHub do projeto:  
   `.github/assets/images/projects-personal/{{slug}}/`.  
   (Se a pasta ainda não existir, crie-a; esses ativos são usados no `README.md` do repositório.)
4. Copie os arquivos selecionados para o portfólio:  
   `portfolio-angular-frontend/public/images/projects/{{slug}}/`.
5. Atualize a seção `## 10. Dados do portfólio` deste roadmap com os caminhos finais.
6. Replique as informações em `src/app/shared/data/projects/portfolio-personal.data.ts`.  
   Futuramente esse passo será substituído por um formulário/backend no próprio portfólio.

---

## 10. Dados do portfólio

> Esta seção espelha a interface `Project` do portfólio (`src/app/shared/types/project.interface.ts`).  
> Quando o projeto for finalizado, os dados abaixo serão copiados para `portfolio-personal.data.ts`.

```ts
{
  slug: '{{slug-unico}}',
  title: '{{Nome do Projeto}}',
  description: '{{Descrição curta (2-3 linhas).}}',
  category: '{{Frontend | Backend | Cloud | Estudos}}',
  typeTag: 'saude',
  techs: [
    '{{Tecnologia 1}}',
    '{{Tecnologia 2}}',
    '{{Tecnologia 3}}',
  ],
  image: {
    // Use `logo.png`/`logo.svg` com `fit: 'contain'`; use print da home com `fit: 'cover'`.
    src: '/images/projects/{{slug}}/logo.png',
    alt: '{{Alt da imagem/capa}}',
    fit: 'contain',
  },
  repoUrl: 'https://github.com/elizabetefabri/{{repo}}',
  demoUrl: 'https://{{dominio}}.com',   // remova a linha se não houver demo online
  problem: '{{Qual dor ou necessidade o projeto resolve?}}',
  solution: '{{Como o projeto resolve essa dor?}}',
  technicalDecisions: [
    '{{Decisão técnica 1}}',
    '{{Decisão técnica 2}}',
    '{{Decisão técnica 3}}',
  ],
  gallery: [
    { src: '/images/projects/{{slug}}/01-home.png', alt: '{{Alt da tela home}}' },
    { src: '/images/projects/{{slug}}/02-{{tela}}.png', alt: '{{Alt}}' },
    { src: '/images/projects/{{slug}}/03-{{tela}}.png', alt: '{{Alt}}' },
  ],
  // Remova o bloco `backendContext` se o projeto não tiver backend.
  backendContext: {
    context: '{{Contexto da API / backend.}}',
    database: '{{Descrição do banco e collections principais.}}',
    architecture: [
      '{{Camada 1 — responsabilidade}}',
      '{{Camada 2 — responsabilidade}}',
      '{{Camada 3 — responsabilidade}}',
    ],
    endpoints: [
      'GET /health — saúde do serviço',
      'GET /api/v1/{{recurso}} — listar',
      'POST /api/v1/{{recurso}} — criar',
    ],
    diagram: `{{Cliente}}
    │  HTTPS
    ▼
{{Handler}}
    │
    ▼
{{Use Case}}
    │
    ▼
{{Repository}}
    │
    ▼
{{Banco}}`,
  },
}
```

### Campos pendentes de preenchimento

- [ ] `slug`
- [ ] `title`
- [ ] `description`
- [ ] `category`
- [ ] `techs`
- [ ] `image.src` e `image.alt`
- [ ] `repoUrl`
- [ ] `demoUrl`
- [ ] `problem`
- [ ] `solution`
- [ ] `technicalDecisions`
- [ ] `gallery`
- [ ] `backendContext` (se aplicável)

---

## 11. Backend (se existir)

### Descrição

`{{Responsabilidade da API: autenticação, regras de negócio, persistência, etc.}}`

### Arquitetura

| Camada                | Responsabilidade           |
| --------------------- | -------------------------- |
| `cmd/server`          | `{{Ponto de entrada}}`     |
| `config`              | `{{Carregamento de .env}}` |
| `internal/handler`    | `{{Rotas HTTP}}`           |
| `internal/usecase`    | `{{Regras de negócio}}`    |
| `internal/repository` | `{{Persistência}}`         |
| `pkg/response`        | `{{Envelope de resposta}}` |

### Banco de dados

- **Tipo:** `{{MongoDB / PostgreSQL / SQLite}}`
- **Collections / tabelas principais:** `{{lista}}`
- **Inicialização:** `{{arquivo de seed ou init}}`

### Endpoints principais

- `GET /health` — saúde do serviço
- `GET /api/v1/{{recurso}}` — listar
- `POST /api/v1/{{recurso}}` — criar
- `PUT /api/v1/{{recurso}}/:id` — atualizar
- `DELETE /api/v1/{{recurso}}/:id` — remover

### Diagrama de fluxo

```text
{{Cliente / Frontend}}
    │  HTTPS
    ▼
HTTP Handlers
    │
    ▼
Use Cases
    │
    ▼
Repository
    │
    ▼
Database
```

---

## 12. Checklist de finalização

> Marque cada item conforme o projeto evolui. Quando tudo estiver concluído, este roadmap estará pronto para ser usado como fonte de dados do portfólio.

### Planejamento e setup

- [ ] Nome e domínio definidos
- [ ] Repositório criado no GitHub
- [ ] Estrutura `frontend/` e/ou `backend/` criada a partir dos templates
- [ ] `.env` e `.env.example` configurados (sem segredos commitados)
- [ ] `docker-compose.yml` ajustado e testado

### Desenvolvimento

- [ ] Telas / rotas principais implementadas
- [ ] Integração frontend ↔ backend concluída (se houver)
- [ ] Testes unitários passando
- [ ] Build de produção gerado sem erros

### Documentação

- [ ] `README.md` do projeto preenchido
- [ ] Este `ROADMAP.md` / template revisado e completo
- [ ] `CHANGELOG.md` ou `WIP.md` atualizados

### Captura de imagens

- [ ] `scripts/screenshots.mjs` configurado com as rotas do projeto
- [ ] Prints gerados em `frontend/docs/screenshots/`
- [ ] Logo/capa produzida e nomeada como `logo.png` (ou `.svg`)
- [ ] Prints copiados para `portfolio-angular-frontend/public/images/projects/{{slug}}/`

### Deploy

- [ ] Frontend publicado em Vercel / Hostinger
- [ ] Backend publicado em Render / outro provedor (se houver)
- [ ] Banco acessível e persistindo dados (se houver)
- [ ] `GET /health` respondendo 200 (se houver backend)
- [ ] Testes de fumaça no ambiente de produção

### Portfólio

- [ ] Seção `## 10. Dados do portfólio` completamente preenchida
- [ ] Entrada inserida em `portfolio-personal.data.ts` (ou futuramente salva via backend de portfólio)
- [ ] Imagens ajustadas no portfólio (`public/images/projects/{{slug}}/...`)
- [ ] Deploy do portfólio realizado e card funcionando

---

## 13. Links e referências

### Projeto

- `{{Link para o repositório}}`
- `{{Link para o deploy em produção}}`
- `{{Link para o README do projeto}}`
- `{{Link para CHANGELOG / WIP}}`

### Documentação e caderno de estudos

- `{{Link para docs internas (Notion, Obsidian, caderno etc.)}}`
- `{{Link para caderno de estudos / tecnologias usadas}}`
- `{{Link para guias oficiais (Angular, Go, MongoDB etc.)}}`

### Gerenciamento

- `{{Link para backlog / board (GitHub Projects, Trello, etc.)}}`
- `{{Link para milestones / releases}}`

---

## 14. Notas de evolução

> Espaço livre para anotações rápidas, aprendizados, problemas encontrados e decisões tomadas ao longo do projeto.

- `{{Anotação 1}}`
- `{{Anotação 2}}`
- `{{Anotação 3}}`
