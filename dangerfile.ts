// Revisão automática dos PRs (Danger JS): regras e padrões da organização elizfab.
// Regras específicas deste repositório podem ser adicionadas depois de elizfabRules.
// Documentação: https://github.com/elizfab/mfe-elizabetefabri-portfolio/blob/develop/docs/12-padroes-de-repositorio.md
import { danger, fail, warn, message, markdown, schedule } from 'danger';
import { elizfabRules } from '@elizfab/danger-rules';

schedule(elizfabRules({ danger, fail, warn, message, markdown }));
