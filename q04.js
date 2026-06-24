//Nome: Julia Maria Freitas Bezerra
// Faça um programa que leia duas matrizes numéricas de entrada e
// realize o dot product delas, testando se possuem, realmente, valores numéricos.
// Para entendermos melhor como funciona o produto de matrizes, vejamos o texto
// a seguir.
// Mostre que seu programa funciona para valores de matrizes válidos e inválidos.
// Lembre de fazer uma função que leia do usuário os valores das matrizes.


// Seja A = [[1,2],[3,4]] e B = [[5,6],[7,8]], a matriz resultante será C
// C(0,0)  = (1*5) + (2*7) = 5 + 14 = 19;
// C(0,1)  = (1*6) + (2*8) = 6 + 16 = 22;
// C(1,0)  = (3*5) + (4*7) = 15 + 28 = 43;
// C(1,1)  = (3*6) + (4*8) = 18 + 32 = 50;

//Assim, para determinar C(l,c) = (matrizA(1,1) * matrizB(1,1) + (matrizA(1,2) * matrizB(2,1))



function dotProductMatrizes(matrizA, matrizB) { // função que recebe as duas matrizes
    let resultado = []; // nova matriz
    for (let i = 0; i < matrizA.length; i++) { // Percorre as linhas da matrizA
        //i representa a linha da matriz. No caso,
        //matrizA = [[1,2],[3,4]]; [1,2] => i = 0; [3,4] => i = 1
        resultado[i] = [];
        for (let j = 0; j < matrizB[0].length; j++) { 
            // Aqui, para cada linha percorrida da matriz A, j vai simbolizar a coluna de matriz B
            // matrizB B = [[5,6],[7,8]] => [5,7] => j = 0; [6,8] => j = 1;
            
            let soma = 0;

            for (let k = 0; k < matrizA[0].length; k++) {
                if(typeof matrizA[i][k] !== "number" || typeof matrizB[k][j] !== "number" ){
                return false;
            } 
                // Quando k = 0 => matrizA[0][0] * matrizB[0][0] = 1 * 5 = 5
                // Quando k = 1 => matrizA[0][1] * matrizB[1][0] = 2 * 7 = 14
                soma += matrizA[i][k] * matrizB[k][j];
             }
            resultado[i][j] = soma;
        }
    }
    return resultado;
}

// Quando i = 0:
// resultado[0] = [];
// resultado = [
//     []
// ];
// Entra no loop de j
// i = 0 e j = 0;
//k = 0 
//Executa:
//matrizA[0][0] * matrizB[0][0] => 5;
//k = 1
//matrizA[0][1] * matrizB[1][0] => 14
//soma = 14 + 5  = 19;
//resultado [i][j] = soma => No caso, soma = 19 e i = 0 e j = 0.


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
    [1,2],
    [3,4]
];

matrizB= [
    [5,6],
    [7,8]
];
console.log(dotProductMatrizes(matrizA, matrizB));