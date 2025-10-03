


var tuoteenhinta = document.getElementById("hinta");
var tuoteennimi = document.getElementById("nimi");
var listaideitä = JSON.parse(localStorage.getItem("listaidref"));

var tuotenumero = "5"

for (var lista of listaideitä){
    if (lista.tuotenumero === tuotenumero){
        tuoteenhinta.innerHTML = "Hinta "+lista.hinta+"€"
        tuoteennimi.innerHTML = lista.nimi
        var Kuvat = lista.tuotesivunkuva
    }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


var ostoskori = localStorage.getItem("ostoskorissa");

if (ostoskori == null) {
        var ostoskoria = [];
        localStorage.setItem("ostoskorissa", JSON.stringify(ostoskoria));
    }

let tuote_kuva1 = document.getElementById("ostos_kuva1");
let tuote_kuva2 = document.getElementById("ostos_kuva2");
let tuote_kuva3 = document.getElementById("ostos_kuva3");
tuote_kuva1.innerHTML = `<img src="${Kuvat[0]}">`;
tuote_kuva2.innerHTML = `<img src="${Kuvat[0]}">`;
tuote_kuva3.innerHTML = `<img src="${Kuvat[0]}">`;





const form = document.getElementById("ostoskori_tieto");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    
    const selectedColor = document.querySelector('input[name="colors"]:checked');
    const colorValue = selectedColor ? selectedColor.value : null;

   
    const selectedSize = document.querySelector('input[name="size"]:checked') || document.querySelector('select[name="size"]');
    const sizeValue = selectedSize ? selectedSize.value : null;

    const HowMany = document.getElementById("amount").value;

   

    console.log("Selected Color: ", colorValue);
    console.log("Selected Size: ", sizeValue);
    console.log("Monta: ", HowMany);

    var numero = getRandomInt(100000000000)

    var tuotekoriin = {
        tuotenumero:tuotenumero,
        väri:colorValue,
        koko:sizeValue,
        määrä:HowMany,
        randid:numero
    }

    if (tuotekoriin.väri !== null){
        if (tuotekoriin.koko !== null){
            var kori = JSON.parse(localStorage.getItem("ostoskorissa"));
            kori.push(tuotekoriin);
            localStorage.setItem("ostoskorissa", JSON.stringify(kori));
        }
    }
});
