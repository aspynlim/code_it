const devices = [
  { name: 'iPad', brand: 'Apple' },
  { name: 'iMac', brand: 'Apple' },
  { name: 'Gram', brand: 'Samsung' },
];

const apples = devices.filter((el) => el.brand === 'Apple');

console.log(apples);
// [ { name: 'iPad', brand: 'Apple' }, { name: 'iMac', brand: 'Apple' } ]



const laptop = devices.filter((el) => el.name === 'Gram');

console.log(laptop);
// [ { name: 'Gram', brand: 'Samsung' } ]

console.log(...laptop);
// { name: 'Gram', brand: 'Samsung' }



const apples2 = devices.filter((el, i) => {
  console.log(i);
  return el.brand === 'Apple';
});

console.log(apples2);
/*
0
1
2
[ { name: 'iPad', brand: 'Apple' }, { name: 'iMac', brand: 'Apple' } ]
*/

const apples3 = devices.find((el, i) => {
  console.log(i);
  return el.brand === 'Apple';
});

console.log(apples3);
/*
0
{ name: 'iPad', brand: 'Apple' }
*/

const banana = devices.find((el, i) => {
  console.log(i);
  return el.brand === 'banana';
});

console.log(banana);
/*
0
1
2
undefined
*/