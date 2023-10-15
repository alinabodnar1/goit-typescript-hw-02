// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.
console.log('1.ts:');

let age: number = 50; console.log('age:', age);
let name: string = 'Max'; console.log('name:', name);
let toggle: boolean = true; console.log('toggle:', toggle);
let empty: null = null; console.log('empty:', empty);
let notInitialize: undefined; console.log('notInitialize:', notInitialize);
let callback = (a: number): number => { return 100 + a }; console.log('callback:', callback(2));

export {};
