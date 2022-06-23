var ponto = 0;

function store(){
    sessionStorage.setItem("ponto", ponto);
    location.href="Final.html";
}

function get(){
    var ponton = sessionStorage.getItem("ponto");
    console.log(ponton);
}

function atualisaPt(){
    ponto = sessionStorage.getItem("ponto");
    if (ponto == 1){
        console.log('1');
        document.getElementById('pt').innerHTML = "Sua nota foi: 1, tem que melhorar";
    }
    if (ponto == 11){
        console.log('2');
        document.getElementById('pt').innerHTML = "Sua nota foi: 2, tem que melhorar";
    }
    if (ponto == 111){
        console.log('3');
        document.getElementById('pt').innerHTML = "Sua nota foi: 3, tem que melhorar";
    }
    if (ponto == 1111){
        console.log('4');
        document.getElementById('pt').innerHTML = "Sua nota foi: 4, ta bom mas da para melhorar";
    }
    if (ponto == 11111){
        console.log('5');
        document.getElementById('pt').innerHTML = "Sua nota foi: 5, ta bom mas da para melhorar";
    }
    if (ponto >= 111111){
        console.log('6');
        document.getElementById('pt').innerHTML = "Sua nota foi: 6, perfeito";
    }
}

function resposta(){
    var escolha1 = document.getElementById('la');
    var escolha2 = document.getElementById('lb');
    var escolha3 = document.getElementById('lc');
    var escolha4 = document.getElementById('ld');

    if (escolha1.checked){
        alert('errou');
        ponto = sessionStorage.getItem("ponto");
    }
    if (escolha2.checked){
        alert('Correto!');
        ponto = sessionStorage.getItem("ponto");
        ponto += 1;
    }
    if (escolha3.checked){
        alert('errou');
        ponto = sessionStorage.getItem("ponto");
    }
    if (escolha4.checked){
        alert('errou');
        ponto = sessionStorage.getItem("ponto");
    }
}