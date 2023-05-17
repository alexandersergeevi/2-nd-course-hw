// // Задание 1

// let number = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < number.length; i++) {
//     if (number[i] == 10) break;
//     console.log(number[i]);
// };

// // Задание 2

// let arr = [1, 5, 4, 10, 0, 3];

// console.log(arr.indexOf(4));

// // Задание 3

// let numbers = [1, 3, 5, 10, 20];

// numbers = numbers.join(' ');

// console.log(numbers);

// // Задание 4

// let item = [];

// for (let a = 0; a < 3; a++) {
//     item[a] = [];
//     for (let b = 0; b < 3; b++) {
//         item[a][b] = 1;
//     }
// }

// console.log(item);


// // Задание 5

// let number = [1, 1, 1];
// number.push(2, 2, 2);

// console.log(number);

// // Задание 6

// let arr = [9, 8, 7, 'a', 6, 5];

// arr.sort();
// arr.pop();

// console.log(arr);

// // Задание 7

// let arr = [9, 8, 7, 6, 5];

// let userNumber = Number(prompt('Введите число от 1 до 10'));

// let search = arr.includes(userNumber);

// console.log(search);

// // Задание 8

// let string = 'abcdef';

// let str = string.split('');

// str.reverse();

// str = str.join('');

// console.log(str);

// // Задание 9

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];

// let array = arr.flat();

// console.log(array);

// // Задание 10

// let number = [1, 3, 6, 8];

// for (let i = 0; i < (number.length - 1); i++) {
//     let sum = number[i] + number[i + 1];
//     console.log(sum);
// };

// // Задание 11

// let number = [3, 4, 6];

// function square(number) {
//     let squareNumber = number.map(el => el ** 2);
//     return squareNumber;
// }

// square(number);

// // Задание 12

// let string = ['yellow', 'white', 'blue', 'red', ''];

// function getLengthWords(string) {
//     for (let item of string) {
//         console.log(item.length);
//     }
// }

// getLengthWords(string);

// // Задание 13

// let array = [4, -5, 22, 0, -13, -6];

// function filterPositive(array) {
//     let negative = array.filter(el => el < 0);
//     console.log(negative);
// };

// filterPositive(array);
