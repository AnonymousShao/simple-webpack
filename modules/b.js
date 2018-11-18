let fs = require('fs');
// commonjs
function req (moduleName) {
  console.log('moduleName', moduleName);
  let content = fs.readFileSync(moduleName, 'utf8');
  let fn = new Function('exports',
    'module',
    'require',
    '__dirname',
    '__filename',
    content + '\n return module.exports');
  let module = {
    exports: {}
  };
  return fn(module.exports, module, __dirname, __filename);
}
let str = req('./a.js');
/*
* function (module.exports, module, require, __dirname, __filename) {
*   module.exports = 'hello';
*   return module.exports;
* }
* */
console.log(str);
