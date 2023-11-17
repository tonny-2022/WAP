const express=require('express');
const path=require('path');
const router=express.Router();


router.get('/user',(req,res)=>{

    res.sendFile(path.join(__dirname,'..','views','index.html'));
    
});

router.post('/user',(req,res)=>{

   res.send(`${req.body.fname},${req.body.lname}`);  
});


module.exports=router;
