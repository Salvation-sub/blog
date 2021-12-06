# Data Structure : Arrays

- lookup O(1)
- push O(1)
- insert O(n)
- delete O(n)

```js
const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage

// push
strings.push('e'); // O(1)

// pop
strings.pop();
strings.pop(); // O(1)

// unshift
strings.unshift('x'); // O(n)

// splice
strings.splice(2, 0, 'alien'); // O(n)

console.log(strings);
```

## Static vs Dynamic Arrays

### Static arrays

- they are fixed in size, meaning you need to specify the number of elements your array will hold

### Dynamic Arrays

- `javascript` uses dynamic arrays
- allow us to copy and rebuild an array at a new location, which with more memory

## Classes in Javascript

### reference type

```js
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

object1 === object2; // true
object1 === object3; // flase
```

### context

```js
console.log(this);
console.log(this === window); // ture
// this === refers to what object it's inside of

const object4 = {
  a: function () {
    console.log(this);
  },
};

object4.a(); // {a: f}
```

### instantiation

```js
class Player {
  // whenever you create class you need constructor
  constructor(name, type) {
    console.log('player', this);
    this.name = name;
    this.type = type;
  }
  intruduce() {
    console.log(`Hi I am ${this.name} , I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    // whenever you extend a class you want to use super so that you essentially have access to Player's contructor
    super(name, type);
    console.log('wizard', this);
  }
  play() {
    console.log(`WEEEEEE I'm a ${this.type}`);
  }
}
// any time program sees a "new" keyword, it says, oh , we're creating a new wizards having two parameters
const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

wizard2.introduce();
```

## Implementing An Array

### Building Array Data Structure

```js
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('hi'); // MyArray {length: 1, data: {0: "hi" }
newArray.pop(); // MyArray { length: 0, data : {}}
console.log(newArray); // MyArray { length: 0, data : {}}
```

### Strings and Arrays

```js
// create a function that reverses a string:
// "Hi My name is Andreit" should be:
// "tierdnA si eman yM iH"

const reverseString = 'Hi My name is Andreit';

function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'hmm thats not good';
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards.join(''));
  return backwards.join('');
}

function reverse2(str) {
  return str.split('').reverse().join;
}

const reverse3 = (str) => str.split('').reverse().join('');

reverse(reverseString);
reverse2(reverseString);
reverse3(reverseString);
```

### Merge sorted Arrays

```js
function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  // Check input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}

// my solution
const mergeSortedArrays2 = (arr1, arr2) =>
  arr1.concat(arr2).sort((a, b) => a - b);

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30]);
// merge top arrays into one
// example: [0,3 ,4,4,6,30,31]
```
