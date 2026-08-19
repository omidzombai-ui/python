function addRecord(){

  const exercise =
  document.getElementById("exercise").value;

  const oldWeight =
  Number(
    document.getElementById("oldWeight").value
  );

  const newWeight =
  Number(
    document.getElementById("newWeight").value
  );

  const reps =
  Number(
    document.getElementById("reps").value
  );


  /* CONTROLEREN */

  if(
    exercise === "" ||
    oldWeight <= 0 ||
    newWeight <= 0 ||
    reps <= 0
  ){

    alert(
      "Vul alle gegevens goed in."
    );

    return;

  }


  /* VERSCHIL BEREKENEN */

  const difference =
  newWeight - oldWeight;


  let message;


  if(difference > 0){

    message =
    `+${difference} kg verbetering 🔥`;

  }

  else if(difference === 0){

    message =
    "Je hebt hetzelfde record behouden 💪";

  }

  else{

    message =
    `${difference} kg ten opzichte van je oude record`;

  }


  /* RESULTAAT */

  document.getElementById(
    "recordResult"
  ).innerHTML = `

    <div class="success-record">

      <h3>
        🏆 Nieuw Record Opgeslagen!
      </h3>

      <p>
        <strong>${exercise}</strong>
      </p>

      <p>
        Oud record:
        ${oldWeight} kg
      </p>

      <p>
        Nieuw record:
        ${newWeight} kg
      </p>

      <p>
        Herhalingen:
        ${reps}
      </p>

      <p>
        ${message}
      </p>

    </div>

  `;


  /* FORMULIER LEEGMAKEN */

  document.getElementById(
    "exercise"
  ).value = "";

  document.getElementById(
    "oldWeight"
  ).value = "";

  document.getElementById(
    "newWeight"
  ).value = "";

  document.getElementById(
    "reps"
  ).value = "";

}