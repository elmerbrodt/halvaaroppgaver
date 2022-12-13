/*  Genererer et  tall fra 1 til 6*/
var terningen = document.getElementById("terningen");
function terningKast() {
    return Math.floor((Math.random() * 6) + 1);
}
var terningResultat = document.getElementsByClassName("terningResultat");

function kast() {
    for (let i = 0; i < terningResultat.length; i++) {
        if (terningResultat[i].style.backgroundColor != "green") {
            terningResultat[i].innerHTML = terningKast();
        }
    }
}
terningen.onclick = kast;

for (let i = 0; i < terningResultat.length; i++)
    terningResultat[i].style.backgroundColor = "white";

/*Når terningene trykkes på bytter de farge til grønn*/

function gronn(terningNr) {
    if (terningResultat[terningNr - 1].style.backgroundColor == "white") {
        terningResultat[terningNr - 1].style.backgroundColor = "green";
    }

    else if (terningResultat[terningNr - 1].style.backgroundColor == "green") {
        terningResultat[terningNr - 1].style.backgroundColor = "white";
    }
}

/*Arrayen*/

var seksjonArray = [
    document.getElementsByClassName("rad1"),
    document.getElementsByClassName("rad2"),
    document.getElementsByClassName("rad3"),
    document.getElementsByClassName("rad4"),
    document.getElementsByClassName("rad5"),
    document.getElementsByClassName("rad6"),
    document.getElementsByClassName("rad7"),
    document.getElementsByClassName("rad8"),
    document.getElementsByClassName("rad9"),
    document.getElementsByClassName("rad10"),
    document.getElementsByClassName("rad11"),
    document.getElementsByClassName("rad12"),
    document.getElementsByClassName("rad13"),
    document.getElementsByClassName("rad14"),
    document.getElementsByClassName("rad15"),
    document.getElementsByClassName("rad16"),
    document.getElementsByClassName("rad17"),
    document.getElementsByClassName("rad18"),
]




/*Gjør at spilleren kan legge til verdi i tabellen, det vil heller ikke gå å jukse da 
hvert resultat vil bli delt på antall grønne, er dette ikke det  samme som radnummere vil svaret bli 0*/

function tallLagrer(radNr, kolonneNr) {
    var resultat = 0;
    var antallGronne = 0;
    for (let i = 0; i < terningResultat.length; i++) {
        if (terningResultat[i].style.backgroundColor == "green") {
            resultat += Number(terningResultat[i].innerHTML);
            antallGronne++;
            terningResultat[i].style.backgroundColor = "white"
        }
    }

    if (resultat / antallGronne == radNr) {
        seksjonArray[radNr - 1][kolonneNr - 1].innerHTML = resultat;
    }
    else {
        seksjonArray[radNr - 1][kolonneNr - 1].innerHTML = 0;
    }
}

/* finner summen til nå og skjekker om spilleren skal få en 50 poengs bonus eller ikke */

function sum(radNr, kolonneNr) {
    var summen = 0;
    for (let i = 0; i < 6; i++) {
        summen += Number(seksjonArray[i][kolonneNr - 1].innerHTML);
    }
    seksjonArray[6][kolonneNr - 1].innerHTML = summen;

    if (summen >= 63) {
        seksjonArray[7][kolonneNr - 1].innerHTML = 50;
    }

    else {
        seksjonArray[7][kolonneNr - 1].innerHTML = 0;
    }
}




function etPar(radNr, kolonneNr) {
    var resultat = 0;
    for (let i = 0; i < terningResultat.length; i++) {
        if (terningResultat[i].style.backgroundColor == "green")
            resultat += Number(terningResultat[i].innerHTML);
            terningResultat[i].style.backgroundColor = "white"
    }
    if (resultat % 2 == 0 && resultat <= 12) {
        seksjonArray[radNr - 1][kolonneNr - 1].innerHTML = resultat;
    }
    else {
        seksjonArray[radNr - 1][kolonneNr - 1].innerHTML = "Nei";
    }
}



function toPar(radNr, kolonneNr) {
    var resultat = 0;
    var antallGronne = 0;
    for (let i = 0; i < terningResultat.length; i++) {
        if (terningResultat[i].style.backgroundColor == "green") {
            resultat += Number(terningResultat[i].innerHTML);
            antallGronne++
            terningResultat[i].style.backgroundColor = "white"
        }
        if (antallGronne == 4) {
            seksjonArray[radNr - 1][kolonneNr - 1].innerHTML = resultat;
        }
        else {
            seksjonArray[radNr - 1][kolonneNr - 1].innerHTML = 0;
        }
    }
}

    function treLike(radNr, kolonneNr) {
        var resultat = 0;
        var antallGronne = 0;
        for (let i = 0; i < terningResultat.length; i++) {
            if (terningResultat[i].style.backgroundColor == "green") {
                resultat += Number(terningResultat[i].innerHTML);
                antallGronne++
                terningResultat[i].style.backgroundColor = "white"
            }
            if (antallGronne == 3) {
                seksjonArray[radNr - 1][kolonneNr - 1].innerHTML = resultat;
            }
            else {
                seksjonArray[radNr - 1][kolonneNr - 1].innerHTML = 0;
            }
        }
    }

