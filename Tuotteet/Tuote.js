
const Kuvat = [
    "Kuvat/Kuva1.jpg"
];


let tuote_kuva1 = document.getElementById("ostos_kuva1");
let tuote_kuva2 = document.getElementById("ostos_kuva2");
let tuote_kuva3 = document.getElementById("ostos_kuva3");
tuote_kuva1.innerHTML = `<img src="${Kuvat[0]}">`;
tuote_kuva2.innerHTML = `<img src="${Kuvat[0]}">`;
tuote_kuva3.innerHTML = `<img src="${Kuvat[0]}">`;


// Get info from a form with id "myForm"
const form = document.getElementById("ostoskori_tieto");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const väri1 = formData.get("thing1");
    const väri2 = formData.get("thing2");
    const väri3 = formData.get("thing3");
    
    console.log("Väri1:", väri1);
});

