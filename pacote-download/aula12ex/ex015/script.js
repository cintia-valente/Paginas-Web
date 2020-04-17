function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano") 
    var res = document.getElementById("res")
    if (Number(fano.value.length) == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') /*img id='foto' no html*/

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bbmenino.png')
            }else if (idade < 21) {
                img.setAttribute('src', 'jovem_homem.png')
            }else if (idade < 50) {
                img.setAttribute('src', 'homem_adulto.png')
            }else {
                img.setAttribute('src', 'homem_idoso.png')
            }

        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bbmenina.png')
            }else if (idade < 21) {
                img.setAttribute('src', 'jovem_mulher.png')
            }else if (idade < 50) {
                img.setAttribute('src', 'mulher_adulta.png')
            }else {
                img.setAttribute('src', 'mulher_idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}