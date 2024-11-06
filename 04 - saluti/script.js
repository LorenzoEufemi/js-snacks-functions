/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
/**
 * restituisce un saluto col nome fornito
 *
 * @param {string} name
 * @returns {string}
 */
const greeting = (name) => `Ciao ${name}`; 
    

    


// Invoca la funzione qui e stampa il risultato in console
greeting(name)
console.log(greeting(name))

//Risultato atteso se si passa 'Mario': // ciao Mario