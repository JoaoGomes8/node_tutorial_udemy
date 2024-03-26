const http = require('http')
const fs = require('fs')
let port = 3000
let host = 'localhost'

const server = http.createServer((req,res) => {

    // header
    res.setHeader("Content-Type", 'text/html')

    // rotas
    let html_page = '';

    switch (req.url) {
        case '/':
            html_page = 'home.html'
            break;
        case '/home':
            html_page = 'home.html'
            break;
        case '/services':
            html_page = 'services.html'
            break;
        case '/about':
            html_page = 'about.html'
            break;
    
        default:
            html_page = '404.html'
            break;
    }

    // preparar a página de html
    fs.readFile('./html/' + html_page, (err, data) =>{
        if (err) {
            console.log('erro');
            res.end();
        } else {
            res.write(data)
            res.end();
        }
    })
})

server.listen(port, host, () =>{
    console.log('Servidor Iniciado');
})
