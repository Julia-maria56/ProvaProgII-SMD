//Nome: Julia Maria Freitas Bezerra
// Faça um programa que leia duas matrizes numéricas de entrada e
// realize o dot product delas, testando se possuem, realmente, valores numéricos.
// Para entendermos melhor como funciona o produto de matrizes, vejamos o texto
// a seguir.
// Mostre que seu programa funciona para valores de matrizes válidos e inválidos.
// Lembre de fazer uma função que leia do usuário os valores das matrizes.

function dotProductMatrizes(matrizA, matrizB) {
    let resultado = [];
    for (let i = 0; i < matrizA.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matrizB[0].length; j++) {
             if(typeof matrizA[i][j] !== "number" || typeof matrizB[i][j] !== "number" ){
                return false;
            }
            let soma = 0;
            for (let k = 0; k < matrizA[0].length; k++) {
                soma += matrizA[i][k] * matrizB[k][j];
            }
            resultado[i][j] = soma;
        }
    }
    return resultado;
}



// matrizA= [
//     [1,2],
//     [3,4]
// ];

// matrizB= [
//     [5,6],
//     [7,8]
// ];
// console.log(dotProductMatrizes(matrizA, matrizB));
// [ [ 19, 22 ], [ 43, 50 ] ]

matrizA= [
    [1,"V"],
    [3,4]
];

matrizB= [
    [5,6],
    [7,8]
];
console.log(dotProductMatrizes(matrizA, matrizB));