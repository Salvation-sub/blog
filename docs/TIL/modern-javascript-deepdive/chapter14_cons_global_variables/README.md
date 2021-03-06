# 14장 전역 변수의 문제점

- 전역 변수의 무분별한 사용은 위험하다. 전역 변수를 반드시 사용해야 할 이유를 찾이 못한다면 지역 변수를 사용해야 한다.

## 변수의 생명 주기

### 지역 변수의 생명주기

- 변수는 선언에 의해 생성되고 할당을 토해 값을 갖는다. 그리고 언젠가 소멸한다. 즉, 변수는 생물과 유사하게 생셩되고 소멸되는 `생명 주기(life cycle)`가 있다. 변수에 생명 주기가 없다면 한번 선언된 변수는 프로그램을 종료하지 않는 한 영원히 메모리 공간을 점유하게 된다.

```js
function() {
    var x = "local";
    console.log(x) // 1ocal
    return x;
}

foo()
console.log(x) // ReferenceError: x is not defined
```

- `전역 변수` **선언은 선언문이 어디에 있든 상관 없이 가장 먼저 실행된다.** 다시 말해, 변수 선언은 코드가 한 줄씩 순차적으로 실행되는 시점인 런타임에 실행되는 것이 아니라 런타임 이전 단계에서 자바스크립트 엔진에 의해 먼저 실행된다.
- `지역 변수`의 **생명 주기는 함수의 생명 주기와 일치한다.**

```js
var x = "global";

function() {
    console.log(x) // undefined
    var x = "local"
}

foo()
console.log(x) // global
```

> foo 함수 내부에서 선언된 지역 변수 x는 1의 시점에 이미 선언되었고 undefined로 초기화되어 있다. 따라서 전역 변수 x를 참조하는 것이 아니라 지역 변수 x를 참조해 값을 출력한다. 즉, 지역 변수의 함수 전체에서 유효하다. 단, 변수 할당문이 실행되기 이전까지는 undefined 값을 갖는다.

### 전역 변수의 생명 주기

- 함수와 달리 전역 코드는 명시적인 호출 없이 실행된다. 다시 말해, 전역 코드는 함수 호출과 같이 전역 코드를 실행하는 **특별한 진입점이 없고 코드가 로드되자마자 곧바로 해석되고 실행된다.**
- **var 키워드로 선언한 전역 변수의 생명 주기는 전역 객체의 생명 주기와 일치한다.**

> 전역 객체는 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체다. 전역 객체는` 클라이언트 사이드 환경(브라우저)에서는 window`, `서버 사이드 환경(Node.js)에서는 global 객체`를 의미한다.

## 전역 변수의 문제점

### 암묵적 결합

> 전역 변수를 선언한 의도는 전역, 즉 코드를 어디서든 참조하고 할당할 수 있는 변수를 사용하겠다는 것이다. 이는 모든 코드가 전역 변수를 참조하고 변경할 수 있는 `암묵적 결합(implicit coupling)`을 허용하는 것이다. 변수의 유효 범위가 크면 클수록 코드의 가독성은 나빠지고 의도치 않게 상태가 변경될 수 있는 위험성도 높아진다.

### 긴 생명 주기

- **전역 변수는 생명주기가 길다.** 따라서 메모리 리소스도 오랜 기간 소비한다. 또한 저역 변수의 상태를 변경할 수 있는 시간도 길고 기회가 많다.

- **지역 변수는 전역 변수보다 생명 주기가 훨씬 짧다.** 이는 전역 변수보다 상태 변경에 의한 오류가 발생할 확률도 적고 , 메모리 리소스도 짦은 기간만 소비한다.

### 스코프 체인 상에서 종점에 존재

> 전역 변수는 스코프 체인 상에서 종점에 존재한다. 이는 변수를 검색할 때 전역 변수가 가장 마지막에 검색된다는 것을 말한다. 즉, **전역 변수의 검색 속도가 가장 느리다.** 검색 속도의 차이는 그다지 크지 않지만 속도의 차이는 분명히 있다.

### 네임스페이스 오염

> 자바스크립트는 다른 파일 내에서 동일한 이름으로 명명된 전역 변수나 전역 함수가 같은 스코프 내에 존재할 경우 예상치 못한 결과를 가져올 수 있다.

## 전역 변수의 사용을 억제하는 방법

- **전역 변수를 반드시 사용해야 할 이유를 찾이 못한다면 지역 변수를 사용해야 한다. 변수의 스코프는 좁을수록 좋다.**

### 즉시 실행 함수

- 함수 정의와 동시에 호출되는 즉시 실행 함수는 단 한번만 호출된다. 모든 코드를 즉시 실행 함수로 감싸면 모든 변수는 즉시 실행 함수의 지역 변수가 된다. 이 방법을 사용하면 전역 변수를 생성하지 않으므로 라이브러리 등에 자주 사용된다.

```js
(function () {
  var foo = 10; // 즉시 실행 함수의 지역 변수
  //..
})();

consolel.log(foo); // ReferenceError: foo is not defined
```

### 네임스페이스 객체

- 전역에 네임스페이스 역할을 담당할 객체를 생성하고 전역 변수처럼 사용하고 싶은 변수를 프로퍼티로 추가하는 방법이다.

```js
var MYAPP = {}; // 전역 네임스페이스 객체

MYAPP.name "Lee";

console.log(MYAPP.name); // Lee
```

- 네임스페이스를 분리해서 식별자 충돌을 방지하는 효과는 있으나 _네임스페이스 객체 자체가 전역 변수에 해당되므로 그다지 유용해 보이지 않는다._

### 모듈 패턴

- 모듈 패턴은 클래스를 모방해서 관련이 있는 변수와 함수를 모아 즉시 실행 함수로 감싸 하나의 모듈을 만든다.
- 모듈 패턴은 자바스크립트의 강력한 기능인 클로저를 기반으로 동작한다. 모듈 패턴의 특징은 전역 변수의 억제는 물론 캡슐화까지 구현할 수 있다는 것이다.

> 대부분의 객체지향 프로그래밍 언어는 클래스를 구성하는 멤버에 대해 _public, private, protected_ 등의 접근 제한자를 사용해 공개 범위를 **한정**할 수 있다. `public`으로 선언된 데이터 또는 메서드는 외부에서 접근이 가능하지만 `private`으로 선언된 경우는 외부에서 접근 할 수 없고 내부에서만 사용된다. 이것은 클래스 외부에는 _제한된 접근 권한을 제공하며 원하지 않는 외부의 접근으로 부터 내부를 보호하는 기능을 한다_.

```js
var Counter = (function () {
  // private 변수
  var num = 0;

  // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
})();

// private 변수는 외부로 노출되지 않는다.
console.log(Counter.num); // undefined

console.log(Counter.increase()); //1
console.log(Counter.increase()); //2
```

- 위 예제의 즉시 실행 함수는 객체를 반환한다. 이 객체에는 외부에 노출하고 싶은 변수나 함수를 담아 반환한다. 이때 반환되는 객체의 프로퍼티는 외부에 노출되는 퍼블릭 멤버다.

### ES6 모듈

- ES6 모듈을 사용하면 더는 전역 변수를 사용할 수 없다. **ES6 모듈은 파일 자체의 독자적인 모듈 스코프를 제공한다.** 따라서 모듈 내에서 var 키워드로 선언한 변수는 더는 전역 변수가 아니며 window 객체의 프로퍼티도 아니다.
