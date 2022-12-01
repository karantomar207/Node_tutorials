const http=require('http');
const data=require('./exporting_data.js');
http.createServer((req,res)=>{
res.writeHead(200,{'Content-type':'application\json'});
res.write(JSON.stringify(data));
res.end();
}).listen(5000);