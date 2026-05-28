/* ========================= */
/* script.js */
/* ========================= */

/* LOGIN */

const loginForm =
  document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

  e.preventDefault();

  const username =
    document.getElementById("username").value;

  const password =
    document.getElementById("password").value;

  if(username === "" || password === ""){

    alert("Vul alle velden in!");
    return;

  }

  const button =
    document.querySelector(".login-btn");

  button.innerHTML =
    "Bezig met inloggen...";

  button.disabled = true;

  setTimeout(() => {

    alert(`Welkom terug ${username} 👋`);

    button.innerHTML =
      "Inloggen";

    button.disabled = false;

    window.location.href = "dashboard.html";

  }, 2000);

});

/* VIDEO AUTOPLAY FIX */

const bgVideo =
  document.getElementById("bgVideo");

bgVideo.play().catch(() => {

  console.log(
    "Autoplay geblokkeerd door browser"
  );

});