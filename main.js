var money = prompt("Pulingizni ko'rsating.");
var planeCost = 500;
var hotelCost = 250;
var museumAndEntertainment = 120;
var result = (planeCost + hotelCost) * 10650.34 + hotelCost * 10650.03;
var a = 10;
var b = 3;
var result2 = Math.round(a % b);
var result3 = Math.pow(2, 10);

console.log(`Sizda bor summa: ${money} so'm`);
console.log("Sayohatga ketadigan summa: " + result + " so'm");

console.log("4-masala");
console.log(result2);

console.log("5-masala");
console.log(result3);
