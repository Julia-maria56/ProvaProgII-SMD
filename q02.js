//Nome: Julia Maria Freitas Bezerra

// Em nossos exercícios, vimos o método “indexOf()” que recebe como
// parâmetro um valor a ser buscado no Array e o índice do Array a partir do qual
// deve ser procurado o valor buscado. Caso o segundo parâmetro seja omitido, é
// considerado o valor “0” (zero) como o índice inicial do vetor. Caso o valor seja
// encontrado no Array, o valor do índice onde ele está é retornado; caso contrário, é
// retornado o valor “-1”.
// 
//  Crie uma função em Javascript, chamada
// “minhaIndexOf(arr,valor,inicio)” que se comporte conforme o método descrito.
// Faça um programa que use esta função e que demonstre que ela se comporta
// como deveria, conforme receba parâmetros válidos ou inválidos.

function minhaIndexOf(arr, valor, inicio) {
    if (inicio == undefined) {
        inicio = 0;
    }

    if(typeof inicio !== "number"){
        return -1;
    }

    for (let index = inicio; index < arr.length; index++) {
        if (arr[index] == valor) {
            return index;
        }
    }
    return -1;
}

//let meuArr = [1, 2, 4, 3, 2, 1, 3, 4];
//console.log(minhaIndexOf(meuArr, 2, "a"));
//-1

//let meuArr = [1, 2, 4, 3, 2, 1, 3, 4];
//console.log(minhaIndexOf(meuArr, 2, 20));
//-1

// let meuArr = [1, 2, 4, 3, 2, 1, 3, 4];
// console.log(minhaIndexOf(meuArr, 2, "b"));
//-1

// let meuArr = [1, 2, 4, 3, 2, 1, 3, 4];
// console.log(minhaIndexOf(meuArr, 2));
//1

// let meuArr = [1, 2, 4, 3, 2, 1, 3, 4];
// console.log(minhaIndexOf(meuArr, 3,3));
//3
