
const Kuvat = [
    "Kuvat/Kuva1.jpg"
];

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
});

