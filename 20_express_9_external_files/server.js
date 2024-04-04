const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('Servidor em execução');
})

// importar as funções
const funcoes = require('./functions')

app.get('/', (req, res) => {
    res.send('Testes com ficheiros externos')
})

app.get('/add/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const resultado = funcoes.add(a, b);
    res.send(`A soma de ${a} e ${b} é ${resultado}`)
})

// rota com execução de uma função externa
app.get('/sub/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const resultado = funcoes.sub(a, b);
    res.send(`A subtração de ${a} e ${b} é ${resultado}`)
})

