// First way to create Server

// const http=require('http');



// http.createServer((req,res)=>{
//     res.write("<h1>Hello This is Karan How are You</h1>")
//     res.end()
// }).listen(5000);


// const http=require('http');


function Server(req,res){

    res.write("<h1>Hello This is Karan How are You My Friend</h1>")
    res.end()
}

http.createServer(Server).listen(5000);