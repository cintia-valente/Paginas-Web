function multiplicar() {
    var numero = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (numero.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var num = Number(numero.value)
        tab.innerHTML = ''
        for (c = 0 ; c <= 10 ; c++) {
                var item = document.createElement('option')
                item.text = `${num} * ${c} = ${num*c}`
                item.value = `tab${c}`
                tab.appendChild(item)
        }
    }
}