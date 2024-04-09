//importing the module.

const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("this is our home page.")
    }

    else if(req.url === '/about'){
        res.end("this is our about page")

    }

    else{
        res.end(
            `<h1>The url u are looking for is not found!</h1>
            <a href="/">Go back to home</a>
            <a href="/about"> go back to about</a>`
        )
    }
    
    
})


server.listen(5000)