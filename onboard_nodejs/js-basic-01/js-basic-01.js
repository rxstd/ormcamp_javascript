// ## JavaScript 기본 데이터 형식

// ## 변수에는 숫자와 문자. $, _만 사용할 수 있다.
// ## 변수명은 숫자로 시작할 수 없다.
// ## 변수명은 대소문자를 구분한다.
// ## 변수명은 예약어를 사용할 수 없다.
// ## 변수명 작명시 const를 사용하여 상수를 선언할때는 가급적 대문자와 언더바를 활용하여 작성한다.
// ## 이는 타 개발자와의 협업시에 상수임을 명시적으로 표현하기 위함이다.

// ## 변수 종류 정리.
// 1. var : 함수 스코프 변수
// 2. let : 블록 스코프 변수
// 3. const : 블록 스코프 상수

// ## let을 사용한 데이터형 정리.
// ## 1. number : 숫자형
// ## 2. string : 문자형
// ## 3. boolean : 불린형
// ## 4. array : 배열
// ## 5. object : 객체
// ## 6. function : 함수
// ## 7. undefined : 정의되지 않은 데이터형

// ## number
let integer = 10; // ## 정수
let double = 10.12; // ## 실수
let float = 10.12; // ## 실수
let negative = -20; // ## 음의 정수

// ## string
let string = "Hello"; // ## 문자열

// ## boolean
let isTrue = true; // ## 참

// ## array
let codeLangs = ["NodeJS", "Python", "PHP"]; // ## 배열

// ## object
let user = {
  userName: "Evans",
  userAge: 25,
  isMale: true,
}; // ## 객체 - json과 동일한 문법

// ## function
function sum(a, b) {
  return a + b;
} // ## 함수

// ## typeof 연산자를 사용하여 데이터형을 확인할 수 있다.
console.log("integer의 데이터형은", typeof integer);
console.log("double의 데이터형은", typeof double);
console.log("float의 데이터형은", typeof float);
console.log("negative의 데이터형은", typeof negative);
console.log("string의 데이터형은", typeof string);
console.log("isTrue의 데이터형은", typeof isTrue);
console.log("codeLangs의 데이터형은", typeof codeLangs);
console.log("user의 데이터형은", typeof user);
console.log("sum의 데이터형은", typeof sum);

// ## typeof null의 데이터형은 object이다.
// ## 이는 자바스크립트의 초기 설계상 오류로 인해 발생한 버그이다.

// ## 데이터형 변환
// ## 1. String() : 문자형으로 변환
// ## 2. Number() : 숫자형으로 변환
// ## 3. Boolean() : 불린형으로 변환
// ## 4. parseInt() : 정수형으로 변환
// ## 5. parseFloat() : 실수형으로 변환

// ## String() : 문자형으로 변환
let testVariable01 = 10;
let testVariableString = String(testVariable01);

console.log("testVariable02의 데이터형은", typeof testVariable01);
console.log("testVariableString의 데이터형은", typeof testVariableString);

// ## Number() : 숫자형으로 변환
let testVariable02 = "1234";
let testVariableNumber = Number(testVariable02);

console.log("testVariable02의 데이터형은", typeof testVariable02);
console.log("testVariableNumber의 데이터형은", typeof testVariableNumber);

// ## Boolean() : 불린형으로 변환
let testVariable03 = "1234";
let testVariableBoolean = Boolean(testVariable03);

console.log("testVariable03의 데이터형은", typeof testVariable03);
console.log("testVariableBoolean의 데이터형은", typeof testVariableBoolean);

// ## parseInt() : 정수형으로 변환
let testVariable04 = "1234";
let testVariableParseInt = parseInt(testVariable04);

console.log("testVariable04의 데이터형은", typeof testVariable04);
console.log("testVariableParseInt의 데이터형은", typeof testVariableParseInt);

// ## parseFloat() : 실수형으로 변환
let testVariable05 = "1234.5678";
let testVariableParseFloat = parseFloat(testVariable05);

console.log("testVariable05의 데이터형은", typeof testVariable05);
console.log(
  "testVariableParseFloat의 데이터형은",
  typeof testVariableParseFloat
);

// ## number 데이터형의 연산
let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;

// ## 더하기 연산. + 연산자를 사용한다.
let sumNum = num1 + num2;
console.log("더하기 연산 결과", sumNum);

// ## 빼기 연산. - 연산자를 사용한다.
let minusNum = num3 - num4;
console.log("빼기 연산 결과", minusNum);

// ## 곱하기 연산. * 연산자를 사용한다.
let multiplyNum = num1 * num2;
console.log("곱하기 연산 결과", multiplyNum);

// ## 나누기 연산. / 연산자를 사용한다.
let divideNum = num3 / num4;
console.log("나누기 연산 결과", divideNum);

