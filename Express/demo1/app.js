const express=require('express');
const app= express();

app.set('case sensitive routing', true);



app.use('/user',(req,res,next)=>{
     console.log('user cosole...');
     next();
     res.end('inside user url....');
});

app.use('/product',(req,res,next)=>{
     console.log('product .....');
    // next();
   // res.end('Inside product url....');
    res.write("Hello product");
    next();


});
app.use(function(req,res,next){
  
    res.end('Index  page...');
    console.log('index console...');

});



app.listen(3000, ()=>console.log('listening on 3000...'));