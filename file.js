/*Dobbiamo prendere gli elementi nel form 
ho preferito usare il form perchè per sperimentare ho deciso di lavorare su due pagine diverse "trasportando i dati da una pagina ll'altra*/
/*Applicato una costente */
const costToKm = 0.21;
const pnr = Math.random().toString(16).slice(2).toUpperCase();



function calcololatePrice(km, priceToKm) {
    const TotalPrice = km * priceToKm;
    return TotalPrice;
};

/*Calcolo lo sconto applicando delle condizioni se sono verificare allora verrà applicato uno sconto diverso
ho scelto di verificare il value */
function calcolaSconto(price, age, kmClient) {
    if (age == "joung") {
        let totaleSconto = price * 0.2;
        let totalePrezzo = price - totaleSconto;
        return totalePrezzo.toFixed(2)
    } else if (age == "senior") {
        let totaleSconto = price * 0.4;
        let totalePrezzo = price - totaleSconto;
        return totalePrezzo.toFixed(2)
    } else {
        let totalePrezzo = kmClient * costToKm;
        return totalePrezzo.toFixed(2)
    }
};

/*applico al HTML in modo dinamico i tag necessari per stampare il biglietto */

function insertInHTMLSummary(id, parametro) {
    const idHTML = document.getElementById(id);
    idHTML.innerHTML = `<p> ${parametro}</p>`

}
/*Ascoltiamo l'evento sul bottone e specifico che se i value sono vuoti o non selezionati bisogna non procedere verrà visualizzato un alert */
function gestisciBottone() {
    let button = document.getElementById("btn");

    button.addEventListener("click", (e) => {
        kmClient = document.getElementById("textKm").value;
        let selectionElement = document.getElementById("inputGroupSelect01");
        let elementOption = selectionElement.value;

        if (kmClient == "" || elementOption == "seleziona") {
            alert("non hai inserito nessun dato");
            e.preventDefault();

        } else if (isNaN(kmClient)) {
            alert("Non hai inserito un valore valido");
            e.preventDefault();
        }
    });
}

/*dato che gestisco due pagine diverse la pagina (uno) di inserimento e l pagina (due) di esito ho preferito usare il form che in automatico invia i name sul htttp e da quello poi estrapolo i dati e stampo nella pagina due */
function prendiDati() {
    const url = new URL(location);
    return {
        kmClient: url.searchParams.get("textKm"),
        clientAge: url.searchParams.get("selectB")
    };
}

/*dato che vengono usati due file html diversi il codice js andrebbe scritto su due pagine diverse, perchè potrebbe andare in contrasto in quanto delle funzionalità presenti sulla pagina uno non ci sono in pagina due e viceversa, per ovviare ho messo tutto in funzioni e le invoco all'occorrenza.*/
function gestisciRisposta() {
    const dati = prendiDati();
    let priceE = calcololatePrice(dati.kmClient, costToKm);
    let fine = calcolaSconto(priceE, dati.clientAge, dati.kmClient);
    insertInHTMLSummary("pnr", pnr);
    insertInHTMLSummary("divC", fine);
    insertInHTMLSummary("ageSummary", dati.clientAge);
    insertInHTMLSummary("kmSummary", dati.kmClient);
}

/*Dopo aver inserito i dati chiedo che vengano cancellati i dati nel input */
window.addEventListener("load", (e) => {
    document.getElementById("textKm").value = "";

})