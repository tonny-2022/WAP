    /*let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
    this.students.forEach(function (student) {
    console.log(this.title + ": " + student
    );
    });
    }
    };
    group.showList()*/


    //Method 1 arrow function
    let group = {
        title: "Our Group",
        students: ["John", "Pete", "Alice"],
        showList: function () {
        this.students.forEach(function (student) {
        console.log(group.title + ": " + student);
        });

        }
        };
         //wrapper function
      //  setTimeout(()=>group.showList(), 1000);
        //Bind function
       // setTimeout(group.showList.bind(group), 1000);

         //Arrow function

        