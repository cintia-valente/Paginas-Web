var numero = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function isLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { //valor está na lista
        return true
    } else {
        return false
    }
}

function adicionar() {
    var num = Number(numero.value)
    if (isNumero(num) && !isLista(num, valores)) {
        valores.push(num)
        var item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (let i in valores) {
            if (valores[i] > maior)
                maior = valores[i]
            if (valores[i] < menor)
                menor = valores[i]
            
            soma += valores[i]
        }
        media = soma / valores.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}