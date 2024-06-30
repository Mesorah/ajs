function contar() {
    let inicio = parseInt(window.document.getElementById('ini').value);
    let fim = parseInt(window.document.getElementById('fim').value);
    let passo = parseInt(window.document.getElementById('pas').value);
    let res = document.getElementById('res');

    res.innerHTML = ``

    if (passo <= 0) {
        window.alert('Passo inválido! Considerando PASSO 1');
        passo = 1;
    }

    if (!inicio || !fim || !passo) {
        window.alert('Por favor, preencha todos os campos.');
        return;
    }

    if (inicio <= fim) {
        for (let i = inicio; i <= fim; i += passo) {
            res.innerHTML += `${i} &#x1F449; `;
        }
    } else {
        for (let i = inicio; i >= fim; i -= passo) {
            res.innerHTML += `${i} &#x1F449; `;
        }
    }

    res.innerHTML += '\u{1F6A9}';
    
}