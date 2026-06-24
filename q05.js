//Nome: Julia Maria Freitas Bezerra
// Em projetos de Autoração Multimídia e desenvolvimento web, é
// comum criarmos ferramentas de busca que destacam visualmente termos
// específicos para o usuário. Pensando nisso, escreva uma função em JavaScript
// que receba dois parâmetros: um texto base (string) e uma substring de busca
// (string).
// A função deve localizar todas as ocorrências exatas da substring dentro do texto
// (a busca deve ser sensível a letras maiúsculas e minúsculas, ou seja,
// case-sensitive) e adicionar as tags HTML “<mark>” e “</mark>” imediatamente
// antes e depois de cada ocorrência encontrada.
// Após a formatação, a função deve retornar à nova string resultante.

// Além do comportamento padrão, sua função deve tratar as seguintes exceções:
// a) Busca sem Resultados: Caso nenhuma ocorrência da substring seja
// encontrada no texto, a função deve retornar o valor primitivo “null”.
// b) Validação de Tipos: Verifique se os dois parâmetros passados são
// estritamente do tipo string. Caso algum dos parâmetros seja de outro tipo
// de dado (como número, objeto ou indefinido), a função deve interromper a
// execução e retornar o valor numérico “-1”.
// Após implementar a função, construa um programa de testes chamando a função
// criada com diferentes argumentos. Seu programa deve exibir no console os
// resultados para comprovar o funcionamento correto nos seguintes cenários
// obrigatórios:
// ● Parâmetros válidos onde o termo aparece múltiplas vezes no texto;
// ● Parâmetros válidos onde o termo não existe no texto;
// ● Parâmetros inválidos (onde pelo menos um dos valores enviados não é
// uma string).


function encontrarString(texto, buscar){
    let textoNovo = "";
    if(typeof texto !== "string" || typeof buscar !== "string"){
        return -1;
    } 
    if(texto.includes(buscar)){
        textoNovo = texto.replaceAll(buscar, `<mark>${buscar}</mark>`)
        console.log(textoNovo)
    } else{
        return null;
    }
    
}

encontrarString("Mas eu não mas eu não mas eu não mas eu não", "mas");
// Mas eu não <mark>mas</mark> eu não <mark>mas</mark> eu não <mark>mas</mark> eu não

console.log(encontrarString("Mas eu não mas eu não mas eu não mas eu não", "MAS"));
// null

console.log(encontrarString("Mas eu não mas eu não mas eu não mas eu não", 135));
// -1
