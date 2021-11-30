# 8장 제어문

- `제어문(control flow statement)`은 조건에 따라 `코드 블록을 실행(조건문)`하거나 `반복 실행(반복문)`할 때 사용한다.

## 블록문

- `블록문(block statement/compound statement)`은 0개 이상의 문을 중괄호로 묶는 것으로, 코드 블록또는 블록이라고 부른다.

```js
// 블록문
{
    var foo = 10;
}

// 제어문
var x = 1;
if (x < 10) {
    x++;
}

// 함수 선언문
function sum(a,b) {
    return a + b;
}
```

## 조건문

- `조건문(conditional statement)`은 주어진 `조건식(conditional expression)`의 평가 결과에 따라 코드 블록(블록문)의 실행을 결정한다.
- 조건식은 `불리언 값으로 평가될 수 있는 표현식`이다.

### if...else 문

```js
if(조건식1){
    // 조건식1이 참이면 이 코드 블록이 실행된다.
} else if (조건식2){
    // 조건식2가 참이면 이 코드 블록이 실행된다.
} else{
    // 조건식1 과 조건식2가 모두 거짓이면 이 코드 블록이 실행된다.
}
```

### switch 문

```js
switch(표현식) {
    case 표현식1:
    // switch 문의 표현식과 표현식1이 일치하면 실행될 문;
    break;
    case 표현식2:
    // switch 문의 표현식과 표현식2이 일치하면 실행될 문;
    break;
    default:
    // switch 문의 표현식과 일치하는 case문이 없을때 실행될 문;
}
```
> `break` 키워드로 구성된 break 문은 코드 블록에서 탈출하는 역할을 한다. break문이 없다면 case문의 표현식과 일치하지 않더라도 실행 흐름이 다음 case문으로 연이 이동한다.

## 반복문

- `반복문(loop statement)`은 조건식의 평가 결과가 참인 경우 코드 블록을 실행한다. 그 후 조건식을 다시 평가하여 여전히 참인 경우 코드 블록을 다시 실행한다.

### for 문

- `for문`은 조건식이 `거짓`으로 평가될 때까지 코드 블록을 `반복 실행`한다. 가장 일반적으로 사용되는 for문의 형태는 다음과 같다.

```js
 for(변수 선언문 또는 할당문; 조건식; 증감식) {
     조건식이 참인 경우 반복 실행될 문;
 }
```

### while 문

- `while문`은 주어진 조건식의 평가 결과가 `참`이면 코드 블록을 `계속해서 반복 실행`한다.
    > for 문은 반복 횟수가 명확할때 주로 사용하고 while문은 반복횟수가 불명확할 때 주로 사용한다.

```js
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while(count < 3){
    console.log(count); // 0 1 2
    count ++;
}
```

### do...while 문

- `do...while 문`은 코드 블록을 `먼저 실행`하고 조건식을 평가한다. 따라서 코드 블록은 `무조건 한 번 이상` 실행된다.

```js
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
do {
    console.log(count); // 0 1 2
    count ++;
} while (count <3);
```

## break 문

- `break 문`은 레이블문, 반복문, switch문의 코드 블록을 탈출한다. 그 외의 break문을 사용하면 `SyntaxError(문법에러)`가 발생한다.

```js
if(true){
    break; // SyntaxError
}
```

- 중첩된 for문의 내부 for문에서 break문을 실행하면 내부 for문을 탈출하여 외부 for문으로 진입한다. 이때 내부 for문이 아닌 외부 for문을 탈출하려면 레이블 문을 사용한다.

```js
// outer라는 식별자가 붙은 레이블 for문
outer: for(var i = 0; i< 3; i++){
    for(var j = 0; j<3 ; j++){
        // i + j === 3 이면 outer라는 식별자가 붙은 레이블 for문을 탈출한다.
        if(i + j === 3) break outer;
        console.log(`inner[${i}, ${j}]`);
    }
}
console.log("Done!");
```

> 위와 같은 사용법은 가독성이 나빠지고 오류를 발생시킬 가능성이 높아지기 때문에 권장하지 않는다.

## continue 문

- `continue 문`은 반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 실행 흐름을 이동시킨다. break문처럼 반복문을 탈출하지는 않는다.

```js
var string = "Hello world";
var search = "l";
var count = 0 ;

// 문자열은 유사 배열이므로 for문으로 순회할 수 있다.
for(var i = 0; i < string.length; i ++){
    // "l"이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
    if(string[i] !== search) continue;
    count++; // continue 문이 실행되면 이 문은 실행되지 않는다.
}

console.log(count); // 3

// 참고로 String.prototype.match 메서드를 사용해도 같은 동작을 한다.
const regexp = new RegExp(search, "g");
console.log(string.match(regexp).lenght) //3
```