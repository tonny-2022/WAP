//const newarr=arr.filter(a=>a%2==0);
/*const newarr=arr.filter(a=>a%2===0)
                 .map(a=>a*a)
                 .reduce((a,b)=>a+b);
console.log(newarr);*/

/*const orders=[
    {
    name:'Tonny',
    userid:1,
    amount:300
    },

   {
    name:'Hope',
    userid:2,
    amount:400
   },

   {
  name:'Tonny',
  userid:1,
  amount:200

   },
   {
    name:'Hope',
   userid:2,
   amount:500
 
    }
 

];*/

//sum all amount where userid =1

/*const sumtot= orders.filter(orders=>orders.userid===1)
                 .map(orders=>orders.amount)
                 .reduce((amount1,amount2)=>amount1+amount2);

                 console.log(sumtot);*/

                /* function findMax() {
                    console.log('arguments: ', arguments); //arguments implicit object existing in every function
                    let max = arguments[0];
                    for(let i = 1; i < arguments.length; i++){
                        if(max < arguments[i]){
                            max = arguments[i];
                        }
                    }
                    return max;
                }
                
                const result = findMax(5, 7, 1, 2, 3);
                console.log(result);*/


                //Arrays 
                /*let a = ["Stef", "Jason"]; 
                a.push('Brian');
                a.unshift('Kelly');
                a.pop();
                a.shift();
                a.sort();
                console.log(a);*/

                /*const fruit = ['apple', 'banana', 'pear', 'strawberry'];


                const[f1,,f3,f4]=fruit;
                console.log(f1);
             
                console.log(f3);
                console.log(f4);*/
                    
                const person = {
                    firstname: 'John',
                    lastname: 'Smith',
                    age: 20
                }
                const {firstname, lastname} = person;
               //console.log(firstname, lastname);

                // or 

                const{firstname:fn,lastname:ln,age:ag}=person;

                //console.log(fn,ln,ag);

                //implicit array like object in afuction;

                function findMax(){
                  let max=arguments[0];

                  for(let i=0;i<arguments.length;i++){
                    
                    if(arguments[i]>max){
                     max=arguments[i];

                    }
                  

                  }
                  return max;
                }

                console.log(findMax(6,4,3,9,12,0));

             //

             function func(){

              console.log("No arguments");  
             }


            function funcog(args){

                console.log("1 arguments",args);  
             }
             function func(args1,args2){

                console.log("2 arguments",args1,args2);  
            }
            function func(args1,args2,args3){

                console.log("3 arguments",args1,args2,args3);  
            }

          func();
          func(2) ;
          func(3,9);    
          func(1,3,9);    

          //spread 


          const  str='Hello';
          const str1=[...str];
          console.log(str1);


          const str3=[1,2,3]
          const arr1=["hello","world"];
          const arr2=[{x:1},{y:2}];

          const arr3=[...str3,...arr1,...arr2];
          console.log(arr3);

           //destructruring objects

           const user={};
           [user.fname,user.lname]=['John','Smith'];
           console.log(user);
          //out put: { fname: 'John', lname: 'Smith' }


          const persons={
                            Surname:'Tonny',
                            Givenname:'Kakooza',
                            Age:30,

                       };

    //Mthod1
    const{Surname,Givenname,Age}=persons;
    console.log("M1:"+ Surname,Givenname,Age);

    // method 2

    const{Surname:sn,Givenname:gn,Age:agg}=persons;

    console.log("M2:"+gn,sn,agg);