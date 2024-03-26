const http = require('http');

const server = http.createServer((req, res) => {
    console.log('efetuado pedido');
    res.write('resposta do servidor')
    res.end()
})

server.listen(3000, 'localhost', () => {
    console.log('servidor iniciado');
})