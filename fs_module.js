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
})  //  append into a file
