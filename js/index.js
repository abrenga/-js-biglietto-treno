/*Dobbiamo prendere gli elementi nel form 
ho preferito usare il form perchè per sperimentare ho deciso di lavorare su due pagine diverse "trasportando i dati da una pagina ll'altra*/
/*Applicato una costente */

/*applico al HTML in modo dinamico i tag necessari per stampare il biglietto */


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


/*dato che in chrome  i dati inseriti nel form rimangono inseriti anche dopo l'aggiornamento della pagina lo pulisco */
function clearForm() {
    document.getElementById("textKm").value = "";
}

window.addEventListener("load", (e) => {
    clearForm()
})