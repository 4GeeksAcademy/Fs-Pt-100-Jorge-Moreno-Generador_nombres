let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'raccoon'];
let extensions = ['.com', '.net', '.us', '.io']; // Extensiones normales

for (let p of pronoun) {
for (let a of adj) {
for (let n of noun) {
// Generar dominios con extensiones normales
for (let ext of extensions) {
console.log(`${p}${a}${n}${ext}`);
}
        // Generar domain hacks (Ejemplo: raccoon.io → racc.io)
        let lastTwoLetters = n.slice(-2); // Últimas dos letras del sustantivo
        let possibleHack = n.slice(0, -2); // Parte antes de la extensión

        if (extensions.includes(`.${lastTwoLetters}`)) {
            console.log(`${p}${a}${possibleHack}.${lastTwoLetters}`);
        }
    }
}

}