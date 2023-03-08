function primeira(fato = 0, resultado = 0){
    resultado = fato % resultado;
    //resultado = resultado + fato;
    //resultado = resultado - fato;
    //resultado = resultado * fato; faz multiplicação
    //resultado = resultado / fato; faz a divisão

    if(resultado != 0){
        console.log("O resto foi de: " + resultado + "." + " Seu número é impar brother"); //concatenei
    }else{
        console.log("O resto foi de: " + resultado + "." + " Seu número é par");
    }
}

// = -> recebe
// > -> maior que
// < -> menor que
// ! -> porta logica NOT
// && -> porta logica AND
// || -> porta logica OR
// == -> igual
// != -> diferente
// >= -> maior igual
// <= -> menor igual
// // -> comentário
// "" -> indica uma String

/*Fazer um código que tenha uma função com dois argumentos, sendo o primeiro argumento para
definir uma mensagem a ser exibida e o segundo argumento para apresentar a idade da pessoa
que chamou a função*/

/*function exe1(prim, seg){
    console.log(prim + seg);
}

exe1("Bom dia ", 28);*/

/*Fazer um código com uma função que recebe dois argumentos e soma eles, depois a função
imprime o resultado*/
function exe2(um, dois, tres){
    var result = um + (dois + tres);
    console.log(result);
}


/*fazer uma função com dois argumentos que imprime esses dois argumentos*/

function exe3(uma, duas){
    if(uma >= 0 && uma <= 10){
        console.log("seu numero é positivo");
    }
    else{
        console.log("Seu numero é negativo");
    }

    if((duas >= 0 || duas <= 10) && uma > -1){
        console.log("seu numero dois também é positivo");
    }
    else{
        console.log("Seu numero é negativo");
    }
}

/*Fazer um código com uma função que calcula o resto de dois argumentos dados ao chamar a função
e caso esse valor esteja entre 0 e 100 ele imprime uma resposta caso contrário ele imprime outra*/

function MudaTexto(){
    var texto1 = document.getElementById("text1");
    texto1.innerHTML = "tartarugas ninjas";
    prompt("aperta um botão ai");
}

/*
  alert() -> cria uma janela com uma mensagem 
  confirm() -> cria uma janela com uma mensagem e dois botões
  prompt() -> cria uma janela com uma mensagem mas tem um input de texto
*/