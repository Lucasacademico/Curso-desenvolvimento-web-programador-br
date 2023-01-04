//var a = "Modo de atribuição 1";
var a;
var b = "Nova variavel B";
a = "Modo de atribuição 2";
a = "Valor atualizado da var A";
b = a;

console.log(b);


// Se não informarmos oq tem na var 'a', o console retornará na tela "undefined"
// Uma variavel deve sempre possuir um valor atribuido para para NÃO retornar um valor "undefined"
// Console retorna o valor "Modo de atribuição 1" - caso já declaramos o valor na var 'a' logo de inicio.
// Console retorna o valor "Modo de atribuição 2" - caso declaremos a var 'a' à parte.
// No JS o ';' é opcional no código, o professor sugere que coloquemos.
// Se após declararmos um valor para a var 'a' declararmos outro valor na var 'a' logo em seguida, o console...
    // ... irá printar o segundo valor atribuido.
        // OBS:O console sempre printará o ultimo valor atribuido à uma variavel
// Lembrando que a ordem deve ser sempre seguinda de maneira correta.
// Uma variavel pode ter seu nome com letras, palavras, e palavras com numeros
    // Não pode conter numero no inicio da variavel
        // Alguns caracteres especiais podem ser utilizados nos nomes de variaveis.
//ex de variaveis: "caixa", "a", "caixa_grande", "caixa_Grande-1".
// ex do que não pode: "1caixa", "Caixa"...
    //obs: a var "caixa_grande" é diferente de "caixa_Grande"