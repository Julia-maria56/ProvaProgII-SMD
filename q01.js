//Nome: Julia Maria Freitas Bezerra
// Nas listas de exercícios e nas aulas de nossa disciplina você teve
// contato com o método (função) “slice()” que extrai uma subarray a partir de um
// determinado ponto inicial (chamaremos de “inicio”) até um ponto final
// (chamaremos “fim”). Se colocarmos um valor negativo como parâmetro para este
// método, teremos como resultado uma posição relativa ao parâmetro, decrescida
// do valor absoluto do parâmetro, ou seja, se passarmos como parâmetro “-2”, isso
// equivale à posição final do Array, menos o valor “2” (“fim - 2”). Vejamos um
// exemplo:
// let arr = [1,2,3,4,5];
// let resultado = arr.slice(-2); // inicio = fim-2 e fim=arr.length
// console.log(resultado);
// > [4,5] //Retornou os valores iniciados na posição 2 (4 - 2) e
// terminados em 3 (arr.length)
// No exemplo acima, se colocarmos “arr.slice(0,2)”, ele retorna o Array “[1,2,3]”. Se
// passarmos parâmetros com reais (como “1.5”), ele usa o valor inteiro mais
// próximo do valor real (no caso de “1.5”, seria “1”), sendo este valor inteiro menor
// que o valor real. Se passarmos como parâmetro um valor diferente Number, ele
// retorna um Array vazio “[]”.

// Faça uma função Javascript, chamada “minhaSlice(arr,inicio,fim)”, que receba
// como parâmetros um arr de valores numéricos (você deve testar se são
// numéricos, caso contrário, a função deve retornar null); o valor de início (“inicio”)
// e de final (“fim”), ambos do tipo Number e inteiros. A função deve se comportar
// como a função “slice()” descrita anteriormente, inclusive, testando os valores
// diferentes de inteiro, retornando “[]”, para estes casos, e aceitando como
// parâmetro os valores inteiros negativos como parâmetro.
// Faça um programa que teste essa função criada com valores válidos e inválidos,
// mostrando que seu código funciona conforme os requisitos da função
// (funcionalidades ou “coisas que se deseja que a função faça”), descritos aqui.


// testando os valores diferentes de inteiro, retornando “[]”, para estes casos
// aceitando como parâmetro os valores inteiros negativos como parâmetro.

function minhaSlice(arr, inicio, fim) {
    let apenasNumerosNoArray = true;
    let novoArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            apenasNumerosNoArray = false;
            return null;
        } else {
            apenasNumerosNoArray = true;
        }
    }

    
    if (apenasNumerosNoArray) {
        if (fim === undefined) {
            fim = arr.length;
        } 
        if (!Number.isInteger(inicio) || !Number.isInteger(fim)) {
            return [];
        } else {
            if(inicio < 0 ){
                inicio = arr.length + inicio;
            }
            if(fim < 0 ){
                fim = arr.length + fim;
            }
            if( inicio >= fim){
                console.log("Mesmos valores de início e de fim ");
                return;
            }
            
            for (let j = inicio; j < fim; j++) {
                novoArray.push(arr[j])
            }
            return (novoArray)
        }


    }


}

// meuArray = [1, 2, 2, 3, 4, 5]
// console.log(minhaSlice(meuArray, 2, 5));

//Testes

// meuArray = [1, "a", 2, 3, 4, 5]
// console.log(minhaSlice(meuArray, 2, 5));
//null

// meuArray = [1, 2, 2, 3, 4, 5]
// console.log(minhaSlice(meuArray, 2.6, 5));
//[]

// meuArray = [1, 2, 2, 3, 4, 5]
// console.log(minhaSlice(meuArray, -1, 5));
// Mesmos valores de início e de fim 

// meuArray = [1, 2, 2, 3, 4, 5]
// console.log(minhaSlice(meuArray, 1, -5));
// Mesmos valores de início e de fim 

// meuArray = [1, 2, 2, 3, 4, 5]
// console.log(minhaSlice(meuArray, 1, -4));
//[2]

// meuArray = [1, 2, 2, 3, 4, 5]
// console.log(minhaSlice(meuArray, -3, 4));
//[3]

// meuArray = [1, 2, 2, 3, 4, 5]
// console.log(minhaSlice(meuArray, 1, 4));
// [ 2, 2, 3 ]

// meuArray = [1, 2, 2, 3, 4, 5]
// console.log(minhaSlice(meuArray, 1));

