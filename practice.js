// Розбір ДЗ №5

// Задача №1

// if else, prompt
// Написати програму де ми питаємо у користувача
// номер місяця і показуємо до якого часу року він належить
// Якщо користувач ввів 2 - показуєм слово Зима
// Якщо 3 -Весна і т.д.

// const maus = Number(prompt("Яка пора року?"));

// if (maus === 12 || maus === 1 || maus === 2) {
//   console.log("Зима");
// } else if (maus >= 3 && maus <= 5) {
//   console.log("Весна");
// } else if (maus >= 6 && maus <= 8) {
//   console.log("Літо");
// } else if (maus >= 7 && maus <= 9) {
//   console.log("Осінь");
// } else {
//   console.log("Error");
// }

// ............

// Задача №2

// Написати програму яка перевіряє логін і пароль користувача
//  і виводить привітання - якщо все добре
//  і якщо ні помилку - невінний логін

// const login = "user@gmail.com";
// const password = "12345";
// const userlogin = prompt("Введіть логін");
// const userPassword = prompt("Введіть пароль");

// if (login === userlogin && password === userPassword) {
//   console.log("Доступ відкрито");
// } else {
//   console.log("Errror");
// }

// const result =
//   login === userlogin && password === userPassword
//     ? "Доступ відкрито"
//     : "Errror";
// console.log(result);

// ............

// Задача №3

/* на for
 * Напиши скрипт який підрахує суму всіх парних чисел,
 * які входят в діапазон чисел в змінних від min до max.
 * Наприклад, якщо min=0 і max=5, то діапазон 0-5,
 * зроби перевірку
 * виведи парні числа
 * і порахуй їх суму, змінна total
 * виведи консоль
 */

// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     console.log("total");
//     total += i;
//   }
// }

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     console.log("Не парне число", i);
//     continue;
//   }
//   console.log("Парні числа", i);
//   total += i;
// }

// console.log("Сума чисел", total);

//..............................

// Задача №4

// Порахувати загальну суму в корзині
// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;
// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);
//   total += cart[i];
// }
// for (const cart of carts) {
//   total += cart;
// }
// console.log("сума в корзині", total);

// ...........................

// Задача №5

// Напиши скрипт який підраховує суму усіх парних чисел в масиві
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
//   if (numbers[i] % 2 === 0) {
//     console.log("Це є парні числа");
//     total += numbers[i];
//   }
// }
// console.log(total);
for (const number of numbers) {
  if (number % 2 == 0) {
    console.log("Це є парні числа");
    total += number;
  }
}
console.log(total);

// ....................
// Практика

// Задача №1
// Напиши код, який отримає масив і використовує цикл for,
// який для кожного елемента масиву буде виводити в консоль повідомлення у фораті:
/* < номер елемента > - <значення елемента >. */

//Нумерація елементів повинна починатися з 1.
// Наприклад для першого елемента масива['Mango', 'Poly', 'Ajax']
// з індексом 0 буде виведено  1 - Mango,
// а для індекса 2 выведет 3 - Ajax.

// const users = ["Mango", "Poly", "Ajax"];

// ......................

// Задача №2
// Напиши код який шукає найменше число в масиві
// const numbers = [2, 17, 94, 1, 23, 37];
