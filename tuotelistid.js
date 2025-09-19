
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

localStorage.setItem("listaidref", JSON.stringify(tuotelistaid));

//-----template------

//    { 
//        tuotenumero:"2",
//        nimi:"housu",
//        hinta:"40",
//        kuva:"Tuotteet/Kuvat/kuva1.jpg"
//    }