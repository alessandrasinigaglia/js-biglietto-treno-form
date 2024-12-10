// Dom Elements
const priceForKm = 0.21;
const formname = document.getElementById('name');
const formkm = document.getElementById('km');
const formage = document.getElementById('age');
const generate = document.getElementById('generate');
const cancel = document.getElementById('cancel');

const name = formname.value

generate.addEventListener("click", function (){
    let price = km * priceForKm;
    if (age <= 18) {
        price -= price * 0.20; 
    if (age >= 65) {
        price -= price * 0.40; 
    }
}
console.log(price)
});
