const fs = require('fs');

// ASYNC
// fs.readFile('./dados.csv',(err, data)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// })

// SYNC
let dados = '';
if (fs.existsSync('./dados.csv')) {
    dados =  fs.readFileSync('./dados.csv')
    console.log(dados.toString());
} else {
    console.log('Ficheiro não existe');
}
console.log(dados.toString());

console.log('FIM');
