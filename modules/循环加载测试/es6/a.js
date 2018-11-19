/*
* 如果采用commonjs require语法就会使得出现问题 null
* es6 还可以使用动态引入文件，使用类似promise, 需要使用插件 @babel/plugin-syntax-dynamic-import
* 按需加载需要和webpack打包相结合，antd就是按需加载（babel-plugin-import）ssr（添加全局变量 加快渲染速度 添加较好的seo）
* */
import {bar} from './b.js';
// import('./.js').then(module => {
//   console.log('module', module);
// })
export function foo() {
  console.log('foo bar');
  bar();
  console.log('执行完毕');
}

console.log('foo1');
foo();
console.log('foo2');
