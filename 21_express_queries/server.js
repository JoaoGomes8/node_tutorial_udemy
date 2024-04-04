const express = require("express");
const mysql = require("mysql2");

const app = express();
app.listen(3000, () => {
  console.log("Servidor em execução");
});

// criar a ligação
const connection = mysql.createConnection({
  host: "localhost",
  user: "user_bd_tasks",
  password: "vLjFSIfTHw33kCiV",
  database: "nodejs_tasks",
});

connection.connect((error) => {
  if (error) {
    console.log("Erro na conexão ao MySQL: " + error.stack);
    return;
  }
  console.log("Conexão com sucesso");
});

app.get("/", (req, res) => {
  // query
  connection.query("SELECT * FROM tasks", (err, results, fields) => {
    if (err) {
      console.log(err.message);
      res.send("Erro ao obter a lista de tarefas");
    } else {
      res.send(results);
    }
  });
});
