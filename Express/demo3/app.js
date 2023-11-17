const express=require('express');
const app= express();
const path=require('path');



/*app.get('/user',(req,res)=>{

    res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/user',(req,res)=>{

    res.send('succesfully saved');
});*/

//app.all mwthod
app.get('/add-user',(req,res)=>{

    res.sendFile(path.join(__dirname,'index.html'));
});

app.all('/user',(req,res)=>{

    res.send('succesfully saved');
});

app.listen(3000, ()=>console.log('listening on 3000...'));