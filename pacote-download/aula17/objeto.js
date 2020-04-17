let amigo = {nome: 'Cíntia', 
sexo: 'F', 
peso: 58,
engordar(p=0) {
    console.log('Engordou')
    this.peso += p
}}
console.log(`${amigo.nome} pesava ${amigo.peso}kg.`)
amigo.engordar(2)
console.log(`${amigo.nome} agora pesa ${amigo.peso}kg.`)