const numeros = [3, 6, 47, 39, 10, 35, 28, 11]
var maior_num = numeros[0]
function maior_valor(numeros){
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] > maior_num)
        maior_num = numeros[i]
    }
    return maior_num
}

const resultado = maior_valor(numeros)
console.log(`maior numero: ${resultado}`)