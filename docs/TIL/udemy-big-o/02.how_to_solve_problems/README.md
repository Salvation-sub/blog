# How to solve problems

## What are Companies Looking for?

1. Analytic Skills: How can you think through problems and analyze things?
2. Coding SKills: Do you code well, by writing clean, simple, organized, readable code?
3. Technical Skills: Do you know the fundamentals of the job you're applying for?
4. Communication Skills: Does your personality match the companies' culture?

## What we need for coding interview?

- Data Structures

  1. Arrays
  2. Stacks
  3. Queues
  4. Linked Lists
  5. Trees
  6. Tries
  7. Graphs
  8. Hash Tables

- Algorithms
  1. Sorting
  2. Dynamic Programming
  3. BFS + DFS (Searching)
  4. Recursion

## Step by step through a problem

1. When the interviewer says the question, write down the key points at the top (i.e. sorted
   array). Make sure you have all the details. Show how organized you are.
2. Make sure you double check: What are the inputs? What are the outputs?
3. What is the most important value of the problem? Do you have time, and space and memory,
   etc.. What is the main goal?
4. Don't be annoying and ask too many questions.
5. Start with the naive/brute force approach. First thing that comes into mind. It shows that
   you’re able to think well and critically (you don't need to write this code, just speak about it).
6. Tell them why this approach is not the best (i.e. O(n^2) or higher, not readable, etc...)
7. Walk through your approach, comment things and see where you may be able to break things.
   Any repetition, bottlenecks like O(N^2), or unnecessary work? Did you use all the information
   the interviewer gave you? Bottleneck is the part of the code with the biggest Big O. Focus on
   that. Sometimes this occurs with repeated work as well.
8. Before you start coding, walk through your code and write down the steps you are going to
   follow.
9. Modularize your code from the very beginning. Break up your code into beautiful small pieces
   and add just comments if you need to.
10. Start actually writing your code now. Keep in mind that the more you prepare and understand
    what you need to code, the better the whiteboard will go. So never start a whiteboard
    interview not being sure of how things are going to work out. That is a recipe for disaster.
    Keep in mind: A lot of interviews ask questions that you won’t be able to fully answer on time.
    So think: What can I show in order to show that I can do this and I am better than other
    coders. Break things up in Functions (if you can’t remember a method, just make up a function
    and you will at least have it there. Write something, and start with the easy part.
11. Think about error checks and how you can break this code. Never make assumptions about the
    input. Assume people are trying to break your code and that Darth Vader is using your
    function. How will you safeguard it? Always check for false inputs that you don’t want. Here is
    a trick: Comment in the code, the checks that you want to do… write the function, then tell the
    interviewer that you would write tests now to make your function fail (but you won't need to
    actually write the tests).
12. Don’t use bad/confusing names like i and j. Write code that reads well.
13. Test your code: Check for no params, 0, undefined, null, massive arrays, async code, etc… Ask
    the interviewer if we can make assumption about the code. Can you make the answer return
    an error? Poke holes into your solution. Are you repeating yourself?
14. Finally talk to the interviewer where you would improve the code. Does it work? Are there
    different approaches? Is it readable? What would you google to improve? How can
    performance be improved? Possibly: Ask the interviewer what was the most interesting
    solution you have seen to this problem
15. If your interviewer is happy with the solution, the interview usually ends here. It is also
    common that the interviewer asks you extension questions, such as how you would handle the
    problem if the whole input is too large to fit into memory, or if the input arrives as a stream.
    This is a common follow-up question at Google, where they care a lot about scale. The answer
    is usually a divide-and-conquer approach — perform distributed processing of the data and only
    read certain chunks of the input from disk into memory, write the output back to disk and
    combine them later.

## Interview Question 1

```js
// Given 2 arrays, create a function that let's a user know(true/false) whether those
// two arrays contain any common items
// For Example:
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z', "y", "i"];
// should return false.
// -------------------
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z', "y", "x"];
// should return true.

// 2 parameters - arrays - no size limit
// return true or false

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

// O(1) space complexity
containsCommonItem(array1, array2); // O (a*b)

// find better solution
// array1 ==> obj {
//   a: true,
//   b: true,
//   c: true,
//   x: true
// }
// array2[index] === obj.properties

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object
  // where properties === items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // loop through second array and check if item
  // in second array exists on created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

// O(a) space Complexity
containsCommonItem2(array1, array2); // O (a+b) Time Complexity is better

// more readable solution
function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

containsCommonitem3(array1, array2);
```
