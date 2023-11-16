var person = {  
    name: "James Smith",
    hello: function(thing) {
      console.log(this.name + " says hello " + thing);
    }
  }

  //setTimeout(function(){person.hello("Tonny")},3000);

  //setTimeout(()=>person.hello("Gideon"),3000);


  //call

 /* person.hello.call({name:"Jame Smith"},"call......Tonny");
  //apply
  person.hello.apply({name:'James Smith'},["apply....Tonny"]);

  person.hello.apply();
 
   // bind

   let p=person.hello.bind({name:'Gideon Zaasa'},"...bind bye mummmy");
   p();

  let p1=person.hello.bind({name:'Gideon Zaasa'});
  p1("...bind1 mummmy");


  let user = {
    firstName: "John",
    sayHi() {
    console.log(`Hello, ${this.firstName}!`);
    }
    };

    //setTimeout(function(){user.sayHi()});
    //setTimeout(()=>user.sayHi(),2000);
    setTimeout(()=>user.sayHi.call(user));
    setTimeout(()=>user.sayHi.apply(user));
    setTimeout(user.sayHi.bind(user));



    //function borrowing

    const me = {
        first: 'John',
        last: 'Smith',
        getFullName: function() {
        return this.first + ' ' + this.last;
        }
        }

        const log = function(height, weight) { // ‘this’ refers to the invoker
        console.log(this.getFullName() + height + ' ' + weight);
        }
        
        let logme=log.bind(me);
        logme('180cm', '70kg');

        logme.call(me,'180cm', '70kg');
        logme.apply(me,['180cm', '70kg']);

        log.bind(me,'180cm', '70kg')();*/


        const fn1 = {
          firstname: 'John',
          lastname: 'Smith',
          getFullName: function(msg) {
          return this.firstname + ' ' + this.lastname+' '+msg;

          }
          }


          const fn2={
                    
            firstname:'Tonny',
            lastname:'Kaks'
        

          }
 
    
   
       console.log("************apply***********************");

      // console.log(fn1.getFullName.apply(fn2,["bye"]));

       console.log("************bind***********************");

       console.log(fn1.getFullName.bind(fn2,'hey')());

       console.log("************call***********************");
       
       console.log(fn1.getFullName.call(fn2,"see you again"));



    

