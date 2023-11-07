let arr=[3,4,7,11,20,33,23,44];

function sum(ar){
let total=0;
for(let i=0;i<ar.length;i++){ 

 if(ar[i]>20){
    total+=ar[i];
   }
}
return total;
}

let tot=sum(arr);
console.log(tot);