// ## 나머지 연산. % 연산자를 사용한다.
let remainderNum = num1 % num2;
console.log("나머지 연산 결과", remainderNum);

// ## 증감 연산. ++, -- 연산자를 사용한다. 이는 1씩 증가하거나 감소하는 연산자이다.
let increaseNum = num1++; // ++연산자는 대표적으로 for문에서 사용된다. for (let i = 0; i < 10; i++) { ~~ }
console.log("증감 연산 결과", increaseNum);

let decreaseNum = num2--;
console.log("증감 연산 결과", decreaseNum);

// ## backtick(`)을 사용한 문자열 표현
// ## ES6에서 도입된 backtick(`)은 문자열 표현을 위한 새로운 기능이다.
// ## 기존에는 문자열을 표현하기 위해 작은따옴표(')와 큰따옴표(")를 사용했다.
// ## 이에 문자열 내에 변수를 넣으려면 아래 코드와 같이 그때그때 불편하게 이어붙여야 했다.
let myName = "Evans";
let myAge = 25;
let myInfo00 = "My name is " + myName + ". I'm " + myAge + " years old.";

// ## backtick(`)을 사용하면 아래와 같이 편리하게 문자열을 표현할 수 있다.
let myInfo01 = `My name is ${myName}. I'm ${myAge} years old.`;

console.log("기존 문자열 표현", myInfo00);
console.log("backtick을 사용한 ES6 문자열 표현", myInfo01);

// ## backtick(`)을 사용하면 아래와 같이 여러줄의 문자열을 표현할 수 있다.
let myInfo02 = `My name is ${myName}.
I'm ${myAge} years old.
I'm studying JavaScript.`;

console.log("여러줄의 문자열 표현", myInfo02);

// 문자열과 숫자를 더하면 전체적으로 문자열로 변환된다.
let stringNum = "10" + 20;
console.log("문자열과 숫자를 더한 결과", stringNum); // 결과 : 1020

let numString = 10 + "20";
console.log("숫자와 문자열을 더한 결과", numString); // 결과 : 1020

// ## prompt()를 사용한 사용자 입력
// ## prompt()는 사용자로부터 입력을 받는 함수이다.
// ## prompt()는 웹브라우저에서만 사용할 수 있다. NodeJS에서는 사용할 수 없다.
// ## 리턴 데이터형은 string이다.
// ## 그냥 취소 버튼을 누르면 null을 리턴한다.
let userName = prompt("이름을 입력해주세요.");
console.log("사용자 입력", userName);

// ## confirm()을 사용한 사용자 확인
// ## confirm()은 사용자로부터 확인을 받는 함수이다. ~~ 하시겠습니까? [확인] [취소] 버튼이 있는 창이 뜬다.
// ## confirm()은 웹브라우저에서만 사용할 수 있다. NodeJS에서는 사용할 수 없다.
// ## 리턴 데이터형은 boolean이다. [확인] 버튼을 누르면 true, [취소] 버튼을 누르면 false를 리턴한다.
let isDelete = confirm("정말 삭제하시겠습니까?");
console.log("사용자 확인", isDelete);

// ## JavaScript 자동 형변환
// ## 자바스크립트는 데이터형을 선언하지 않는다.
// ## 변수에 데이터를 할당할 때 데이터형이 자동으로 변환된다.
// ## 이를 자동 형변환이라고 한다.
let autoChangeNum = 10 + "20";
console.log("자동 형변환 결과", autoChangeNum); // 결과 : 1020

// ## 자동 형변환은 아래와 같은 경우에도 발생한다.
let autoChangeNum01 = 10 + 20 + "30"; // Number + Number + String
console.log("자동 형변환 결과", autoChangeNum01); // 결과 : 3030

let autoChangeNum02 = 10 + "20" + 30; // Number + String + Number
console.log("자동 형변환 결과", autoChangeNum02); // 결과 : 102030

let autoChangeNum03 = 10 + true; // Number + Boolean (true는 1로 자동 형변환된다.)
console.log("자동 형변환 결과", autoChangeNum03); // 결과 : 11

let autoChangeNum04 = 10 + false; // Number + Boolean (false는 0으로 자동 형변환된다.)
console.log("자동 형변환 결과", autoChangeNum04); // 결과 : 10

let autoChangeNum05 = 10 + null; // Number + null
console.log("자동 형변환 결과", autoChangeNum05); // 결과 : 10

let autoChangeNum06 = 10 + undefined; // Number + undefined
console.log("자동 형변환 결과", autoChangeNum06); // 결과 : NaN

let autoChangeNum07 = 10 + NaN; // Number + NaN
console.log("자동 형변환 결과", autoChangeNum07); // 결과 : NaN

