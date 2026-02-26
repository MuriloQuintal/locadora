function fnLimparCampos() {
    document.getElementById("pedido").reset()
}


function fnCadastrarPedido() {

    let formDados = {
        titulo:document.getElementById("titulo").value,
        preco:document.getElementById("preco").value,
        descricao:document.getElementById("descricao").value,
        avaliacao:document.getElementById("avaliacao").value,
        foto:document.getElementById("foto").value,
        categoria:document.getElementById("categoria").value,
        
    }
    console.dir(formDados)

    fetch('http://localhost:3001/pedido/', {
        method: 'POST',
        headers: { 'content-Type': 'application/json'},
        body: JSON.stringify(formDados)


        app.get("/pedido", function (req, res) {
    // res.setHeader('Access-Control-Allow-Origin','*')
    //res.send(lista_produtos)

    conexao.query("select * from clientes", function (erro, lista_clientes, campos) {
        console.log(lista_clientes);
        res.send(lista_clientes)
    })
})
