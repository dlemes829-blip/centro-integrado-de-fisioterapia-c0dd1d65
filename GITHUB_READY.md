# GitHub ready

Projeto preparado pelo Agent Nexus para subir ao GitHub.

## Projeto

- Nome: Centro Integrado de Fisioterapia
- ID: proj_centro-integrado-de-fisioterapia_ea18df7b
- Visibilidade sugerida: public

## Segurança

- `.env`, `.env.*`, `node_modules`, builds e logs estao ignorados no Git.
- Use `.env.example` como referencia.
- Nao suba chaves reais em commits.

## Comandos manuais

```bash
git init
git add .
git commit -m "Initial Agent Nexus project"
gh repo create centro-integrado-de-fisioterapia --public --source . --remote origin --push
```
