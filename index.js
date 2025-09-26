var tuotelista = JSON.parse(localStorage.getItem("listaidref"));

var rivi1tuotteet = [3,2,1,3,2,1,3,2,1]

var rivi2tuotteet = [1,2,3,1,2,3,1,2,3]



function listaatuotteita1() {
    for (var rivi1tuote of rivi1tuotteet) {

    

        templist = [
            {
                nimi:"",
                kuva:"",
                href:""
            }
        ]

        for (var list of tuotelista) {
            if (Number(list.tuotenumero) === Number(rivi1tuote)) {
                templist.nimi = list.nimi;
                templist.kuva = list.kuva;
                templist.href = list.href
            }
        }

        

        var mediascroller1 = document.getElementById("scroller1");
        var medialement1 = document.createElement("div");
        medialement1.classList.add("media-element");
        medialement1.classList.add("flex");

        var mediaitems1 = document.createElement("div");
        mediaitems1.classList.add("media-items");

        var div1 = document.createElement("div");
        div1.classList.add("height100");
        var img1 = document.createElement("img");
        img1.classList.add("width100");
        img1.classList.add("height100");
        img1.classList.add("align-content-center");
        img1.src = templist.kuva;

        div1.appendChild(img1);
        
        var div2 = document.createElement("div");
        var h2 = document.createElement("h2");
        h2.classList.add("itemname");
        h2.classList.add("margin0");

        var a = document.createElement("a");
        a.classList.add("link");
        a.href = templist.href;
        a.innerHTML = templist.nimi;

        h2.appendChild(a);
        div2.appendChild(h2);

        mediaitems1.appendChild(div1);
        mediaitems1.appendChild(div2);

        medialement1.appendChild(mediaitems1);

        mediascroller1.appendChild(medialement1);
    }
}

function listaatuotteita2() {
    for (var rivi2tuote of rivi2tuotteet) {

    

        templist = [
            {
                nimi:"",
                kuva:"",
                href:""
            }
        ]

        for (var list of tuotelista) {
            if (Number(list.tuotenumero) === Number(rivi2tuote)) {
                templist.nimi = list.nimi;
                templist.kuva = list.kuva;
                templist.href = list.href
            }
        }

        console.log(templist)

        var mediascroller1 = document.getElementById("scroller2");
        var medialement1 = document.createElement("div");
        medialement1.classList.add("media-element");
        medialement1.classList.add("flex");

        var mediaitems1 = document.createElement("div");
        mediaitems1.classList.add("media-items");

        var div1 = document.createElement("div");
        div1.classList.add("height100");
        var img1 = document.createElement("img");
        img1.classList.add("width100");
        img1.classList.add("height100");
        img1.classList.add("align-content-center");
        img1.src = templist.kuva;

        div1.appendChild(img1);
        
        var div2 = document.createElement("div");
        var h2 = document.createElement("h2");
        h2.classList.add("itemname");
        h2.classList.add("margin0");

        var a = document.createElement("a");
        a.classList.add("link");
        a.href = templist.href;
        a.innerHTML = templist.nimi;

        h2.appendChild(a);
        div2.appendChild(h2);

        mediaitems1.appendChild(div1);
        mediaitems1.appendChild(div2);

        medialement1.appendChild(mediaitems1);

        mediascroller1.appendChild(medialement1);
    }
}

listaatuotteita1()
listaatuotteita2()
