# Mensagem do Dia

Exercício final da Aula 17 de Programação Web 1 (Consumindo APIs de Terceiros).

Aplicação que consome a API [Ron Swanson Quotes](https://github.com/jamesseanwright/ron-swanson-quotes) usando **Express**, **Axios**, **EJS** e **Bootstrap**.

## Funcionalidades

- `GET /`: formulário para escolher a quantidade de mensagens (1 a 5) e uma palavra-chave opcional.
- `POST /mensagem`: consulta a API com Axios e mostra as citações.
  - Sem palavra-chave: `GET /v2/quotes/:count` (citações aleatórias)
  - Com palavra-chave: `GET /v2/quotes/search/:term`

## Como executar

```bash
npm install
node app.js
```

Depois, acesse http://localhost:3000.
