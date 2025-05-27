// pari o dispari: chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

const userChoice = prompt("pari o dispari?");
const userNumber = Number(prompt("scegli un numero compreso tra 1 e 9"));
const pcNumber = Math.floor(Math.random() * 9) + 1;


let result = userNumber + pcNumber;
const isEven = result % 2 === 0;


// controls 
if (userChoice.toLowerCase() !== "pari" || userChoice.toLowerCase() !== "dipari" && userNumber > 9 || userNumber < 1) {
    console.log("Valore non valido, ricarica la pagina");
}
else{
    console.log("userNumber:" + userNumber);
    console.log(`pcNumber: ${pcNumber}`);
    if (userChoice.toLowerCase() === "pari" && isEven || userChoice.toLowerCase() === "dispari" && !isEven) {
        console.log("HAI VINTO!!!");
    }
    else{
        console.log("HAI PERSO");
    }

}





