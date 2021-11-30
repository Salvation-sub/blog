# 큐 (Queue)

## 1. 큐 구조

- 줄을 서는 행위와 유사
- 가장 먼저 넣은 데이터를 가장 먼저 꺼낼 수 있는 구조
  - 음식점에서 가장 먼저 줄을 선 사람이 제일 먼저 음식점에 입장하는 것과 동일
  - FIFO (First-In, First-Out) 또는 LILO (Last-In, Last-Out) 방식으로 스택과 꺼내는 순서가 반대

<img src="https://www.fun-coding.org/00_Images/queue.png" />

## 2. 알아둘 용어

- Enqueue: 큐에 데이터를 넣는 기능
- Dequeue: 큐에서 데이터를 꺼내는 기능

## 3. 파이썬 queue 라이브러리 활용해서 큐 자료 구조 사용하기

- queue 라이브러리에는 다양한 큐 구조로 Queue(), LifoQueue(), PriorityQueue() 제공
- 프로그램을 작성할 때 프로그램에 따라 적합한 자료 구조를 사용

  - Queue(): 가장 일반적인 큐 자료 구조
  - LifoQueue(): 나중에 입력된 데이터가 먼저 출력되는 구조 (스택 구조라고 보면 됨)
  - PriorityQueue(): 데이터마다 우선순위를 넣어서, 우선순위가 높은 순으로 데이터 출력

  > 일반적인 큐 외에 다양한 정책이 적용된 큐들이 있음

### 3.1. Queue()로 큐 만들기 (가장 일반적인 큐, FIFO(First-In, First-Out))

```python
import queue

// 큐 파이썬 라이브러리 가져와서 변수화
data_queue = queue.Queue()

// 큐에 데이터 넣기
data_queue.put("funcoding")
data_queue.put(1)

// 데이터 사이즈 측정 output 2
data_queue.qsize()

// 데이터 빼기 output funcoding
data_queue.get()

// 데이터 사이즈 측정 output 1
data_queue.qsize()

// 데이터 빼기 output 1
data_queue.get()

```

### 3.2. LifoQueue()로 큐 만들기 (LIFO(Last-In, First-Out))

```python
import queue

// LIFO 큐 가져와서 변수화
data_queue = queue.LifoQueue()

data_queue.put("funcoding")
data_queue.put(1)

// 데이터 사이즈 측정 output 2
data_queue.qsize()

// 데이터 빼기 output 1
data_queue.get()
```

### 3.3. PriorityQueue()로 큐 만들기

```python
import queue

// Priority 큐 가져와서 변수화
data_queue = queue.PriorityQueue()

// 튜플 형태로 데이터를 삽입
data_queue.put((10, "korea"))
data_queue.put((5, 1))
data_queue.put((15, "china"))

// 데이터 사이즈 측정 output 3
data_queue.qsize()

// 데이터 빼기 output (5,1)
data_queue.get()

// 데이터 빼기 output (10,"korea")
data_queue.get()
```

## 참고: 어디에 큐가 많이 쓰일까?

- 멀티 태스킹을 위한 프로세스 스케쥴링 방식을 구현하기 위해 많이 사용됨 (운영체제 참조)

> 큐의 경우에는 장단점 보다는 (특별히 언급되는 장단점이 없음), 큐의 활용 예로 프로세스 스케쥴링 방식을 함께 이해해두는 것이 좋음

## 4. 프로그래밍 연습

```python

queue_list = list()

// append metho를 활용해서 list에 데이터를 넣는다.
def enqueue(data):
    queue_list.append(data)

def dequeue():
  // 첫번째 데이터를 가져오고
    data = queue_list[0]

  // 가져온 데이터를 삭제한다음 리턴
    del queue_list[0]
    return data

// 반복문틍을 통해 데이터를 넣어줍니다
for index in range(10):
    enqueue(index)

// list에 들어가 있는 데이터 길이 출력 out: 10
len(queue_list)

// out: 0 부터 10 까지 차례대로 출력
dequeue()
```
