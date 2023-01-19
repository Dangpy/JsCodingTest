/** @format */

const obj1 = new Object();
const obj2 = {};
const obj3 = { name: "장명지", company: "가고싶어요" };
console.log(obj1); //{}
console.log(obj2); //{}
console.log(obj3); //{name: '장명지', company: '가고싶어요'}

//객체 값 추가하기
const obj = { name: "장명지", company: "가고싶어요" };

//방법1
obj["email"] = "m@naver.com";
console.log(obj); //{name: '장명지', company: '가고싶어요', email: 'm@naver.com'}
//방법2
obj.phone = "01012345678";
console.log(obj); //{name: '장명지', company: '가고싶어요', email: 'm@naver.com', phone: '01012345678'}

// 객체 값 삭제하기 delete 이용
delete obj.phone;
console.log(obj); //{name: '장명지', company: '가고싶어요', email: 'm@naver.com'}

// 키 값 확인 in
console.log("email" in obj); //true
console.log("phone" in obj); //flase

//키 집합 확인
Object.keys(obj);
console.log(Object.keys(obj)); //['name', 'company', 'email']

// 키 value 확인
console.log(Object.values(obj)); //['장명지', '가고싶어요', 'm@naver.com']

// 객체 순회 for in
for (const key in obj) {
  console.log(key, obj[key]);
}
//name 장명지
//company 가고싶어요
//email m@naver.com
