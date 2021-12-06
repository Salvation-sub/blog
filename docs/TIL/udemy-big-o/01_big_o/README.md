# Big O

![img](https://media.vlpt.us/images/eensungkim/post/fb28de15-9b96-4068-94ad-97961bd0d77e/1omv0tmikzeaj24z8ps2.jpeg)

## What is good code?

1. Readable
2. Scalable (BigO)

- time and speed of our code
- memory

```js
// !! this is a not correct way to decide what good code is.
const { performance } = require('perf_hooks');
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'gill'];

const large = new Array(10000).fill('nemo');

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo!');
    }
  }
  let t1 = performance.now();
  console.log('Call to find Nemo Took' + (t1 - t0) + 'milliseconds');
}

findNemo(large);
```

- `good code does not mean how fast the performance is.`because performance could be different with same code when it comes to different environment.
- when we talk about Big O and scalability of code, we simply mean when we grow bigger and bigger with our input, **how much does the algorithm slow down?**
- **the less it slows down or the slower it slows down, the better it is.**

## Big O

### 1. O(n) = Linear Time

- Big O depends on the number of inputs
- for , while loops

```js
const nemo = ['nemo'];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo!');
    }
  }
}

findNemo(nemo); // O(n)
```

### 2. O(1) = Constant Time

- no loops

```js
const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // 0
  console.log(boxes[1]); // 1
}

logFirstTwoBoxes(boxes);
```

#### Challenge 1

```js
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(input)
    anotherFunction(); // O(input)
    let stranger = true; // O(input)
    a++; // O(input)
  }
  return a; // 0(1)
}
// BIG O(3 + 4n)
funChallenge();
```

#### Challenge 2

```js
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // 0(1)
  let b = 10; // 0(1)
  let c = 50; // 0(1)
  for (let i = 0; i < input; i++) {
    // 0(input)
    let x = i + 1; // 0(input)
    let y = i + 2; // 0(input)
    let z = i + 3; // 0(input)
  }
  for (let j = 0; j < input; j++) {
    // 0(input)
    let p = j * 2; // 0(input)
    let q = j * 2; // 0(input)
  }
  let whoAmI = "I don't know"; // 0(1)
}

// BIG O(4 + 5n)
```

### 3. O(n^2) = Quadratic Time

- every element in a collection needs to be compared to every other element. (Two nested loops)
- in nested loop you must multiply => O(n \* n) => O(n^2)

```js
// Log all paris of array
const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(i, j);
    }
  }
}

// O(n * n) => O(n^2)
```

### 4. O(n!) = Factorial

- you are adding a loop for every element.

## Big O Rule Book

### Rule 1: Worst Case

- Always think about the worst case

```js
// if nemo is in first index i could be O(1). however if nemo is in the last index of array, loop will keep going untll it finds nemo at the end so its `O(n)`
const everyone = ['dory', 'bruce', 'marlin', 'gill', 'nemo'];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log('running');
    if (array[i] === 'nemo') {
      console.log('Found Nemo!');
      break;
    }
  }
}

findNemo(everyone);
```

### Rule 2: Remove Constants

- drop the constants since it is not significant

```js
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]); // O(1)

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    // O (items/ 2)
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    // O (100)
    console.log('hi');
  }
}

// BIG O(1 + n/2 +100)
// Remove Constants O(n)
```

### Rule 3: Different terms for inputs

- since there are two input parameters it cannot be O(n).
- if there are several input parameters its O(a + b).

```js
function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });

  boxes2.forEach(function (boxes) {
    console.log(boxes);
  });
}

// O(a + b)
```

### Rule 4: Drop Non Dominants

- we want to drop the non dominant terms that means we care about the most important term.

```js
function printAllNumbersThenAllPairSums(numbers) {
  console.log('these are the numbers:');
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllParisSums([1, 2, 3, 4, 5]);

// O(n + n^2) in this case, we actually drop the n and just have an n to the power of 2, because as the input increases, the size of n to the power of 2 is way more important than n.

// 0(n^2)
```

### What can cause time in a function?

- Operations (+, - , \* , /)
- Comparisions (<, >, ==)
- Looping (for, while)
- Outside Function call (function())

### What causes Space complexity?

- Variables
- Data Structures
- Function Call
- Allocations

```js
//#5 Space complexity O(1)
function boooo(n) {
  for (let i = 0; i < n; i++) {
    console.log('booooo');
  }
}

// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
  var hiArray = []; // adding new Data Structure to memory
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }
  return hiArray;
}

arrayOfHiNTimes(6);
```

## Different ways of writing loops

```js
const everyone = ['dory', 'bruce', 'marlin', 'gill', 'nemo'];

// using regular for loop
function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo!');
    }
  }
}

findNemo(everyone);

// using forEach array method
const findNemo2 = (array) => {
  array.forEach((fish) => {
    if (fish === 'nemo') {
      console.log('Found NEMO!');
    }
  });
};

// using for of method
const findNemo3 = (array) => {
  for (let fish of array) {
    if (fish === 'nemo') {
      console.log('Found NEMO!');
    }
  }
};

findNemo2(everyone);
findNemo3(everyone);
```