let autoChangeNum08 = "6" / "2"; // String / String
console.log("자동 형변환 결과", autoChangeNum08); // 결과 : 3

let autoChangeNum09 = 3 + ""; // Number + String
console.log("자동 형변환 결과", autoChangeNum09); // 결과 : 3

let autoChangeNum10 = +true; // +true는 true를 숫자형으로 변환한다.
console.log("자동 형변환 결과", autoChangeNum10); // 결과 : 1

// ## Boolean 형변환 테스트
// ## Boolean()은 아래와 같은 경우에 false를 리턴한다.
// ## 1. false
// ## 2. 0 (숫자 0. 문자열 "0" true를 리턴한다.)
// ## 3. "" (빈 문자열. 문자열 "false"는 true를 리턴한다. 띄어쓰기만 들어가도 true를 리턴한다.)
// ## 4. null
// ## 5. undefined
// ## 6. NaN
// ## 그 외의 경우에는 true를 리턴한다.
let changeBoolean01 = Boolean(false);
console.log("Boolean 형변환 결과 - false", changeBoolean01); // 결과 : false

let changeBoolean02 = Boolean(0);
console.log("Boolean 형변환 결과 - 0", changeBoolean02); // 결과 : false

let changeBoolean03 = Boolean("");
console.log(`Boolean 형변환 결과 - ""`, changeBoolean03); // 결과 : false

let changeBoolean04 = Boolean(null);
console.log("Boolean 형변환 결과 - null", changeBoolean04); // 결과 : false

let changeBoolean05 = Boolean(undefined);
console.log("Boolean 형변환 결과 - undefined", changeBoolean05); // 결과 : false

let changeBoolean06 = Boolean(NaN);
console.log("Boolean 형변환 결과 - NaN", changeBoolean06); // 결과 : false

let changeBoolean07 = Boolean(true);
console.log("Boolean 형변환 결과 - true", changeBoolean07); // 결과 : true

let changeBoolean08 = Boolean(1);
console.log("Boolean 형변환 결과 - 1", changeBoolean08); // 결과 : true

let changeBoolean09 = Boolean("hello");
console.log(`Boolean 형변환 결과 - "hello"`, changeBoolean09); // 결과 : true

let changeBoolean10 = Boolean({});
console.log("Boolean 형변환 결과 - {}", changeBoolean10); // 결과 : true

let changeBoolean11 = Boolean([]);
console.log("Boolean 형변환 결과 - []", changeBoolean11); // 결과 : true

// ## +=, -=, *=, /=, %= 연산자
// ## += 연산자는 아래와 같이 사용한다.
let plusEqualNum = 10;
plusEqualNum += 20;
console.log("+= 연산자 결과", plusEqualNum); // 결과 : 30

// ## -= 연산자는 아래와 같이 사용한다.
let minusEqualNum = 10;
minusEqualNum -= 20;
console.log("-= 연산자 결과", minusEqualNum); // 결과 : -10

// ## *= 연산자는 아래와 같이 사용한다.
let multiplyEqualNum = 10;
multiplyEqualNum *= 20;
console.log("*= 연산자 결과", multiplyEqualNum); // 결과 : 200

// ## /= 연산자는 아래와 같이 사용한다.
let divideEqualNum = 10;
divideEqualNum /= 20;
console.log("/= 연산자 결과", divideEqualNum); // 결과 : 0.5

// ## %= 연산자는 아래와 같이 사용한다.
let remainderEqualNum = 10;
remainderEqualNum %= 20;
console.log("%= 연산자 결과", remainderEqualNum); // 결과 : 10

// ## == 연산자
// ## == 연산자는 두 값이 같으면 true, 다르면 false를 리턴한다.
// ## == 연산자는 아래와 같이 사용한다.
let equalNum01 = 10;
let equalNum02 = "10"; // String 데이터형이지만 == 연산자는 자동 형변환을 하기 때문에 true를 리턴한다.

console.log("== 연산자 결과", equalNum01 == equalNum02); // 결과 : true

// ## ++ 연산자에 대한 추가 내용
// ## 일반적인 ++ 연산자는 변수의 값을 1 증가시킨다.
// ## 하지만 ++ 연산자를 변수 앞에 붙이면 먼저 증가시키고 값을 리턴한다.
let plusPlusNum01 = 10;
let plusPlusNumResult00 = plusPlusNum01++;
let plusPlusNumResult01 = ++plusPlusNum01;

console.log("후행 ++ 연산자 결과", plusPlusNumResult00); // 결과 : 10
console.log("선행 ++ 연산자 결과", plusPlusNumResult01); // 결과 : 12
// ## 예상치 못하게 버그가 많이 발생하는 부분이므로 꼭 숙지하고 있어야 한다.

