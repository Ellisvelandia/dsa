//  Data Structure Array is an ordered collection of items, elements, or values. that can be accessed using a numerical index.

// const studentsDatabase = ["Jasmine", "Jordan", "Jared", "Ellis", "Armand"];

// const mixed = ["a", 1, true, "b", 2, false];

const stringArray = ["Jasmine", "Jordan", "Jared", "Ellis", "Armand"];

const numArr = [1, 2, 3, 4, 5];

const boolArr = [true, false, true];

const mixed = ["a", 1, true, undefined, null, { a: "a" }, ["."], false];

// console.log(mixed);

class MyArray {
  constructor() {
    this.lenght = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.lenght] = item;
    this.lenght++;
    return this.lenght;
  }

  get(index) {
    return this.data[index];
  }

  pop() {
    const lastItem = this.data[this.lenght - 1];
    delete this.data[this.lenght - 1];
    this.lenght--;
    return lastItem;
  }

  shift() {
    const firstItem = this.data[0];
    for (let i = 0; i < this.lenght; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.lenght - 1];
    this.lenght--;
    return firstItem;
  }

  delete(index) {
    const item = this.data[index];

    for (let i = index; i < this.lenght - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.lenght - 1];
    this.lenght--;
    return item;
  }
}

const MyNewArray = new MyArray();
MyNewArray.push("Orange");
MyNewArray.push("Apple");
MyNewArray.push("Mango");
MyNewArray.push("Strawberry");

// console.log(MyNewArray.get(0));
// console.log(MyNewArray.pop());
// console.log(MyNewArray.shift());
// console.log(MyNewArray.delete(1));
// console.log(MyNewArray);

//1. Convert string to array (split method)
//2. Reverse the array (reverse method)
//3. Convert array back to string (join method)
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

const reverseString = (str) => str.split("").reverse(str).join(""); //row method

console.log(reverseString("Hello"));
console.log(reverseString("Apple"));
