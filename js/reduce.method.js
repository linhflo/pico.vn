var courses = [
  { id: 1, name: "HTML", coin: 100 },
  {
    id: 2,
    name: "CSS",
    co,
    in: 200,
  },
  {
    id: 3,
    name: "JavaScript",
    coin: 300,
  },
  {
    id: 4,
    name: "NodeJS",
    coin: 400,
  },
  {
    id: 5,
    name: "ReactJS",
    coin: 500,
  },
];
function handleCoin(acumolator, currentValue, currentIndex, originArray) {
  i++;
  var total = acumolator + currentValue.coin;
  console.table({
    "Luot chay: ": i,
    "Bien luu tru: ": acumolator,
    "Gia khoa hoc: ": currentValue.coin,
    "Tich tru duoc: ": total,
  });
  return total;
}

var totalCoin = courses.reduce(handleCoin, 0);

console.log(totalCoin);