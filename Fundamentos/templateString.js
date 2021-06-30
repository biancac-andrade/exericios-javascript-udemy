const nome = 'Rebeca'
const concatenação = 'Olá ' + nome + '!'
const template = `
        Olá 
        ${nome}!`
console.log(concatenação, template)


//expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()  // pegar parametro texto e transformar em letras maiusculas
console.log(`Ei.......${up('cuidado')}!`)
