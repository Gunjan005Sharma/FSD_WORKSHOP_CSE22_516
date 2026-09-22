const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.write('this is my first page')
    res.end('This is my page');
});
server.listen(4000,()=> console.log("server running at http://localhost:4000"));

