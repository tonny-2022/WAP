const http=require('http');
const fs=require('fs');
const path=require('path');
const server=http.createServer();
server.on('request',(req,res)=>{

    res.end("welcome....1");
});

//server.listen(3000,()=>console.log("Listen on port 3000"));

const server2=http.createServer((req,resp)=>{

    resp.end("welcome....2");
});

 //server2.listen(4000);

 const server3=http.createServer((req,res)=>{
    const file=fs.readFileSync('index.html','utf8');
    res.end(file);

 });

 //server3.listen(4000);

 const server4= http.createServer((req,res)=>{

    const readfile=fs.createReadStream('./image.jpg').pipe(res);
    res.end(readfile);

 });
 server4.listen(4000);

