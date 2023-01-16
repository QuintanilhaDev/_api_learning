const express = require('express')
const userRoute = require('./routes/_user_routes')
const app = express()
const port = 80

// userRoute(app)

app.get('/', (req, res) => res.send("Olá mundo!"))

app.listen(port, () => {
    console.log('API rodando na porta 3000')
})