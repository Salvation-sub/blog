(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{459:function(t,s,a){"use strict";a.r(s);var n=a(54),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"rxjs는-무엇인가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rxjs는-무엇인가"}},[t._v("#")]),t._v(" RxJS는 무엇인가?")]),t._v(" "),a("p",[t._v("일단 RxJs가 무엇인지를 설명하기에 앞서 두 가지 용어를 먼저 이해할 필요가 있다.")]),t._v(" "),a("ul",[a("li",[t._v("Reactive Programming (RP)")]),t._v(" "),a("li",[t._v("Functional Reactive Programming (FRP)")]),t._v(" "),a("li",[t._v("Reactive Extensions (Rx)")])]),t._v(" "),a("h1",{attrs:{id:"reactive-programming-rp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reactive-programming-rp"}},[t._v("#")]),t._v(" Reactive Programming (RP)")]),t._v(" "),a("blockquote",[a("p",[t._v("Reactive programming is programming with asynchronous data streams")])]),t._v(" "),a("p",[t._v("리액티브 프로그래밍은 비동기적 데이터 흐름을 처리하는 프로그래밍이다. 즉, 핵심은 모든 것을 비동기적인 데이터의 스트림으로 간주하고 , 옵저버(Observer) 디자인 패턴을 활용해서 비동기 이벤트를 처리하는 것이다.")]),t._v(" "),a("h2",{attrs:{id:"async와-observer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async와-observer"}},[t._v("#")]),t._v(" Async와 Observer")]),t._v(" "),a("p",[a("strong",[t._v("비동기(Asynchronous)")]),t._v(" 이벤트는 다양한 작업들이 수행되는 동시에 어떠한 작업이 비동기적으로 완료되는 것을 말한다. 웹이나 앱에서 발생하는 비동기적인 이벤트의 종류는 굉장히 다양한 편이다. 예를 들면, 유저가 앱에 로그인, 이미지 조회, 비밀번호 변경 같이 유저의 인터페이스를 방해하지 않고 뒷단에서 데이터를 가져오는 작업들을 비동기적인 작업이라고 표현할 수 있다.")]),t._v(" "),a("p",[t._v("데이터 스트림(Stream)이란 시간에 따라 정렬된 진행 중인 이벤트 흐름이다. Async한 데이터 스트림을 아래처럼 표현 할 수 있다.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://images.velog.io/images/kyman19940214/post/fb39b823-a64c-45aa-800f-b27feea25e51/rx.png",alt:""}})]),t._v(" "),a("p",[t._v("Reactive Programming은 유저가 이벤트를 발생시킬 때 마다 바로 반응하기 위해 항상 유저의 이벤트를 **관찰(Observe)**해야하고 값이 변할때마다 데이터 스트림에 그 값을 넣어준다. 이러한 관찰 패턴을 "),a("strong",[t._v("Observer 디자인 패턴")]),t._v("이라고 부른다.")]),t._v(" "),a("h1",{attrs:{id:"functional-reactive-programming-frp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functional-reactive-programming-frp"}},[t._v("#")]),t._v(" Functional Reactive Programming(FRP)")]),t._v(" "),a("blockquote",[a("p",[t._v("Functional reactive programming is a programming paradigm for reactive programming using the building blocks of functional programming")])]),t._v(" "),a("p",[t._v("Functional Reactive Programming을 간단하게 말하자면 앞서 배운 RP의 개념을 함수형프로그래밍을 사용해 구현하는 것을 말한다. 아래 배열의 공백을 삭제하고 모든 알파벳을 대문자로 바꾸는 프로그램을 예제로 보겠다.")]),t._v(" "),a("h3",{attrs:{id:"명령형-프로그래밍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#명령형-프로그래밍"}},[t._v("#")]),t._v(" 명령형 프로그래밍")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("log")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("o")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" words "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"car "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" plain "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" table"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" processedWords "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" words"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  processedWords"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("words"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trim")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toUpperCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("processedWords"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"함수형-프로그래밍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#함수형-프로그래밍"}},[t._v("#")]),t._v(" 함수형 프로그래밍")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("log")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("o")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" words "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"car "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" plain "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" table"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("pipeAll")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("fns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n    fns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("trim")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trim")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("toUpperCase")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toUpperCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" trimAndUpperCase "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipeAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("trim"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" toUpperCase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" processedWords "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" words"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("trimAndUpperCase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("processedWords"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("위에 코드를 보면 명령형 프로그래밍 코드가 좀 더 짧고 간결해 보일 수 있다. 하지만 함수형 프로그래밍은 가독성 면에서 뛰어나고 또한 만들어 놓은 함수들을 재사용할 수 있다는 장점이 있다. 이러한 장점을 가진 함수형 프로그래밍을 RP와 함께 사용하게 되면 더욱 더 강력한 도구가 될 수 있다.")]),t._v(" "),a("h1",{attrs:{id:"reactive-extensions-rx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reactive-extensions-rx"}},[t._v("#")]),t._v(" Reactive Extensions (Rx)")]),t._v(" "),a("blockquote",[a("p",[t._v("An API for asynchronous programming with obervable streams")])]),t._v(" "),a("p",[t._v("Reactive Extenstions는 한마디로 말해 관측 가능한 스트림을 이용한 비동기 프로그래밍 용 API이다. 즉, Rx는 앞에서 설명한 RP 나 FRP 같은 프로그래밍 패러다임이 아닌 API이다.")]),t._v(" "),a("p",[t._v("Rx는 RP의 비동기 데이터 스트림을 활용해 지속적으로 관찰하고 변화에 따른 동작을 수행하는데 그치지 않고 debounce, throttling 같은 함수를 이용할 수 있다.")]),t._v(" "),a("h2",{attrs:{id:"참고"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#참고"}},[t._v("#")]),t._v(" 참고")]),t._v(" "),a("ul",[a("li",[t._v("https://brunch.co.kr/@oemilk/79#comment")]),t._v(" "),a("li",[t._v("https://m.blog.naver.com/jdub7138/220983291803")]),t._v(" "),a("li",[t._v("https://itnext.io/functional-reactive-programming-explained-in-a-simple-way-in-javascript-yes-in-a-simple-way-925b14cddf75")])])])}),[],!1,null,null,null);s.default=r.exports}}]);