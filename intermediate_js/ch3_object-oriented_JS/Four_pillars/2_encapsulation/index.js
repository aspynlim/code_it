class User {
  constructor(email, birthDate){
    this.email = email;
    this.birthDate = birthDate;
  }

  buy(item){
    console.log(`${this.email} buys a ${item.name}.`);
  };
};

const item = {
  name: 'sweater',
  price: 30000
};

const user1 = new User('smith@gmail.com', '2000-01-10');
console.log(user1.email);  // smith@gmail.com

user1.email = 'Chris Robert';

console.log(user1);
console.log(user1.email);  // Chris Robert
// 이메일 형식이 아닌데도 수정이 됨