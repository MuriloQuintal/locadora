function fnLimparCampos() {
    document.getElementById("reservar").reset()
}


function fnCadasCadastrarReserva() {

    let formDados = {
        nome:document.getElementById("nome").value,
        email:document.getElementById("email").value,
        categoria:document.getElementById("categoria").value

    }
    console.dir(formDados)

    fetch('http://localhost:3001/clientes/', {
        method: 'POST',
        headers: { 'content-Type': 'application/json'},
        body: JSON.stringify(formDados)
})

.then(resposta => resposta.json())
.then((dados)=>{
    fnLimparCampos()
     console.log(dados)

})
.catch(erro => console.log(erro.message))
}


    //     app.get("/clientes", function (req, res) {
    // res.setHeader('Access-Control-Allow-Origin','*')
    // //res.send(lista_clientes)

    // conexao.query("select * from clientes", function (erro, lista_clientes, campos) {
    //     console.log(lista_clientes);
    //     res.send(lista_clientes)
    
})

let btn_salvar = document.getElementById("btn-reservar")

btn_salvar.addEventListener("click", function () {
    fnCadasCadastrarReserva()
  })