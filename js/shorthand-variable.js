let price = 25;
let quantity = 5000;
let total = price + quantity;
let buy = (3 < 5) && ( 2 > 1);
let subtotal = ( 13 + 1) * 5;
let shipping = 0.5 * ( 13 + 1);
let greeting = 'Hello ';
let name = 'Lewis';
let message = greeting + name + '!';
let totalCost = subtotal + shipping;

let greet = document.getElementById('message');
greet.textContent = message;

let e = document.getElementById('totals');
e.textContent = 'Your total shipping cost is: ' + totalCost;

let colors;
colors = ['blue', 'silver', 'teal'];

colors[2] = 'beige';

let ele = document.getElementById('colors');
ele.textContent = colors[2];


let el = document.getElementById('cost');
el.textContent = 'The cost is $ ' + buy;
