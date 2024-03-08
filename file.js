/* programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Stampate il prezzo finale del biglietto nella console del browser in forma “umana” ovvero con massimo due cifre decimali, per indicare centesimi 
sul prezzo (per questo sarà necessario cercare in documentazione come fare) */


/*const kmClient = document.getElementById("km").value;
const clientAge = document.getElementById("clientAge").value;
const costToKm = 0.21;*/

const kmClient= 202.5;
const costToKm = 0.21;
const clientAge = 20;

/*calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)*/

function cacololatePrice(km, priceToKm) {
    const TotalPrice = km * priceToKm;
    return TotalPrice;
};

let priceE = cacololatePrice(kmClient, costToKm);


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

let scontoE = calcolaSconto(priceE, clientAge);


function insertIntoHTML(endPrice) {
    let div = document.getElementById("divC");
    div.innerHTML = `<p> ${endPrice}€</p>`;
};


window.addEventListener("DOMContentLoaded", (e) => {

    insertIntoHTML(scontoE);

});

/*Non èancora finito ho creato una pagina index.html che avrà un layaut dove si portranno inserire i dati
successivamente al cerca si aprirà un'altra pagina che darà il totale del costo da pagare
qindi il codice deve essere ancora modificato ed aggiustato sono a lavoro lo faccio appena possibile */