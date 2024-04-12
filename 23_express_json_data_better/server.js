const express = require('express');
const mysql = require('mysql2')
const mysql_config = require('./mysql_config')
const functions = require('./functions')

const app= express()
app.listen(3000, () =>{
    console.log('Servidor em execução.');
})

// mysql connection
const connection = mysql.createConnection(mysql_config)

// routes
app.get('/', (req, res) => {
    
    connection.query("SELECT * FROM tasks", (err, results) => {
        if (err) {
            res.json(functions.response('error', 'Erro: ' + err.message, null))
        } else {
            res.json(functions.response('sucess', 'Tasks listadas com sucesso', results))
        }
    })

})