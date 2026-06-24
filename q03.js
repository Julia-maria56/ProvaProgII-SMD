//Nome: Julia Maria Freitas Bezerra

// Faça um programa que leia dois Arrays de valores numéricos
// (Number) fornecido pelo usuário, no formato “[n,n,n]”, testando se os valores do
// Arrays digitados são realmente numéricos (Number), retornando uma mensagem
// de erro caso os valores não sejam válidos. Caso sejam válidos, você deverá
// executar uma operação de produto escalar dos Arrays fornecidos. Note que você
// deverá criar uma função de multiplicação de vetores (que pode chamar de
// “produtoEscalarVet(a,b)”).
// O Produto escalar de dois vetores é dado por:
// Por exemplo:
// [1,2,3,4] . [2,5,6,7] = (1 x 2) + (2 x 5) + (3 x 6) + (4 x 7) = 2 + 10 + 18 + 28 = 58

function produtoEscalarVet(v1, v2){
    let soma = 0;
    let multiplicacao = 1;
    if(v1.length > 3 || v2.length > 3){
        return console.log("Array inválido");
    }
    for(let i = 0; i<v1.length; i++){
        if(typeof( v1[i] || v2[i]) !== "number" ){
            return console.log("Array inválido");
        }
        multiplicacao = v1[i] * v2[i];
        soma = soma + multiplicacao;
    }
    console.log(soma)
}

// let v1 = [1,2,3];
// let v2 = [4,5,6];
// return produtoEscalarVet(v1, v2)
//32

// let v1 = [1,2,3,4];
// let v2 = [4,5,6];
// return produtoEscalarVet(v1, v2)
// Array inválido

// let v1 = [1,2,"d"];
// let v2 = [4,5,6];
// return produtoEscalarVet(v1, v2)
// Array inválido

// let v1 = [4,5,9];
// let v2 = [29,35,96];
// return produtoEscalarVet(v1, v2)
//1155