function fireLike(radNr, kolonneNr) {
    var resultat = 0;
    var antallGronne = 0;
    for (let i = 0; i < terningResultat.length; i++) {
        if (terningResultat[i].style.backgroundColor == "green") {
            resultat += Number(terningResultat[i].innerHTML);
            antallGronne++
            terningResultat[i].style.backgroundColor = "white"
        }
        if (antallGronne == 4) {
            seksjonArray[radNr - 1][kolonneNr - 1].innerHTML = resultat;
        }
        else {
            seksjonArray[radNr - 1][kolonneNr - 1].innerHTML = 0;
        }
    }
}
    
function litenStr(radNr, kolonneNr) {
    var resultat = 0;
    var antallGronne = 0;
    for (let i = 0; i < terningResultat.length; i++) {
        if (terningResultat[i].style.backgroundColor == "green") {
            resultat += Number(terningResultat[i].innerHTML);
            antallGronne++
            terningResultat[i].style.backgroundColor = "white"
        }
        if (antallGronne == 5) {
            seksjonArray[radNr - 1][kolonneNr - 1].innerHTML = resultat;
        }
        else {
            seksjonArray[radNr - 1][kolonneNr - 1].innerHTML = 0;
        }
    }
}
        
function storStr(radNr, kolonneNr) {
    var resultat = 0;
    var antallGronne = 0;
    for (let i = 0; i < terningResultat.length; i++) {
        if (terningResultat[i].style.backgroundColor == "green") {
            resultat += Number(terningResultat[i].innerHTML);
            antallGronne++
            terningResultat[i].style.backgroundColor = "white"
        }
        if (antallGronne == 5) {
            seksjonArray[radNr - 1][kolonneNr - 1].innerHTML = resultat;
                }
                else {
                    seksjonArray[radNr - 1][kolonneNr - 1].innerHTML = 0;
                }
            }
        }

function hus(radNr, kolonneNr) {
    var resultat = 0;
    var antallGronne = 0;
    for (let i = 0; i < terningResultat.length; i++) {
        if (terningResultat[i].style.backgroundColor == "green") {
            resultat += Number(terningResultat[i].innerHTML);
            antallGronne++
            terningResultat[i].style.backgroundColor = "white"
        }
        if (antallGronne == 5) {
            seksjonArray[radNr - 1][kolonneNr - 1].innerHTML = resultat;
        }
        else {
            seksjonArray[radNr - 1][kolonneNr - 1].innerHTML = 0;
        }
    }
}

function sjanse(radNr, kolonneNr) {
    var resultat = 0;
    for (let i = 0; i < terningResultat.length; i++) {
        if (terningResultat[i].style.backgroundColor == "green") {
            resultat += Number(terningResultat[i].innerHTML);
            terningResultat[i].style.backgroundColor = "white"
        }
        seksjonArray[radNr - 1][kolonneNr - 1].innerHTML = resultat;
    }
}

function hus(radNr, kolonneNr) {
    var resultat = 0;
    var antallGronne = 0;
    for (let i = 0; i < terningResultat.length; i++) {
        if (terningResultat[i].style.backgroundColor == "green") {
            resultat += Number(terningResultat[i].innerHTML);
            antallGronne++
            terningResultat[i].style.backgroundColor = "white"
        }
        if (antallGronne == 5) {
            seksjonArray[radNr - 1][kolonneNr - 1].innerHTML = resultat;
        }
        else {
            seksjonArray[radNr - 1][kolonneNr - 1].innerHTML = 0;
        }
    }
}


function yatzy(radNr, kolonneNr) {
    var resultat = 0;
    var antallGronne = 0;
    for (let i = 0; i < terningResultat.length; i++) {
        if (terningResultat[i].style.backgroundColor == "green") {
            resultat += Number(terningResultat[i].innerHTML);
            antallGronne++
            terningResultat[i].style.backgroundColor = "white"
        }
        if (antallGronne == 5) {
            seksjonArray[radNr - 1][kolonneNr - 1].innerHTML = 50;
        }
        else {
            seksjonArray[radNr - 1][kolonneNr - 1].innerHTML = 0;
        }
    }
}

function totalSum(radNr, kolonneNr) {
    var summen = 0;
    for (let i = 6; i <= 17; i++) {
        summen += Number(seksjonArray[i][kolonneNr - 1].innerHTML);
    }
    seksjonArray[radNr - 1][kolonneNr - 1].innerHTML = summen;
}