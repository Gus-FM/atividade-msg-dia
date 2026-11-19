const express = require('express')
const axios = require('axios')

const app = express()
const PORT = process.env.PORT || 3000

// URL da API Ron Swanson Quotes
const API_URL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

// Página inicial: formulário para pedir a mensagem do dia
app.get('/', (req, res) => {
  res.render('index')
})

// Rota que consome a API e mostra a(s) mensagem(ns)
app.post('/mensagem', async (req, res) => {
  const quantidade = Math.min(Math.max(parseInt(req.body.quantidade, 10) || 1, 1), 5)
  const termo = (req.body.termo || '').trim()
  console.log(`Pedido recebido: quantidade=${quantidade}, termo="${termo}"`)

  // Com termo: busca citações que contenham a palavra; sem termo: citações aleatórias
  const url = termo
    ? `${API_URL}/search/${encodeURIComponent(termo)}`
    : `${API_URL}/${quantidade}`

  try {
    const response = await axios.get(url)
    const quotes = response.data.slice(0, quantidade)
    res.render('message', { quotes, termo })
  } catch (err) {
    console.error(err.message)
    res.status(502).render('message', { quotes: [], termo, erro: 'Erro ao acessar a API. Tente novamente.' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
