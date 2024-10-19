/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hellow world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  let result = str.slice(0, 1).toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i] === " ") {
      result = result + " " + str.slice(i + 1, i + 2).toUpperCase()
      i++
    } else {
      result += str[i]
    }
  }
  return result
}

// function variantTwo(str) {
//   let result = str.split("").map((char) => {
//     if (char === " ") {
//       return char = char.toUpperCase()
//     }
//     return char
//   }).join("")
//   return result
// }

console.log(capitalizeWords('hello world from javascript'));
console.log(capitalizeWords('I am try guy my friend'));

// console.log(variantTwo('hello world from javascript'));


