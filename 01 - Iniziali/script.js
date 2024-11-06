/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
/**
 * restituisce iniziali di ogni parola dell'array
 * 
 *
 * @param {array} names
 * @returns {array}
 */
function initialLet (names) {
    let initial = [];
    for (let i = 0 ; i < names.length; i++) {
        initial.push(names[i][0].toUpperCase())
    }
    return initial
}
    
// Invoca la funzione qui e stampa il risultato in console
initialLet(names)
console.log(initialLet(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]