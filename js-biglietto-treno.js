let kmDaPercorrere= prompt('Inserisci i km che vuoi percorrere');
console.log('km scelti dall\'utente: ' + kmDaPercorrere);

// kmDaPercorrere=parseInt(kmDaPercorrere);

let etàPassegero= prompt('Inserisci la tua età');
console.log('età scelta dall\'utente: ' + etàPassegero);

let prezzoBase= kmDaPercorrere * 0.21;
prezzoBase = prezzoBase.toFixed(2);
console.log('Prezzo base calcolato: ' + prezzoBase);

let sconto = 0;

if (etàPassegero <= 18){
    sconto = prezzoBase * 20/100;
    console.log('Età minore di 18 => sconto del 20%');
} else if (etàPassegero >= 65) { 
    sconto = prezzoBase * 40/100;
    console.log('Età maggiore di 65 => sconto del 40%');
}

sconto = sconto.toFixed(2)
console.log('Sconto in euro: ' + sconto);


let prezzoScontato = prezzoBase - sconto;
prezzoScontato = prezzoScontato.toFixed(2);

console.log('RISULTATO:');
console.log('prezzo biglietto: ' + prezzoScontato);

// BONUS
// debugger;
document.getElementById("km").innerHTML = kmDaPercorrere;
document.getElementById("age").innerHTML = etàPassegero;
document.getElementById("base-price").innerHTML = prezzoBase;
document.getElementById("sconto").innerHTML = sconto;
document.getElementById("result").innerHTML = prezzoScontato;

//document.getElementById("km").innerHTML += 'ciao';
// let prezzoSconto1 = prezzoBase - sconto1
// console.log(prezzoSconto1)

// let prezzoSconto2 = prezzoBase - sconto2
// console.log(prezzoSconto2)