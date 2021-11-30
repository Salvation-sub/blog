# 9장 타입 변환과 단축 평가

## 타입 변환이란?

- 자바스크립트의 모든 값을 타입이 있다. 개발자가 의도적으로 값의 타입을 변환하는 것을 `명시적 타입 변환(explicit coercion)` 또는 `타입 캐스팅(type casting)`이라 한다.

```js
var x = 10;

// 명시적 타입 변환
// 숫자를 문자열로 타입 캐스팅한다.
var str = x.toString();
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(type of x, x); // number 10
```

- 개발자의 의도와는 상관없이 표현식을 평가하는 도중 자바스크립트 엔진으로 인해 자동으로 변환되는 것을 `암묵적 타입 변환(implicit coercion)`또는 `타입 강제 변환(type coercion)`이라고 한다.

```js
var x = 10;

// 암묵적 타입 변환
// 문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다.
var str = x + "";
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(type of x, x); // number 10
```

## 암묵적 타입 변환

### 문자열 타입으로 변환

- 자바스크립트 엔진은 `문자열 연결 연산자` 표현식을 평가하기 위해 문자열 연결 연산자의 *피연산자 중에서 문자열 타입이 아닌 피연산자를 문자열 타입으로 암묵적 타입 변환한다*.

```js
// 불리언 타입
true + ''; // 'true'

// 객체 타입
({}) + ''; // "[object Object]"
[10, 20] + ''; // "10,20"
```

### 숫자 타입으로 변환

```js
1 - "1" // 0
1 * "10" // 10
1 / "one" // NaN
```

- 자바스크립트 엔진은 산술 연산자 표현식을 평가하기 위해 *산술 연산자의 피연산자 중에서 숫자 타입이 아닌 피연사자를 숫자 타입으로 암묵적 타입 변환한다.* 이때 숫자타입으로 변환할 수 없는 표현식은 **NaN**이라는 값으로 평가 된다.
    > 빈 문자열('') , 빈 배열([]), null, false 는 0으로 , true는 1로 변환된다. 객체와 빈 배열이 아닌 배열, undefined는 변환되지 않아 NaN이 된다.

### 불리언 타입으로 변환

```js
if ('') console.log(x);
```

- 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy값 또는 Falsy값으로 구분한다. 즉, *제어문의 조건식과 같이 불리언 값으로 평가되어야 할 문맥에서 Truthy값은 true, Falsy값은 false로 암묵적 타입 변환된다*.
    > `Falsy`로 평가되는 값들 : false, undefined, null, 0, -0, NaN , ' '(빈 문자열)

## 명시적 타입 변환

### 문자열 타입으로 변환

- 문자열 타입이 아닌 값을 문자열 타입으로 변환하는 방법은 다음과 같다.
    1. String생성자 함수를 new연산자 없이 호출하는 방법
    2. Object.prototype.toString 메서드를 사용하는 방법
    3. 문자열 연결 연산자를 이용하는 방법

```js
// 1.
// 숫자타입 -> 문자열 타입
String(1); // "1"

// 2.
// 숫자타입 -> 문자열 타입
(1).toString(); // "1"

// 3.
1 + ''; // "1"
```

### 숫자 타입으로 변환

- 숫자 타입이 아닌 값을 숫자 타입으로 변환하는 방법은 다음과 같다.
    1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
    2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 숫자 타입으로 변환 가능)
    3. + 단항 산술 연산자를 이용하는 방법
    4. * 산술 연산자를 이용하는 방법

```js
// 1. 
Number("0") // 0

// 2.
parseInt("0") // 0

// 3. 
+"0"; // 0

// 4.
"0" * 1; // 0
```

### 불리언 타입 변환

- 불리언 타입이 아닌 값을 불리언 타입으로 변환하는 방법은 다음과 같다.
    1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
    2. !부정 논리 연산자를 두번 사용하는 방법

```js
Boolean("x")l //true
!! 0 // false
```

## 단축 평가

### 논리 연산자를 사용한 단축 평가

- `논리합(||)` 또는 `논리곱(&&)` 연산자 표현식은 언제나 2개의 피연산자 중 *어느 한쪽으로 평가된다*.

```js
'Cat' && 'Dog' //Dog
```


> 논리곱(&&) 연산자는 두 개의 피연산자가 모두 true로 평가 될 때 true를 반환한다. **논리곱 연산자는 좌항에서 우항으로 평가가 진행된다**. 즉, 논리 연산의 결과를 결정하는 두번째 피연산자, Dog를 반환한다.


```js
'Cat' || 'Dog' //Cat
```

> 논리합 연산자는 두 개의 피연산자중 하나만 true로 평가되어도 true를 반환한다. 즉,**첫 번째 피연산자인 Cat을 반환하게 된다**.

#### 객체를 가리키기를 기대하는 변수가 null또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때

```js
var elem = null;
// elem이 null 이나 undefined와 같이 Falsy 값이면 elem으로 평가되고
// elem이 Truthy 값이면 elem.value로 평가된다.
var value = elem && elem.value;
```

#### 함수 매개변수에 기본값을 설정할 때

- 함수를 호출할 때 인수를 전달하지 않으면 매개변수에는 undefined가 할당된다. 이때 단축 평가를 사용해 매개변수의 기본값을 설정하면 undefined로 인해 발생할 수 있는 에러를 방지할 수 있다.

```js
// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
    str = str || "";
    return str.length;
}

getStringLength(); // 0
getStringLength("hi"); //2

// ES6의 매개변수의 기본값 설정
function getStringLength(str = "") {
    return str.length;
}

getStringLength(); // 0
getStringLength("hi"); //2
```

### 옵셔널 체이닝 연산자

- ES11에서 도입된 `옵셔널 체이닝 연산자 (?.)`는 **좌항의 피연산자가 null또는 undefined인 경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다**.

```js
var elem = null;

var value = elem?.value;
console.log(value); // undefined
```

### null 병합 연산자

- ES11에서 `도입된 null 병합 연산자 (??)`는 좌항의 피연산자가 null 또는 undefined 인 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연사자를 반환한다. null 병합 연산자 ??는 변수에 **기본값을 설정할 때 유용하다**.

```js
// 좌항의 피연산자가 null또는 undefined이면 우항의 피연산자를 반환하고,
// 그렇지 않으면 좌항의 피연산자를 반환한다.

var foo = null ?? "default string";
console.log(foo) // "default string"
```

> `논리 연산자(||)` 와 `병합연산자(??)` 의 차이점은 *논리연산자는 (false, undefined, null, 0 , -0, NaN, " ") 를 다 Falsy*값으로 처리한다. **병합연산자 같은 경우는 오직 null또는 undefined만 Falsy값으로 처리한다**.
