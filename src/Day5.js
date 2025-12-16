// 미션1. sort 메서드 사용하기
// 다음과 같은 문자열 배열이 있을 때, 아래의 요구사항에 맞는 코드를 작성하세요.
const items = ["apple", "kiwi", "banana", "fig", "watermelon"];

// 요구사항
// sort를 사용해 문자열을 "길이가 긴 순서(내림차순)"로 정렬한다.
// 문자열 길이가 같은 경우, 원래 배열에서 앞에 있던 것이 먼저 오도록 정렬한다.
// 정렬된 배열을 출력한다.
console.log("⭐미션1⭐");
console.log(items.sort((a, b) => b.length - a.length));

// 미션2. 상품 목록에서 특정 정보만 구조 분해로 꺼내기
// 아래와 같은 상품 목록이 있을 때, 아래의 요구사항에 맞는 코드를 작성하세요.
const products = [
  { id: 1, name: "모니터", price: 300000, stock: 12 },
  { id: 2, name: "키보드", price: 50000, stock: 5 },
  { id: 3, name: "노트북", price: 1200000, stock: 3 },
];

// 요구사항
// 배열 구조 분해 할당을 사용해 두 번째 상품 객체를 secondProduct라는 변수로 꺼낸다.
// secondProduct에서 name과 stock만 객체 구조 분해 할당으로 꺼낸다.
// 다음 형식으로 출력하세요
// 키보드의 재고는 5개입니다.
console.log("⭐미션2⭐");
const [firstProduct, secondProduct, thirdProduct] = products;
const { name, stock } = secondProduct;
console.log(`${name}의 재고는 ${stock}개입니다.`);
