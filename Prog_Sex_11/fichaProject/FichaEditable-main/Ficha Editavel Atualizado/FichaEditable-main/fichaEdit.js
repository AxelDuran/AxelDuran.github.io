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
var acro = pc; //Acrobacia
var ades = sa; //Adestrar
var arca = pi; //Arcana
var atle = pc; //Atletismo
var enga = ca; //Enganação
var intu = sa; //Intuição
var inti = ca; //Intimidação
var sobr = sa; //Sobrevivencia
var inves = pi; //Investigação
var medi = sa; //Medicina
var natu = pi; //Natureza
var perep = sa; //Percepção
var perfom = ca; //Performace
var Persu = ca; //Persuasão
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
    Addpres()
    AddFurt()
    document.getElementById("destre").innerHTML = "Pontos de Destreza: " + pd;
}

function RemoveDestreza(){
    pd -= 1
    Repres()
    ReFurt()
    document.getElementById("destre").innerHTML = "Pontos de Destreza: " + pd;
}

function AddConsti(){
    pc += 1
    AddAcro()
    AddAtle()
    document.getElementById("consti").innerHTML = "Pontos de Constituição: " + pc;
}

function RemoveConsti(){
    pc -= 1
    ReAcro()
    ReAtle()
    document.getElementById("consti").innerHTML = "Pontos de Constituição: " + pc;
}

function AddInte(){
    pi += 1
    Addnatu()
    AddArca()
    Addinves()
    document.getElementById("intel").innerHTML = "Pontos de Inteligencia: " + pi;
}

function RemoveInte(){
    pi -= 1
    Renatu()
    ReArca()
    Reinves()
    document.getElementById("intel").innerHTML = "Pontos de Inteligencia: " + pi;
}

function AddCari(){
    ca += 1
    AddEnga()
    Addinti()
    Addperfom()
    AddPersu()
    document.getElementById("cari").innerHTML = "Pontos de Carisma: " + ca;
}

function RemoveCari(){
    ca -= 1
    RePersu()
    ReEnga()
    Reinti()
    Reperfom()
    document.getElementById("cari").innerHTML = "Pontos de Carisma: " + ca;
}

function AddSabe(){
    sa += 1
    Addintu()
    Addsobr()
    Addperep()
    Addmedi()
    AddAdes()
    document.getElementById("sabe").innerHTML = "Pontos de Sabedoria: " + sa;
}

function RemoveSabe(){
    sa -= 1
    Reintu()
    Resobr()
    Reperep()
    Remedi()
    ReAdes()
    document.getElementById("sabe").innerHTML = "Pontos de Sabedoria: " + sa;
}
//--End



//Acrobacia
function AddAcro(){
    acro += 1
    if(acro >= 10 + pc)
        acro = 10 + c;

        if(acro < 10)
        acro = acro

        document.getElementById("Acrobacia").innerHTML = "Acrobacia: " + acro;
}
function ReAcro(){
    acro -= 1
    if(acro <= 0 + pc)
        acro = 0 + pc;

        document.getElementById("Acrobacia").innerHTML = "Acrobacia: " + acro;
}

//Adestrar
function AddAdes(){
    ades += 1
    if(ades >= 10 + sa)
        ades = 10 + sa;

        if(ades < 10)
        ades = ades

        document.getElementById("Adestrar").innerHTML = "Adestrar: " + ades;
}
function ReAdes(){
    ades -= 1
    if(ades <= 0 + sa)
        ades = 0 + sa;

        document.getElementById("Adestrar").innerHTML = "Adestrar: " + ades;
}

//Arcana
function AddArca(){
    arca += 1
    if(arca >= 10 + pi)
        arca = 10 + pi;

        if(arca < 10)
        arca = arca
        
        document.getElementById("Arcana").innerHTML = "Arcana: " + arca;
}
function ReArca(){
    arca -= 1
    if(arca <= 0 + pi)
    arca = 0 + pi;

        document.getElementById("Arcana").innerHTML = "Arcana: " + arca;
}

//Atletismo
function AddAtle(){
    atle += 1
    if(atle >= 10 + pc)
        atle = 10 + pc;

        if(atle < 10)
        atle = atle
        
        document.getElementById("Atletismo").innerHTML = "Atletismo: " + atle;
}
function ReAtle(){
    atle -= 1
    if(atle <= 0 + pc)
    atle = 0 + pc;

        document.getElementById("Atletismo").innerHTML = "Atletismo: " + atle;
}

//Enganação
function AddEnga(){
    enga += 1
    if(enga >= 10 + ca)
        enga = 10 + ca;

        if(enga < 10)
        enga = enga
        
        document.getElementById("Enganacao").innerHTML = "Enganação: " + enga;
}
function ReEnga(){
    enga -= 1
    if(enga <= 0 + ca)
    enga = 0 + ca;

        document.getElementById("Enganacao").innerHTML = "Enganação: " + enga;
}

