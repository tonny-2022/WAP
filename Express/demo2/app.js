const express=require('express');
const app= express();

/*app.use(express.urlencoded());
app.use('/add-user',(req,res)=>{
const html=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" action="/save-user">
   <h3>Register user</h3> 
   <p>Firstname:<input type="text" name="fname" ></p>
   <p>Lastname:<input type="text" name="lname" ></p>
   <input type="submit" text="Submit">
  </form>
</body>
</html>`;


res.send(html);
});


app.use('/save-user',(req,res)=>{

    console.log(req.body);
    res.send('User successfuly registered');
});*/

app.use('/search',(req,res)=>{

    console.log(req.query);
    res.send('You have done a search');
});


app.use('/users/:uid/name/:nam/age/:age',(req,res)=>{
     res.send(`uid:${req.params.uid},nam:${req.params.nam},age:${req.params.age}`);


});

app.listen(3000, ()=>console.log('listening on 3000...'));