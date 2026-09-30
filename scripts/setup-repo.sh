#!/usr/bin/env bash
# Configura no GitHub um repositório criado a partir do template (o template não copia configurações):
#   ./scripts/setup-repo.sh elizfab/<repo>
# Requer: gh autenticado com escopos repo, workflow e admin:org (este último só na primeira vez da org).
set -euo pipefail
R="${1:?Uso: ./scripts/setup-repo.sh elizfab/<repo>}"

echo "▶ branch develop"
if ! gh api "repos/$R/branches/develop" >/dev/null 2>&1; then
  sha=$(gh api "repos/$R/git/ref/heads/main" --jq .object.sha)
  gh api -X POST "repos/$R/git/refs" -f ref=refs/heads/develop -f sha="$sha" >/dev/null
fi

echo "▶ opções do repositório"
gh api -X PATCH "repos/$R" -F delete_branch_on_merge=true -F allow_squash_merge=true -F allow_merge_commit=true \
  -F allow_rebase_merge=false -F has_wiki=false >/dev/null

echo "▶ GitHub Actions pode criar PRs (Auto PR)"
gh api -X PUT "repos/$R/actions/permissions/workflow" -f default_workflow_permissions=read \
  -F can_approve_pull_request_reviews=true >/dev/null

echo "▶ proteção de main e develop (PR obrigatório + checks CI e Danger)"
for B in main develop; do
  gh api -X PUT "repos/$R/branches/$B/protection" --input - >/dev/null <<JSON
{
  "required_status_checks": { "strict": true, "contexts": ["CI", "Danger"] },
  "enforce_admins": false,
  "required_pull_request_reviews": { "required_approving_review_count": 0, "dismiss_stale_reviews": true },
  "restrictions": null,
  "required_conversation_resolution": true,
  "allow_force_pushes": false,
  "allow_deletions": false
}
JSON
done

echo "▶ ruleset: só main, develop e feature/** podem ser criadas"
if ! gh api "repos/$R/rulesets" --jq '.[].name' | grep -qx "Nomenclatura de branches"; then
  gh api -X POST "repos/$R/rulesets" --input - >/dev/null <<'JSON'
{
  "name": "Nomenclatura de branches",
  "target": "branch",
  "enforcement": "active",
  "conditions": { "ref_name": { "include": ["~ALL"], "exclude": ["refs/heads/main", "refs/heads/develop", "refs/heads/feature/**"] } },
  "rules": [{ "type": "creation" }]
}
JSON
fi

echo "▶ labels (tipo:* alimentam as notas de release)"
label() { gh label create "$1" -R "$R" --color "$2" --description "$3" --force >/dev/null; }
label "tipo:feat" 1f883d "Funcionalidade nova"
label "tipo:fix" d73a4a "Correção de bug"
label "tipo:docs" 0075ca "Documentação"
label "tipo:ci" 5319e7 "Workflows, Danger, automação"
label "tipo:build" 5319e7 "Build, dependências"
label "tipo:test" 5319e7 "Testes"
label "tipo:refactor" fbca04 "Refatoração"
label "tipo:perf" fbca04 "Performance"
label "tipo:style" c5def5 "Formatação"
label "tipo:chore" c5def5 "Manutenção"
label "tipo:revert" c5def5 "Reversão"
label "ignorar-release" ededed "Não aparece nas notas de release"

echo "✔ $R configurado. Próximo passo: git switch -c feature/<atividade> e abrir o primeiro PR."
