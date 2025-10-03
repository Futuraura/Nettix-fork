var lista = JSON.parse(localStorage.getItem("ostoskorissa"));

var tuotelista = JSON.parse(localStorage.getItem("listaidref"));
var alennuskoodit = JSON.parse(localStorage.getItem("koodit"));

var hintayhteensä = 0

function closedial(event) {
    
   
    dialog = document.getElementById("dialo")
    event.preventDefault()
    dialog.close()
    Yhteensä();
    toimitus();
}

function opendial(event) {
    
    dialog = document.getElementById("dialo");
    event.preventDefault()
    dialog.showModal();
    
}

var ostoskori = localStorage.getItem("ostoskorissa");

if (ostoskori == null) {
        var ostoskoria = [];
        localStorage.setItem("ostoskorissa", JSON.stringify(ostoskoria));
    }


function lisääTuote() {
  for (var list of lista) {
    var temp = {
      nimi: "",
      hinta: "",
      tuotenumero: "",
      väri: "",
      koko: "",
      määrä: "",
      kuva: "",
      randid: "",
    };
    for (var ids of tuotelista) {
      if (String(ids.tuotenumero) === String(list.tuotenumero)) {
        temp.hinta = ids.hinta;
        temp.nimi = ids.nimi;
        temp.kuva = ids.kuva;
      }
    }

    temp.tuotenumero = list.tuotenumero;
    temp.väri = list.väri;
    temp.koko = list.koko;
    temp.määrä = list.määrä;
    temp.randid = list.randid;

    temp.hinta = Number(temp.hinta) * Number(temp.määrä);

    var uniqueId = temp.randid;

    var cart = document.getElementById("flexcart");
    var divcontainercartitem = document.createElement("div");
    divcontainercartitem.classList.add("containercartitem");
    divcontainercartitem.id = uniqueId;

    var diviteminfo = document.createElement("div");
    diviteminfo.classList.add("iteminfo");

    var divimage = document.createElement("div");
    divimage.classList.add("image");
    divimage.classList.add("align-content_center");

    var img = document.createElement("img");
    img.classList.add("width100");
    img.src = temp.kuva;
    divimage.appendChild(img);

    var h2bold = document.createElement("h2");
    h2bold.classList.add("bold");
    h2bold.innerHTML = temp.nimi;
    diviteminfo.appendChild(h2bold);

    var h2size18px = document.createElement("h2");
    h2size18px.classList.add("size18px");
    h2size18px.innerHTML = "hinta: " + temp.hinta + "€";
    diviteminfo.appendChild(h2size18px);

    var h2size18px2 = document.createElement("h2");
    h2size18px2.classList.add("size18px");
    h2size18px2.innerHTML = "tuotenumero: " + temp.tuotenumero;
    diviteminfo.appendChild(h2size18px2);

    var h2size18px3 = document.createElement("h2");
    h2size18px3.classList.add("size18px");
    h2size18px3.innerHTML = "väri: " + temp.väri;
    diviteminfo.appendChild(h2size18px3);

    var h2size18px4 = document.createElement("h2");
    h2size18px4.classList.add("size18px");
    h2size18px4.innerHTML = "koko: " + temp.koko;
    diviteminfo.appendChild(h2size18px4);

    var h2size18px5 = document.createElement("h2");
    h2size18px5.classList.add("size18px");
    h2size18px5.innerHTML = "määrä: " + temp.määrä;
    diviteminfo.appendChild(h2size18px5);

    var h2margin0 = document.createElement("h2");
    h2margin0.classList.add("margin0");
    h2margin0.classList.add("bold");
    h2margin0.classList.add("ostamisnappi");
    h2margin0.innerHTML = "Poista";

    var button1 = document.createElement("button");
    button1.classList.add("padding0");
    button1.classList.add("buttonnorm");

    button1.appendChild(h2margin0);
    diviteminfo.appendChild(button1);

    var button1 = document.createElement("button");
    button1.classList.add("padding0");
    button1.classList.add("buttonnorm");

    button1.appendChild(h2margin0);
    diviteminfo.appendChild(button1);

    (function (id) {
      button1.addEventListener("click", function () {
        var item = document.getElementById(id);
        if (item) item.remove();
        var k = 0;
        k = 0;
        for (var kohta of lista) {
          if (kohta.randid == id) {
            lista.splice(k, 1);
            localStorage.setItem("ostoskorissa", JSON.stringify(lista));
            lista = JSON.parse(localStorage.getItem("ostoskorissa"));
            Yhteensä();
            toimitus();
          }
          k += 1;
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
    divcontainercartitem.appendChild(divimage);

    cart.append(divcontainercartitem);
  }
}

function Yhteensä() {
  var Yhteensä = document.getElementById("yhteensä");
  var Välisumma = document.getElementById("välisumma");
  var Alennus = document.getElementById("alennus");
  var laitettukoodi = document.getElementById("koodi").value
  var total = 0;
  total = 0;
  for (var list of lista) {
    var temps = [
      {
        hinta: "",
        määrä: "",
      },
    ];
    temps.määrä = list.määrä;
    for (var ids of tuotelista) {
      if (String(ids.tuotenumero) === String(list.tuotenumero)) {
        temps.hinta = ids.hinta;
      }
    }
    total += Number(temps.määrä) * Number(temps.hinta);
  }

  total = Math.round(total * 100) / 100
  Välisumma.innerHTML = total + " €";
  hintayhteensä = total

  alennustemp = [
    {
      määrä:"",
      prosentti:""
    }
  ]

  for (var koodi1 of alennuskoodit) {
    if (koodi1.nimi === laitettukoodi) {
      alennustemp.määrä = koodi1.määrä;
      alennustemp.prosentti = koodi1.prosentti;
        if (alennustemp.prosentti === true) {
          Alennus.innerHTML = "-"+koodi1.määrä +"%"
          total = Number(total) / 100;
          total = total * Number(100 - koodi1.määrä);
          Yhteensä.innerHTML = Math.round(total * 100) / 100+ " €"
          
        }
        if (alennustemp.prosentti === false) {
          Alennus.innerHTML = "-"+koodi1.määrä +" €"
          total = Number(total) - Number(koodi1.määrä);
          Yhteensä.innerHTML = Math.round(total * 100) / 100 + " €"
          
        }
    }
    if (alennustemp.määrä == null) {
      Alennus.innerHTML = "0 €"
      Yhteensä.innerHTML = total + " €"
      
    }
    
  }

  
  
}

function toimitus() {

  var kuljetus1 = document.getElementById("toimitus1");
  var kuljetus2 = document.getElementById("toimitus2");
  var ilmainen = document.getElementById("ilmainen");

  if (hintayhteensä >= 60) {
    kuljetus1.innerHTML = "ilmainen toimitus saavutettu"
    kuljetus2.innerHTML = ""
    ilmainen.innerHTML = ""
  }
  else if (hintayhteensä < 60) {
    kuljetus1.innerHTML = "Lisää "
    ilmainen.innerHTML = Math.round((60 - hintayhteensä)*100) / 100
    kuljetus2.innerHTML = "€ saavuttaaksesi ilmaisen toimituksen"
    
  }
}

lisääTuote();
Yhteensä();
toimitus();
