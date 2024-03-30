const express = require("express");
const app = express();
app.listen(3000);

// middleware
app.use((req, res, next) => {
    console.log('teste');
    next();
})


app.get("/", (req, res) => {
    res.send("<h1>Teste1</h1>");
});
