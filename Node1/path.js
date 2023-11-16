const res= require('path');
const file=require('fs');
const { isUtf8 } = require('buffer');

const location=res.join(__dirname,'user','image','dog.jpg');
console.log(location);

console.log("start");
const readfile=file.readFileSync("hello.text",'utf8');
console.log(readfile);
console.log("end");

/*console.log("start");
   file.readFile(res.join(__dirname,'hello.text'),'utf8',(error,data)=>{

    if(!error){
        console.log('data is -->',data);
        
    }else{

    }


});

console.log("end");*/


const readimg=file.createWriteStream("image.jpg");
readimg.on('data',chunk=>{
    console.log(chunk);
});

