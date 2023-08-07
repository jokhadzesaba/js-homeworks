class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return this.name + " " + this.surname;
  }
}
class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    if (year < 2018 || year > new Date().getFullYear()) {
      throw new Error("Invalid admission year");
    }
    this.year = year;
  }
  getCourse() {
    return new Date().getFullYear() - this.year;
  }
}
var student = new Student("John", "Smith", 2018);

console.log(student.name); // print 'John'
console.log(student.surname); // print 'John'
console.log(student.getFullName()); // print 'John Smith'
console.log(student.year); // print 2018
console.log(student.getCourse()); // print 5 -  because current year already 2023 :D
