// Lendo o ano de nascimento e calculando se já é possível a pessoa votar 

const anoNascimento = 2000;
const anoAtual = 2021;
const idade = (anoAtual - anoNascimento);
const tituloEleitor = false;

if (anoNascimento <= 2003 && tituloEleitor == true) {
    console.log(`Você já pode votar`);
} else if (anoNascimento <= 2003 && tituloEleitor == false) {
    console.log("Você já tem idade para votar mas precisa tirar o título de eleitor")
} else {
    console.log(`Você tem ${idade} anos e ainda não pode votar`);
}
