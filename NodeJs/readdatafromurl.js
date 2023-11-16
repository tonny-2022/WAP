/*const url = require('url');
const myURL =
new URL('https://user:pass@sub.host.com:8080/p/a/t/h?course1=nodejs&course2=angular#hash');
console.log(myURL.protocol,myURL.hostname,myURL.host,myURL.port,myURL.pathname);
console.log(myURL.search);
console.log(myURL.searchParams.get('course1'));*/

const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req,res)=>{

if(req.url==='/'){
   fs.createReadStream('index.html').pipe(res);
}
else if(req.method==='POST' && req.url==='/signup'){
    const body=[];
   req.on('data',chunk =>{
     body.push(chunk);
     console.log(chunk);
   });

   req.on('end',data=>{
    const str=Buffer.concat(body).toString();
    console.log(str);
    console.log('end data');
    res.end('succesfully saved');
  });
  
}
else{
    res.end('file not found');
}

}).listen(3000,()=>console.log('listening to port 3000....'));
