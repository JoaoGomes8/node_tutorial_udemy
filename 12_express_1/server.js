const express = require('express')
// const server = express()
const app = express()

app.get('/', (req, res) => {
    res.send('Olá ExpressJs!')
})

app.listen(3000)