//! Написати програму, яка виводить числа від 1 до 10, використовуючи цикли for і while.

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//! Створити масив, що складається з елементів різних типів (примітивів) (число, рядок, булева змінна) довжиною 10 елементів. Вивести їх тип за допомогою typeof у консоль.
//! Виведення здійсніть за допомогою перебору масиву різними способами: методом forEach, циклами for, while і do while.

// const arrayOfValues = [
//   "sdsfdscg",
//   20,
//   false,
//   null,
//   4432,
//   2n,
//   true,
//   undefined,
//   "asfasf",
//   213,
// ];

// const listOfTypes = arrayOfValues.forEach((char) => console.log(typeof char));

// for (let i = 0; i < arrayOfValues.length; i++) {
//   console.log(typeof arrayOfValues[i]);
// }

// let i = 0;
// while (i < arrayOfValues.length) {
//   console.log(typeof arrayOfValues[i]);
//   i++;
// }

// let i = 0;
// do {
//   console.log(typeof arrayOfValues[i]);
//   i++;
// } while (i < arrayOfValues.length);

//! Створити масив об'єктів (приклад об'єкта {name: ‘’, age: xx, pets: [cat, dog]}) і використати метод filter, щоб вивести всіх, кому більше 20 років.
//! За допомогою map пройтися по масиву із завдання вище та додати кожному домашню тварину. Результат вивести у консоль.

// const arrayOfObjects = [
//   { name: "Anton", age: 20, pets: ["cat"] },
//   { name: "Sasha", age: 25, pets: ["cat"] },
//   { name: "Timur", age: 19, pets: ["dog"] },
//   { name: "Nick", age: 19, pets: ["cat"] },
//   { name: "Andrew", age: 22, pets: ["dog"] },
// ];

// const overTwentyYears = arrayOfObjects.filter((char) => char.age > 20);
// console.log(overTwentyYears);

// arrayOfObjects.map((char) => char.pets.push("cat"));

// console.log(arrayOfObjects);

//! Створити масив із 10 елементів і заповнити його числом 42 за допомогою відповідного методу (завдання знайти його в документації, посилання в описі до лекції).
//! За допомогою splice вставити на 5-ту позицію слово "answer". За допомогою find знайти це слово і вивести його у консоль.

// const arrayOfElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arrayOfElements.fill(42));

// arrayOfElements.splice(4, 0, "answer");
// console.log(arrayOfElements);

// console.log(arrayOfElements.find((char) => char === "answer"));

//! Створіть об'єкт із кількома ключами на ваш розсуд. І наведіть приклади використання keys, hasOwn, values.

const obj = { 1: "sdfdsfds", key: "sdfds", 3: "something" };
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.hasOwn(obj, "key"));
