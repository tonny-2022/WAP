function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
  
    
  }

   Student.inputNewGrade = function(newGrade) {
    Student.grades.push(newGrade);
  }

    Student.computeAverage = function() {
    if (Student.grades.length === 0) {
      return 0;
    }
    const sum = Student.grades.reduce((tot, gd) => tot + gd, 0);
    return sum / Student.grades.length;
    }


