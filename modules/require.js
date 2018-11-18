// define 声明模块, 通过 require 使用一个模块
let factories = {};
function define (moduleName, dependencies, factory) {
  factory.dependencies = dependencies;
  factories[moduleName] = factory;
}

function require (modules, callback) {
  let results = modules.map(function (module) {
    let factory = factories[module];
    let exports;
    let dependencies = factory.dependencies;
    require(dependencies, function () {
      exports = factory.apply(null, arguments);
    });
    return exports;
  });
  callback.apply(null, results);
}

define('profession', [], function() {
  return 'fe';
});
define('name', [], function() {
 return 'shao';
});

define ('age', ['name', 'profession'], function (name, profession) {
  return profession + name + 1990
});

require (['age'], function (age) {
  console.log(age);
});
