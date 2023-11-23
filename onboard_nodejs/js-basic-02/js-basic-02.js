var userName = "Evans Benedict";
var userAge = 25;
var price = 5000;
var isMale = true;
var isFemale = false;

// ## 기본배송비 - 변경이 안되도록 하고싶다.
var baseDeliveryFee = 3000;

// ## 기본 배송비는 변경이 안되어야 하는데 var 변수특성에 의하여 언제든 재선언 및 재할당이 가능하다.
var baseDeliveryFee = 5000;

console.log("var로 할당한 기본 배송비", baseDeliveryFee);

// ## 변경할 수 없도록 const를 사용해보자.
const newBaseDeliveryFee = 3000;

// ## const는 재선언과 재할당이 불가능하다.
// ## 따라서 아래 두 코드는 실행시 에러가 발생한다. (Uncaught TypeError: Assignment to constant variable.)
// ## const로 상수를 선언하게되면 아예 변경이 불가능한 Private Locked 컨셉을 가지고있기 때문이다.
// const newBaseDeliveryFee = 5000;
// newBaseDeliveryFee = 5000;

console.log("const로 할당한 기본 배송비", newBaseDeliveryFee);

let totalPayPrice = 0;

// ## 기본 배송비를 더해보자.
totalPayPrice = price + baseDeliveryFee;

console.log("기본 배송비를 더한 총 결제금액", totalPayPrice);

// ## const (상수)와 let (변수) 신규문법은 Block Scope 제약을 가지고 있다.

if (isMale) {
  // ## if (isMale == true) 와 동일, false일 시 if (!isMale)을 사용.
  var msg = "삐빅 남자입니다.";
  console.log("if Scope 내에서 선언된 msg 변수를 출력합니다.", msg);
}

// ## if Scope 내에서 선언된 msg 변수를 출력해보자.
// console.log("if Scope 내에서 선언된 msg 변수를 출력합니다.", msg);
// ## 위 코드를 실행시키면 다음과 같은 오류가 발생. (Uncaught ReferenceError: msg is not defined)
// ## 이는 ES6의 Block Scope 제약 때문이다.
// ## if Scope 내에서 선언된 msg 변수는 if Scope 내에서만 유효하다.
// ## Block Scope와 그에 대한 Life Cycle을 이해하고 있어야 한다.

const isRegionMountain = true;
const mountainDeliveryFee = 2000;

if (isRegionMountain) {
  totalPayPrice = totalPayPrice + mountainDeliveryFee;

  let msg =
    "산간지역입니다. 배송비가 " +
    mountainDeliveryFee +
    "원 추가됩니다. 최종 결제금액은 " +
    totalPayPrice +
    "원 입니다.";
  console.log("산간지역 메시지 출력", msg);
}
