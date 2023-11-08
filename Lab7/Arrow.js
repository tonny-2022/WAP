 let group = {
            title: "Our Group",
            students: ["John", "Pete", "Alice"],
            showList: function () {
            this.students.forEach(function(st) {
              
             (function(){
                console.log(this.title + ": " + student);

             }).apply(this,[st]);

            });
            } 
            };
            group.showList()