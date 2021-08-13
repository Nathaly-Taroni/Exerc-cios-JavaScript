// Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor 
// seja inválido e continue pedindo até que o usuário informe um valor válido. 

const listaDeNotas = new Array(
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
);

let nota = 12;
let notaValida = false;

let contador = 0;
while(contador <=10) {
    if(listaDeNotas[contador] == nota) {
        notaValida = true;
        break;
    }
    contador += 1;
} 

console.log("Nota válida? ", notaValida);