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
  if (arg == "") {
    return "";
  }
  let res = "";
  if (arguments.length == 0) {
    arg = String(undefined);
  } else if (arg == null) {
    arg = String(null);
  }
  for (let i = arg.length - 1; i >= 0; i--) {
    res += arg[i];
  }
  return res;
}
console.log(reverseString(""));

// third
/*
Практическое задание по функциям
Создать функцию, которая в качестве аргумента может принять строку, числа, null или undefined и возвращает строку,
где каждый символ разделен пробелом и заменен на юникод-значение символа:

getCodeStringFromText("hello") // “104 101 108 108 111”

подсказка: в решении задачи вам помогут методы charCodeAt и trim
*/
function getCodeStringFromText(str) {
  let result = "";
  if (str == null) {
    str = String(null);
  } else if (arguments.length == 0) {
    str = String(undefined);
  } else if (str == "") {
    return "";
  }
  if (typeof str == "number") {
    str = String(str);
  }
  for (let i = 0; i < str.length; i++) {
    result += " " + str[i].charCodeAt();
  }
  return result.trim();
}
console.log(getCodeStringFromText("hello"));
