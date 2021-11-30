# 10장 객체 리터럴

## 객체란?

- **자바스크립트는 객체(object) 기반의 프로그래밍 언어**이며, 자바스크립트를 구성하는 거의 *"모든 것"*이 객체이다. 원시 값을 제외한 나머지 값(함수, 배열, 정규 표현식 등)은 모두 객체다.
    - `프로퍼티`: 객체의 상태를 나태난 값 (data)
    - `메서드`: 프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 동작(behavior)

    ```js
    var counter = {
        num: 0, // 프로퍼티
        increase: function() { // 메서드
            this.num++;
        }
    }
    ```

## 객체 리터럴에 의한 객체 생성

- 자바스크립트는 프로토타입 기반 객체지향 언어로서 클래스 기반 객체지향 언어와는 달리 다양한 객체 생성방법을 지원한다.
    1. 객체 리터럴
    2. Object 생성자 함수
    3. 생성자 함수
    4. Object.create 메서드
    5. 클래스(ES6)

- 위 방법 중 가장 일반적이고 간단한 방법은 객체 리터럴을 사용하는 방법이다.
    
    > 리터럴(literal)은 사람이 이해할수 있는 문자 또는 약속된 기호를 사용하여 값을 생성하는 표기법을 말한다. 즉 객체 리터럴은 객체를 생성하기 위한 표기법이다.

    ```js
    var person = {
        name: "Lee",
        sayHello: function () {
            console.log(`Hello! My name is ${this.name}.`)
        }
    }

    console.log(typeof person); // object
    console.log(person) // {name: "Lee", sayHello: f}
    ```

## 프로퍼티

- **객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.**

```js
var person = {
    // 프로퍼티 키는 name, 프로퍼티 값은 'Lee'
    name: 'Lee',
    // 프로퍼티 키는 age, 프로퍼티 값은 20
    age: 20
};
```

- **식별자 네이밍 규칙을 따르지 않는 이름에는 반드시 따옴표를 사용해야 한다.**

```js
var person = {
    firstName: 'Ung-mo', // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
    'last-name' : 'Lee' // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키
}

console.log(person); // {firstName: 'Ung-mo', last-name: 'Lee'}
```

- 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어쓴다. 

```js
var foo = {
    name: 'Lee',
    name: 'Kim'
};

console.log(foo); // {name: "Kim"}
```

## 메서드

- 프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 `메서드(method)`라 부른다. 즉, 메서드는 객체에 묶여있는 함수를 의미한다.

```js
var circle = {
    radius: 5, // 프로퍼티

    // 원의 지름
    getDiameter: function() { // 메서드
    return 2 * this.radius; // this는 circle를 가리킨다.
    }
};

console.log(circle.getDiameter()); // 10
```

## 프로퍼티 접근

- 프로퍼티에 접근하는 방법은 다음과 같이 두 가지다.
    1. 마침표 프로퍼티 접근 연산자(.)를 사용하는 `마침표 표기범(dot notation)`
    2. 대괄호 프로퍼티 접근 연산자([...])를 사용하는 `대괄호 표기법(bracket notation)`

```js
var person = {
    name: "Lee"
};

// 마침표 표기범에 의한 프로퍼티 접근
console.log(person.name); //Lee

// 대괄호 표기법에 의한 프로퍼티 접근
console.log(person["name"]); //Lee
```

## 프로퍼티 값 갱신

- 이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다.

```js
var person = {
    name : "Lee"    
};

// person 객체에 name프로퍼티가 존재하므로 name 프로퍼티의 값이 갱신된다.
person.name = "Kim";

console.log(person); // {name: "Kim"}
```

## 프로퍼티 동적 생성

- **존재하지 않는** 프로퍼티에 **값을 할당하면 프로퍼티가 동적으로 생성**되어 추가되고 프로퍼티 값이 할당 된다.

```js
var person = {
    name : "Lee"
};

// person 객체에는 age프로퍼티가 존재하지 않는다.
// 따라서 person 객체에 age 프로퍼티가 동적으로 생성되고 값이 할당된다.

person.age = 20;

console.log(person); // {name: "Lee", age: 20}
```

## 프로퍼티 삭제

- `delete 연산자는 객체의 프로퍼티를 삭제한다.` 이때 delete 연산자의 피연산자는 프로퍼티 값에 접근할 수 있는 표현식이어야 한다. 만약 존재하지 않는 프로퍼티를 삭제하면 **아무런 에러 없이 무신**된다.

```js
var person = {
    name: "Lee"
};

// 프로퍼티 동적 생성
person.age = 20;

delete person.age;

console.log(person) // {name: "Lee"}
```

## ES6에서 추가된 객체 리터럴의 확장 기능

### 프로퍼티 축약 표현

- 객체 리터럴의 프로퍼티는 프로퍼티 키와 프로퍼티 값으로 구성된다. 프로퍼티 값은 변수에 할당된 값, 즉 식별자 표현식일 수도 있다.

```js
// ES5

var x = 1, y = 2;

var obj = {
    x: x,
    y: y
};

console.log(obj); // {x: 1, y:2}

// ES6 
let x = 1, y =2 ;

// 프로퍼티 축약 표현

const obj = {x, y};

console.log(obj); // {x: 1, y: 2}
```

### 계산된 프로퍼티 이름

- 문자열 또는 문자열로 타입 변환할 수 있는 값으로 평가되는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수 있다. 단, 프로퍼티 `키`로 사용할 표현식을 `대괄호([...])`로 묶어야 한다. 이를 `계산된 프로퍼티 이름(computed propery name)`이라고 한다.

```js
// ES5

var prefix = "prop";
var i = 0;

var obj = {};

// 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3:3}

// ES6
const prefix = "prop";
let i = 0;

// 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성
const obj = {
    [`${prefix}-${++i}`] : i,
    [`${prefix}-${++i}`] : i,
    [`${prefix}-${++i}`] : i,
};

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3:3}
```

### 메서드 축약 표현

- `ES5`에서 메서드를 정의하려면 `프로퍼티 값`으로 `함수`를 할당한다.

```js
// ES5
var obj = {
    name: "Lee",
    sayHi: function() {
        console.log("Hi!" + this.name);
    }
}

obj.sayHi(); // Hi! Lee
```

- `ES6`에서는 메서드를 정희할 때 `function 키워드를 생략`한 축약 표현을 사용할 수 있다.

```js
// ES6
const obj = {
    name: "Lee",
    // 메서드 축약 표현
    sayHi() {
        console.log("Hi!" + this.name)
    }
}

obj.sayHi(); // Hi! Lee
```
