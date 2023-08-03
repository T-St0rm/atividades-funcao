const altura = 160
const altura_minima = 175

function condc(altura, altura_minima){
    let condiçao
    if (altura > altura_minima){
        condiçao = `altura: ${altura}, APROVADO`
    } else{
        condiçao =  `altura: ${altura}, REPROVADO`
    } return condiçao
}

const resultado = condc(altura, altura_minima)
console.log(resultado)
