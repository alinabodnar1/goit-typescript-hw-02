console.log('3.ts:');

let some: unknown;
some = 'Text';

let str: string;

if (typeof some === 'string'){
  str = some;
  console.log('str:', str);
}


export {};