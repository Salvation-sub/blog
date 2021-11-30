# 고급 타입

## 네버 타입

- `네버(never)`는 모든 타입의 하위 타입으로 사용할 수 있지만, any 타입을 never 타입에 할당할 수는 없습니다. never 타입은 다음과 두 가지 상황에서 사용됩니다.

  1. 함수에 닿을 수 없는 코드 영역이 있어 반환값이 존재하지 않을 때

  > ex) while (true)와 같은 무한 루프를 들 수 있습니다.

  2. 함수에 Throw 객체가 반환돼 오류가 발생할 때

  > ex) Throw 객체가 생성되면 함수가 정상적으로 종료된 것이 아니므로 네버 타입이 됩니다.

- 네버 타입은 변수에 다음처럼 지정합니다.

  ```js
  let myValue: never;
  ```

- 임의의 값을 never 타입이 선언된 변수에 할당할 수 없습니다.

  ```js
  // "hello" 형식은 'never' 형식에 할당할 수 없습니다.
  let myValue: never = 'hello';
  ```