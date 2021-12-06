# Algorithms: Recursion

- The algorithms are simply steps in a process that we take to perform a desired action with computers.
- Data Structures (Class {}) + Algorithms (function()) = Programs

## What is Recursion

- it's a function that refers to itself inside of a function.

```js
function inception() {
  inception();
}
```

## Anatomy of Recursion

- recursion needs to have base case("exiting")
  1. Identify the base case
  2. Identify the recursive case
  3. Get closer and closer and return when needed usually you have 2 returns

```js
let counter = 0;
function inception() {
  console.log(counter);
  if (counter > 3) {
    return 'done!';
  }
  counter++;
  // need to return this function since inception(inception(inception(inception("done"))))
  return inception();
}

inception();
// 0
// 1
// 2
// 3
// 4
// done!
```

## Exercise: Factorial

```js
// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// using recursive
let answer = 1;
function findFactorialRecursive(number) {
  //code here
  answer = answer * number;
  if (number <= 0) {
    return 'plz put number greater than 0';
  }
  if (number === 1) {
    return answer;
  }
  number--;
  return findFactorialRecursive(number);
}
findFactorialRecursive(0);

// using for loop
function findFactorialIterative(number) {
  // O(n)
  let answer = number;
  for (let i = number - 1; i > 0; i--) {
    answer *= i;
  }
  return answer;
}

findFactorialIterative(3);

// Video solution
function findFactorialRecursive(number) {
  // O(n)
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}
findFactorialRecursive(3);
```

## Exercise: Fibonacci

```js
// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  // O(n)
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}
fibonacciIterative(6);

function fibonacciRecursive(n) {
  // O(2^n)
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

fibonacciRecursive(7);
```

## Recursive vs Iterative

- Anything you do with a recursion `CAN` be done iteratively (loop)

- Pros
  1. DRY
  2. Readability
- Cons
  1. Large Stack

## When to use recursion

- traversing or searching through trees or graphs like `BFS` + `DFS`
- Every time you are using a tree or converting something into a tree, consider recursion.
  1. Divided into a number of subproblems that are smaller instances of the same problem.
  2. Each instance of the subproblem is identical in nature.
  3. The solutions of each subproblem can be combined to solve the problem at hand.
- Divide and Conquer using Recursion
