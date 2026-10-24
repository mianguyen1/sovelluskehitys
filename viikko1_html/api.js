
const haeNappi = document.getElementById("haeNappi");
const tulosTeksti = document.getElementById("tulosTeksti");
const haeUseampiNappi = document.getElementById("haeUseampiNappi");
const neuvoLista = document.getElementById("neuvoLista");

haeNappi.addEventListener("click", () => {
    tulosTeksti.innerText = "Haetaan neuvoa...";

    fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
        .then(response => response.json())
        .then(data => {
            console.log("Rajapinnan vastaus:", data);
            tulosTeksti.innerText = data.slip.advice;
        })
        .catch(error => {
            console.error("Virhe haussa:", error);
            tulosTeksti.innerText = "Neuvon hakeminen epäonnistui.";
        });
});

haeUseampiNappi.addEventListener("click", async () => {
    neuvoLista.innerHTML = "";
    tulosTeksti.innerText = "Haetaan neuvoja...";

    try {
        for (let i = 0; i < 3; i++) {
            const response = await fetch(
                "https://api.adviceslip.com/advice",
                { cache: "no-cache" }
            );

            const data = await response.json();
            console.log("Rajapinnan vastaus:", data);

            const li = document.createElement("li");
            li.innerText = data.slip.advice;
            neuvoLista.appendChild(li);
        }

        tulosTeksti.innerText = "Kolme neuvoa haettu!";
    } catch (error) {
        console.error("Virhe haussa:", error);
        tulosTeksti.innerText = "Neuvojen hakeminen epäonnistui.";
    }
});
