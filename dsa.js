// //Create an array with 5 students names , after that create a function which takes 2 parameters
// //  (allStudetns, studentName) iterate over all students and find that specific student/

// //Data structure is a  specific way of organizing , storing, and accesing data.
// //Data structure Array
// const studentsDatabase = ["Jasmine", "Jordan", "Jared", "Ellis", "Armand"];

// //Algorithm for findinf a specific student

// const findStudent = (allStudents, studenName) => {
//   for (let i = 0; i < allStudents.length; i++) {
//     if (allStudents[i] === studenName) {
//       console.log(`Found ${studenName}`);
//     }
//   }
// };

// findStudent(studentsDatabase, "Jasmine");

// //why dsa?
// //Efficient problem solving , imporved logical thinking , strongers skills , coding confidence
// //Big O notation
// //Big O notation help us to undersatnd how long an algorithm will take to run or how much memory will need
// // as the amount of data it handles grows

// const groceries = ["milk", "bread", "eggs", "apples", "bananas"];

// const searchForItem = (item) => {
//   for (let i = 0; i < groceries.length; i++) {
//     if (groceries[i] === item) {
//       console.log(`Found: ${item}`);
//     }
//   }

//   for (let i = 0; i < groceries.length; i++) {
//     if (groceries[i] === item) {
//       console.log(`Found: ${item} 2`);
//     }
//   }

//   // n + n = 2n  -> O(2n)
//   // Drop the constant so it becomes O(2n)
// };

// searchForItem("milk");

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // 0(1)
// const getElement = (arr, index) => arr[index];
// console.log(getElement(numbers, 0));

// 0(n^2) -> O(n^2)

function findPairs(arr) {
  // 0(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(`Pair: ${arr[i]} - ${arr[j]}`);
    }
  }

  // 0(n)
  for (let q = 0; q < arr.length; q++) {
    console.log("--------", q);
  }

  // If we combine all the "O" operations its becomes O(n^2 + n)
  // O(n^2) is a dominant term
  // 'n' is a Non-dominant term
  // So we remove the "non-dominant" term and we're only left with O(n^2)
  // This way, we simplify our big O notation
}

const numbers = [1, 2, 3, 4, 5];
findPairs(numbers);

//O(log n)
