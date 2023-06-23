// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

// Prática Guiada I
/*
function darOlaPessoa(nome){
    const frase = `Olá, ${nome}!`
    console.log(frase)
}
darOlaPessoa('Jordana')
darOlaPessoa('Brianna')
darOlaPessoa('Cora')

// declarando a mesma função, só que não nomeada

const darOlaPessoaExtra = function(nome){
    const frase = `Olá, ${nome}!`
    console.log(frase)
}
darOlaPessoaExtra('Belchior')
*/
// Prática Guiada II
/*
function operarNumero(numero) {
    //verifica paridade
const ehPar = numero % 2 === 0
    // soma com 10
const soma = numero + 10
    // multiplica por ele mesmo
    const multiplica = numero * numero
     // potência : numero ** 2

     // frase retornada
    const frase = `O número ${numero} é par? ${ehPar}. Somado com 10, o resultado é ${soma} e multiplicado por ele mesmo o resultado é ${multiplica}`
    return frase
}
    console.log(operarNumero(4))
    console.log(operarNumero(5))
    console.log(operarNumero(12))
*/

// Prática Guiada III

function verificarLoginESenha (login, senha) {


    const loginArmazenado = 'jordana-goes'
    const senhaArmazenada = '123abc'

    // verifica se o login é igual
    // se forem iguais, o resultado será true
    const comparaLogin = login === loginArmazenado

    // verifica se as senhas são iguais
    // se forem iguais, resultado será true
    const comparaSenha = senha === senhaArmazenada

    // verifica se ambas são true
    const verificaInfos = comparaLogin && comparaSenha
// frase de recado
const frase = `As informações de login estão corretas? ${verificaInfos}`

return frase
}
console.log(verificarLoginESenha)('jordana-goes,'123abc')
console.log(verificarLoginESenha)('jordana-goes', 'senha incorreta')
console.log(verificarLoginESenha)('jordana-goes, 'papapa')
console.log(verificarLoginESenha)('jordana-goes', 'naosei')