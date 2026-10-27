/* ========================= */
/* ZS SPORT AI DASHBOARD JS */
/* ========================= */

if (document.body.classList.contains("page-dashboard")) {

/* WELKOM MELDING */

window.addEventListener("load", () => {

  console.log("ZS Sport AI Dashboard geladen");

});

/* PROFILE BUTTON */

const profileBtn = document.querySelector(".profile-btn");

profileBtn.addEventListener("click", () => {

  window.location.href = "profiel.html";

});

/* NAVIGATION ACTIVE EFFECT */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.forEach(item => {
      item.classList.remove("active");
    });

    link.classList.add("active");

  });

});

/* HERO CARDS ANIMATION */

const heroCards = document.querySelectorAll(".hero-card");

heroCards.forEach((card, index) => {

  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";

  setTimeout(() => {

    card.style.transition = "0.6s ease";

    card.style.opacity = "1";
    card.style.transform = "translateY(0px)";

  }, index * 250);

});

/* STATS COUNTER */

const stats = document.querySelectorAll(".stat-card span");

stats.forEach(stat => {

  const finalNumber = stat.innerText.replace("%", "");

  let start = 0;

  const counter = setInterval(() => {

    start++;

    if(stat.innerText.includes("%")){

      stat.innerText = start + "%";

    }else{

      stat.innerText = start;

    }

    if(start >= finalNumber){

      clearInterval(counter);

      if(stat.parentElement.innerHTML.includes("%")){
        stat.innerText = finalNumber + "%";
      }

    }

  }, 15);

});

/* MOTIVATION MESSAGE */

const messages = [

  "🔥 Train slimmer met AI",
  "💪 Blijf consistent",
  "🏆 Werk aan jouw doelen",
  "⚡ Iedere training telt",
  "🥗 Gezonde voeding = betere prestaties"

];

const motivationBox = document.querySelector(".motivation-box h3");

let current = 0;

setInterval(() => {

  current++;

  if(current >= messages.length){
    current = 0;
  }

  motivationBox.style.opacity = "0";

  setTimeout(() => {

    motivationBox.innerText = messages[current];

    motivationBox.style.opacity = "1";

  }, 300);

}, 3000);

/* VIDEO SPEED */

const video = document.querySelector("video");

if (video) {
  video.playbackRate = 0.9;
}

/* AI GENERATOR */

window.addEventListener("load", () => {
  console.log("ZS Sport AI generator geladen");

  const trainingBtn = document.querySelector(".generate-training-btn");
  const mealBtn = document.querySelector(".generate-meal-btn");
  const trainingResult = document.querySelector(".training-result");
  const mealResult = document.querySelector(".meal-result");

  if (!trainingBtn) {
    console.warn("Geen AI trainingsknop gevonden.");
  }

  if (!mealBtn) {
    console.warn("Geen AI maaltijdknop gevonden.");
  }

  if (!trainingResult) {
    console.warn("Geen container voor training result gevonden.");
  }

  if (!mealResult) {
    console.warn("Geen container voor maaltijd result gevonden.");
  }

  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function renderSuggestion(container, suggestion, label) {
    if (!container) return;

    container.innerHTML = `
      <h3>${label}</h3>
      <p class="item-title">${suggestion.title}</p>
      <p class="item-desc">${suggestion.details}</p>
    `;
  }

  if (trainingBtn) {
    trainingBtn.addEventListener("click", () => {
      const suggestion = getRandomItem(trainingPlans);
      renderSuggestion(trainingResult, suggestion, "AI trainingssuggestie");
    });
  }

  if (mealBtn) {
    mealBtn.addEventListener("click", () => {
      const suggestion = getRandomItem(mealPlans);
      renderSuggestion(mealResult, suggestion, "AI maaltijdsuggestie");
    });
  }
});

const trainingPlans = [
  {
    title: "Full body krachtcircuit",
    details: "3 sets van squats, push-ups, lunges, plank en burpees. Perfect voor spierkracht en conditie."
  },
  {
    title: "Superset cardio & kracht",
    details: "Afwisselend 20 min roeien met dumbbell presses, deadlifts en corework. Ideaal voor vetverbranding."
  },
  {
    title: "Sportperformance schema",
    details: "Explosieve sprongen, kettlebell swings, pull-ups en core stability. Gericht op snelheid en power."
  },
  {
    title: "Hersteltraining",
    details: "Lichte mobiliteit, stretch, rustige fietsen en core stabilisatie. Goed voor herstel na een zware training."
  }
];

