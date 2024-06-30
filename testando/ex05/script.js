var lista = []


function verificar() {
    var num = parseInt(window.document.getElementById('inum').value);

    if (!num) {
        window.alert(`Por favor, preencha todos os campos.`);
        return;
    } 
    
    if (num > 100 || num < 1) {
        window.alert(`Valor inválido`);
        return;
    }

    if (lista.indexOf(num) !== -1) {
        window.alert(`Este número já esta na lista`);
        return;
    }

    adicionar(num);
}

function adicionar(n) {
    let resposta = window.document.getElementById('res')
    let desaparecer_info_finalizar = window.document.getElementById('fin');
    lista.push(n);
    desaparecer_info_finalizar.innerHTML = '';
    resposta.innerHTML = '';

    lista.forEach(function(valor) {
        resposta.innerHTML += `Valor ${valor} adicionado<br>`;
    });

}

function finalizar() {
    let resposta = window.document.getElementById('fin');

    resposta.innerHTML = '';
    
    if (lista.length === 0) {
        window.alert(`Nenhum valor foi adicionado à lista.`);
        return;
    } 

    tamanho_lista = lista.length;
    resposta.innerHTML += `Ao todo, temos ${tamanho_lista} números cadastrados <br>`;

    lista.sort(function(a, b) { return a - b; });
    resposta.innerHTML += `O maior valor informado foi ${lista[tamanho_lista - 1]} <br>`;

    resposta.innerHTML += `O menor valor informado foi ${lista[0]} <br>`;

    let soma = 0;
    for (let num of lista) {
        soma += num
    }

    resposta.innerHTML += `Somando todos os valores temos ${soma} <br>`
    
    let media = soma / tamanho_lista
    let media_arredondada = Math.round(media)
    resposta.innerHTML += `A média dos valores digitados é ${media_arredondada} <br>`

}