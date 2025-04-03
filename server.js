const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect('/login')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/login.html")
  })

  app.get('/cadastro', (req, res) => {
      res.sendFile(__dirname + "/register.html")
    })

    app.get('/esqueci-senha', (req, res) => {
        res.sendFile(__dirname + "/forgot-password.html")
    })

    app.get('/dashboard', (req, res) => {
        res.sendFile(__dirname + "/index.html")
    })

    app.use((req, res) => {
        res.status(404).sendFile(__dirname + "/404.html")
    })

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})