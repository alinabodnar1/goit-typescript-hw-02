/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
console.log('7.ts');

enum Day {
  Mon,
  Tues,
  Wed,
  Thur,
  Fri,
  Sat,
  Sun
}
function isWeekend(day: Day): boolean{
  if(day === Day.Sat || day === Day.Sun){
    return true;
  }
  return false;
}

console.log('isWeekend', isWeekend(Day.Sat));

export {};