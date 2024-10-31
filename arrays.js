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

// console.log(reverseString("Hello"));
// console.log(reverseString("Apple"));

//palindrome
//if the reverse string is equal to the original one then that word is a palindrome

const palindrome = (str) => str.split("").reverse(str).join("") === str;

// console.log(palindrome("abba"));

//1. Convert number to string (toString method)
//2. Convert string to array (split method)
//3. Reverse the string (reverse method)
//4. Convert array back to string (join method)
//5. Convert string to number (parseInt method)
//6. Return the number

// const reverseInteger = (n) => {
//   const reversed = n.toString().split("").reverse().join("");
//   return parseInt(reversed) * Math.sign(n);
// };

// console.log(reverseInteger(55));

const capitalize = (str) => {
  return str
    .toLowerCase()
    .split(".")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");
};

// console.log(capitalize("ellis"));

//FizzBuzz

//1.Print number from 1 to n
//2.If number is divisible by 3 , print "Fizz"
//3. If number is divisible by 5 , print "Buzz"
//4. If number is divisible by 3 and 5 , print "FizzBuzz"
//5. Else print the number

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

// console.log(fizzBuzz(15));

//MaxProfit
//imagine you are buying and selling stocks throughout the years. Your job is
// to find the biggest profit you could make by buying low and selling high only once

const MaxProfit = (price) => {
  let minPrice = price[0];
  let MaxProfit = 0;

  for (let i = 1; i < price.length; i++) {
    const currentPrice = price[i];

    // \\update minimum price if the lower price is found
    minPrice = Math.min(minPrice, currentPrice);

    const potentialProfit = currentPrice - minPrice;

    MaxProfit = Math.max(MaxProfit, potentialProfit);
    // console.log(MaxProfit);
  }
  return MaxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];

const profit = MaxProfit(prices);

// console.log("Maximum Profit: ", profit);

//Array chunk

// const chunk = (arr, size) => {
//   const chunked = [];

//   let index = 0;

//   while (index < arr.length) {
//     const chunk = arr.slice(index, index + size);
//     console.log(chunk);
//     chunked.push(chunk);

//     index += size;
//   }
//   return chunked;
// };

// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 2));

//two sum

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

const res = twoSum([2, 7, 11, 15], 9);
console.log(res);
