# {{NOME}}

[![CI](https://github.com/elizfab/{{REPO}}/actions/workflows/ci.yml/badge.svg?branch=develop)](https://github.com/elizfab/{{REPO}}/actions/workflows/ci.yml)
[![Release](https://img.shields.io/github/v/release/elizfab/{{REPO}})](https://github.com/elizfab/{{REPO}}/releases)

> Repositório criado a partir do [template-remote-mfe](https://github.com/elizfab/template-remote-mfe): um **micro frontend
> (remote)** Angular pronto para ser carregado pelo [portfólio MFE](https://github.com/elizfab/mfe-elizabetefabri-portfolio).

<!-- Descreva em 1–2 frases o que o projeto faz. -->

| Campo | Valor |
| --- | --- |
| Remote (`name`) | `{{NOME}}` |
| Porta local | `{{PORTA}}` |
| Rota no shell | `/{{ROTA}}` |
| Tipo (`elizfab.json`) | `mfe-remote` |

## Como executar

Pré-requisitos: **Node ≥ 22.22.3** (`nvm install 22`), `gh` autenticado com `read:packages`.

```bash
export NODE_AUTH_TOKEN=$(gh auth token)   # pacotes @elizfab/* vêm do GitHub Packages
npm install
npm start                                  # http://localhost:{{PORTA}} (modo standalone)
npm test && npm run lint && npm run build
npm run standards                          # padrões da org (P-xx)
```

Dentro do portfólio: registre `"{{NOME}}": "http://localhost:{{PORTA}}/remoteEntry.js"` no `mf.manifest.json` do shell e
a rota `/{{ROTA}}` (ver `docs/05-adicionar-projetos.md` do MFE, cenário C2).

## Stack

- Angular 22.1 (standalone, signals, zoneless) — **mesmas versões do MFE** (dependências compartilhadas com `strictVersion`)
- Module Federation clássico (`@angular-architects/module-federation`, Webpack 5)
- Vitest, ESLint (`angular-eslint`)
- Danger + `@elizfab/danger-rules` (regras de PR e padrões da org)

## Estrutura

```txt
src/app/remote-entry/      ★ o que o shell carrega: entry.routes.ts (remoteRoutes) + componentes
src/app/app*.ts            casca do modo standalone (não roda dentro do shell)
webpack.config.js          name do remote + exposes './Routes'
elizfab.json               tipo do repositório para os padrões da org
dangerfile.ts              regras de PR (@elizfab/danger-rules)
.github/workflows/         ci, branch-name, auto-pr, danger, danger-release, release
scripts/init-remote.mjs    configura nome, porta e rota (uma vez, após criar o repo)
scripts/setup-repo.sh      proteções, ruleset, labels e permissões no GitHub
docs/                      como usar o template e roadmap
```

## Fluxo de trabalho

`feature/<atividade>` → PR automático para `develop` (CI + Danger) → PR `develop → main` → release automática
(`vX.Y.Z` pelos Conventional Commits). Detalhes: [docs/como-usar-o-template.md](docs/como-usar-o-template.md).
