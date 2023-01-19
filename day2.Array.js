/** @format */

const arr1 = new Array();
const arr2 = [];
const arr3 = [1, 2, 3, 4, 5];
const arr4 = new Array(5);
const arr5 = new Array(5).fill(5); // fill은 입력받은 파라미터 값으로 모든 함수 초기화
const arr6 = Array.from(Array(5), function (v, k) {
  return k + 1;
}); //from 특정 조건으로 함수를 초기화 하고 싶을때 Array.from(초기화할 배열, 로직 작성(함수라면 funtion(배열의 값, 배열의 인덱스)))
console.log(arr6); //[1, 2, 3, 4, 5]

// 배열을 특정 문자열 조건으로 합쳐야한다면 join 함수 사용
const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.join(",")); //1,2,3,4,5,6

// reverse 함수 요소 뒤집기 -> 한번 사용시 원래 배열에도 영향이감 사용 주의
console.log(arr.reverse()); //[6, 5, 4, 3, 2, 1]
console.log(arr); //[6, 5, 4, 3, 2, 1]

//concat 함수 : 두 배열 합치기
const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [7, 8, 9];

console.log(array1.concat(array2)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

//push와 pop은 맨 뒤에 요소를 삭제 하는 것
// push
array1.push(7); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
array1.push(7, 8, 9); //[1, 2, 3, 4, 5, 6, 7, 7, 8, 9]
console.log(array1);
// pop
array1.pop(); //9
array1.pop(); //8
console.log(array1.pop()); //7
console.log(array1); //[1, 2, 3, 4, 5, 6, 7]

//shift와 unshift은 맨 뒤에 요소를 삭제 하는 것

//slice(시작, 끝) 시작에서 끝 부분 빼고 나머지를 slice 함
const arr0 = [1, 2, 3, 4, 5, 6];
console.log(arr0.slice(2, 4)); // [3, 4]

//splice(시작, 개수) 시작 인덱스에서 갯수 만큼 자름
arr0.splice(2, 2);
console.log(arr0); //[1, 2, 5, 6]

//배열의 순회 => for문 이용(증감문 이용해서!)
for (let i = 0; i < 6; i += 1) {
  console.log(arr[i]);
}

// for of 문법 이용
for (const item of arr) {
  console.log(item);
}

//배열은 객체와 type이 동일 따라서 배열을 객체처럼 사용할 수 있음
// 배열의 타입을 알기 위해 typeof 연산자 사용
const arr7 = [1, 2, 3, 4, 5, 6];
console.log(typeof arr7); //object

arr7["key"] = "value";
console.log(arr7);
console.log(arr7.length); // 길이 값은 변하지 않음
