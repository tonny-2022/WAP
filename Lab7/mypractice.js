let user = {
    firstName: "John",
    sayHi() {
     //console.log(this);
    console.log(`Hello, ${this.firstName}!`);
    }
    };
    console.log("***************beginning  of wrapper**************");

    //wrapper
 setTimeout(()=>user.sayHi(), 1000);

 setTimeout( function(){

    user.sayHi();
 });
 console.log("***************end of call**************");

 function foo(arg1,arg2){

    console.log(this);
    console.log(arguments);
    console.log(arg1,arg2);
 }


 //using call method

 foo.call({firstname:'Tonny'},'Test',[1,2]);
console.log("***************end of apply**************");
//apply

foo.apply({firstname:'Tonny'},['Tonny','Hi']);
console.log("***************beginning  of bind**************");

const foobind1=foo.bind({firstName:'Hope'},'Hello','world');
foobind1();
//or 

const foobind2=foo.bind({firstName:'Gideon'});
foobind2('Hello','best friend');

console.log("***************beginning  of function borrowing**************");

const me = {
   firstname: 'John',
   lastname: 'Smith',
   getFullName: function() {
   return this.firstname + ' ' + this.lastname;
   }
   }
   
   const you={

           firstname:'Tonny',
           lastname:'Kaks'
   }
const meYou=me.getFullName.bind(you);
console.log(meYou());

console.log("***************beginning  of function invoker**************");
const me1 = {
   first: 'John',
   last: 'Smith',
   getFullName: function() {
   return this.first + ' ' + this.last;
   }
   }
   const log = function(height, weight) { // ‘this’ refers to the invoker
   console.log(this.getFullName()+' '+ height + ' ' + weight);
   }

   const logMe = log.bind(me);
   logMe('180cm', '70kg'); 

   console.log("***************beginning  of function carrying**************");

   function covertCentigradeToFaranHeight(a,b,x){

      return a*x+b;
   }
   
   const cToF=covertCentigradeToFaranHeight.bind(null,9/5,32);
   console.log(cToF(20));
   console.log(cToF(30));