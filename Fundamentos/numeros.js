const peso1 = 1.0
const peso2 = Number ('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // isInteger é valor inteiros
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.8998
const avaliacao2 = 6.2323

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)



//console.log(Number.isInteger(media))
console.log(media.toFixed(2))  // escolhendo numero de decimal apos ponto
console.log(media.toString(2))  // colocando quantidade dentro do (2) converte ponto flutuante em valor binário
console.log(typeof media)  //mostra o tipo do valor que retorna

//console.log(Number.isInteger(avaliacao2))



