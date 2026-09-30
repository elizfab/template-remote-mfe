# Como usar este template

Guia para criar um repositório novo que será um **remote** do portfólio MFE, já dentro dos padrões da organização.

## 1. Criar o repositório

```bash
gh repo create elizfab/<repo> --public --template elizfab/template-remote-mfe --clone
cd <repo>
```

## 2. Configurar o GitHub

O template copia arquivos, não configurações. Rode uma vez:

```bash
./scripts/setup-repo.sh elizfab/<repo>
```

Cria `develop`, protege `main`/`develop` (PR + checks `CI` e `Danger`), cria o ruleset que só aceita `feature/**`,
libera o Actions para abrir PRs e cria as labels `tipo:*`.

## 3. Dar identidade ao remote

```bash
npm run init:remote -- <nome> <porta> [rota]     # ex.: npm run init:remote -- certificados 4209 certificados
```

- **nome**: uma palavra, minúsculas, sem hífen (vira o container do Module Federation)
- **porta**: próxima livre da faixa 4200–4299 (tabela em `docs/README.md` do MFE)
- **rota**: como aparece na URL do portfólio

Revise o `README.md` (descrição) e o `docs/ROADMAP.md`.

## 4. Instalar e validar

```bash
nvm install 22 && nvm use            # Angular CLI 22 exige Node ≥ 22.22.3
export NODE_AUTH_TOKEN=$(gh auth token)
npm install
npm run standards                     # deve listar 0 obrigatórios pendentes
npm start                             # http://localhost:<porta>
```

## 5. Primeira entrega

```bash
git switch -c feature/configura-remote-<nome>
git add -A && git commit -m "feat: configura remote <nome>"
git push -u origin feature/configura-remote-<nome>
```

O **Auto PR** abre o PR para `develop`; o **Danger** valida regras e padrões; o **CI** roda lint, testes e build.

## 6. Desenvolver

- Tudo o que o shell usa fica em `src/app/remote-entry/`.
- Rotas e links **relativos**; sem rota `**`.
- Providers da feature nos `providers` da rota (o `app.config.ts` não roda dentro do shell).
- Assets em `public/assets/<nome>/` referenciados como `/assets/<nome>/...`.
- **Não** atualize Angular/RxJS por conta própria: as versões acompanham o MFE.

## 7. Integrar ao portfólio

No repositório do MFE, abra uma branch `feature/integra-<nome>` e:

1. `apps/shell/public/mf.manifest.json`: `"<nome>": "<url>/remoteEntry.js"`
2. `apps/shell/src/app/app.routes.ts`: `{ path: '<rota>', loadChildren: loadRemoteRoutes('<nome>') }`
3. Card do projeto em `packages/shared/data` com `mfeRoute`

## 8. Releases

Merge `develop → main` publica `vX.Y.Z` automaticamente (notas por categoria). Forçar versão: Actions → Release → Run workflow.
