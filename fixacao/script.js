// Resolva o Exercício de Fixação!

function verificarMaiorIdade(nome, anoDeNascimento, anoAtual){
  
    const idade = anoAtual - anoDeNascimento 

   const ehMaior = idade >= 18

   
   
    const frase = `${nome} é maior de idade? ${ehMaior}`

    return frase


}


const pessoa1 = verificarMaiorIdade('jordana', 1989, 2023)
console.log(pessoa1)
const pessoa2 = verificarMaiorIdade('belchior', 2021, 2023)
console.log(pessoa2)
const pessoa3 = verificarMaiorIdade('renata', 1989, 2023)
console.log(pessoa3)
const pessoa4 = verificarMaiorIdade('regina', 1950, 2023)
console.log(pessoa4)