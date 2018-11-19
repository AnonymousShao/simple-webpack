import {foo} from './a.js';
export function bar() {
  console.log('aaa');
  if (Math.random() > 0.5) {
    console.log('bbb');
    foo();
  }
}
