/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
/**
 * restituisce saluto in base all'orario
 *
 * @param {string} name
 * @returns {string}
 */
function greetingHours (name) {
    let result = ""
    const now = new Date();

    if (now.getHours() <= 13 ) {
        result = `Buongiorno ${name}`
    } else if (now.getHours() <= 17) {
        result = `Buon pomeriggio ${name}`
    } else {
        result = `Buonasera ${name}`
    }
    return result
}

// Invoca la funzione qui e stampa il risultato in console
greetingHours(name)
console.log(greetingHours(name))

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.