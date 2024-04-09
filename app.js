console.log('Heloo this is my first node js program!')

const names_obj = require('./first_custom_module.js')  // import the shared data from the module_1

console.log(names_obj.name1)