
            (function(modules) {
                function require(fileName) {
                    const fn = modules[fileName];
        
                    const module = { exports : {} };
        
                    fn(require, module, module.exports);
        
                    return module.exports;
                }

                require('C:\Users\library\Documents\GitHub\simple-webpack\src\index.js');
            })({'C:\Users\library\Documents\GitHub\simple-webpack\src\index.js': function (require, module, exports) { "use strict";

var _greeting = require("./greeting.js");

document.write((0, _greeting.greeting)(' Tao')); },'./greeting.js': function (require, module, exports) { "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.greeting = greeting;
function greeting(name) {
  return 'hello' + name;
} },})
        