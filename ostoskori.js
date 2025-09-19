var lista = [{
        nimi:"testi",
        hinta:"10",
        tuotenumero:"123456789",
        väri:"keltainen",
        koko:"10",
        pituus:"100",
        määrä:"1"
    },
    {
        nimi:"testi",
        hinta:"10",
        tuotenumero:"123456789",
        väri:"keltainen",
        koko:"10",
        pituus:"100",
        määrä:"1"
    }
]




function lisääTuote(){
    for (var list of lista){
        var temp = {
            nimi:"",
            hinta:"",
            tuotenumero:"",
            väri:"",
            koko:"",
            pituus:""
        }

        temp.nimi = list.nimi;
        temp.hinta = list.hinta;
        temp.tuotenumero = list.tuotenumero;
        temp.väri = list.väri;
        temp.koko = list.koko;
        temp.pituus = list.pituus;

        var cart = document.getElementById("flexcart")
        var divcontainercartitem = document.createElement("div");
        divcontainercartitem.classList.add("containercartitem");

        var diviteminfo = document.createElement("div");
        diviteminfo.classList.add("iteminfo");

        var h2bold = document.createElement("h2");
        h2bold.classList.add("bold");
        h2bold.innerHTML = temp.nimi;
        diviteminfo.appendChild(h2bold);

        var h2size18px = document.createElement("h2");
        h2size18px.classList.add("size18px");
        h2size18px.innerHTML = "hinta: "+temp.hinta;
        diviteminfo.appendChild(h2size18px);

        var h2size18px2 = document.createElement("h2");
        h2size18px2.classList.add("size18px");
        h2size18px2.innerHTML = "tuotenumero: "+temp.tuotenumero;
        diviteminfo.appendChild(h2size18px2);

        var h2size18px3 = document.createElement("h2");
        h2size18px3.classList.add("size18px");
        h2size18px3.innerHTML = "väri: "+temp.väri;
        diviteminfo.appendChild(h2size18px3);

        var h2size18px4 = document.createElement("h2");
        h2size18px4.classList.add("size18px");
        h2size18px4.innerHTML = "koko: "+temp.koko;
        diviteminfo.appendChild(h2size18px4);
        
        var h2size18px5 = document.createElement("h2");
        h2size18px5.classList.add("size18px");
        h2size18px5.innerHTML = "pituus: "+temp.pituus;
        diviteminfo.appendChild(h2size18px5);

        var divflexirow = document.createElement("div");
        divflexirow.classList.add("flexirow");

        var button1 = document.createElement("button");
        button1.classList.add("buttonnorm");
        button1.classList.add("buttoncart");

        var h2margin0 = document.createElement("h2");
        h2margin0.classList.add("margin0");
        h2margin0.classList.add("bold");
        h2margin0.classList.add("h2but");
        h2margin0.innerHTML = "-";
        button1.appendChild(h2margin0);

        var button2 = document.createElement("button");
        button2.classList.add("buttonnorm");
        button2.classList.add("buttoncart");

        var h2margin02 = document.createElement("h2");
        h2margin02.classList.add("margin0");
        h2margin02.classList.add("bold");
        h2margin02.classList.add("h2but");
        h2margin02.innerHTML = "+";
        button2.appendChild(h2margin02);

        divcontainercartitem.appendChild(diviteminfo);

        cart.append(divcontainercartitem)
    }

}

lisääTuote()