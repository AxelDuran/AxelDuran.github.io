//Atributo Basico
var lvl = 0; //Level
var chispe = 0; //Xp
var pf = 0; //Pontos de Força
var pd = 0; //Pontos de destreza
var pc = 0; //Pontos de constituição
var pi = 0; //Pontos de inteligencia
var ca = 0; //Pontos de carisma
var sa = 0; //Pontos de sabedoria
//--End

//Pericia
var acro = pd; //Acrobacia
var ades = sa; //Adestrar
var arca = pi; //Arcana
var atle = pd; //Atletismo
var enga = pc; //Enganação
var intu = pc; //Intuição
var inti = pc; //Intimidação
var sobr = sa; //Sobrevivencia
var inves = pi; //Investigação
var medi = sa; //Medicina
var natu = pi; //Natureza
var perep = sa; //Percepção
var perfom = pc; //Performace
var Persu = pc; //Persuasão
var pres = pd; //Prestidigitação
var furt = pd; //Furtividade
//--End




//Div Esquerda Principal
function nameEdit(){
    var nome = prompt("Digite o nome do personagem");
    document.getElementById("nome").innerHTML = "Nome: " + nome;
}

function ClassEdit(){
    var nome = prompt("Digite a classe do personagem");
    document.getElementById("classe").innerHTML = "Classe: " + nome;
}

function RacaEdit(){
    var raca = prompt("Coloque o nome da sua raça");
    document.getElementById("raca").innerHTML = "Raça: " + raca;
}

function AddLevel(){
    lvl += 1;
    document.getElementById("lvl").innerHTML = "Nível: " + lvl;
}

function RemoveLevel(){
    lvl -= 1;
    document.getElementById("lvl").innerHTML = "Nível: " + lvl;
    if(lvl <= 1){
        lvl = 1;
    }
}

function AddXp10(){
    chispe += 10;
    document.getElementById("xp").innerHTML = "Xp: " + chispe;
}

function AddXp(){
    chispe += 1;
    document.getElementById("xp").innerHTML = "Xp: " + chispe;
}

function RemoveXp(){
    chispe -= 1;
    if(chispe <= 1){
        chispe = 0;
    }
    document.getElementById("xp").innerHTML = "Xp: " + chispe;
}

function RemoveXp10(){
    chispe -= 10;
    if(chispe <= -1){
        chispe = 0; 
    }
    document.getElementById("xp").innerHTML = "Xp: " + chispe;
}
//--End



//Div direita Atributos
function AddForca(){
    pf += 1
    document.getElementById("forca").innerHTML = "Pontos de Força: " + pf;
}

function RemoveForca(){
    pf -= 1
    document.getElementById("forca").innerHTML = "Pontos de Força: " + pf;
}

function AddDestreza(){
    pd += 1
    document.getElementById("destre").innerHTML = "Pontos de Destreza: " + pd;
}

function RemoveDestreza(){
    pd -= 1
    document.getElementById("destre").innerHTML = "Pontos de Destreza: " + pd;
}

function AddConsti(){
    pc += 1
    document.getElementById("consti").innerHTML = "Pontos de Constituição: " + pc;
}

function RemoveConsti(){
    pc -= 1
    document.getElementById("consti").innerHTML = "Pontos de Constituição: " + pc;
}

function AddInte(){
    pi += 1
    document.getElementById("intel").innerHTML = "Pontos de Inteligencia: " + pi;
}

function RemoveInte(){
    pi -= 1
    document.getElementById("intel").innerHTML = "Pontos de Inteligencia: " + pi;
}

function AddCari(){
    ca += 1
    document.getElementById("cari").innerHTML = "Pontos de Carisma: " + ca;
}

function RemoveCari(){
    ca -= 1
    document.getElementById("cari").innerHTML = "Pontos de Carisma: " + ca;
}

function AddSabe(){
    sa += 1
    document.getElementById("sabe").innerHTML = "Pontos de Sabedoria: " + sa;
}

function RemoveSabe(){
    sa -= 1
    document.getElementById("sabe").innerHTML = "Pontos de Sabedoria: " + sa;
}
//--End



//Pericia1-Axel
function AddAcro(){
    acro += 1;
    if(acro >= 10)
        acro = 10 + pd;
}
function ReAcro(){
    acro -= 1
    if(acro <= 0)
        acro = 0 + pd;
}




// Pericia2-Gui