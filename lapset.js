var tuotteita = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
];

var tuotelista = JSON.parse(localStorage.getItem("listaidref"));

function päivitätuotteet() {
  for (var tuoteennumero of tuotteita) {
    var tuotegridi = document.getElementById("tuotegridi");
    var temps = [
      {
        nimi: "",
        tyyli: "",
        href: "",
        kuva: "",
        hinta: "",
      },
    ];

    for (var tuote of tuotelista) {
      if (tuoteennumero === Number(tuote.tuotenumero)) {
        temps.nimi = tuote.nimi;
        temps.tyyli = tuote.tyyli;
        temps.href = tuote.href;
        temps.kuva = tuote.kuva;
        temps.hinta = tuote.hinta;
      }
    }

    var article = document.createElement("article");
    article.classList.add("card");
    article.setAttribute("data-price", temps.hinta);
    article.setAttribute("data-color", "white");
    article.setAttribute("data-style", temps.tyyli);

    var a = document.createElement("a");
    a.href = temps.href;

    var div = document.createElement("div");
    div.classList.add("thumb");
    div.classList.add("align-content_center");
    div.setAttribute("aria-hidden", "true");

    var img = document.createElement("img");
    img.classList.add("width100");
    img.src = temps.kuva;
    div.appendChild(img);

    a.appendChild(div);

    var h3 = document.createElement("h3");
    h3.innerHTML = temps.nimi;

    a.appendChild(h3);

    var div2 = document.createElement("div");
    div2.classList.add("precio");

    var span = document.createElement("span");
    span.classList.add("actual");
    span.innerHTML = temps.hinta + "€";
    div2.appendChild(span);

    a.appendChild(div2);
    article.appendChild(a);

    tuotegridi.appendChild(article);
  }
}

päivitätuotteet();
