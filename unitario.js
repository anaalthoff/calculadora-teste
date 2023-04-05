const funcoes = require("./index")

function testadorFuncao(funcaonome,cenario,valorRes,valorEsp){

    if(valorRes===valorEsp){ console.log(`Teste da função ${funcaonome}: cenário ${cenario} aprovado.`)}
    
    else{console.log(`Teste da função ${funcaonome}: cenário ${cenario} reprovado.`)}
}

testadorFuncao(funcoes.somar.name,1,5,funcoes.somar(5,2))
testadorFuncao(funcoes.somar.name,2,10,funcoes.somar(3,3))
testadorFuncao(funcoes.dividir.name,1,5,funcoes.subtrair(8,8))
testadorFuncao(funcoes.dividir.name,2,0,funcoes.subtrair(2,2))