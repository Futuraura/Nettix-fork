
var tuotelistaid = [{
        tuotenumero:"1",
        nimi:"paita",
        hinta:"50",
        tuotesivunkuva:["../Kuvat/Kuva1.jpg"],
        kuva:"Tuotteet/Kuvat/kuva1.jpg",
        href:"Tuotteet/tuote1/tuotteet.html"
    },
    //---temps---
    { 
        tuotenumero:"2",
        nimi:"housu",
        hinta:"40",
        tuotesivunkuva:["../Kuvat/Kuva2.jpg"],
        kuva:"Tuotteet/Kuvat/kuva2.jpg",
        href:"Tuotteet/tuote2/tuotteet.html"
    },
    {
        tuotenumero:"3",
        nimi:"hattu",
        hinta:"41",
        tuotesivunkuva:["../Kuvat/Kuva1.jpg"],
        kuva:"Tuotteet/Kuvat/kuva1.jpg",
        href:"Tuotteet/tuote1/tuotteet.html"
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
//        tuotesivunkuva:["../Kuvat/Kuva2.jpg"],
//        kuva:"Tuotteet/Kuvat/kuva1.jpg"
//    }