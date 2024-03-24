const fs = require("fs");

// criar pasta
// fs.mkdirSync('logs')

// criar pasta (assíncrono)
// fs.mkdir('logs2', (err) =>{
//     if (err) {
//         console.log(err);
//     }
// })

// remover pasta
if (fs.existsSync("./logs")) {
  fs.rmdirSync("logs");
}

console.log("fim");
