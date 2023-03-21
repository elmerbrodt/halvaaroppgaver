
//Definerer variablene//

let russekortet = document.getElementById("russekortet")
let blaaRadio = document.getElementById("blaaRadio")
let blaaMal = document.getElementById("blaaMal")

// gjør at at fargen og type russekort endres etter brukerens valg. 
//Hvis bruker trykker på rød, settes første function i gang der kortet blir rød med egen tittel
// Hvis bruker trykkes blå, settes andre funksjon i gang der kortet blir blått med egen tittel
roodRadio.onclick = function (){
    blaaMal.setAttribute("id", "rodMal")
    tittelBlaa.src = "./rodruss.tittel.png"
}

blaaRadio.onclick = function (){
    blaaMal.setAttribute("id", "blaaMal")
    tittelBlaa.src = "./blaaruss.tittel.png"
}