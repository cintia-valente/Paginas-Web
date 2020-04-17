var num = [5, 8 , 9, 3, 6]
num.push(1)
console.log(`Nosso vetor é o ${num}`)
num [1] = 7
num [6] = 0
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} elementos`)

/*for(let i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}


for (let i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}*/

let i = num.indexOf(5) //procura o valor 5 no vetor
if (i == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${i}`)
}

