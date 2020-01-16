
// start a food choice function
const foodRandom = () => {
// generate random number between 0 - 15, can inc or decr as needed
let ranNumber = Math.floor(Math.random() * 16);

if(ranNumber === 0) {
    document.getElementById("foodChoice").innerHTML = "Carrot and ginger soup.";
} else if(ranNumber === 1) {
    document.getElementById("foodChoice").innerHTML = "Avocado and black bean tacos.";
} else if(ranNumber === 2) {
    document.getElementById("foodChoice").innerHTML = "Vegetable soup with your favorite vegetables.";
} else if(ranNumber === 3) {
    document.getElementById("foodChoice").innerHTML = "Chicken nachos.";
} else if(ranNumber === 4) {
    document.getElementById("foodChoice").innerHTML = "Beef nachos.";
} else if(ranNumber === 5) {
    document.getElementById("foodChoice").innerHTML = "Arugula and asparagus salad.";
} else if(ranNumber === 6) {
    document.getElementById("foodChoice").innerHTML = "Creamed corn and fried chicken.";
} else if(ranNumber === 7) {
    document.getElementById("foodChoice").innerHTML = "Salmon, rice and veggies.";
} else if(ranNumber === 8) {
    document.getElementById("foodChoice").innerHTML = "Beet salad.";
} else if(ranNumber === 9) {
    document.getElementById("foodChoice").innerHTML = "Quinoa, brussel sprouts and grilled chicken.";
} else if(ranNumber === 10) {
    document.getElementById("foodChoice").innerHTML = "Pasta with alfredo sauce +/- chicken.";
} else if(ranNumber === 11) {
    document.getElementById("foodChoice").innerHTML = "Savory pie, with pork and cabbage.";
} else if(ranNumber === 12) {
    document.getElementById("foodChoice").innerHTML = "Spicy lentil soup and warm bread.";
} else if(ranNumber === 13) {
    document.getElementById("foodChoice").innerHTML = "Healthy rice bowl with salmon, asparagus, mushrooms and an egg.";
} else if(ranNumber === 14) {
    document.getElementById("foodChoice").innerHTML = "Breakfast for dinner!!";
} else if(ranNumber === 15) {
    document.getElementById("foodChoice").innerHTML = "Lime and tomatillo soup with shredded chicken.";
} else {
    document.getElementById("foodChoice").innerHTML = "Heirloom tomatoe soup with gouda and mozzarella grilled cheese on sourdough.";
}


};