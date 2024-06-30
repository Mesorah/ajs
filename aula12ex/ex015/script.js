function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] verifique os dados e tente novamente`)
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'crianca_h.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem_h.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto_h.jpg')
            } else {
                img.setAttribute('src', 'idoso_h.jpg')
            }
        }else {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'crianca_m.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem_m.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulta_m.jpg')
            } else {
                img.setAttribute('src', 'idosa_m.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}