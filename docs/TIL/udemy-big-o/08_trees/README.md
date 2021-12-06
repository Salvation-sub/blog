# Data Structures: Trees

![img](https://miro.medium.com/max/975/1*PWJiwTxRdQy8A_Y0hAv5Eg.png)

- Trees are a data structure that have what we call a hierarchical structure

## Binary Trees

![img](https://qph.fs.quoracdn.net/main-qimg-40e38df78ff09c509f60ce21c0127e22)

- lookup O(log N)
- insert O(log N)
- delete O(log N)

- Each node can only have either 0,1 or 2 notes and each child can only have one parent

```js
function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
```

## O (log N)

```js
// Level 0 : 2^0 = 1;
// Level 1 : 2^1 = 2;
// Level 2 : 2^2 = 4;
// Level 3 : 2^3 = 8;

// # of nodes = 2^h - 1;
// log nodes = height
```

## Binary Search Trees

![img](https://blog.penjee.com/wp-content/uploads/2015/11/binary-search-tree-sorted-array-animation.gif)

- great for comparing things or searching
- all child nodes in the tree to the right of the root node must be greater than the current node.

## Balanced vs Unbalanced BST

![img](https://www.tutorialcup.com/wp-content/uploads/2020/12/Balanced_Binary_Tree-1-e1608797090679.png)

- balanced BST = O(log N)
- unbalanced BST = O(N)

- Pros

  1. Better than O(n)
  2. Ordered
  3. Flexible Size

- Cons
  1. No O(1) operation

## Exercise : Binary Search Tree

```js
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.lookup(171);
// JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
```

## AVL Trees + Red Black Trees

![img](https://i.pinimg.com/originals/b3/69/aa/b369aa30b86482f368e77e4ab692c706.gif)

- used for balancing binary tree

## Binary Heaps

![img](https://miro.medium.com/max/1000/1*fvgzmsxvAzMQaXjs58izdg.png)

- lookup O(n)
- insert O(log N)
- delete O(log N)

> every child belongs to a parent node that has a greater priority or value. binary heaps are really great at doing comparative operations

### Priority Queue

- it is a type of data where each element has a priority, elements with a higher priority are served before elements with lower priorities

- pros

  1. Better than O(n)
  2. Priority
  3. Flexible Size
  4. Fast insert

- cons
  1. slow lookup

## Trie

![img](https://mymusing.co/wp-content/uploads/2018/05/trie_example.png)

- mostly used in searching words
- not a binary tree
