/* programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Stampate il prezzo finale del biglietto nella console del browser in forma “umana” ovvero con massimo due cifre decimali, per indicare centesimi 
sul prezzo (per questo sarà necessario cercare in documentazione come fare) */

let kmClient = "";
let clientAge = "";
const costToKm = 0.21;



/*calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)*/

function cacololatePrice(km, priceToKm) {
    const TotalPrice = km * priceToKm;
    return TotalPrice;
};




function calcolaSconto(price, age) {
    if (age <= 18) {
        let totaleSconto = price * 0.2;
        let totalePrezzo = price - totaleSconto;
        return totalePrezzo.toFixed(2)
    } else if (age >= 65) {
        let totaleSconto = price * 0.4;
        let totalePrezzo = price - totaleSconto;
        return totalePrezzo.toFixed(2)
    } else {
        let totalePrezzo = kmClient * costToKm;
        return totalePrezzo.toFixed(2)
    }
};


function insertIntoHTML(endPrice) {
    let div = document.getElementById("divC");
    div.value = `<p> ${endPrice}€</p>`;
};

let button = document.getElementById("btn");

button.addEventListener("click", (e) => {
    kmClient = document.getElementById("textKm").value;
    clientAge = document.getElementById("ageInput").value;

    if (kmClient == "" && clientAge == "") {
        alert("non hai inserito nessun dato")
    } else {
        let priceE = cacololatePrice(kmClient, costToKm);
        let fine = calcolaSconto(priceE, clientAge);
        insertIntoHTML(fine)
    }

});

/*Non èancora finito ho creato una pagina index.html che avrà un layaut dove si portranno inserire i dati
successivamente al cerca si aprirà un'altra pagina che darà il totale del costo da pagare
qindi il codice deve essere ancora modificato ed aggiustato sono a lavoro lo faccio appena possibile */