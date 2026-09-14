function voegPrestatieToe() {

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
}