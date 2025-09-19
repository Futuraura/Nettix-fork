




var lista = JSON.parse(localStorage.getItem("ostoskorissa"));

var tuotelista = JSON.parse(localStorage.getItem("listaidref"));



function lisääTuote(){
    for (var list of lista){
        
        var temp = {
            nimi:"",
            hinta:"",
            tuotenumero:"",
            väri:"",
            koko:"",
            määrä:"",
            randid:""
        }
        for (var ids of tuotelista){
            if (String(ids.tuotenumero) === String(list.tuotenumero)) {
                temp.hinta = ids.hinta
                temp.nimi = ids.nimi
                
            }
        }
        
        temp.tuotenumero = list.tuotenumero;
        temp.väri = list.väri;
        temp.koko = list.koko;
        temp.määrä = list.määrä;
        temp.randid = list.randid;

        
        
    
        var uniqueId = temp.randid;

        var cart = document.getElementById("flexcart");
        var divcontainercartitem = document.createElement("div");
        divcontainercartitem.classList.add("containercartitem");
        divcontainercartitem.id = uniqueId


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
        h2size18px5.innerHTML = "määrä: "+temp.määrä;
        diviteminfo.appendChild(h2size18px5);

        
        var h2margin0 = document.createElement("h2");
        h2margin0.classList.add("margin0");
        h2margin0.classList.add("bold");
        h2margin0.classList.add("ostamisnappi");
        h2margin0.innerHTML = "Poista";

        var button1 = document.createElement("button");
        button1.classList.add("padding0")
        button1.classList.add("buttonnorm");
        

        button1.appendChild(h2margin0);
        diviteminfo.appendChild(button1)

        var button1 = document.createElement("button");
        button1.classList.add("padding0")
        button1.classList.add("buttonnorm");

        button1.appendChild(h2margin0);
        diviteminfo.appendChild(button1);

        
        (function(id){
            button1.addEventListener("click", function() {
                var item = document.getElementById(id);
                if (item) item.remove();
                var k = 0;
                k = 0;
                for (var kohta of lista){
                    console.log(kohta.randid)
                    console.log(id)
                    if (kohta.randid == id){
                        lista.splice(k, 1);
                        
                    } 
                    k += 1;
                    console.log(k)
                    console.log(lista)
                }
            });
        })(uniqueId);


        //  var divflexirow = document.createElement("div");
        //divflexirow.classList.add("flexrow");

        //var button1 = document.createElement("button");
        //button1.classList.add("buttonnorm");
        //button1.classList.add("buttoncart");
        //button1.setAttribute("onclick","console.log('testi1');");

        //var h2margin0 = document.createElement("h2");
        //h2margin0.classList.add("margin0");
        //h2margin0.classList.add("bold");
        //h2margin0.classList.add("h2but");
        //h2margin0.innerHTML = "-";
        //button1.appendChild(h2margin0);

        //var button2 = document.createElement("button");
        //button2.classList.add("buttonnorm");
        //button2.classList.add("buttoncart");
        //button2.setAttribute("onclick","console.log('testi2');");

        

        //var h2margin02 = document.createElement("h2");
        //h2margin02.classList.add("margin0");
        //h2margin02.classList.add("bold");
        //h2margin02.classList.add("h2but");
        //h2margin02.innerHTML = "+";
        //button2.appendChild(h2margin02);

        //var h2h2cart = document.createElement("h2");
        //h2h2cart.classList.add("margin0");
        //h2h2cart.classList.add("size18px");
        //h2h2cart.classList.add("bold");
        //h2h2cart.classList.add("h2cart");
        //h2h2cart.innerHTML = 1

        //divflexirow.appendChild(button1)
        //divflexirow.appendChild(h2h2cart)
        //divflexirow.appendChild(button2)

        //diviteminfo.appendChild(divflexirow)


        divcontainercartitem.appendChild(diviteminfo);

        cart.append(divcontainercartitem)

        
        
    }

}

lisääTuote()