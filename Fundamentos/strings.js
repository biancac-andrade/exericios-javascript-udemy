const escola  = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))  // retorna vazio pq não tem nada pois o 4 que é letra r 
console.log(escola.charCodeAt(3))   // busca o valor da tabela unicode, pesquisar google
console.log(escola.indexOf(3))  //retorna o valor do terceiro 'algoritmo' que é 3 do cod3r

console.log(escola.substring(1)) //retorna o valor apartir do 2  'algoritmo' que é od3r do cod3r
console.log(escola.substring(0,3)) //retorna o valor apartir do 0  'algoritmo'  até o 3 .que é Cod do cod3r

console.log('Escola '.concat(escola).concat("!")) // adiciona "escola" + Cod3r que está como variavel escola e colando mais "!"
console.log('Escola ' + escola +"!")
console.log(escola.replace(3, 'a'))  //ele irá substituir o terceiro algoritmo que é o D por letra "a"
console.log(escola.replace(/\d/g, 'e'))  //ele irá substituir o a expressão regular  que pega todas as letras substitue tudo por letra "a"
console.log(escola.replace(/\w/g, 'a'))  //ele irá substituir o a expressão regular  que pega todas as letras substitue tudo por letra "a"

console.log('Ana,Maria,Pedro'.split(/./))
console.log('Ana,Maria,Pedro'.split(/,/))










