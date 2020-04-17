/* 
Pegar a hora direto do computador:
   var agora = new Date()
   var hora = agora.getHours()
*/
var hora = 24
console.log(`Agora são exatamente ${hora} horas.`)
if (hora == 24 || hora >= 1 && hora <= 5) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
} 