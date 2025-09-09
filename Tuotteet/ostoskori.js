var lista = []


function lisääTuote(){
    var temp = {
        nimi:"testi",
        hinta:"10",
        tuotenumero:"123456789",
        väri:"keltainen",
        koko:"10",
        pituus:"10"
    }

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

    divcontainercartitem.appendChild(diviteminfo);

    cart.append(divcontainercartitem)


}

