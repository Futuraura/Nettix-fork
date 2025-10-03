
var tuotelistaid = [{
        tuotenumero:"1",
        nimi:"paita",
        hinta:"11.99",
        tuotesivunkuva:["../Kuvat/Kuva1.jpg"],
        kuva:"Tuotteet/Kuvat/kuva1.jpg",
        href:"Tuotteet/tuote1/tuotteet.html",
        tyyli:"casual"
    },
    { 
        tuotenumero:"2",
        nimi:"housu",
        hinta:"24.99",
        tuotesivunkuva:["../Kuvat/Kuva2.jpg"],
        kuva:"Tuotteet/Kuvat/kuva2.jpg",
        href:"Tuotteet/tuote2/tuotteet.html",
        tyyli:"casual"
    },
    {
        tuotenumero:"3",
        nimi:"urheilu T-paita",
        hinta:"29.99",
        tuotesivunkuva:["../Kuvat/Kuva3.jpg"],
        kuva:"Tuotteet/Kuvat/kuva3.jpg",
        href:"Tuotteet/tuote3/tuotteet.html",
        tyyli:"sport"
    },
    {
        tuotenumero:"4",
        nimi:"Kuvio shortsit",
        hinta:"51.99",
        tuotesivunkuva:["../Kuvat/Kuva4.jpg"],
        kuva:"Tuotteet/Kuvat/kuva4.jpg",
        href:"Tuotteet/tuote4/tuotteet.html",
        tyyli:"casual"
    },
    {
        tuotenumero:"5",
        nimi:"Heather Grey Crewneck T-Shirt",
        hinta:"24.99",
        tuotesivunkuva:["../Kuvat/Kuva5.png"],
        kuva:"Tuotteet/Kuvat/kuva5.png",
        href:"Tuotteet/tuote5/tuotteet.html",
        tyyli:"casual"
    },
    {
        tuotenumero:"6",
        nimi:"Taupe A-Line Dress",
        hinta:"39.99",
        tuotesivunkuva:["../Kuvat/Kuva6.png"],
        kuva:"Tuotteet/Kuvat/kuva6.png",
        href:"Tuotteet/tuote6/tuotteet.html",
        tyyli:"formal"
    },
    {
        tuotenumero:"7",
        nimi:"Heather Grey Shirt",
        hinta:"29.99",
        tuotesivunkuva:["../Kuvat/Kuva7.png"],
        kuva:"Tuotteet/Kuvat/kuva7.png",
        href:"Tuotteet/tuote7/tuotteet.html",
        tyyli:"casual"
    }
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
//        href:"Tuotteet/tuote2/tuotteet.html"
//        tyyli:"casual"
//    }

//        tyyli vaihtoehdot:
//        casual, sport ja formal 