let user = {
    firstName: "John",
    sayHi() {
    console.log(`Hello, ${this.firstName}!`);
    }
    };

    user.sayHi();
    /*setTimeout(()=>user.sayHi());
    setTimeout(function(){ user.sayHi});
    setTimeout(user.sayHi.bind(user));
    setTimeout(()=>user.sayHi.call(user));
    setTimeout(()=>user.sayHi.apply(user));*/


    
    let group = {
        title: "Our Group",
        students: ["John", "Pete", "Alice"],
        showList: function() {
        this.students.forEach((student) =>{
        // error – ‘this’ is undefined (or window)
        console.log(this.title + ": " + student);
        });
        }
        };
       // group.showList();

        let group1 = {
            title: "Our Group",
            students: ["John", "Pete", "Alice"],
            showList: function() {
            this.students.forEach(function(student) {
            // error – ‘this’ is undefined (or window)
            console.log(this.title + ": " + student);
            }.bind(this));
            }
            };
         // group.showList();



         let group2 = {
            title: "Our Group",
            students: ["John", "Pete", "Alice"],
            showList: function() {
            this.students.forEach((stu)=> {
             
                (function(student){
                    console.log(this.title + ": " + student);
                }).apply(this,[stu]);  
          
            });
            }
            };
           // group.showList();


           let group3 = {
            title: "Our Group",
            students: ["John", "Pete", "Alice"],
            showList: function() {
            this.students.forEach((stu)=> {
             (function(student){
                console.log(this.title + ": " + student);
             }).call(this,stu);
            
            });
            }
            };
            group3.showList()



        

              const students = [
                { name: 'Quincy', grades: [99, 88], courses:['cs301', 'cs303']}, 
                { name: 'Jason', grades: [29, 38], courses:['cs201', 'cs203']},
                { name: 'Alexis', grades: [79, 78], courses:['cs105', 'cs211'] },
                { name: 'Sam', grades: [91, 82], courses:['cs445', 'cs303'] }, 
                { name: 'Katie', grades: [66, 77], courses:['cs303', 'cs477'] } 
               ];

              /* let result=students.filter(stu=>stu.courses.includes("cs303"))
                                   .reduce((ob,name)=>{
                                    return obj.grades.reduce((sum,elem)=>sum+elem/obj.grades.length);
                                     
                                   },{});


                                   console.log(result);*/

                                   function log(e) {
                                    console.log(e);
                                    }
                                    let arr = [1, 2, 3];
                                    console.log("start")
                                    set(() => arr.forEach(log));
                                    console.log("end")
                                    

                                    function log(e) {
                                        console.log(e);
                                        }
                                        var arr1 = [1, 2, 3];
                                        console.log("start")
                                        arr1.forEach(log)
                                        console.log("end")
                                        