// Inicializa um repositório criado a partir do template:
//   npm run init:remote -- <nome> <porta> [rota]   (o nome do repositório vem do `git remote origin`)
//   ex.: npm run init:remote -- certificados 4209 certificados
// Ajusta: webpack.config.js (name), angular.json (porta), elizfab.json, package.json (name) e README.
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

const [nome, porta, rota = nome] = process.argv.slice(2);
if (!/^[a-z][a-z0-9]*$/.test(nome ?? '') || !/^\d{4}$/.test(porta ?? '')) {
  console.error('Uso: npm run init:remote -- <nome sem hífen> <porta 4 dígitos> [rota]');
  process.exit(1);
}

const repo =
  execSync('git remote get-url origin', { encoding: 'utf8' }).trim().match(/[/:]elizfab\/([^/.]+)(\.git)?$/)?.[1] ?? nome;

const edit = (file, fn) => writeFileSync(file, fn(readFileSync(file, 'utf8')));

edit('webpack.config.js', (s) => s.replace(/name: '[^']*'/, `name: '${nome}'`));
edit('angular.json', (s) => s.replace(/"port": \d+/g, `"port": ${porta}`));
edit('elizfab.json', (s) => JSON.stringify({ ...JSON.parse(s), nome }, null, 2) + '\n');
edit('angular.json', (s) => s.replace(/"outputPath": "dist\/[^"]*"/, `"outputPath": "dist/${nome}"`));
edit('package.json', (s) => JSON.stringify({ ...JSON.parse(s), name: nome }, null, 2) + '\n');
edit('README.md', (s) =>
  s.replaceAll('{{NOME}}', nome).replaceAll('{{PORTA}}', porta).replaceAll('{{ROTA}}', rota).replaceAll('{{REPO}}', repo),
);
console.log(`Remote "${nome}" configurado na porta ${porta} (rota no shell: /${rota}).`);
