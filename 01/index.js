const numeros = [3, 6, 47, 39, 10]

function somar(){
    let soma = 0
    for (let i = 0; i < numeros.length; i++){
        soma += numeros[i]
    } return soma
}

var resultado = somar()
console.log(resultado)