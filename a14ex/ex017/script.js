function calcular() {
    var numero = parseInt(window.document.getElementById('inum').value)
    var res = window.document.getElementById('res')

    for (var n = 1; n <= 10; n++) {
        res.innerHTML += `${numero} x ${n} = ${numero * n} <br>`
    }
}