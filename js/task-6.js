let input;
let numbers = [];
let total = 0;


while (true) {
  input = prompt("Введіть число (натисніть Cancel для завершення):");

  if (input === null) {
    break;
  }

  const number = Number(input);

  if (!isNaN(number)) {
    numbers.push(number);
  } else {
    alert("Будь ласка, введіть коректне число.");
  }
}

if (numbers.length > 0) {
  for (const num of numbers) {
    total += num;
  }

  console.log(`Сума чисел: ${total}`);
} else {
  console.log("Масив був порожній.");
}ж