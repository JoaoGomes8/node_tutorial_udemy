const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("Servidor em execução");
});

// dados dos clientes
const clientes = [
  { id: 1, nome: "João", telefone: "111111111", email: "joao@gmail.com" },
  { id: 2, nome: "Maria", telefone: "222222222", email: "maria@gmail.com" },
  { id: 3, nome: "Pedro", telefone: "333333333", email: "pedro@gmail.com" },
  { id: 4, nome: "Ana", telefone: "444444444", email: "ana@gmail.com" },
  { id: 5, nome: "Luís", telefone: "555555555", email: "luis@gmail.com" },
];

// routes
app.get('/', (req, res) => {
    res.send('API de clientes')
})

// route com o total de clientes
app.get('/total_clientes', (req, res) => {
    res.send('Total de clientes: ' + clientes.length)
})

// route para apresentar os dados de um cliente específico
app.get('/clientes/:id', (req,res) =>{
    const cliente = clientes.find( c => c.id === parseInt(req.params.id))
    
    // se o cliente não existir
    if (!cliente) {
        res.status(404).send('Cliente não encontrado');
    } 

    // o cliente existe, vamos apresentar numa frase
    res.send(`O cliente é: ${cliente.nome}, telefone: ${cliente.telefone}, email: ${cliente.email}`)
})