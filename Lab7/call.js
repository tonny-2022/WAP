let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
    this.students.forEach((st)=> {

       (function(student){

        console.log(this.title + ": " + student
        );
       }).call(this,st);

    });
    }
    };
    group.showList()