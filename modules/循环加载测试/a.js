let resC = require('./c.js');
console.log('resC', resC);
console.log('module', module);
// {
//   id: '.',
//   exports: {},
//   parent: null,
//   filename: '/Users/shao/Desktop/iWebpack/modules/a.js',
//   loaded: false,
//   children: [ Module {
//     id: '/Users/shao/Desktop/iWebpack/modules/c.js',
//     exports: 'c',
//     parent: [Circular],
//     filename: '/Users/shao/Desktop/iWebpack/modules/c.js',
//     loaded: true,
//     children: [],
//     paths: [Array] } ],
//   paths: [ '/Users/shao/Desktop/iWebpack/modules/node_modules',
//     '/Users/shao/Desktop/iWebpack/node_modules',
//     '/Users/shao/Desktop/node_modules',
//     '/Users/shao/node_modules',
//     '/Users/node_modules',
//     '/node_modules' ]
// }
module.exports = 'hello';
