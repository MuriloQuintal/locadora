function fnCarregarDados() {
    const parametros = new URLSearchParams(window.location.search)
    const existe_categoria = parametros.has('categoria')
    const existe_ordem = parametros.has('ordem')

    let rota_categoria = ""
    if (existe_categoria) {
        rota_categoria = parametros.get('categoria') + "/"
    }
    let rota_ordem = ""
    if (existe_ordem) {
        rota_ordem = parametros.get('ordem') + "/"
    }

    console.log(rota_ordem)
    console.log(rota_categoria)

    fetch('http://localhost:3001/veiculos/' + rota_categoria + rota_ordem, { method: 'GET' })
        .then(response => response.json())
        .then((veiculos) => {
            veiculos.forEach(veiculo => {
                fnMontarCardVeiculo(veiculo)
            });
        })
        .catch(erro => console.log(erro.message))
}

// function fnMudarOrdem(valor) {
//     const url = new URL(window.location.href);
//     url.searchParams.set('ordem', valor); // Adiciona ou atualiza o ?ordem=...
//     window.location.href = url.href; // Recarrega com o novo filtro
// }



function fnMontarCardVeiculo(veiculo) {
    let cartao = `
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                <div class="card">
                    <img src="${veiculo.foto}"
                        class="card-img-top" alt="${veiculo.modelo}">
                    <div class="card-body">
                    <h5 class="card-modelo">${veiculo.modelo}</h5>
                        <h5 class="card-title">${veiculo.marca}</h5>
                          <p class="card-text">${veiculo.placa}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="h5 mb-0">R$ ${veiculo.valor_diaria}</span>
                            </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light">
                        <button class="btn btn-primary btn-sm" id=excluir>Excluir</button>
                    </div>
                </div>
            </div>
    `
    document.querySelector(".lista-veiculos").innerHTML += cartao
}
fnCarregarDados()