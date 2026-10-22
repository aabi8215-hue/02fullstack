//- Вывести числа от 1 до 20.
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//- Вывести числа от 20 до 1.
for (let i = 20; i >= 1; i--) {
  console.log(i);
}

//- Вывести все чётные числа от 1 до 50.
for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}

//- Посчитать сумму чисел от 1 до 100.
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log(sum);  // 5050

//- Вывести квадраты чисел от 1 до 10.
for (let i = 1; i <= 10; i++) {
  console.log(`Квадрат ${i} — ${i ** 2}`);
}

//- Вывести таблицу умножения для числа 5.
for (let i = 1; i <= 10; i++) {
  console.log(`5 × ${i} = ${5 * i}`);
}

//- Посчитать сумму всех чётных чисел от 1 до 50.
let evenSum = 0;

for (let i = 2; i <= 50; i += 2) {
  evenSum += i;
}

console.log(evenSum); // 650
//- Вывести все числа от 0 до 100 с шагом 5.
for (let i = 0; i <= 100; i += 5) {
  console.log(i);
}

//- Посчитать, сколько чисел от 1 до 100 делятся на 7 и вывести количество.
let count = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    count++;
  }
}

console.log(count); // 14

//Объекты
const user = {
  name: "Alex",
  age: 25,
  city: "Almaty",
};

// Вывести поля
console.log(user.name, user.age, user.city);

// Изменить возраст
user.age = 26;

// Добавить телефон
user.phone = "+7 777 123 45 67";

// Удалить город
delete user.city;

// Проверить наличие свойства email
console.log("email" in user);

// Вывести все ключи
for (const key in user) {
  console.log(key);
}

// Вывести все значения
for (const value of Object.values(user)) {
  console.log(value);
}

// Посчитать количество свойств
console.log(Object.keys(user).length);

//Массивы
const numbers = [5, -3, 10, 7, 2];

// Вывести каждый элемент
for (const number of numbers) {
  console.log(number);
}

// Сумма всех элементов
let total = 0;
for (const number of numbers) {
  total += number;
}
console.log("Сумма:", total);

// Максимальный элемент и его индекс
let max = numbers[0];
let maxIndex = 0;

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
    maxIndex = i;
  }
}
console.log("Максимум:", max);
console.log("Индекс максимума:", maxIndex);

// Минимальный элемент и его индекс
let min = numbers[0];
let minIndex = 0;

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
    minIndex = i;
  }
}
console.log("Минимум:", min);
console.log("Индекс минимума:", minIndex);

// Количество элементов
console.log("Количество элементов:", numbers.length);

// Сумма чётных элементов
let evenTotal = 0;
for (const number of numbers) {
  if (number % 2 === 0) {
    evenTotal += number;
  }
}
console.log("Сумма чётных:", evenTotal);

// Количество отрицательных чисел
let negativeCount = 0;
for (const number of numbers) {
  if (number < 0) {
    negativeCount++;
  }
}
console.log("Отрицательных чисел:", negativeCount);

// Произведение всех элементов
let product = 1;
for (const number of numbers) {
  product *= number;
}
console.log("Произведение:", product);

// Проверить, есть ли число 10 — только цикл и if
let hasTen = false;
for (const number of numbers) {
  if (number === 10) {
    hasTen = true;
  }
}
console.log("Есть число 10:", hasTen);

// Сколько раз встречается число 7
let sevenCount = 0;
for (const number of numbers) {
  if (number === 7) {
    sevenCount++;
  }
}
console.log("Число 7 встречается раз:", sevenCount);

// Последнее положительное число
let lastPositive;
for (const number of numbers) {
  if (number > 0) {
    lastPositive = number;
  }
}
console.log("Последнее положительное число:", lastPositive);

// Среднее арифметическое
const average = total / numbers.length;
console.log("Среднее арифметическое:", average);