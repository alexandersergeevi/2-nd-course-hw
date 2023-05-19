// // Задание 1

// let str = 'js';
// str = str.toUpperCase();
// console.log(str);

// // Задание 2

// function getStrArr(arr, str) {
//     return arr.filter((word) => word.toLowerCase().startsWith(str.toLowerCase()));
// }

// console.log(getStrArr(['Морковь', 'Баклажан', 'Кабачок', 'Чеснок', 'Батат'], 'ба'));

// // Задание 3

// let number = 32.58884;

// console.log("Число, округлённое к меньшему целому = " + Math.floor(number));
// console.log("Число, округлённое к большему целому = " + Math.ceil(number));
// console.log("Число, округлённое до ближайшего целого = " + Math.round(number));

// // Задание 4

// console.log("Наибольшее число " + Math.max(52, 53, 49, 77, 21, 32));
// console.log("Наименьшее число " + Math.min(52, 53, 49, 77, 21, 32));

// // Задание 5

// function getRandomInt(minValue, maxValue) {
//     console.log(Math.round(Math.random() * (maxValue - minValue) + minValue));
// }

// getRandomInt(1, 10);

// // Задание 6

// function random(num) {
//     let arr = [];
//     let length = Math.floor(num / 2);
//     let maxValue = num;
//     let minValue = 0;
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.round(Math.random() * (maxValue - minValue) + minValue));
//     }
//     return arr;
// }

// console.log(random(13));

// // Задание 7

// function getRandomInt(minValue, maxValue) {
//     console.log(Math.round(Math.random() * (maxValue - minValue) + minValue));
// }

// getRandomInt(5, 32);

// // Задание 8

// let myDate = new Date();

// console.log(myDate);

// // Задание 9

// let currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);

// console.log(currentDate);

// // Задание 10

// function formatDate() {
//     let myDate = new Date();
//     let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
//     let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
//     let newDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()];
//     let time = "Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
//     console.log(newDate);
//     console.log(time);
// }

// formatDate();

// Задание 11: Работа с макетом

function remember() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits = fruits.sort(() => Math.random() - 0.5);
    alert(fruits);

    let firstAnswer = prompt("Какой фрукт в списке был первым?");
    let secondAnswer = prompt("А какой был последним?");

    if (firstAnswer.toLowerCase() === fruits[0].toLowerCase() && secondAnswer.toLowerCase() === fruits[6].toLowerCase()) {
        alert("Поздравляем, оба ответа оказались верными!");
    } else if (firstAnswer.toLowerCase() === fruits[0].toLowerCase() || secondAnswer.toLowerCase() === fruits[6].toLowerCase()) {
        alert("Вы были близки к победе! Попробуйте сыграть ещё раз.");
    } else {
        alert(`К сожалению, Вы не отгадали ни одного слова. Правильные ответы были такими: ${fruits[0]} и ${fruits[6]}.`);
    }
}