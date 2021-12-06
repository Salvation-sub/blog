# Data Structure: Linked Lists

- prepend O(1) : add data to the beginning of the list
- append O(1) : add data to the last of the list
- lookup O(n) : traverse item
- insert O(n)
- delete O(n)

## What is a linked list?

```js
const basket = ['apple', 'grapes', 'pears'];

// linked list: apples => apples => pears
```

## Why Linked Lists?

- the main difference between arrays and linked lists is that in an array an element or elements are indexed
- in linked list you start at the head and traverse the list until you get to item.

## What is a pointer?

- A pointer is simply a reference to another place, a memory or another object or another node.
- pointing where in the memory the reference is

```js
let obj1 = { a: true };
// created pointer by creating reference
let obj2 = obj1;
obj1.a = "booya";
delete obj1;
console.log("2", obj2) // booya due to garbage collector from javascript
```

## Append

```js
// 10 -> 5 -> 16

// let myLinkedList = {
//   head: {
//     value:10,
//     next:{
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

// console.log(myLinkedList)

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // Code here
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
```

## Prepend

```js
// 1-> 10 -> 5 -> 16

// let myLinkedList = {
//   head: {
//     value:10,
//     next:{
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

// console.log(myLinkedList)

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // Code here
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    // insert value at head
    const newHead = {
      value: value,
      next: this.head,
    };
    this.head = newHead;
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
```

## Node Class

```js
// creating Node class to not repeat same steps
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // Code here
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    // insert value at head
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(9);
```

## Insert()

```js
  // insert O(n)
  insert(index, value){
    // check params
    if(index >= this.length){
      return this.append(value)
    }
    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1)
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList()
  }

  // lookup O(n)
  traverseToIndex(index) {
    // check params
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
```

## remove()

```js
  // lookup O(n)
  traverseToIndex(index) {
    // check params
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // delete O(n)
  remove(index){
    // check params
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
```

## Sum Up Linked List

```js
// 1-> 10 -> 5 -> 16

// let myLinkedList = {
//   head: {
//     value:10,
//     next:{
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

// console.log(myLinkedList)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // O(1)
  append(value) {
    // Code here
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // O(1)
  prepend(value) {
    // insert value at head
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  // insert O(n)
  insert(index, value) {
    // check params
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  // lookup O(n)
  traverseToIndex(index) {
    // check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // delete O(n)
  remove(index) {
    // check params
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(9);
myLinkedList.insert(5, 99);
myLinkedList.remove(1);
```

## Doubly Linked Lists

- each node generates prev pointer and next pointer.

```js
class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // O(1)
  append(value) {
    // Code here
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // O(1)
  prepend(value) {
    // insert value at head
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  // lookup O(n)
  traverseToIndex(index) {
    // check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // insert O(n)
  insert(index, value) {
    // check params
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    // index - 1 노드를 가져온다.
    const leader = this.traverseToIndex(index - 1);
    // index 의 노드
    const follower = leader.next;

    // index - 1의 다음값에 새로운 value와 next: null, prev: null 넣는다.
    leader.next = newNode;

    // 새로운 노드의 prev 값에 index - 1 노드를 넣어준다.
    newNode.prev = leader;

    // 새로운 노드의 next 값에는 index 노드를 넣어준다.
    newNode.next = follower;

    // 원래 있던 index 노드의 prev 에 새로 만든 newNode를 넣어준다.
    follower.prev = newNode;
    this.length++;
    console.log(this);
    return this.printList();
  }

  // delete O(n)
  remove(index) {
    // check params
    if (index === 0) {
      const new_head = this.traverseToIndex(1);
      this.head = new_head;
      new_head.prev = null;
    }
    if (index < this.length - 1) {
      // index - 1 노드를 가져온다.
      const leader = this.traverseToIndex(index - 1);

      // 삭제될 index 노드
      const unwantedNode = leader.next;
      // index - 1 값 next 값을 삭제될 값의 next값을 가져와 덮어씌운다.
      leader.next = unwantedNode.next;
      // 교체 된 index - 1 값의 next 의 prev 값을 가져와 index - 1 노드를 넣어준다.
      leader.next.prev = leader;
    }

    if (index === this.length - 1) {
      const leader = this.traverseToIndex(index - 1);

      leader.next = null;
      this.tail = leader;
    }

    if (index > this.length - 1) {
      this.length++;
    }

    this.length--;

    console.log(this);
    return this.printList();
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(9);
// myLinkedList.insert(3, 99);
myLinkedList.printList();
myLinkedList.remove(5);
```

## Singly vs Doubly Linked

### Singly

> Singly List is appropriate to use when you have less memory or memory is really expensive. and doing fast insertion and deletion. not much of searching

- pros

  1. fairly simple implementation
  2. requires less memory
  3. in delete and insert , because there is technically less operation it is faster

- cons
  1. it cannot be iterated in reverse or traverse from back to front

### Doubly

> used when there are much limitation on memory and when you want good operation for searching for elements such as searching backwards instead of just forwards.

- pros

  1. it can be iterated in reverse or traverse from back to front
  2. when finding previous nodes,

- cons
  1. fairly complex, to implement and requires more memory and storages
  2. needs extra operation when inserting and deleting

## Reverse()

```js
  reverse() {
    // reverse Linked lists
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
```
