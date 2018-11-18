(function (modules) {
    function require(moduleId) {
      var module = {
        exports: {}
      };
      modules[moduleId].call(module.exports, module, module.exports, require);
      return module.exports;
    }
    return require("./src/index.js");
  })
  ({
    "./src/index.js":
      (function (module, exports, require) {
        eval(`let a = require('src/a.js');
console.log('a', a);
console.log('hello world');
require('src/index.css');
`);
      })
      ,
        "src/a.js":
        function (module, exports, require) {
          eval(`module.exports = 'i-webpack';
`);
        }
      ,
        "src/index.css":
        function (module, exports, require) {
          eval(`
    let style = document.createElement('style');
    style.innerHTML = "body {    background: lightskyblue;}";
    document.head.appendChild(style);
  `);
        }
      
  });
