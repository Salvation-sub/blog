# Data Structures : Graph

![img](https://lh3.googleusercontent.com/proxy/8xntUjNyDJTCfCYQmovSI_187c7riOFJBeio2JYojYQtBko1e02xaOjBi1TPGLFTiBw2OAlwaWCduczT9XOJjSIgClDbBrv7_qw7lqoFzLyrshsNxCApitnmiG83MQ)

- graph is simply a set of values that are related in a pariwise fashion
- In a graph, each item is called a node or a vertex
- nodes are connected with edge

## Type of graphs

![img](https://miro.medium.com/max/7954/1*q0tQ1svUWfN05kWsZ_Uo2g.jpeg)

- Directed : one way street where you can only go one way
  1. Twitter
- Undirected : you can go back and forth
  1. Facebook

![img](https://i1.wp.com/techvidvan.com/tutorials/wp-content/uploads/sites/2/2021/07/TV-DS-Graph-normal-image08.jpg?ssl=1)

## Guess Data

```js
// Edge List
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Adjacent List
const graph = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent Matrix
const graph = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};
```

## Graph Implementation

```js
class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }
  addEdge(node1, node2) {
    //undirected Graph
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = '';
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + ' ';
      }
      console.log(node + '-->' + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5
```

## Graph Reviews

- pros
  1. Relationships
- cons
  1. Scaling is hard
