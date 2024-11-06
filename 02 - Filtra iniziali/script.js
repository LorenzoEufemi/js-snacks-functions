/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/**
 * restituisce le parole che iniziano per "let"
 *
 * @param {array} names
 * @param {string} let
 * @returns {array}
 */
function onlyLet(names, let) {
    // return names.filter(name => name[0].toUpperCase === let.toUpperCase());
    const result = [];
    for (let i = 0; i < names.length; i++) {
        if (names[i][0].toUpperCase() === let.toUpperCase()) {
            result.push(names[i])
        }
    }
    return result;
}

// Invoca la funzione qui e stampa il risultato in console
onlyLet(name, "A")
console.log(onlyLet(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

