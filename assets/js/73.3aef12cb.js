(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{471:function(t,s,a){"use strict";a.r(s);var n=a(54),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_9장-타입-변환과-단축-평가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9장-타입-변환과-단축-평가"}},[t._v("#")]),t._v(" 9장 타입 변환과 단축 평가")]),t._v(" "),a("h2",{attrs:{id:"타입-변환이란"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#타입-변환이란"}},[t._v("#")]),t._v(" 타입 변환이란?")]),t._v(" "),a("ul",[a("li",[t._v("자바스크립트의 모든 값을 타입이 있다. 개발자가 의도적으로 값의 타입을 변환하는 것을 "),a("code",[t._v("명시적 타입 변환(explicit coercion)")]),t._v(" 또는 "),a("code",[t._v("타입 캐스팅(type casting)")]),t._v("이라 한다.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 명시적 타입 변환")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 숫자를 문자열로 타입 캐스팅한다.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// string 10")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x 변수의 값이 변경된 것은 아니다.")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// number 10")]),t._v("\n")])])]),a("ul",[a("li",[t._v("개발자의 의도와는 상관없이 표현식을 평가하는 도중 자바스크립트 엔진으로 인해 자동으로 변환되는 것을 "),a("code",[t._v("암묵적 타입 변환(implicit coercion)")]),t._v("또는 "),a("code",[t._v("타입 강제 변환(type coercion)")]),t._v("이라고 한다.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 암묵적 타입 변환")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// string 10")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x 변수의 값이 변경된 것은 아니다.")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// number 10")]),t._v("\n")])])]),a("h2",{attrs:{id:"암묵적-타입-변환"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#암묵적-타입-변환"}},[t._v("#")]),t._v(" 암묵적 타입 변환")]),t._v(" "),a("h3",{attrs:{id:"문자열-타입으로-변환"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#문자열-타입으로-변환"}},[t._v("#")]),t._v(" 문자열 타입으로 변환")]),t._v(" "),a("ul",[a("li",[t._v("자바스크립트 엔진은 "),a("code",[t._v("문자열 연결 연산자")]),t._v(" 표현식을 평가하기 위해 문자열 연결 연산자의 "),a("em",[t._v("피연산자 중에서 문자열 타입이 아닌 피연산자를 문자열 타입으로 암묵적 타입 변환한다")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 불리언 타입")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'true'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 객체 타입")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "[object Object]"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "10,20"')]),t._v("\n")])])]),a("h3",{attrs:{id:"숫자-타입으로-변환"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#숫자-타입으로-변환"}},[t._v("#")]),t._v(" 숫자 타입으로 변환")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"one"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n")])])]),a("ul",[a("li",[t._v("자바스크립트 엔진은 산술 연산자 표현식을 평가하기 위해 "),a("em",[t._v("산술 연산자의 피연산자 중에서 숫자 타입이 아닌 피연사자를 숫자 타입으로 암묵적 타입 변환한다.")]),t._v(" 이때 숫자타입으로 변환할 수 없는 표현식은 "),a("strong",[t._v("NaN")]),t._v("이라는 값으로 평가 된다.\n"),a("blockquote",[a("p",[t._v("빈 문자열('') , 빈 배열([]), null, false 는 0으로 , true는 1로 변환된다. 객체와 빈 배열이 아닌 배열, undefined는 변환되지 않아 NaN이 된다.")])])])]),t._v(" "),a("h3",{attrs:{id:"불리언-타입으로-변환"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#불리언-타입으로-변환"}},[t._v("#")]),t._v(" 불리언 타입으로 변환")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy값 또는 Falsy값으로 구분한다. 즉, "),a("em",[t._v("제어문의 조건식과 같이 불리언 값으로 평가되어야 할 문맥에서 Truthy값은 true, Falsy값은 false로 암묵적 타입 변환된다")]),t._v(".\n"),a("blockquote",[a("p",[a("code",[t._v("Falsy")]),t._v("로 평가되는 값들 : false, undefined, null, 0, -0, NaN , ' '(빈 문자열)")])])])]),t._v(" "),a("h2",{attrs:{id:"명시적-타입-변환"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#명시적-타입-변환"}},[t._v("#")]),t._v(" 명시적 타입 변환")]),t._v(" "),a("h3",{attrs:{id:"문자열-타입으로-변환-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#문자열-타입으로-변환-2"}},[t._v("#")]),t._v(" 문자열 타입으로 변환")]),t._v(" "),a("ul",[a("li",[t._v("문자열 타입이 아닌 값을 문자열 타입으로 변환하는 방법은 다음과 같다.\n"),a("ol",[a("li",[t._v("String생성자 함수를 new연산자 없이 호출하는 방법")]),t._v(" "),a("li",[t._v("Object.prototype.toString 메서드를 사용하는 방법")]),t._v(" "),a("li",[t._v("문자열 연결 연산자를 이용하는 방법")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 숫자타입 -> 문자열 타입")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "1"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 숫자타입 -> 문자열 타입")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "1"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "1"')]),t._v("\n")])])]),a("h3",{attrs:{id:"숫자-타입으로-변환-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#숫자-타입으로-변환-2"}},[t._v("#")]),t._v(" 숫자 타입으로 변환")]),t._v(" "),a("ul",[a("li",[t._v("숫자 타입이 아닌 값을 숫자 타입으로 변환하는 방법은 다음과 같다.\n"),a("ol",[a("li",[t._v("Number 생성자 함수를 new 연산자 없이 호출하는 방법")]),t._v(" "),a("li",[t._v("parseInt, parseFloat 함수를 사용하는 방법(문자열만 숫자 타입으로 변환 가능)")]),t._v(" "),a("li",[a("ul",[a("li",[t._v("단항 산술 연산자를 이용하는 방법")])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("산술 연산자를 이용하는 방법")])])])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n")])])]),a("h3",{attrs:{id:"불리언-타입-변환"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#불리언-타입-변환"}},[t._v("#")]),t._v(" 불리언 타입 변환")]),t._v(" "),a("ul",[a("li",[t._v("불리언 타입이 아닌 값을 불리언 타입으로 변환하는 방법은 다음과 같다.\n"),a("ol",[a("li",[t._v("Boolean 생성자 함수를 new 연산자 없이 호출하는 방법")]),t._v(" "),a("li",[t._v("!부정 논리 연산자를 두번 사용하는 방법")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("l "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),a("h2",{attrs:{id:"단축-평가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#단축-평가"}},[t._v("#")]),t._v(" 단축 평가")]),t._v(" "),a("h3",{attrs:{id:"논리-연산자를-사용한-단축-평가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#논리-연산자를-사용한-단축-평가"}},[t._v("#")]),t._v(" 논리 연산자를 사용한 단축 평가")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("논리합(||)")]),t._v(" 또는 "),a("code",[t._v("논리곱(&&)")]),t._v(" 연산자 표현식은 언제나 2개의 피연산자 중 "),a("em",[t._v("어느 한쪽으로 평가된다")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Cat'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Dog'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Dog")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("논리곱(&&) 연산자는 두 개의 피연산자가 모두 true로 평가 될 때 true를 반환한다. "),a("strong",[t._v("논리곱 연산자는 좌항에서 우항으로 평가가 진행된다")]),t._v(". 즉, 논리 연산의 결과를 결정하는 두번째 피연산자, Dog를 반환한다.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Cat'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Dog'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Cat")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("논리합 연산자는 두 개의 피연산자중 하나만 true로 평가되어도 true를 반환한다. 즉,"),a("strong",[t._v("첫 번째 피연산자인 Cat을 반환하게 된다")]),t._v(".")])]),t._v(" "),a("h4",{attrs:{id:"객체를-가리키기를-기대하는-변수가-null또는-undefined가-아닌지-확인하고-프로퍼티를-참조할-때"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#객체를-가리키기를-기대하는-변수가-null또는-undefined가-아닌지-확인하고-프로퍼티를-참조할-때"}},[t._v("#")]),t._v(" 객체를 가리키기를 기대하는 변수가 null또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" elem "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// elem이 null 이나 undefined와 같이 Falsy 값이면 elem으로 평가되고")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// elem이 Truthy 값이면 elem.value로 평가된다.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" elem "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" elem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"함수-매개변수에-기본값을-설정할-때"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#함수-매개변수에-기본값을-설정할-때"}},[t._v("#")]),t._v(" 함수 매개변수에 기본값을 설정할 때")]),t._v(" "),a("ul",[a("li",[t._v("함수를 호출할 때 인수를 전달하지 않으면 매개변수에는 undefined가 할당된다. 이때 단축 평가를 사용해 매개변수의 기본값을 설정하면 undefined로 인해 발생할 수 있는 에러를 방지할 수 있다.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 단축 평가를 사용한 매개변수의 기본값 설정")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStringLength")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStringLength")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStringLength")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ES6의 매개변수의 기본값 설정")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStringLength")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStringLength")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStringLength")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2")]),t._v("\n")])])]),a("h3",{attrs:{id:"옵셔널-체이닝-연산자"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#옵셔널-체이닝-연산자"}},[t._v("#")]),t._v(" 옵셔널 체이닝 연산자")]),t._v(" "),a("ul",[a("li",[t._v("ES11에서 도입된 "),a("code",[t._v("옵셔널 체이닝 연산자 (?.)")]),t._v("는 "),a("strong",[t._v("좌항의 피연산자가 null또는 undefined인 경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" elem "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" elem"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])])]),a("h3",{attrs:{id:"null-병합-연산자"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#null-병합-연산자"}},[t._v("#")]),t._v(" null 병합 연산자")]),t._v(" "),a("ul",[a("li",[t._v("ES11에서 "),a("code",[t._v("도입된 null 병합 연산자 (??)")]),t._v("는 좌항의 피연산자가 null 또는 undefined 인 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연사자를 반환한다. null 병합 연산자 ??는 변수에 "),a("strong",[t._v("기본값을 설정할 때 유용하다")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 좌항의 피연산자가 null또는 undefined이면 우항의 피연산자를 반환하고,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 그렇지 않으면 좌항의 피연산자를 반환한다.")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("??")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"default string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "default string"')]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("논리 연산자(||)")]),t._v(" 와 "),a("code",[t._v("병합연산자(??)")]),t._v(" 의 차이점은 "),a("em",[t._v('논리연산자는 (false, undefined, null, 0 , -0, NaN, " ") 를 다 Falsy')]),t._v("값으로 처리한다. "),a("strong",[t._v("병합연산자 같은 경우는 오직 null또는 undefined만 Falsy값으로 처리한다")]),t._v(".")])])])}),[],!1,null,null,null);s.default=e.exports}}]);