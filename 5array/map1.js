const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e,){ // função map recebe como parâmetro uma callback, que por sua vez recebe 3 parâmetros: 1) value, 2) indice, 3) array                                    
    return e * 2  // nesse caso a callback apenas irá multiplicar o valor "e" por 2 
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(paraDinheiro)
console.log(resultado)

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // Enquanto o retorno da função for um array é possível chamar novamente a função map
console.log(resultado)

