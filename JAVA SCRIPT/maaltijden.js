const maaltijden = {

spieropbouw: [
{
icon: "🥚",
naam: "Eieren met volkoren brood",
beschrijving: "Eieren, volkoren brood en groente voor een eiwitrijke maaltijd.",
tijd: "Ontbijt"
},
{
icon: "🍗",
naam: "Kip met rijst",
beschrijving: "Kipfilet met rijst en groente voor een stevige maaltijd.",
tijd: "Lunch"
},
{
icon: "🥛",
naam: "Yoghurt met fruit",
beschrijving: "Griekse yoghurt met banaan en bessen.",
tijd: "Snack"
}
],

afvallen: [
{
icon: "🥗",
naam: "Gezonde salade",
beschrijving: "Een frisse salade met kip, groente en een lichte dressing.",
tijd: "Lunch"
},
{
icon: "🍲",
naam: "Groentesoep",
beschrijving: "Een lichte soep met veel verschillende groenten.",
tijd: "Avondeten"
},
{
icon: "🍎",
naam: "Fruit met yoghurt",
beschrijving: "Yoghurt met vers fruit als lichte snack.",
tijd: "Snack"
}
],

conditie: [
{
icon: "🥣",
naam: "Havermout met banaan",
beschrijving: "Havermout met banaan voor energie tijdens het sporten.",
tijd: "Ontbijt"
},
{
icon: "🍝",
naam: "Volkoren pasta",
beschrijving: "Volkoren pasta met groente en kip voor energie.",
tijd: "Lunch"
},
{
icon: "🍌",
naam: "Banaan en yoghurt",
beschrijving: "Een eenvoudige snack voor voor of na het sporten.",
tijd: "Snack"
}
],

voetbal: [
{
icon: "🥣",
naam: "Havermout ontbijt",
beschrijving: "Havermout met fruit voor energie tijdens de training.",
tijd: "Ontbijt"
},
{
icon: "🍗",
naam: "Kip met rijst en groente",
beschrijving: "Een complete maaltijd met koolhydraten, eiwitten en groente.",
tijd: "Lunch"
},
{
icon: "🍌",
naam: "Banaan met yoghurt",
beschrijving: "Een lichte snack voor extra energie.",
tijd: "Voor training"
}
],

hardlopen: [
{
icon: "🍌",
naam: "Banaan met havermout",
beschrijving: "Een lichte maaltijd met energie voor het hardlopen.",
tijd: "Ontbijt"
},
{
icon: "🍚",
naam: "Rijst met kip",
beschrijving: "Rijst met kip en groente voor herstel na het sporten.",
tijd: "Lunch"
},
{
icon: "🥛",
naam: "Yoghurt met fruit",
beschrijving: "Een simpele snack na het hardlopen.",
tijd: "Na training"
}
]

};

function genereerMaaltijden() {

const doel = document.getElementById("doel").value;
const container = document.getElementById("maaltijden");

container.innerHTML = "";

const gekozenMaaltijden = maaltijden[doel];

gekozenMaaltijden.forEach(maaltijd => {

```
const card = document.createElement("div");

card.className = "meal-card";

card.innerHTML = `
  <div class="icon">${maaltijd.icon}</div>
  <h3>${maaltijd.naam}</h3>
  <p>${maaltijd.beschrijving}</p>
  <span class="time">🕒 ${maaltijd.tijd}</span>
`;

container.appendChild(card);
```

});

}
const maaltijden = {

spieropbouw: [
{
icon: "🥚",
naam: "Eieren met volkoren brood",
beschrijving: "Eieren, volkoren brood en groente voor een eiwitrijke maaltijd.",
tijd: "Ontbijt"
},
{
icon: "🍗",
naam: "Kip met rijst",
beschrijving: "Kipfilet met rijst en groente voor een stevige maaltijd.",
tijd: "Lunch"
},
{
icon: "🥛",
naam: "Yoghurt met fruit",
beschrijving: "Griekse yoghurt met banaan en bessen.",
tijd: "Snack"
}
],

afvallen: [
{
icon: "🥗",
naam: "Gezonde salade",
beschrijving: "Een frisse salade met kip, groente en een lichte dressing.",
tijd: "Lunch"
},
{
icon: "🍲",
naam: "Groentesoep",
beschrijving: "Een lichte soep met veel verschillende groenten.",
tijd: "Avondeten"
},
{
icon: "🍎",
naam: "Fruit met yoghurt",
beschrijving: "Yoghurt met vers fruit als lichte snack.",
tijd: "Snack"
}
],

conditie: [
{
icon: "🥣",
naam: "Havermout met banaan",
beschrijving: "Havermout met banaan voor energie tijdens het sporten.",
tijd: "Ontbijt"
},
{
icon: "🍝",
naam: "Volkoren pasta",
beschrijving: "Volkoren pasta met groente en kip voor energie.",
tijd: "Lunch"
},
{
icon: "🍌",
naam: "Banaan en yoghurt",
beschrijving: "Een eenvoudige snack voor voor of na het sporten.",
tijd: "Snack"
}
],

voetbal: [
{
icon: "🥣",
naam: "Havermout ontbijt",
beschrijving: "Havermout met fruit voor energie tijdens de training.",
tijd: "Ontbijt"
},
{
icon: "🍗",
naam: "Kip met rijst en groente",
beschrijving: "Een complete maaltijd met koolhydraten, eiwitten en groente.",
tijd: "Lunch"
},
{
icon: "🍌",
naam: "Banaan met yoghurt",
beschrijving: "Een lichte snack voor extra energie.",
tijd: "Voor training"
}
],

hardlopen: [
{
icon: "🍌",
naam: "Banaan met havermout",
beschrijving: "Een lichte maaltijd met energie voor het hardlopen.",
tijd: "Ontbijt"
},
{
icon: "🍚",
naam: "Rijst met kip",
beschrijving: "Rijst met kip en groente voor herstel na het sporten.",
tijd: "Lunch"
},
{
icon: "🥛",
naam: "Yoghurt met fruit",
beschrijving: "Een simpele snack na het hardlopen.",
tijd: "Na training"
}
]

};

function genereerMaaltijden() {

const doel = document.getElementById("doel").value;
const container = document.getElementById("maaltijden");

container.innerHTML = "";

const gekozenMaaltijden = maaltijden[doel];

gekozenMaaltijden.forEach(maaltijd => {

```
const card = document.createElement("div");

card.className = "meal-card";

card.innerHTML = `
  <div class="icon">${maaltijd.icon}</div>
  <h3>${maaltijd.naam}</h3>
  <p>${maaltijd.beschrijving}</p>
  <span class="time">🕒 ${maaltijd.tijd}</span>
`;

container.appendChild(card);
```

});

}
