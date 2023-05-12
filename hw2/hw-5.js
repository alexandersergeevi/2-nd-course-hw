// // Задание 1

// function lesser(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// lesser(8, 4);

// // Задание 2

// function honest(c) {
// if (c % 2 === 0) {
//     return 'Число четное';
// } else {
//     return 'Число нечетное';
// }
// }

// honest(5);

// // Задание 3

// function extent1(d) {
//     console.log(d**2);
// }

// extent1(5);

// function extent2(e) {
//     return e**2;
// }

// extent2(9);

// // Задание 4

// let age = Number(prompt("Сколько Вам лет?"));

// function hello(age) {
//     if (age < 0) {
//         alert("Вы ввели неправильное значение");
//     } else if (age >= 0 && age < 12) {
//         alert("Привет, друг!");
//     } else {
//         alert("Добро пожаловать!");
//     }
// }

// hello(age);

// // Задание 5

// function number(f, g) {
//     if (isNaN(f) || isNaN(g)) {
//         return 'Одно или оба значения не являются числом';
//     } else {
//         return f * g;
//     }
// }

// number(9, 6);

// // Задание 6

// let n = Number(prompt("Введите число"));

// function cube(n) {
//     if (isNaN(n)) {
//         return 'Переданный параметр не является числом';
//     } else {
//         return `${n} в кубе равняется ${n**3}`;
//     }
// }

// cube(n);

// // Задание 7

// function getAreaCircle() {
//     return this.radius**2 * 3.14;
// }

// function getPerimeterCircle() {
//     return 2 * 3.14 * this.radius;
// }

// const circle1 = {
//     radius: 6,
//     getArea: getAreaCircle,
//     getPerimeter: getPerimeterCircle
// }

// const circle2 = {
//     radius: 4,
//     getArea: getAreaCircle,
//     getPerimeter: getPerimeterCircle
// }

// console.log(circle1.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getArea());
// console.log(circle2.getPerimeter());

// Задание 8

function seasons() {
    let monthNumber = Number(prompt("Введите номер месяца от 1 до 12"));
    if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
        alert(`Месяц относится к сезону "Зима"`);
    } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
        alert(`Месяц относится к сезону "Весна"`);
    } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
        alert(`Месяц относится к сезону "Лето"`);
    } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
        alert(`Месяц относится к сезону "Осень"`);
    } else {
        alert(`Вы ввели неправильное число`);
    }
}
