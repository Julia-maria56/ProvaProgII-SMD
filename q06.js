//Nome: Julia Maria Freitas Bezerra
// No JavaScript moderno, existe o método “flat()”, que cria um novo
// array concatenando todos os elementos de subarrays aninhados dentro dele.
// Faça uma função em Javascript chamada "minhaFlat(arr)" que receba como
// parâmetro um Array que pode conter outros Arrays aninhados em múltiplos níveis
// (ex: [1, [2, [3, 4], 5], 6]). A sua função deve retornar um único Array unidimensional
// contendo todos os elementos originais (ex: [1, 2, 3, 4, 5, 6]), "achatando" a
// estrutura.
// Regras e Restrições: 
// a) Você não pode utilizar o método nativo
// “Array.prototype.flat()”;
// b) A função deve testar se o parâmetro recebido é realmente um Array (use o
// método “Array.isArray()”). Caso não seja, a função deve retornar “null”;
// c) Sua solução deve ser capaz de lidar com qualquer nível de profundidade de
// aninhamento (Dica: pense em como uma chamada recursiva da própria função
// pode resolver o problema de estruturas dentro de estruturas).
// Faça um programa que teste a sua função com parâmetros válidos (vetores com
// diferentes profundidades de aninhamento) e parâmetros inválidos, mostrando os
// resultados no console.

function minhaFlat(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let novoArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let achatar = minhaFlat(arr[i]);
            for (let j = 0; j < achatar.length; j++) {
                novoArray.push(achatar[j]);
            }
        } else {
            novoArray.push(arr[i]);
        }
    }
    return novoArray;
}

//console.log(minhaFlat([1, [2, 3], 4]))
// [ 1, 2, 3, 4 ]

//console.log(minhaFlat("dmdi"))

//console.log(minhaFlat([[[1]], [2, 3], 4]))