const http=require('http');
const path=require('path');
const fs=require('fs');



 http.createServer((req,res)=>{
 
    fs.createReadStream('./image.jpg').pipe(res);
  

 }).listen(4000,()=>console.log('listening...'));

