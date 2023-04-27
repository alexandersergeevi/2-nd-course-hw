// Задание 1

let password = 'пароль';
let enter = prompt (`Введите пароль`);

if (enter === password) {
    console.log ('Пароль введен верно');
} else {
    console.log ('Пароль введен неправильно');
}

// Задание 2

let c = 2;
let interval = c > 0 && c < 10 ? 'Верно' : 'Неверно' ;
console.log (interval);

// Задание 3

let d = 2;
let e = 100;
let result = d > 100 || e > 100 ? 'Верно' : 'Неверно';
console.log (result);

// Задание 4 

let a = '2';
let b = '3';

alert(Number(a) + Number(b));

// Задание 5

let monthNumber = 12;

switch (monthNumber) {
    case 12 || 1 || 2:
        console.log('Зима');
        break;
    case 3 || 4 || 5:
        console.log('Весна');
        break;
    case 6 || 7 || 8:
        console.log('Лето');
        break;
    case 9 || 10 || 11:
        console.log('Осень');
        break;

    default:
        console.log ('Номер месяца введен некорректно')
        break;
}

// Задание 7

let number = prompt("Пожалуйста, введите любое число");

if (number % 2 === 0) {
    alert ('Число четное');
} else if (number % 2 === 1) {
    alert ('Число нечетное');
} else {
    alert ('Введено некорректное число');
}

// Задание 8

if (/Android/.test(navigator.userAgent)) {
    alert("Установите версию приложения для Android по ссылке")

} else if (/iPhone/.test(navigator.userAgent)) {
    alert("Установите версию приложения для iOS по ссылке");

} else {
    alert("Вы используете не мобильное устройство");
}