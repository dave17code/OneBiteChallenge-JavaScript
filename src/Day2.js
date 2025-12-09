// 미션1. switch case문 작성하기
// 사용자가 입력한 나이가 18세 이상이면 "성인입니다.",
// 그 외에는 "미성년자입니다."라고 출력하는 함수를 만들어보세요.
function checkAdult(age) {
  switch (age >= 18) {
    case true:
      console.log("성인입니다.");
      break;
    case false:
      console.log("미성년자입니다.");
  }
}

checkAdult(10);
checkAdult(18);
checkAdult(30);

// 미션2. 간단한 연산자 선택기
// 두 숫자와 연산자 기호 중 하나("+", "-", "*", "/")를 전달하면,
// 해당 연산의 결과를 출력하는 함수를 switch문을 사용해 만들어보세요.

function calculate(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        console.error("오류: 0으로 나눌 수 없습니다.");
        return null;
      }
      result = num1 / num2;
      break;
    default:
      console.error(`오류: 유효하지 않은 연산자(${operator})입니다.`);
      return null;
  }
  // 최종 계산값 result 리턴
  return result;
}
