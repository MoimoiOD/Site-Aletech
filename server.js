const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended : false}))
app.use(bodyParser.json())

app.get('', (req, res) => res.send('Ok'))
app.listen(8080, () => console.log('Executando na porta 8080.'))