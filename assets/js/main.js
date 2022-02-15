// -----lev1_1-----
let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta"
]

getraenke.forEach(elem => document.write(elem + '<br>'))


// -----lev1_2-----
console.log('%c------lev1_2-----', 'color:lightgreen');
let getraenkeUpper = getraenke.map(elem => {
  return elem.split("").join("").toUpperCase();
});

console.log(getraenkeUpper);


// -----lev1_3-----
console.log('%c------lev1_3-----', 'color:lightgreen');
let array = [
  18,
  16,
  80,
  51,
  47,
  38,
  95,
  42,
  68,
  61,
  34,
  51,
  20,
  17,
  56,
  31,
  100,
  6,
  5,
  30,
  74,
  97,
  28,
  99,
  91,
  27,
  73,
  12,
  92,
  6,
  27,
  71,
  26,
  15,
  78
];

let multSort = array.map(num => {
  return num * 2;
});

console.log(multSort.sort((a, b) => a - b));


// -----lev1_5-----
console.log('%c------lev1_5-----', 'color:lightgreen');
array.forEach((num, a) => {
  if(num % 3 === 0) {
    array[a] = num + 100;
  } else {
    return num;
  }
});

console.log(array);