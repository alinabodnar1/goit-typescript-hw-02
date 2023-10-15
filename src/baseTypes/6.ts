/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/
console.log('6.ts');

function showMessage(message: string) {
  console.log(message);
}
showMessage("typing function showMessage");

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

export {};