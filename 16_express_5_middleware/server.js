const express = require("express")
var morgan = require('morgan')
const app = express();
app.listen(3000)


// app.use(morgan('tiny'))
app.use(morgan('Resultado -> :method :url :status'))

app.get('/', (req, res) => {
    res.send('teste')
})