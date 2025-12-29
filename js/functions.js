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

function getMinutes(timeString) {
  const [hours, minutes] = timeString.split(':');
  return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
}

function checkMeetingTime(workStart, workEnd, meetingStart, meetingDuration) {
  const workStartMinutes = getMinutes(workStart);
  const workEndMinutes = getMinutes(workEnd);
  const meetingStartMinutes = getMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  return meetingStartMinutes >= workStartMinutes && meetingEndMinutes <= workEndMinutes;
}

console.log(checkMeetingTime('08:00', '17:30', '14:00', 90)); // true // eslint-disable-line no-console
console.log(checkMeetingTime('8:0', '10:0', '8:0', 120)); // true // eslint-disable-line no-console
console.log(checkMeetingTime('08:00', '14:30', '14:00', 90)); // false // eslint-disable-line no-console
console.log(checkMeetingTime('14:00', '17:30', '08:0', 90)); // false // eslint-disable-line no-console
console.log(checkMeetingTime('8:00', '17:30', '08:00', 900)); // false // eslint-disable-line no-console