//Intuição
function Addintu(){
    intu += 1
    if(intu >= 10 + sa)
        intu = 10 + sa;

        if(intu < 10)
        intu = intu
        
        document.getElementById("Intuicao").innerHTML = "Intuição: " + intu;
}
function Reintu(){
    intu -= 1
    if(intu <= 0 + sa)
    intu = 0 + sa;

        document.getElementById("Intuicao").innerHTML = "Intuição: " + intu;
}

//Intimidação
function Addinti(){
    inti += 1
    if(inti >= 10 + ca)
        inti = 10 + ca;

        if(inti < 10)
        inti = inti
        
        document.getElementById("Intimidacao").innerHTML = "Intimidação: " + inti;
}
function Reinti(){
    inti -= 1
    if(inti <= 0 + ca)
    inti = 0 + ca;

        document.getElementById("Intimidacao").innerHTML = "Intimidação: " + inti;
}

//Sobrevivencia
function Addsobr(){
    sobr += 1
    if(sobr >= 10 + sa)
        sobr = 10 + sa;

        if(sobr < 10)
        sobr = sobr
        
        document.getElementById("Sobrevivencia").innerHTML = "Sobrevivencia: " + sobr;
}
function Resobr(){
    sobr -= 1
    if(sobr <= 0 + sa)
    sobr = 0 + sa;

        document.getElementById("Sobrevivencia").innerHTML = "Sobrevivencia: " + sobr;
}

//Investigação
function Addinves(){
    inves += 1
    if(inves >= 10 + pi)
        inves = 10 + pi;

        if(inves < 10)
        inves = inves
        
        document.getElementById("Investigacao").innerHTML = "Investigação: " + inves;
}
function Reinves(){
    inves -= 1
    if(inves <= 0 + pi)
    inves = 0 + pi;

        document.getElementById("Investigacao").innerHTML = "Investigação: " + inves;
}

//Medicina
function Addmedi(){
    medi += 1
    if(medi >= 10 + sa)
        medi = 10 + sa;

        if(medi < 10)
        medi = medi
        
        document.getElementById("Medicina").innerHTML = "Medicina: " + medi;
}
function Remedi(){
    medi -= 1
    if(medi <= 0 + sa)
    medi = 0 + sa;

        document.getElementById("Medicina").innerHTML = "Medicina: " + medi;
}

//Natureza
function Addnatu(){
    natu += 1
    if(natu >= 10 + pi)
        natu = 10 + pi;

        if(natu < 10)
        natu = natu
        
        document.getElementById("Natureza").innerHTML = "Natureza: " + natu;
}
function Renatu(){
    natu -= 1
    if(natu <= 0 + pi)
    natu = 0 + pi;

        document.getElementById("Natureza").innerHTML = "Natureza: " + natu;
}

//Percepção
function Addperep(){
    perep += 1
    if(perep >= 10 + sa)
        perep = 10 + sa;

        if(perep < 10)
        perep = perep
        
        document.getElementById("Percepcao").innerHTML = "Percepção: " + perep;
}
function Reperep(){
    perep -= 1
    if(perep <= 0 + sa)
    perep = 0 + sa;

        document.getElementById("Percepcao").innerHTML = "Percepção: " + perep;
}

//Performace
function Addperfom(){
    perfom += 1
    if(perfom >= 10 + ca)
        perfom = 10 + ca;

        if(perfom < 10)
        perfom = perfom
        
        document.getElementById("Performance").innerHTML = "Performance: " + perfom;
}
function Reperfom(){
    perfom -= 1
    if(perfom <= 0 + ca)
    perfom = 0 + ca;

        document.getElementById("Performance").innerHTML = "Performance: " + perfom;
}

//Persuasão
function AddPersu(){
    Persu += 1
    if(Persu >= 10 + ca)
        Persu = 10 + ca;

        if(Persu < 10)
        Persu = Persu
        
        document.getElementById("Persuasao").innerHTML = "Persuasão: " + Persu;
}
function RePersu(){
    Persu -= 1
    if(Persu <= 0 + ca)
    Persu = 0 + ca;

        document.getElementById("Persuasao").innerHTML = "Persuasão: " + Persu;
}

//Prestidigitação
function Addpres(){
    pres += 1
    if(pres >= 10 + pd)
        pres = 10 + pd;

        if(pres < 10)
        pres = pres
        
        document.getElementById("Prestidigitacao").innerHTML = "Prestidigitação: " + pres;
}
function Repres(){
    pres -= 1
    if(pres <= 0 + pd)
    pres = 0 + pd;

        document.getElementById("Prestidigitacao").innerHTML = "Prestidigitação: " + pres;
}

//Furtividade
function AddFurt(){
    furt += 1
    if(furt >= 10 + pd)
        furt = 10 + pd;

        if(furt < 10)
        furt = furt
        
        document.getElementById("Furtividade").innerHTML = "Furtividade: " + furt;
}
function ReFurt(){
    furt -= 1
    if(furt <= 0 + pd)
    furt = 0 + pd;

        document.getElementById("Furtividade").innerHTML = "Furtividade: " + furt;
}

//Acabado ^^

var itenNum;

function AddIten(){
    document.getElementById("itenBox").innerHTML += '<p id="itenName + itenNum">teste maluco</p><input id="app" type="number">'

    itenNum ++;
}