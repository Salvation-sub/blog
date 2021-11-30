# 타입 선언과 변경, 타입 호환

## 타입 선언과 변경

### 타입 에일리어스

- 타입 에일리어스를 이용하면 기존 타입에 새로운 이름을 지을 수 있습니다.

  > type<바인딩 식별자> = 타입;

- 타입 에일리어스는 단일 타입보다는 유니언 타입이나 리터럴 타입과 같은 다소 복잡한 형태의 타입에 적용하면 좋습니다.

  ```ts
  type myId = string;
  type myAlias = string | undefined;
  type User = {
    id: myId;
    // 물음표는 alias 속성은 생략할 수 있다는 의미입니다.
    alias?: myAlias;
    city: string;
  };

  let id1: User = { id: 'happy1', city: 'seoul' };
  let id2: User = { id: 'happy1', alias: undefined, city: 'daegu' };
  ```

- `타입 어설션(type assertion)`을 이용하면 타입스크립트 컴파일러가 타입 어설션 정보를 이용해 컴파일을 수행합니다. 타입 어설션의 선언 방식은 크게 ` `과 `as 문법을(as syntax)` 이용합니다.

```ts
// any 타입 변수에 대한 타입 어설션 선언
let num4: number = `<number>`myNum;
let num5: number = myNum `as number`;
```
