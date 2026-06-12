function genereerTraining() {

  const naam =
  document.getElementById("naam").value || "Sporter";

  const doel =
  document.getElementById("doel").value;

  const schemas = {

    spieropbouw: [

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

    afvallen: [

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

    conditie: [

      [
        "5 KM Hardlopen",
        "Sprint Training",
        "Interval Run",
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

    voetbal: [

      [
        "Balcontrole",
        "Pass Oefeningen",
        "Sprint Training",
        "Schieten",
        "Positiespel"
      ],

      [
        "Dribbelen",
        "1 tegen 1",
        "Sprinten",
        "Korte Passes",
        "Wedstrijdtraining"
      ]

    ],

    hardlopen: [

      [
        "5 KM Rustig Tempo",
        "10x 200m Sprint",
        "8 KM Duurloop",
        "Cooling Down",
        "Stretching"
      ],

      [
        "3 KM Warming Up",
        "Interval Training",
        "6 KM Tempo Run",
        "Core Training",
        "Herstel Wandeling"
      ]

    ]

  };

  const lijst =
  schemas[doel];

  const randomSchema =
  lijst[Math.floor(Math.random() * lijst.length)];

  let oefeningen = "";

  randomSchema.forEach(item => {

    oefeningen += `

      <div class="exercise">

        <label>

          <input
            type="checkbox"
            class="exercise-check"
          >

          ${item}

        </label>

      </div>

    `;

  });

  document.getElementById("schema").innerHTML = `

    <h2>
      Welkom ${naam} 👋
    </h2>

    <p>
      Jouw AI trainingsschema is gegenereerd.
    </p>

    <br>

    <div class="progress-box">

      <div class="progress-text">

        Voltooid:
        <span id="doneCount">
          0/5
        </span>

      </div>

      <div class="progress-bar">

        <div id="progressFill"></div>

      </div>

    </div>

    <br>

    ${oefeningen}

  `;

  voegCheckboxEventsToe();
}

function voegCheckboxEventsToe() {

  const checks =
  document.querySelectorAll(".exercise-check");

  checks.forEach(check => {

    check.addEventListener(
      "change",
      updateProgress
    );

  });

}

function updateProgress() {

  const checks =
  document.querySelectorAll(".exercise-check");

  const checked =
  document.querySelectorAll(
    ".exercise-check:checked"
  );

  const totaal =
  checks.length;

  const gedaan =
  checked.length;

  document.getElementById(
    "doneCount"
  ).innerText =
  `${gedaan}/${totaal}`;

  const percentage =
  (gedaan / totaal) * 100;

  document.getElementById(
    "progressFill"
  ).style.width =
  percentage + "%";

  if(gedaan === totaal && totaal > 0){

    setTimeout(() => {

      alert(
        "🏆 Goed gedaan! Training voltooid!"
      );

    }, 300);

  }

}

window.addEventListener("load", () => {

  console.log(
    "ZS Sport AI Trainingscoach geladen"
  );

});