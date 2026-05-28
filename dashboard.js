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

  alert("Welkom in jouw profiel pagina 👤");

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

video.playbackRate = 0.9;