const valores = [7.7,8.9,6.3,9.2]
console.log([0], valores[3]) // buscou o terceiro string que é 9.2

console.log(valores[4])  //deu underfine

valores[4] = 10    //adicionou mais 10 na sequencia na variavel valores
console.log(valores)

console.log(valores.length) //mostra qtds de strings tem no valores 

valores.push({id: 3}, false, null, 'teste')
console.log(valores)


console.log(valores.pop()) //opo exigiu o texto teste
delete valores[0] //apagou o primeiro string que é 7.7 e teste
console.log(valores)



console.log(typeof valores)