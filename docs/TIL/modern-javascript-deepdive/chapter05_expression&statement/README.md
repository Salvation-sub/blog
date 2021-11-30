# 5장 표현식과 문

## 값

- `값(value)`은 `식(statement)`이 `평가(evaluate)`되어 생성된 결과를 말한다. 평가란 식을 해석해서 값을 생성하거나 참조하는것을 의미한다.

```js
// 10 + 20은 평가되어 숫자 값 30을 생성한다.
10 + 20; // 30
```

## 리터럴

- `리터럴(literal)`은 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 `표기법(notation)`을 말한다.

```js
// 숫자 리터럴 3
3;
```

## 표현식

- `표현식(expression)`은 값으로 평가될 수 있는 `문(statement)`이다. 즉, 표현식이 평가되면 새로운 값을 생성하거나 기존 값을 참조한다.

```js
// 리터럴 표현식
10;
('Hello');

// 식별자 표현식(선언이 이미 존재한다고 가정)
sum;
person.name;
arr[1];

// 연산자 표현식
10 + 20;
sum = 10;
sum !== 10;

// 함수/ 메서드 호출 표현식(선언이 이미 존재한다고 가정)
square();
person.getName();
```

> 즉, 값으로 평가될 수 있는 문은 모두 표현식이다.

## 문

- `문(statement)`은 프로그램을 구성하는 기본 단위이자 최소 실행 단위이다. 문의 집합으로 이뤄진 것이 바로 프로그램이며, 문을 작성하고 순서에 맞게 나열하는 것이 프로그래밍이다.
- `문`은 여러 `토큰`으로 구성된다.
  > `토큰(token)`이란 문법적인 의미를 가지며, 문법적으로 더 이상 나눌 수 없는 코드의 기본 요소를 의미한다. 예를 들어 `키워드, 식별자, 연산자, 리터럴, 세미콜론(:)이나 마침표(.)` 등의 특수 기호는 문법적인 의미를 가지며, 문법적으로 더 이상 나눌 수 없는 코드의 기본 요소이므로 모두 토큰이다.

```js
// 변수 선언문
var x;

// 할당문
x = 5;

// 함수 선언문
function foo() {}

// 조건문
if (x > 1) {
  console.log(x);
}

// 반복문
for (var i = 0; i < 2; i++) {
  console.log(i);
}
```

## 세미콜론과 세미콜론 자동 삽입 기능

- `세미콜론(:)`은 문의 종료를 나타낸다.
  > 자바스크립트 엔진은 세미콜론으로 문이 종료한 위치를 파악하고 순차적으로 하나씩 문을 실행한다. 따라서 문을 끝낼 때 세미콜론을 붙여야한다. 단, `if, for문 같이 {}` 와 같은 자체 종결성을 갖고 있으면 안붙여도 된다.

## 표현식인 문과 표현식이 아닌 문

- 표현식인 문과 표현식이 아닌 문을 구별하는 가장 간단하고 명료한 방법은 변수에 할당해 보는것이다. 표현식인 문은 값으로 평가되므로 변수에 할당할 수 있다. 하지만 표현식이 아닌 문은 값으로 평가할 수 없으므로 변수에 할당하면 에러가 발생한다.

```js
// 표현식이 아닌 문은 값처럼 사용할 수 없다.
var foo = var x; // SyntaxError : Unexpected token var

// 변수 선언문은 표현식이 아닌 문이다.
var x;

// 할당문은 그 자체가 표현식이지만 완전한 문이기도 하다. 즉, 할당문은 표현식인 문이다.
x = 100;
```