# Algorithms: Sorting

- Bubble Sort
- Insertion Sort
- Selection Sort
- Merge Sort
- Quick Sort

## The Issue With Sort()

- the problem with sort() method, it defaults sort order according to string Unicode points.
- the time and space complexity of the sort cannot be guaranteed as it is implementation dependent.
- chrome uses merge and insertion sort for sort() method.

```js
const letters = ['a', 'd', 'z', 'e', 'r'];
const basket = [2, 65, 34, 2, 1, 7, 9];

basket.sort(); //[ 1, 2, 2, 34, 65, 7, 9 ]

// to make the number sorted properly you need to add function to sort method
basket.sort(function (a, b) {
  return a - b;
}); //[   1,  2,  2, 7, 9, 34, 65]
```

## Bubble Sort

- O(n^2) : time complexity
- bubbling up the largest value using multiple passthrough
- compare one by one

```js
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        // Swap numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
```

## Selection Sort

- O(n^2) : time complexity
- the algorithm works by scanning a list of items for the smallest element and then swapping that element for the one in the first position.

```js
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    // set current index as minimum
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        // update minimum if current is lower than what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

selectionSort(numbers);
console.log(numbers);
```

## Insertion Sort

- its efficient to use when the data is almosted sorted or data is really small

```js
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      // move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // find where number should go
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // move number to the rightr spot
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);
```

## Merge Sort and O(n log n)

- O(n log n): time complexity
- take the list and divide it in half and then divide those sublist into half again untill we have one item
- them compare each pairs to sort

```js
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  // console.log('left:', left);
  // console.log('right:', right);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers);
console.log(answer);
```

## Quick Sort

- O(n log n): time complexity
- usually the fastest sorting

```js
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  const len = array.length;
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
```

## Which Sort is Best?

### Comparison Sort

- `insertion sort`: should be used if `input is small or items are mostly sorted.`
- `bubble sort`: never going to use.
- `selection sort`: never going to use.
- `merge sort`: Best and Worst case are always O (n log n). You can always guarantee that O (n log n) to be the case. however it uses O(n) space complexity.
- `quick sort`: Best and Average is O (n log n) and space complexity is O(log n) which is better than merge sort. however if you don't pick the pivot properly, the worst case is that you could have time complexity O(n^2)(slow sorted)

### Non-Comparison Sort

- counting sort, radix sort : only works for fixed integer, however it is faster than merge sort, quick sort.

## Exercise : Sorting interview

1. Sort 10 schools around your house by distance: insertion sort

2. eBay sorts listings by the current Bid amount: radix or counting sort(Bid are all integers)

3. Sport scores on ESPN: quick sort

4. Massive database (can't fit all into memory) needs to sort through past year's user data: merge sort(since it is going to use external memory)

5. Almost sorted Udemy review data needs to update and add 2 new reviews : insertion sort

6. Temperature Records for the past 50 years in Canada: quick sort

7. Large user name database needs to be sorted. Data is very random. : quick sort

8. You want to teach sorting for the first time: bubble sort, selection sort
