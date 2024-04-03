const express = require("express");
const app = express();
app.listen(3000, ()=>{
    console.log('Servidor em execução.');
})

// routes
app.get('/', (req, res) => {
    res.send("Olá Mundo!")
    
})

// route com um parâmetro
app.get('/ola/:nome', (req,res) => {
    res.send("Olá " + req.params.nome)
})

// route com dois parâmetros
app.get('/ola/:nome/:empresa', (req,res) => {
    res.send("Olá " + req.params.nome + " da " + req.params.empresa)
})

// route com soma de dois parâmetros
app.get('/soma/:a/:b', (req,res) =>{
    res.send('Resultado: ' + (parseInt(req.params.a) + parseInt(req.params.b)))
})