var fome, sede, limpeza;
var nome;
const t0 = performance.now();

fome = 100;
sede = 100;
limpeza = 100;


console.time();


for(i=0;i<100000;i++){
    Fome();
}

console.timeEnd();

function primeira(){
    nome = prompt("Escolha o nome do seu treco", "TTTTT");
    if(nome == "Treco"){
        nome = "Que tal inventar um nome, seu criminoso."
    }  
    document.getElementById("treco").innerHTML = nome;
    window.location.href = "https://www.youtube.com/";
}

primeira();

function addLinha(){
    document.getElementById("ob2").innerHTML = ``;
}

function Fome(){
    document.getElementById("ob1").innerHTML = "Fome: " + fome + "%";//muda o texto da tag referenciada
    if(fome > 0){
        fome -= 1;
    }else{
        fome = 0;
    }
}

function clicar(){
    var hop = prompt("teste de destruição", "TTTT"); //o que eu escrever la na janela do prompt vai ser o valor desta variavel
    document.getElementById("ob1").innerHTML = hop;
}

/*1- Escreva um código que abra um popup do tipo prompt na janela.

  2- Se baseando no exercicio anterior agora capture o que foi escrito na janela de prompt
  dentro de uma variavel e analise se o valor dela é igual a iguana ou não se for escreva 
  bom dia.

  3- faça um codigo que chama um prompt e que capture o que foi escrito para substituir
  o texto dentro de uma tag dentro do código HTML pelo o que foi escrito dentro do 
  prompt.
*/

/*
var num = 3;

switch(num){
    case 0:
        alert("ola");
        break;
    case 5:
        alert("Gaston");
        break;
    case 8:
        break;
    default:
        print("gear");
        break;
}
*/