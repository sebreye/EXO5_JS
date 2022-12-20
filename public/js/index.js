let nombre = 8.56
console.log(nombre);
console.log(Math.round(8.56));
console.log(Math.ceil(8.56));
console.log(Math.floor(8.56));
console.log(Math.trunc(8.56));
console.log(Math.random()*1);
console.log(Math.random()*100);
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(100));
  // expected output: 0, 1 or 2
console.log(Math.pow(8, 2))
console.log(Math.sqrt(9));
console.log(Math.abs(-1));
console.log(Math.max(-2, 1000, 8, 57));
console.log(Math.min(-2, 1000, 8, 57));
