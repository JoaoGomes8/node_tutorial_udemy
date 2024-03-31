const express = require("express");
const app = express();
app.listen(3000);

// middleware
app.use((req, res, next) => {
    console.log('teste');
    next();
})

app.use((req,res, next) => {
    req.requesTime = Date.now()
    next();
})


app.get("/", (req, res) => {
    console.log(req.requesTime);
    res.send("<h1>Teste1</h1>");
});
