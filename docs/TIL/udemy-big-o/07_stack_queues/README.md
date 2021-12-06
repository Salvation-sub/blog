# Data Structure: Stack & Queues

## Stacks

- lookup O(n)
- pop O(1)
- push O(1)
- peek O(1)

- LIFO (Last In Last Out)

```js
// Stacks

// google
// udemy.com
// youtube

// Arrays  =  good
// Linked Lists = good
```

## Queues

- lookup O(n)
- enqueue O(1)
- dequeue O(1)
- peek O(1)

- FIFO (First In First Out)

```js
// Queues

//  Matt -- Joy  -- Samir -- Pavel
// Arrays = X
// Linked Lists = good
```

## How Javascript Works

### What is a program?

- allocate memory : otherwise we wouldn't be able to have variables or even have a file on our computer.
- parse and execute : read and run commands

#### Javascript Engine v8

- memory heap : where memory allocatin happens
- call stack : where code is read and executed
- memory leak: when you have unused memory fills up the memory.
- javascript is single threaded

![img](https://i.stack.imgur.com/xAQPR.png)

```js
// allocating memory
const a = 1;
const b = 110;

// call stack
console.log('1'); // 1
console.log('2'); // 2
console.log('3'); // 3

const one = () => {
  const two = () => {
    console.log('4');
  };
  two();
};

// Recursion : calling itself
function foo() {
  foo();
}

foo();
```

#### Javascript Run-Time Environment

- Web APIs : DOM(document) , AJAX(XML HTTPRequest), Timeout(setTimeout) => Callback Queue(onClick, onLoad, onDone ) => Event Loop

```js
console.log('1');
setTimeout(() => {
  console.log('2');
}, 2000);
console.log('3');
```

## Stack Implementation (Linked Lists)

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  // lets us see the top element
  peek() {
    return this.top;
  }

  // add top element
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    }
    if (this.length > 0) {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  // delete top element
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
  // isEmpty
}

const myStack = new Stack();
myStack.push(3);
myStack.push(5);
myStack.pop();
myStack.peek();
```

## Stack Implementation (Array)

```js
class Stack {
  constructor() {
    this.array = [];
  }
  // lets us see the top element
  peek() {
    return this.array[this.array.length - 1];
  }

  // add top element
  push(value) {
    this.array.push(value);
    return this;
  }

  // delete top element
  pop() {
    this.array.pop();
    return this;
  }
  // isEmpty
}

const myStack = new Stack();
myStack.push(3);
myStack.push(5);
myStack.pop();
myStack.peek();
```

## Queue Implementation

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // get the very first item in queue
  peek() {
    return this.first;
  }
  // add to the queue
  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  // remove from the front of item
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
  //isEmpty;
}

const myQueue = new Queue();
myQueue.peek();
myQueue.enqueue('korean');
myQueue.enqueue('chinese');
myQueue.enqueue('canada');
myQueue.dequeue();

//Joy
//Matt
//Pavel
//Samir
```

## Queues Using Stacks

```js
class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

const myQueue = new CrazyQueue();
myQueue.peek();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();
```
