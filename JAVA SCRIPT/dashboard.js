/* ========================= */
/* ZS SPORT AI DASHBOARD JS */
/* ========================= */

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

