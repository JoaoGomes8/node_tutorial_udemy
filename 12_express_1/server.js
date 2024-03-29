const express = require("express");
// const server = express()
const app = express();

// routes
app.get("/", (req, res) => {
  res.status(200).send("Olá ExpressJs!");
});

app.get("/about", (req, res) => {
  res.status(200).send({name: "joao"});
});

app.use((req, res) =>{
    res.status(404).send('Erro!')
})

app.listen(3000);
