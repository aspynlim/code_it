// const user1 = {
//   nickname: 'Jen123',
//   birthDate: '1992-02-20',
//   buy(item){
//     console.log(`${this.nickname} buys a ${item.name}.`);
//   }
// }

// const user2 = {
//   nickname: 'Sam123',
//   birthDate: '1993-02-20',
//   buy(item){
//     console.log(`${this.nickname} buys a ${item.name}.`);
//   }
// }

function createUser(nickname, birthDate) {
  const user = {
    nickname, // nickname: nickname
    birthDate, // birthDate: birthDate
    buy(item){
      console.log(`${this.nickname} buys a ${item.name}.`);
    }
  };
  return user;
};

const item = {
  name: 'sweater',
  price: 30000
};


const user1 = createUser('Sam223', '2000-01-10');
const user2 = createUser('Kim123', '1999-01-10');

console.log(user1.birthDate);
console.log(user2.birthDate);

user1.buy(item);
user2.buy(item);