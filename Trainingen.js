function genereerTraining(){

  const doel =
  document.getElementById("doel").value;

  let schema = "";

  if(doel === "spieropbouw"){

    schema = `
      <div class="training-item">
        💪 Maandag - Borst & Triceps
      </div>

      <div class="training-item">
        💪 Woensdag - Rug & Biceps
      </div>

      <div class="training-item">
        💪 Vrijdag - Benen & Core
      </div>
    `;
  }

  if(doel === "afvallen"){

    schema = `
      <div class="training-item">
        🏃 Maandag - Cardio
      </div>

      <div class="training-item">
        🔥 Woensdag - HIIT
      </div>

      <div class="training-item">
        ⚡ Vrijdag - Full Body
      </div>
    `;
  }

  if(doel === "conditie"){

    schema = `
      <div class="training-item">
        🏃 Hardlopen
      </div>

      <div class="training-item">
        🚴 Fietsen
      </div>

      <div class="training-item">
        ⚡ Interval Training
      </div>
    `;
  }

  if(doel === "voetbal"){

    schema = `
      <div class="training-item">
        ⚽ Balcontrole
      </div>

      <div class="training-item">
        ⚽ Sprints
      </div>

      <div class="training-item">
        ⚽ Wedstrijdtraining
      </div>
    `;
  }

  if(doel === "hardlopen"){

    schema = `
      <div class="training-item">
        🏃 5 KM Run
      </div>

      <div class="training-item">
        🏃 Tempo Training
      </div>

      <div class="training-item">
        🏃 Lange Afstand
      </div>
    `;
  }

  document.getElementById("schema").innerHTML =
  schema;
}