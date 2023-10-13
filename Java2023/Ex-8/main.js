let student = {
  name: "Julien",
  favoriteFood: "Crepes",
  city: "Combs",
};

let result = 0;
let values = Object.values(student);

values.forEach((value) => {
  result += value.length;
});

console.log(result);

if (result % 2) {
  console.log("impair");
} else {
  console.log("pair");
}
