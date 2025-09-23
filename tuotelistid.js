
var tuotelistaid = [{
        tuotenumero:"1",
        nimi:"paita",
        hinta:"10",
        kuva:"Tuotteet/Kuvat/kuva1.jpg"
    },
    //---temps---
    { 
        tuotenumero:"2",
        nimi:"housu",
        hinta:"40",
        kuva:"Tuotteet/Kuvat/kuva1.jpg"
    },
    {
        tuotenumero:"3",
        nimi:"hattu",
        hinta:"41",
        kuva:"Tuotteet/Kuvat/kuva1.jpg"
    }
    //------------
]


var alennuskoodi = [
    {
    nimi:"testi",
    määrä:"10",
    prosentti:false
    },
    {
    nimi:"testi2",
    määrä:"50",
    prosentti:true
    },
    {
    nimi:"testi3",
    määrä:"32",
    prosentti:true
    }
]

localStorage.setItem("koodit", JSON.stringify(alennuskoodi));
localStorage.setItem("listaidref", JSON.stringify(tuotelistaid));

//-----template------

//    { 
//        tuotenumero:"2",
//        nimi:"housu",
//        hinta:"40",
//        kuva:"Tuotteet/Kuvat/kuva1.jpg"
//    }