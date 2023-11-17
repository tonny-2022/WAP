const express=require('express');
const app= express();
const path=require('path');
const userRouter=require('./routes/user-router');
const productRouter=require('./routes/products-router');
const error404=require('./routes/error-router');

app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded());
app.use(productRouter);
app.use(userRouter);

app.use(error404);


app.listen(3000, ()=>console.log('listening on 3000...'));