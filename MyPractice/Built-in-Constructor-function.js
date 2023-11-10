Array.prototype.converToUpperCase=function(){
     
    return this.map(item=>item.toUpperCase());

}
let arr=["one","two","three"];
 const res=arr.converToUpperCase()

 console.log(res);