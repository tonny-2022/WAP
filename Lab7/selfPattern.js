    let group = {
  
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
    let self=this;
    self.students.forEach(function (student) {
    console.log(self.title + ": " + student
    );
    });
    }
    };
    group.showList()