const mealPlans = [
  {
    title: "Kip quinoa bowl",
    details: "Gegrilde kip, quinoa, geroosterde groenten en avocado. Hoge eiwitten en goede vetten."
  },
  {
    title: "Zalm zoete aardappel maaltijd",
    details: "Gebakken zalm met zoete aardappel, broccoli en een frisse citrusdressing. Ideaal voor spierherstel."
  },
  {
    title: "Vegetarische power salade",
    details: "Linzen, spinazie, geitenkaas, noten en bessen met hummus dressing. Veel vezels en plantaardige eiwitten."
  },
  {
    title: "Sport smoothie bowl",
    details: "Bevat banaan, aardbei, proteïne poeder, spinazie en amandelmelk. Energierijke start voor training."
  }
];

}

if (document.body.classList.contains("page-trainingen")) {

window.genereerTraining = function genereerTraining(){

    const naam =
    document.getElementById("naam").value || "Sporter";

    const doel =
    document.getElementById("doel").value;

    const schemas = {

        spieropbouw:[
            [
                "Bench Press - 4x10",
                "Incline Dumbbell Press - 3x12",
                "Chest Fly - 3x12",
                "Dips - 3x10",
                "Push Ups - 3x20"
            ],
            [
                "Squat - 4x10",
                "Leg Press - 3x12",
                "Lunges - 3x12",
                "Calf Raises - 3x20",
                "Plank - 3x60 sec"
            ]
        ],
        afvallen:[
            [
                "Hardlopen - 30 min",
                "Burpees - 4x15",
                "Mountain Climbers - 4x30 sec",
                "Jump Squats - 4x15",
                "Plank - 3x60 sec"
            ],
            [
                "Fietsen - 45 min",
                "Jump Rope - 15 min",
                "Push Ups - 4x15",
                "Squats - 4x20",
                "Crunches - 3x25"
            ]
        ],
        conditie:[
            [
                "5 KM Hardlopen",
                "Interval Training",
                "Sprint Training",
                "Cooling Down",
                "Stretching"
            ],
            [
                "Fietsen - 60 min",
                "Roeien - 20 min",
                "Traplopen",
                "Sprint Intervallen",
                "Core Training"
            ]
        ],
        voetbal:[
            [
                "Balcontrole",
                "Pass Oefeningen",
                "Sprint Training",
                "Schieten",
                "Positiespel"
            ],
            [
                "Dribbelen",
                "Korte Passes",
                "Sprinten",
                "Wedstrijdtraining",
                "1 tegen 1"
            ]
        ],
        hardlopen:[
            [
                "5 KM Rustig Tempo",
                "10x 200m Sprint",
                "8 KM Duurloop",
                "Cooling Down",
                "Stretching"
            ],
            [
                "3 KM Warming Up",
                "Tempo Run",
                "Interval Training",
                "Core Training",
                "Herstel Wandeling"
            ]
        ]
    };

    const lijst = schemas[doel];
    const randomSchema = lijst[Math.floor(Math.random() * lijst.length)];

    let oefeningen = "";

    randomSchema.forEach(item => {
        oefeningen += `
        <div class="exercise">
            <label>
                <input type="checkbox" class="exercise-check">
                ${item}
            </label>
        </div>
        `;
    });

    document.getElementById("schema").innerHTML = `
        <h3>Welkom ${naam} 👋</h3>
        <br>
        <div class="progress-box">
            <p>
            Voltooid:
            <span id="doneCount">0/${randomSchema.length}</span>
            </p>
            <br>
            <div class="progress-bar">
                <div id="progressFill"></div>
            </div>
        </div>
        ${oefeningen}
    `;

    voegEventsToe();
};

function voegEventsToe(){
    const checks = document.querySelectorAll(".exercise-check");

    checks.forEach(check => {
        check.addEventListener("change", updateProgress);
    });
}

function updateProgress(){
    const checks = document.querySelectorAll(".exercise-check");
    const checked = document.querySelectorAll(".exercise-check:checked");
    const totaal = checks.length;
    const gedaan = checked.length;

    document.getElementById("doneCount").innerText = `${gedaan}/${totaal}`;
    document.getElementById("progressFill").style.width =
        ((gedaan / totaal) * 100) + "%";

    if (gedaan === totaal && totaal > 0) {
        setTimeout(() => {
            alert("🏆 Training voltooid! Goed bezig!");
        }, 300);
    }
}

}