// ## 비교 연산자 정리
// ## 1. < : 작다
// ## 2. > : 크다
// ## 3. <= : 작거나 같다
// ## 4. >= : 크거나 같다
// ## 5. == : 같다
// ## 6. != : 같지 않다

// ## 비교 연산자는 아래와 같이 사용한다.
let compareNum01 = 10;
let compareNum02 = 20;

console.log("작다", compareNum01 < compareNum02); // 결과 : true
console.log("크다", compareNum01 > compareNum02); // 결과 : false
console.log("작거나 같다", compareNum01 <= compareNum02); // 결과 : true
console.log("크거나 같다", compareNum01 >= compareNum02); // 결과 : false
console.log("같다", compareNum01 == compareNum02); // 결과 : false
console.log("같지 않다", compareNum01 != compareNum02); // 결과 : true

// ## ==와 ===의 차이
// ## == 연산자는 두 값이 같으면 true, 다르면 false를 리턴한다. (자동 형변환 O)
// ## != 연산자는 두 값이 다르면 true, 같으면 false를 리턴한다. (자동 형변환 O)

let compareVar01 = "10";
let compareVar02 = 10;

console.log("같다", compareVar01 == compareVar02); // 결과 : true
console.log("같지 않다", compareVar01 != compareVar02); // 결과 : false

// ## === 연산자는 두 값이 같으면 true, 다르면 false를 리턴한다. (자동 형변환 X)
// ## !== 연산자는 두 값이 다르면 true, 같으면 false를 리턴한다. (자동 형변환 X)

console.log("같다", compareVar01 === compareVar02); // 결과 : false
console.log("같지 않다", compareVar01 !== compareVar02); // 결과 : true

// ## 데이터는 같으나 데이터형이 달라 ==과 ===이 정반대의 결과를 리턴하는것을 볼 수 있다.
// ## 이는 == 연산자는 자동 형변환이 되기 때문이다.
// ## !=와 !==도 마찬가지이다.

// ## if문에 대한 이해
// ## if문은 아래와 같이 사용한다.
let ifNum01 = 10;
let ifNum02 = 20;

if (ifNum01 < ifNum02) {
  console.log("if문 실행");
}

// ## if 문 내의 값은 자동으로 boolean 형변환이 된다.
// ## 따라서 위에 정리한 데이터형의 boolean 변환 내용을 잘 숙지해야 if문을 수월하게 사용할 수 있다.

// ## if ~ else문에 대한 이해
// ## if ~ else문은 아래와 같이 사용한다.
let ifElseNum01 = 10;
let ifElseNum02 = 20;

if (ifElseNum01 > ifElseNum02) {
  console.log("if문 실행");
} else {
  console.log("else문 실행");
}

// ## 이 코드를 if문으로만 작성하면 아래와 같다.
if (ifElseNum01 > ifElseNum02) {
  console.log("if문 실행");
}

if (ifElseNum01 <= ifElseNum02) {
  console.log("else문 실행");
}

// ## if ~ else if ~ else문에 대한 이해
// ## if ~ else if ~ else문은 아래와 같이 사용한다.
if (ifElseNum01 > ifElseNum02) {
  // 크다
  console.log("if문 실행");
} else if (ifElseNum01 < ifElseNum02) {
  // 작다
  console.log("else if문 실행");
} else {
  // 크다와 작다가 둘다 아니기 때문에 같다로 판단된다.
  console.log("else문 실행");
}

// ## 논리 연산자 정리
// ## 1. && : AND 연산자
// ## 2. || : OR 연산자
// ## 3. ! : NOT 연산자

// ## AND 연산자는 아래와 같이 사용한다.
let andNum01 = 10;
let andNum02 = 20;

if (andNum01 > 5 && andNum02 > 10) {
  console.log("AND 연산자 실행");
}

// ## OR 연산자는 아래와 같이 사용한다.
let orNum01 = 10;
let orNum02 = 20;

if (orNum01 > 5 || orNum02 > 10) {
  console.log("OR 연산자 실행");
}

// ## NOT 연산자는 아래와 같이 사용한다.
let notNum01 = 10;
let notNum02 = 20;

if (!(notNum01 > 5)) {
  console.log("NOT 연산자 실행");
}

let guestCount = parseInt(prompt("몇명이서 오셨나요?"));
let guestSex = prompt("성별을 입력해주세요. 여성이면 female, 남성이면 male");
let guestAge = parseInt(prompt("나이를 입력해주세요."));

if (guestCount == 1 && guestAge > 19 && guestSex == "Male") {
  console.log("혼자왔네요 ㅋㅋ 혼자 온 남성손님은 만원을 내세요.");
} else {
  console.log("나머지는 영화 그냥 쏜다쏜다쏜다!! 꽁짜로보세요.");
}
