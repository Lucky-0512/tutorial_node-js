
// 1.OS Module.
/*const os = require('os')
// few commom methods form os module.

os_obj = {
    name:os.uptime(),   // returns the on-tim eof the pc
    user_info:os.userInfo(),  // returns the user details
    type_OS:os.type(),    // returns the type of OS
    free_memory:os.freemem(),   // free memory left
    total_memory:os.totalmem(),  // totalmemory is the PC
    version:os.release()  // returns the version
}   // an object demonstrating few os module functons.

console.log(os_obj)  //printing the obj*/

/********************************************************************************* */

// 2. PATH Module.

/*const path  = require('path')   // importing path module

const filepath = path.join('Desktop','TUTORIAL_NODE','os_module.js')

// few ommon functions used in path module.

const obj_path = {
    seperator:path.sep,   // returns the path seperator.
    join_path:path.join('Desktop','TUTORIAL_NODE','os_module.js'),   // joins the different stuff as a path
    base_name: path.basename(filepath), // returns the base file/folder of the path
    get_abs_path: path.resolve(__dirname,'Desktop','TUTORIAL_NODE','os_module.js') // retunrs the absolute path based on file path provided.
}

console.log(obj_path) // pritnign the obj*/

/******************************************************************************************** */


// 3. File system module.

// a) SYNC approach.
/*const fs = require('fs')  

// let's read a file.
const read = fs.readFileSync('./content/subfolder/test.txt','utf8') 
console.log(read)   

// let's write into the same file.
const write = fs.writeFileSync('./content/subfolder/test.txt','Stright outta Compton')
// here the old conent is overwrited with the new one.

// to append content to the exisitng file.
const write_a = fs.writeFileSync('./content/subfolder/test.txt','   whassup dude!',{flag:'a'})
// just add {flag:'a'}*/


// b.Async Approach.
const fs = require('fs') 

fs.readFile('./content/subfolder/test.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
    }

    else{
        console.log(result)
       
    }
})      // async approach to read a file.

fs.writeFile('./content/subfolder/test.txt',"hey, I'm a goblin",(err,result)=>{
    if(err){
        console.log(err)
    }
    console.log("writing operation succefully completed")
}) // to write into a file

fs.appendFile('./content/subfolder/test.txt',"hey, I'm a goblin","utf8",(err,result)=>{
    if(err){
        console.log(err)
    }
    console.log("append successfiul")
})
