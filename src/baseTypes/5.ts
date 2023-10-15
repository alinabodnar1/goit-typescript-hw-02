/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/
console.log('5.ts:');

let union: number | string;

type Visible = 'enable' | 'disable';

let literal: Visible;
literal = 'enable';

console.log('literal', literal);