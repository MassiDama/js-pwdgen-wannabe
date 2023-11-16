// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito23.




// chiedi all'utente il suo nome
const userName = (prompt("Inserisci il tuo nome"));

// chiedi all'utente il suo cognome
const userLastname = (prompt("Inserisci il tuo cognome"));

// chiedi il suo colore preferito
const favColor = (prompt("Inserisci il tuo colore preferito"));

// setto costante 23
const finalNumber = "23";

// risultato finale
document.getElementById("risultato").innerHTML = "Ecco il tuo risultato finale: " + userName + userLastname + favColor + finalNumber;

