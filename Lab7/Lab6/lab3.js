function printNumber(from,to){

  let intervalTimer=setInterval(()=>{
    if(from===to){
        clearInterval(intervalTimer); 
    }
            console.log(from++);
    

  },1000);
   
  

  

}
printNumber(3,10);