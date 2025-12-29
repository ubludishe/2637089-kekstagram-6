function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

console.log(checkStringLength('проверяемая строка', 20)); // eslint-disable-line no-console
console.log(checkStringLength('проверяемая строка', 18)); // eslint-disable-line no-console
console.log(checkStringLength('проверяемая строка', 10)); // eslint-disable-line no-console

function isPalindrome(string) {
  const normalizedString = string.toLowerCase().replaceAll(' ', '');
  let reversedString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }
  return normalizedString === reversedString;
}

console.log(isPalindrome('топот')); // eslint-disable-line no-console
console.log(isPalindrome('ДовОд')); // eslint-disable-line no-console
console.log(isPalindrome('Кекс')); // eslint-disable-line no-console
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // eslint-disable-line no-console
