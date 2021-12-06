# Data Structure: Hash Tables

- hash tables are `objects` in Javascripts
- usally used for improving time complexity
- Fast Access O(1) , More Memory O(n)

## Hash function

- A hash function is simply a function that generates a value of fixed length for eaach input that it gets. (ex:MD5)

## Hash Collisions

```js
let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function () {
    console.log('ahhh!');
  },
};

user.age; // 0(1)
user.spell = 'abra kadabra'; // 0(1)
user.scream(); // 0(1)

user;
// ahhh!
// {
//   age: 54,
//   name: 'Kylie',
//   magic: true,
//   scream: [Function: scream],
//   spell: 'abra kadabra'
// }
```

## Hash Tables in Different Languages

```js
// 1. object only allows string as a `key`
// 2. no order
let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function () {
    console.log('ahhh!');
  },
};

user.age; // 0(1)
user.spell = 'abra kadabra'; // 0(1)
user.scream(); // 0(1)

user;

// 1. allows to save any data type as a `key`
// 2. maintains insertion order
const a = new Map();

// Sets is another feature very similar to Map,
// the only difference is that it only stores keys. no values
const b = new Sets();
```

## Implement A Hash Table

```js
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // _ means private property , can still access to hash method , but it is a developer standard
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // adding hash
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
      console.log(this.data);
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  // getting value
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      // when collision happens
      for (let i = 0; i < currentBucket.length; i++) {
        {
          if (currentBucket[i][0] === key) {
            return currentBucket[i][1];
          }
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
// myHashTable.set("grapes", 100000);
// myHashTable.get("grapes");
myHashTable.set('grapes', 100000);
myHashTable.set('apples', 54);
myHashTable.get('grapes');
myHashTable.keys();
```

## Hash Tables vs Arrays

### Hash Tables

> A problem of hash tables are idea of no concept of order

- search O(1) -> better
- insert O(1) -> better
- lookup O(1) -> same
- delete O(1) -> same

### Arrays

- search O(n)
- lookup O(1)
- push O(1)
- insert O(n)
- delete O(n)

## First Recurring Character

```js
// Google Question
// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// It should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
// It should return 1

// Given an array = [2, 3, 4, 5];
// It should return undefined

const testcase1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const testcase2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const testcase3 = [2, 3, 4, 5];

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      console.log('i', [i, input[i]]);
      console.log('j', [j, input[j]]);

      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
} // O(n^2)

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map);
  }

  return undefined;
} // O(n)

firstRecurringCharacter2(testcase1);
```
