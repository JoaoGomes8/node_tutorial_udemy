const express = require('express');
const mysql = require('mysql2')
const mysql_config = require('./mysql_config')

const app= express()
app.listen(3000, () =>{
    console.log('Servidor em execução.');
})

// mysql connection
const connection = mysql.createConnection(mysql_config)

// routes
app.get('/', (req, res) => {

    let result = {
        status: 'sucess',
        message: null,
        data: null
    }

    connection.query("SELECT * FROM tasks", (err, results) => {
        if (err) {
            result.status = 'error';
            result.message = 'Erro na obtenção das tarefas';
            result.data = '';
            res.json(result)
        } else {
            result.status = 'sucess';
            result.message = 'Tarefas obtidas com sucesso';
            result.data = results;
            res.json(result)
        }
    })

})