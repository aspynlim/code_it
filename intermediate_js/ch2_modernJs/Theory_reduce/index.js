const nums = [1, 2, 3, 4];

// nums.reduce((acc, el, i, arr) => {
//   return nextAccValue;
// }, initialAccValue);

// console.log(nextAccValue);

const sumAll = nums.reduce((acc, el, i) => {
  console.log(`${i}번 index의 요소로 callback 함수가 동작 중`);
  console.log(`acc: ${acc}`);
  console.log(`el: ${el}`);
  console.log(`---------`);

  return acc + el;
}, 0);

console.log(`sumAll: ${sumAll}`);


/*
0번 index의 요소로 callback 함수가 동작 중
acc: 0
el: 1
---------
1번 index의 요소로 callback 함수가 동작 중
acc: 1
el: 2
---------
2번 index의 요소로 callback 함수가 동작 중
acc: 3
el: 3
---------
3번 index의 요소로 callback 함수가 동작 중
acc: 6
el: 4
---------
sumAll: 10
*/