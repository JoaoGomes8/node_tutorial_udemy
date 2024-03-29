const express = require("express");
const app = express()
app.listen(3000)

// routes
app.get("/", (req, res) => {
    res.sendFile('./views/home.html', {root: __dirname});
})
app.get("/services", (req, res) => {
    res.sendFile('./views/services.html', {root: __dirname});
})
app.get("/about", (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname});
})
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
})
