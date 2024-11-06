/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
/**
 * Description placeholder
 *
 * @param {string} word
 * @returns {number}
 */
function vowels(word) {
    let count = 0
    const vocal = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < word.length; i++) {
        if (vocal.includes(word[i].toLowerCase())) {
            count++;
        }
    }
    return count
}

// Invoca la funzione qui e stampa il risultato in console
vowels(word)
console.log(vowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)