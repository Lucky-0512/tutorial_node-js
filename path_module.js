// 2. PATH Module.

const path  = require('path')   // importing path module

const filepath = path.join('Desktop','TUTORIAL_NODE','os_module.js')

// few ommon functions used in path module.

const obj_path = {
    seperator:path.sep,   // returns the path seperator.
    join_path:path.join('Desktop','TUTORIAL_NODE','os_module.js'),   // joins the different stuff as a path
    base_name: path.basename(filepath), // returns the base file/folder of the path
    get_abs_path: path.resolve(__dirname,'Desktop','TUTORIAL_NODE','os_module.js') // retunrs the absolute path based on file path provided.
}

console.log(obj_path) // pritnign the obj