// Faça um programa que leia e valide as seguintes informações:
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Sexo: 'f' ou 'm';
// Estado Civil: 's', 'c', 'v', 'd';
// Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length

// Nome: maior que 3 caracteres;

let nome = "Bruna";
let idade = 15;
let salario = 1.500;
let sexo = "f";
let estadoCivil = "c";

if (nome.length >3) {
    console.log("Nome Validado");
} else {
    console.log("Digite novamente dentro das condições");
}