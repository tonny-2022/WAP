


let user = {
    firstName: "John",
    sayHi() {
    console.log(`Hello, ${this.firstName}!`);
    }
    };

  /*user.sayHi();
  setTimeout(()=>user.sayHi(),1000);*/
// call
  var person = {  
    name: "James Smith",
    hello: function(thing) {
      console.log(this.name + " says hello " + thing);
    }
  }
  
  person.hello("world");  // output: "James Smith says hello world"
  person.hello.call({ name: "Jim Smith" }, "world")


//bind
var person = {  
    name: "James Smith",
    hello: function(thing) {
      console.log(this.name + " says hello " + thing);
    }
  }
  
  person.hello("world");  // output: "James Smith says hello world"
  var helloFunc = person.hello.bind({ name: "Jim Smith" });
  helloFunc("world");

//apply
  function personContainer() {
    var person = {  
       name: "James Smith",
       hello: function() {
         console.log(this.name + " says hello " + arguments[1]);
       }
    }
    person.hello.apply(person, arguments);
  }
  personContainer("world", "mars"); // output: "James Smith says hello mars", no
   
   
  var s = "Connie Client";
  let fName = s.substring(0, s.indexOf(" "));
  console.log(fName);
  let text = "How are you doing today?";
  const myArray = text.split(" ");
  console.log(myArray);

const s1 = "hello";
let s2 = "";
for (let i = 0; i < s1.length; i++) {
s2 += s1[i] + s1[i];
//console.log(s2);
}

//console.log(s2);



let a = ["Stef", "Jason"]; 
a.push("Brian");
a.pop();
a.shift();
a.unshift("Tonny");
console.log(a);


var b= [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryllium"
  ];
  const a3 = b.findIndex( s => s.length > 7 );

  console.log(a3);



function findMax(){

  var max=arguments[0];
  for(let i=0;i<arguments.length;i++){
    
    if(arguments[i]>max){
      max=arguments[i];
      console.log(arguments[i]);

    }


  }
  
  return max;
}

  var max1=findMax(1, 123, 500, 115, 66, 88);
  console.log(max1);

  function findTotal(x,y,...rest){

    let tot=x+y;
    if(rest.length>0){
      for(let i=0;i<rest.length;i++){
       tot+=rest[i];
  
      }
    }
    return tot;
  }

  console.log(findTotal(1,2,3,4,5));

  let  n, m, o, p,q;
   n = [1,2,3];
   m = "dog";
   o= [42, "cat"];

   p=n.concat(m,o);

   //console.log(p);

   q=[...n,...m,...o];
   console.log(q);

   let user3 = {};

   [user3.fname,user3.lname]="Tonny Kakooza".split(" ");
   console.log(user3);

   const[fst,,th]=["foo", "bar","baz"];
   console.log(fst+" "+th);
