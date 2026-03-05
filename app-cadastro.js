function fnFazerLogin() {
let formDados = {
usuario: document.getElementById("_________").value,
senha: document.getElementById("_________").value
}
fetch('http://localhost:3001/login/', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(formDados)
})
.then(resposta => resposta.status)
.then((dados) => {
fnLimparCampos()
console.log(dados)
})
.catch(erro => console.log(erro.message))
}



function fnLimparCampos() {
    document.getElementById("reservar").reset()
}


function fnErro() {

    alert("Preencha todos os campos!")
}

function fnIncluirUsuario() {

    let formDados = {
        nome: document.getElementById("nome").value,
        login: document.getElementById("email").value,
        senha: document.getElementById("senha").value

    }
    console.dir(formDados)

    fetch('http://localhost:3001/cadastro/', {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(formDados)
    })

        .then(resposta => resposta.json())
        .then((dados) => {
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

// 




let btn_salvar = document.getElementById("btn-cadastro")

btn_salvar.addEventListener("click", function () {

    let nome = document.getElementById("nome").value
    let login = document.getElementById("email").value
    let senha = document.getElementById("senha").value



    if (nome === "" || login === "" || senha === "") {
    fnErro();
    return;
} else {
    fnIncluirUsuario()
    fnLimparCampos()
    alert("Cadastrado!");

}


})

// const toast = document.getElementById("liveToast")

// function fnMensagemPreencherCampos() {
//     const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast)
//     toastBootstrap.show()
// }