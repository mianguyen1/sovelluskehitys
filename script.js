
const name = "Opiskelija";
console.log("Hei " + name + "! Tervetuloa JavaScriptin pariin.");

let price = 80;

if (price >= 50) {
    console.log("Tuote on melko kallis.");
} else {
    console.log("Tuote on edullinen.");
}

function addVat(price) {
    return price * 1.25;
}

const priceWithVat = addVat(100);
console.log("Hinta ALV:n kanssa: " + priceWithVat + " euroa");

const products = ["Kahvi", "Tee", "Mehu"];

products.forEach(function(product) {
    console.log(product);
});

function showMessage() {
    console.log("Nappia painettiin!");
    alert("Hei! JavaScript toimii.");
}
