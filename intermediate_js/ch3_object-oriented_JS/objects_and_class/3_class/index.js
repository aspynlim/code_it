class User {
  constructor(nickname, birthDate){
    this.nickname = nickname;
    this.birthDate = birthDate;
  }

  buy(item){
    console.log(`${this.nickname} buys a ${item.name}.`);
  };
};

const item = {
  name: 'sweater',
  price: 30000
};

const user1 = new User('Sam223', '2000-01-10');
const user2 = new User('Kim123', '1999-01-10');

console.log(user1.birthDate);
console.log(user2.birthDate);

user1.buy(item);
user2.buy(item);