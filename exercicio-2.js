// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao 
//nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações. 

let nome = "Joao";
let senha = "Joao";

if(nome == senha) {
    console.log("Erro...\nVocê digitou a senha igual ao nome, por favor refaça");
} else {
    console.log("Usuário e senha válidos!");
}
