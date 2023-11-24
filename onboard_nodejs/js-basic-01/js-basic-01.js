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
let fruits = ["NodeJS", "Python", "PHP"]; // ## 배열

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
console.log("fruits의 데이터형은", typeof fruits);
console.log("user의 데이터형은", typeof user);
console.log("sum의 데이터형은", typeof sum);

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