if (document.body.classList.contains("page-wedstrijden")) {

window.addRecord = function addRecord(){
  const exercise = document.getElementById("exercise").value;
  const oldWeight = Number(document.getElementById("oldWeight").value);
  const newWeight = Number(document.getElementById("newWeight").value);
  const reps = Number(document.getElementById("reps").value);

  if (exercise === "" || oldWeight <= 0 || newWeight <= 0 || reps <= 0) {
    alert("Vul alle gegevens goed in.");
    return;
  }

  const difference = newWeight - oldWeight;
  let message;

  if (difference > 0) {
    message = `+${difference} kg verbetering 🔥`;
  } else if (difference === 0) {
    message = "Je hebt hetzelfde record behouden 💪";
  } else {
    message = `${difference} kg ten opzichte van je oude record`;
  }

  document.getElementById("recordResult").innerHTML = `
    <div class="success-record">
      <h3>🏆 Nieuw Record Opgeslagen!</h3>
      <p><strong>${exercise}</strong></p>
      <p>Oud record: ${oldWeight} kg</p>
      <p>Nieuw record: ${newWeight} kg</p>
      <p>Herhalingen: ${reps}</p>
      <p>${message}</p>
    </div>
  `;

  document.getElementById("exercise").value = "";
  document.getElementById("oldWeight").value = "";
  document.getElementById("newWeight").value = "";
  document.getElementById("reps").value = "";
};

}

if (document.body.classList.contains("page-prestaties")) {

window.voegPrestatieToe = function voegPrestatieToe() {
    const oefening = document.getElementById("oefening").value;
    const gewicht = document.getElementById("gewicht").value;
    const melding = document.getElementById("melding");

    if (oefening === "" || gewicht === "") {
        melding.textContent = "Vul beide velden in.";
        return;
    }

    melding.textContent =
        "✅ " + oefening + " van " + gewicht + " kg is toegevoegd!";

    document.getElementById("oefening").value = "";
    document.getElementById("gewicht").value = "";
};

}

if (document.body.classList.contains("page-maaltijden")) {

const maaltijden = {
    spieropbouw: [
        { icon: "🥚", naam: "Eieren met volkoren brood", beschrijving: "Eieren, volkoren brood en groente voor een eiwitrijke maaltijd.", tijd: "Ontbijt" },
        { icon: "🍗", naam: "Kip met rijst", beschrijving: "Kipfilet met rijst en groente voor een stevige maaltijd.", tijd: "Lunch" },
        { icon: "🥛", naam: "Yoghurt met fruit", beschrijving: "Griekse yoghurt met banaan en bessen.", tijd: "Snack" }
    ],
    afvallen: [
        { icon: "🥗", naam: "Gezonde salade", beschrijving: "Een frisse salade met kip, groente en een lichte dressing.", tijd: "Lunch" },
        { icon: "🍲", naam: "Groentesoep", beschrijving: "Een lichte soep met veel verschillende groenten.", tijd: "Avondeten" },
        { icon: "🍎", naam: "Fruit met yoghurt", beschrijving: "Yoghurt met vers fruit als lichte snack.", tijd: "Snack" }
    ],
    conditie: [
        { icon: "🥣", naam: "Havermout met banaan", beschrijving: "Havermout met banaan voor energie tijdens het sporten.", tijd: "Ontbijt" },
        { icon: "🍝", naam: "Volkoren pasta", beschrijving: "Volkoren pasta met groente en kip voor energie.", tijd: "Lunch" },
        { icon: "🍌", naam: "Banaan en yoghurt", beschrijving: "Een eenvoudige snack voor voor of na het sporten.", tijd: "Snack" }
    ],
    voetbal: [
        { icon: "🥣", naam: "Havermout ontbijt", beschrijving: "Havermout met fruit voor energie tijdens de training.", tijd: "Ontbijt" },
        { icon: "🍗", naam: "Kip met rijst en groente", beschrijving: "Een complete maaltijd met koolhydraten, eiwitten en groente.", tijd: "Lunch" },
        { icon: "🍌", naam: "Banaan met yoghurt", beschrijving: "Een lichte snack voor extra energie.", tijd: "Voor training" }
    ],
    hardlopen: [
        { icon: "🍌", naam: "Banaan met havermout", beschrijving: "Een lichte maaltijd met energie voor het hardlopen.", tijd: "Ontbijt" },
        { icon: "🍚", naam: "Rijst met kip", beschrijving: "Rijst met kip en groente voor herstel na het sporten.", tijd: "Lunch" },
        { icon: "🥛", naam: "Yoghurt met fruit", beschrijving: "Een simpele snack na het hardlopen.", tijd: "Na training" }
    ]
};

window.genereerMaaltijden = function genereerMaaltijden() {
    const doel = document.getElementById("doel").value;
    const container = document.getElementById("maaltijden");

    container.innerHTML = "";

    maaltijden[doel].forEach(maaltijd => {
        const card = document.createElement("div");
        card.className = "meal-card";
        card.innerHTML = `
          <div class="icon">${maaltijd.icon}</div>
          <h3>${maaltijd.naam}</h3>
          <p>${maaltijd.beschrijving}</p>
          <span class="time">🕒 ${maaltijd.tijd}</span>
        `;
        container.appendChild(card);
    });
};

}
