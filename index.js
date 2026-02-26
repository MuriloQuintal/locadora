const express = require('express')
const app = express()
/* Indica que todas as requisições podem receber Body em JSON. A partir 
disso, o Express aplica um JSON.parse para o conteúdo recebido */
app.use(express.json())
app.get('/', function (req, res) {
res.setHeader('Access-Control-Allow-Origin', '*')
res.send('RentCar')
})

let mysql = require('mysql')
let conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "protejorentcar"
})


conexao.connect(function (erro) {
if (erro) {
console.log("Deu ruim na conexão \n");
throw erro;
} else {
console.log("Conexão deu bom \n")
}
})

conexao.query("SELECT * FROM veiculos", function (erro, dados, campos) {
console.log(dados)
res.send(dados)
})





app.listen(3001)