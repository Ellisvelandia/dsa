//Create an array with 5 students names , after that create a function which takes 2 parameters
//  (allStudetns, studentName) iterate over all students and find that specific student/

//Data structure is a  specific way of organizing , storing, and accesing data.
//Data structure Array
const studentsDatabase = ["Jasmine", "Jordan", "Jared", "Ellis", "Armand"];

//Algorithm for findinf a specific student

const findStudent = (allStudents, studenName) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studenName) {
      console.log(`Found ${studenName}`);
    }
  }
};

findStudent(studentsDatabase, "Jasmine");
