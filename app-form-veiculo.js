function fnLimparCampos() {
    document.getElementById("reservar").reset()
}


function fnErro() {

    alert("Preencha todos os campos!")
}

function fnIncluirVeiculo() {

    let formDados = {
        modelo: document.getElementById("modelo").value,
        marca: document.getElementById("marca").value,
        placa: document.getElementById("placa").value,
        categoria: document.getElementById("categoria").value,
        valor_diaria: document.getElementById("diaria").value,
        foto: document.getElementById("foto").value

    }
    console.dir(formDados)

    fetch('http://localhost:3001/veiculo/', {
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




let btn_salvar = document.getElementById("btn-incluir")

btn_salvar.addEventListener("click", function () {

    let modelo = document.getElementById("modelo").value
    let marca = document.getElementById("marca").value
    let placa = document.getElementById("placa").value
    let categoria = document.getElementById("categoria").value
    let valor_diaria = document.getElementById("diaria").value
    let foto = document.getElementById("foto").value


    if (modelo === "" || marca === "" || placa === "" || categoria === "" || valor_diaria === "" || foto ==="") {
    fnErro();
    return;
} else {
    fnIncluirVeiculo()
    fnLimparCampos()
    alert("Reserva Realizada!");

}


})

// const toast = document.getElementById("liveToast")

// function fnMensagemPreencherCampos() {
//     const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast)
//     toastBootstrap.show()
// }