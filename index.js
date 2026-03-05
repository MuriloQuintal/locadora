const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended:true}))
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors())

// app.use(express.json())
// app.get('/', function (req, res) {
// res.send('RentCar')
// })

app.use(express.json())

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

// app.get("/clientes", function (req, res) {
// res.setHeader('Access-Control-Allow-Origin', '*')
// res.send('clientes')

//     })
// })

app.post("/clientes/", function (req, res) {

    const data = req.body;
    conexao.query(`INSERT INTO clientes set ?`, [data],
        function(erro, resultado){
        if(erro) {
            res.json(erro);
        }
            res.send(resultado.insertId)
    });
})


// app.get("/validar", function (req, res) {
//     // res.setHeader('Access-Control-Allow-Origin','*')
//     //res.send(lista_produtos)

//     conexao.query("select * from clientes where nome = ", function (erro, lista_produtos, campos) {
//         console.log(lista_produtos);
//         res.send(lista_produtos)
//     })
// })


// const lista_clientes = [
//     {
//         "nome": "Red Nike",
//         "email":"https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxzaG9lfGVufDB8MHx8fDE3MjEwNDEzNjd8MA&ixlib=rb-4.0.3&q=80&w=1080",
//         "categoria": "Tênis leve, com design versátil e acabamento moderno, perfeito para acompanhar sua rotina.",
    
//     }

// ]

// app.get("/teste", function (req, res) {
//     // res.setHeader('Access-Control-Allow-Origin','*')
//     res.send(lista_clientes)
// })


app.post("/veiculo/", function (req, res) {

    const data = req.body;
    conexao.query(`INSERT INTO veiculos set ?`, [data],
        function(erro, resultado){
        if(erro) {
            res.json(erro);
        }
            res.send(resultado.insertId)
    });
})


app.post("/login/", function (req, res) {

    const data = req.body;
    conexao.query(`INSERT INTO veiculos set ?`, [data],
        function(erro, resultado){
        if(erro) {
            res.json(erro);
        }
            res.send(resultado.insertId)
    });
})


app.get("/veiculos", function (req, res) {
 

    conexao.query("select * from veiculos", function (erro, lista_veiculos, campos) {
        console.log(lista_veiculos);
        res.send(lista_veiculos)
    })
})

app.get("/veiculos/:categoria", function (req, res) {

    const categoria = req.params.categoria
    conexao.query(`select * from veiculos where categoria = '${categoria}'`, function (erro, dados, campos) {
        res.send(dados)
    })
})

app.get("/veuclos/:categoria/:ordem", function (req, res) {
    // res.setHeader('Access-Control-Allow-Origin','*')
    //res.send(lista_produtos)
    const categoria = req.params.categoria
    const ordem = req.params.ordem

    conexao.query(`select * from veiculos where categoria = '${categoria}' order by ${ordem}`, function (erro, dados, campos) {
        res.send(dados)
    })
})



app.listen(3001)