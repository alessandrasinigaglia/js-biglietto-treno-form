// Dom Elements
const priceForKm = 0.21;
const formname = document.getElementById('name');
const formage = document.getElementById('age');
const generate = document.getElementById('generate');
const cancel = document.getElementById('cancel');
const passeggero = document.getElementById('passeggero');
const offerta = document.getElementById('offerta');
const carrozza = document.getElementById('carrozza');
const codcp = document.getElementById('codcp');
const ticketprice = document.getElementById('ticketprice');
const ticket = document.getElementById('ticket');


const name = formname.value

generate.addEventListener("click", function (){
    const formkm = Number(document.getElementById('km').value)
    let price = formkm * priceForKm;
    if (age <= 18) {
        price -= price * 0.20; 
    if (age >= 65) {
        price -= price * 0.40; 
    }
}
console.log(price)
});
