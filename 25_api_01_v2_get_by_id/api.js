// requires
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const mysql_config = require('./inc/mysql_config')
const functions = require('./inc/functions')

const API_AVAILABILITY = true;
const API_VERSION = '1.0.0';

// init server
const app = express();
app.listen(3000, () => { console.log('API is running'); });

// check if API is available
app.use((req, res, next) => {
    if(API_AVAILABILITY){
        next();
    } else {
        res.json(functions.response('warning', 'API is in maintenance. Sorry!', 0, null))
    }
})

// mysql connection
const connection = mysql.createConnection(mysql_config)

// cors
app.use(cors());

// ------------------------------------------------------------------
// routes
app.get('/', (req, res) => {
    res.json(functions.response('success', 'API is running', 0, null))
})

// ------------------------------------------------------------------
// endpoints
// ------------------------------------------------------------------

// get all tasks
app.get('/tasks', (req, res) => {
    connection.query('SELECT * FROM tasks', (err, rows) => {
        if (!err) {
            res.json(functions.response('success', 'success', rows.length, rows))
        } else {
            res.json(functions.response('error', err.message, 0, null))
        }
    })
})

// get task by id
app.get('/tasks/:id', (req, res) => {
    const id = req.params.id
    connection.query('SELECT * FROM tasks WHERE id = ?', [id] ,(err, rows) => {
        if (!err) {
            
            if (rows.length > 0) {
                res.json(functions.response('success', 'success', rows.length, rows))
            } else {
                res.json(functions.response('warning', 'Task not found', 0, null))
            }

        } else {
            res.json(functions.response('error', err.message, 0, null))
        }
    })
})

// ------------------------------------------------------------------
app.use((req, res) => {
    res.json(functions.response('warning', 'Route not found', 0, null))
})

