const express = require('express');
const app = express();
app.listen(3000)

app.get('/', (req, res) => {
    res.send('Testes com parâmetros')
})

// parametros separados por -
app.get('/distancia/:pontoA-:pontoB', (req, res) => {
    const pontoA = req.params.pontoA;
    const pontoB = req.params.pontoB;
    const distancia = pontoB - pontoA;
    res.send(`A distância entre ${pontoA} e ${pontoB} é ${distancia}`)
})

// parametros separados por .
app.get('/distancia/:pontoA.:pontoB', (req, res) => {
    const pontoA = req.params.pontoA;
    const pontoB = req.params.pontoB;
    const distancia = pontoB - pontoA;
    res.send(`A distância entre ${pontoA} e ${pontoB} é ${distancia}`)
})