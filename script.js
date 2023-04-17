// first
/*
Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение

Пример вызова:

multiply(1,2,3) => результат 6 (1*2*3);



Если нет ни одного аргумента, вернуть ноль: multiply() 
*/
function multiply() {
  let res = 1;
  if (!arguments.length) {
    return 0;
  }
  for (let i = 0; i < arguments.length; i++) {
    res *= arguments[i];
  }
  return res;
}
// console.log(multiply(1, 3));

// second
/*
Создать функцию, которая принимает строку и возвращает строку-перевертыш:
*/
function reverseString(arg) {
  let res = "";
  arg = String(arg);
  for (let i = arg.length - 1; i >= 0; i--) {
    res += arg[i];
  }
  return res;
}

// third
/*
Практическое задание по функциям
Создать функцию, которая в качестве аргумента может принять строку, числа, null или undefined и возвращает строку,
где каждый символ разделен пробелом и заменен на юникод-значение символа:

getCodeStringFromText("hello") // “104 101 108 108 111”

подсказка: в решении задачи вам помогут методы charCodeAt и trim
*/
function getCodeStringFromText(str) {
  str = String(str);
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += " " + str[i].charCodeAt();
  }
  return result.trim();
}

// fourth

/*
Создать функцию угадай число.
Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0).
Если число не соответствует условию то верните ошибку return new Error("Please provide number in range 0 - 10").
Если переданно не число то верните ошибку return new Error("Please provide a valid number");

Далле функция генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает строку “You win!”
если нет то строку “You are lose, your number is 8, the random number is 5”.
Числа в строке указаны как пример вы подставляете реальные числа.

Если переданно число в виде строки оно должно быть преобразованно к числу.
*/
function guessTheNumber(num) {
  let result = "";
  num = Number(num);
  if (num < 0 || num > 10) {
    return new Error("Please provide number in range 0 - 10");
  } else if (isNaN(num)) {
    return new Error("Please provide a valid number");
  }
  result += Math.floor(Math.random() * 10);
  if (num == result) {
    return console.log("You win!");
  } else if (num != result) {
    return console.log(
      `You are lose, your number is ${num}, the random number is ${result}`
    );
  }
}

guessTheNumber("7");
