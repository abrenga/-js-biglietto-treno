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


/*dato che gestisco due pagine diverse la pagina (uno) di inserimento e l pagina (due) di esito ho preferito usare il form che in automatico invia i name sul htttp e da quello poi estrapolo i dati e stampo nella pagina due 
*/
function prendiDati() {
    const url = new URL(location);
    return {
        kmClient: url.searchParams.get("textKm"),
        clientAge: url.searchParams.get("selectB")
    };
}



function gestisciRisposta() {
    const dati = prendiDati();
    let priceE = calcololatePrice(dati.kmClient, costToKm);
    let fine = calcolaSconto(priceE, dati.clientAge, dati.kmClient);
    insertInHTMLSummary("pnr", pnr);
    insertInHTMLSummary("divC", fine);
    insertInHTMLSummary("ageSummary", dati.clientAge);
    insertInHTMLSummary("kmSummary", dati.kmClient);
}


function insertInHTMLSummary(id, parametro) {
    const idHTML = document.getElementById(id);
    idHTML.innerHTML = `<p> ${parametro}</p>`

}

window.addEventListener("load", (e) => {
    gestisciRisposta()
})
